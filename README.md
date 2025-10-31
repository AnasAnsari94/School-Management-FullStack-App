🏫 School Management System – DevOps-Enabled Full-Stack Project
📘 Overview

The School Management System is a full-stack web application designed to manage student attendance, teachers, and administrative tasks efficiently.
Originally a traditional MERN-style app, it has been enhanced with end-to-end DevOps automation, including containerization (Docker), multi-service orchestration (Docker Compose), and automated CI/CD pipelines (GitLab CI/CD with GitLab Runner) running locally.

This project showcases how a complete full-stack system can be built, tested, and deployed automatically in a local environment using modern DevOps tools.

🧰 Tech Stack
Frontend

HTML, CSS, JavaScript

Backend

Node.js, Express.js

Database

MongoDB

DevOps Tools

Docker – Single root Dockerfile to build & run full-stack app

Docker Compose – Multi-container orchestration for app + database

GitLab CI/CD – Automated build and deployment pipeline

GitLab Runner – Executed CI/CD jobs locally for continuous deployment

⚙️ Features

Student and teacher management system

Attendance tracking module

Role-based authentication (Admin, Teacher, Student)

CRUD operations across all entities

Real-time MongoDB integration

Single Dockerfile for complete app containerization

Automated build & deployment using GitLab Runner

Streamlined local DevOps workflow

🏗️ Project Architecture
Frontend (HTML/CSS/JS)
        |
        v
Backend (Node.js + Express)
        |
        v
Database (MongoDB)
        |
        v
Dockerfile (Single Build for Full App)
        |
        v
Docker Compose (App + MongoDB Services)
        |
        v
GitLab CI/CD Pipeline --> GitLab Runner (Local Deployment)

🚀 DevOps Implementation
🐳 Dockerization

Created a single Dockerfile at the project root that builds and runs both frontend and backend.

Used multi-stage builds to optimize image size.

Configured environment variables via .env file for flexible setup.

⚙️ Docker Compose

Created a docker-compose.yml file to manage multiple services:

app → Built from root Dockerfile (frontend + backend)

mongo → Official MongoDB image

Established a shared Docker network for inter-service communication.

Enabled volume mapping for MongoDB persistence.

🔁 GitLab CI/CD Integration

Configured .gitlab-ci.yml with stages for build, test, and deploy.

Git pushes trigger automatic Docker builds and container restarts.

Used GitLab Runner on the local machine to simulate a production CI/CD pipeline.

Added an after_script section for cleanup and re-deployment of containers.

💻 Local Deployment (via GitLab Runner)

Installed and registered GitLab Runner locally.

Pipeline automatically:

Pulls latest code from GitLab

Builds Docker images

Deploys containers via docker-compose up --build

Provides a local CI/CD environment similar to real-world infrastructure.

🧾 Installation & Setup
1. Clone the repository
git clone https://gitlab.com/yourusername/school-management-system.git
cd school-management-system

2. Build and start containers
docker-compose up --build

4. Stop containers
docker-compose down

5. Run CI/CD Pipeline

Push changes to GitLab → pipeline triggers → GitLab Runner builds and redeploys containers automatically.

OR

if you want to run this application manually by Dockerfile
for that 
you have to create a docker network with name school-network
then you have to build mongo image for MongoDB locally

For Running this application without docker-compose you have to run these commands

# create network
docker network create school-network

# run mongo
docker run -d --name school_mongo --network school-network -v mongo-data:/data/db mongo:6.0

# build image for app
docker build -t school_app_image .

# run app (linking to mongo via network)
docker run -d --name school_app --network school-network -p 5000:5000 \
  -e MONGO_URI=mongodb://school_mongo:27017/school \
  -e PORT=5000 \
  school_app_image
