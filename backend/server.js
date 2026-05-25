const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const profileData = {
  name: 'Jasmin Athman Hatim',
  email: 'jasmin@example.com',
  phone: '0621370679',
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
};

app.get('/api/profile', (req, res) => {
  res.json(profileData);
});

app.post('/api/profile', (req, res) => {
  const allowedKeys = ['name', 'email', 'phone', 'module', 'assignmentTitle', 'dueDate', 'description', 'profileImage', 'skills', 'projects'];
  Object.keys(req.body).forEach((key) => {
    if (!allowedKeys.includes(key)) return;

    if (['skills', 'projects'].includes(key) && Array.isArray(req.body[key])) {
      profileData[key] = req.body[key].map((item) => ({ ...item }));
    } else if (typeof req.body[key] === 'string') {
      profileData[key] = req.body[key];
    }
  });

  res.json({ status: 'success', profile: profileData });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
