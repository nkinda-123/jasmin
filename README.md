# Jasmin Athman Hatim Portfolio

A personal portfolio website created as part of the Cloud Computing assignment.

## Assignment Details
- Module: Cloud Computing
- Total Marks: 15
- Due Date: 2/06/2026
- Assignment Title: Building and Deploying a Personal Portfolio Website Using Cloud Platforms

## Project Structure
- `frontend/index.html` — frontend portfolio page
- `frontend/styles.css` — styling for the portfolio
- `frontend/script.js` — simple frontend script with backend API call example
- `backend/server.js` — Express API server
- `backend/package.json` — backend dependencies and start script

## Local Setup

### Frontend
Open `frontend/index.html` in a browser or use a static server.

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. Access the API at `http://localhost:3000/api/profile`
5. Open the backend admin page at `http://localhost:3000/admin` to view and update the profile content.

## Deployment
- Frontend: Deploy the `index.html`, `styles.css`, and `script.js` files to **Vercel**.
- Backend: Deploy the backend folder to **Render** as a Node.js service.

## Notes
The frontend is designed for a clean portfolio presentation, while the backend provides a simple JSON API response to demonstrate cloud-hosted service integration.
