// Determine API base URL from a meta tag (works for deployed frontend)
const metaApiBase = document.querySelector('meta[name="api-base"]')?.getAttribute('content');
const apiBase = metaApiBase || (window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://jasmin-portifolior.onrender.com');
const backendUrl = `${apiBase.replace(/\/$/, '')}/api/profile`;

function updateElement(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function applyProfileData(data) {
  const profile = {
    name: 'Jasmin Athuman Hatibu',
    phone: '0621370679',
    email: 'jasmin@gmail.com.com',
    module: 'Cloud Computing',
    assignmentTitle: 'Building and Deploying a Personal Portfolio Website Using Cloud Platforms',
    dueDate: '2/06/2026',
    description: 'This portfolio demonstrates frontend build, Vercel deployment, a simple backend API, and Render hosting.',
    profileImage: 'profile.svg',
    skills: [
      { title: 'Frontend', detail: 'HTML, CSS, JavaScript' },
      { title: 'Cloud Hosting', detail: 'Vercel, Render' },
      { title: 'Backend', detail: 'Node.js, Express' },
      { title: 'Deployment', detail: 'Continuous deployment, API hosting' },
    ],
    projects: [
      { title: 'Personal Portfolio Site', description: 'A responsive portfolio website built for cloud deployment with Vercel and integrated with a backend API hosted on Render.' },
      { title: 'API Profile Service', description: 'A simple backend service that returns portfolio profile data in JSON for client applications.' },
    ],
    ...data,
  };

  updateElement('profileName', profile.name);
  updateElement('profilePhone', `Phone: ${profile.phone}`);
  const phoneLink = document.getElementById('profilePhoneLink');
  if (phoneLink) {
    phoneLink.href = `tel:${profile.phone}`;
    phoneLink.textContent = profile.phone;
  }
  updateElement('profileModule', `Module: ${profile.module}`);
  updateElement('profileSubtitle', `${profile.module} Student | ${profile.assignmentTitle}`);
  updateElement('profileDescription', profile.description);
  updateElement('profileEmail', profile.email);
  const emailLink = document.getElementById('profileEmail');
  if (emailLink) emailLink.href = `mailto:${profile.email}`;
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    profilePhoto.src = profile.profileImage || 'profile.svg';
    profilePhoto.alt = `Profile photo of ${profile.name}`;
  }
  updateSkills(profile.skills);
  updateProjects(profile.projects);
  updateElement('apiStatus', 'Backend API profile loaded successfully.');
}

function updateSkills(skills) {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;
  skillsGrid.innerHTML = '';
  skills.forEach((skill) => {
    const card = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = skill.title;
    const detail = document.createElement('span');
    detail.textContent = skill.detail;
    card.appendChild(title);
    card.appendChild(detail);
    skillsGrid.appendChild(card);
  });
}

function updateProjects(projects) {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  projects.forEach((project) => {
    const item = document.createElement('div');
    item.className = 'project-item';
    const title = document.createElement('h3');
    title.textContent = project.title;
    const desc = document.createElement('p');
    desc.textContent = project.description;
    item.appendChild(title);
    item.appendChild(desc);
    projectsGrid.appendChild(item);
  });
}

async function loadBackendProfile() {
  try {
    const response = await fetch(backendUrl);
    if (!response.ok) throw new Error('Backend unavailable');
    const data = await response.json();
    applyProfileData(data);
  } catch (error) {
    console.warn('Backend API not reachable locally. Use the deployed Render API if available.', error);
    updateElement('apiStatus', 'Backend API is not reachable. Displaying local fallback content.');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadBackendProfile();
});
