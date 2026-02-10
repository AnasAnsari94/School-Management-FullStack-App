# School-Management-FullStack-App
# 🎓 School Management Web Application

A simple full-stack web application built using **Node.js**, **Express**, and **vanilla HTML, CSS, and JavaScript**.  
The backend serves both REST APIs and static frontend content from the `public/` folder.  
The application is fully containerized using **Docker** and **Docker Compose** for easy setup and deployment.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Database | JSON-based local file (`db.json`) |
| Containerization | Docker, Docker Compose |

---

## 📁 Project Structure

Projects-web-dev-main/
│── public/ # Static frontend files
│── server.js # Express server
│── db.json # Local JSON mock database
│── package.json # Node.js dependencies
│── package-lock.json
│── Dockerfile # Docker build configuration
│── docker-compose.yml # Docker Compose orchestration
│── README.md # Documentation

Run The App
🐳 Running the App with Docker
🧩 1. Build the Docker Image
docker build -t school-web-app .

🧩 2. Run the Container
docker run -d -p 5000:5000 --name school_container school-web-app

🧩 3. View Running Containers
docker ps

🧩 4. Check Container Logs
docker logs school_container

🧩 5. Stop the Container
docker stop school_container

🧩 6. Remove the Container
docker rm school_container

🧩 7. Remove the Image
docker rmi school-web-app

⚙️ Using Docker Compose (Recommended for Multi-Service Setup)
🧩 1. Build and Start Containers
docker-compose up --build

🧩 2. Run in Detached Mode
docker-compose up -d

🧩 3. View Running Services
docker-compose ps

🧩 4. View Logs
docker-compose logs -f

🧩 5. Stop and Remove Containers
docker-compose down

🧩 6. Rebuild Containers Without Cache
docker-compose build --no-cache

☁️ Deployment Guide (AWS EC2 Example)

SSH into your EC2 instance:

ssh ubuntu@<EC2-Public-IP>


Install Docker & Docker Compose:

sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl start docker
sudo systemctl enable docker


Clone your repository:

git clone <repo-url>
cd Projects-web-dev-main


Build and run your app:

docker-compose up -d --build


Check running containers:

docker ps


Access your app at:

http://<EC2-Public-IP>:5000

🧰 Troubleshooting

Port Already in Use:

sudo lsof -i :5000
sudo kill -9 <PID>


Rebuild Everything from Scratch:

docker-compose down --rmi all --volumes --remove-orphans
docker-compose up --build
