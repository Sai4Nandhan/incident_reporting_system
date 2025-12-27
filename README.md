# Incident Reporting & Evidence Management System

A web-based system that allows users to report incidents, upload supporting evidence, and track the investigation status through a structured workflow.

This project is built to demonstrate real-world full-stack system design, focusing on backend workflows, file handling, and clean UI separation rather than unnecessary features.

Why this project?

In many real-life situations such as road accidents, public complaints, or local incidents:

1) Reports are informal
2) Evidence files are scattered or lost
3) There is no clear tracking of investigation progress

This system provides a simple and structured digital solution to report incidents and manage evidence effectively.

# What the application does :

1) Allows users to create incident reports with:
   - Title
   - Description
   - Location
2) Supports uploading evidence files (images or documents)
3) Stores incidents securely in a database
4) Displays incidents in a clean dashboard
5) Allows tracking incident status:
  - Reported
  - Under Investigation
  - Resolved
6) Shows only the incidents reported by the current user

Tech stack

# Frontend:
- React (Vite)
- CSS (dark-themed dashboard styling)
- Axios for API communication

# Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer for file uploads

* Key design decisions

Authentication is intentionally not implemented.

Instead of using login or signup functionality, a client-side unique user identifier is generated and stored locally. This identifier is used to scope incidents per user.

This approach keeps the project simple while still demonstrating real-world data separation, which is common in MVP-level systems.

# Project structure

incident-system/

backend/
- controllers
- models
- routes
- uploads (ignored in git)
- server.js

frontend/
- src
  - components
  - pages
  - api
  - utils
  - dashboard.css

README.md

# How to run the project locally

Step 1: Clone the repository

git clone https://github.com/Sai4Nandhan/incident_reporting_system.git
cd incident_reporting_system

Step 2: Backend setup

cd backend
npm install
npm start

Backend runs on:
http://localhost:5000

Step 3: Frontend setup

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

# Current limitations

1) Evidence deletion is planned but currently disabled
2) No authentication or role-based access
3) No advanced filtering or analytics

These limitations are intentional to keep the project clean and focused.

 # Future improvements

- Authentication and authorization
- Role-based access (Admin, Investigator, User)
- Safe evidence deletion with audit logs
- Advanced filtering and search
- Cloud storage for uploaded evidence

# What this project demonstrates

- Full-stack development
- REST API design
- File upload handling
- MongoDB schema modeling
- Clear separation between landing page and dashboard UI
- Practical debugging and system-level thinking


Author

Sai Nandhan
GitHub: https://github.com/Sai4Nandhan


This project is designed as a realistic system rather than a tutorial application. The goal is to demonstrate clarity, structure, and real-world engineering decisions.
