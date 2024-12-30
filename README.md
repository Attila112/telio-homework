# Telio Homework 

This project implements two tasks: a simple login and dashboard system, and a visualization of a spherical icosahedron. The application is built using Node.js with Express for the backend, SQLite for the database, and Vite React for the frontend.

## Table of Contents
- [Telio Homework](#telio-homework)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Installation](#installation)
  - [Docker Setup](#docker-setup)
  - [Usage](#usage)
  - [License](#license)

---
## Technologies Used
	•	Backend: Node.js, Express, SQLite
	•	Frontend: React, Vite, Three.js (for 3D visualization)
	•	Database: SQLite

## Features

    Task 1: Simple Login and Dashboard
        •	Login page with username and password fields
        •	SQLite database with predefined users
        •	Dashboard displaying a welcome message with the logged-in username
    Task 2: Visualization of a Spherical Icosahedron
        •	3D visualization of a regular icosahedron on a sphere
        •	Utilizes cartographic degree coordinates for vertex placement
        •	Spherical triangles representing the icosahedron’s faces
---

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Attila112/telio-homework.git
   cd telio-homework 
    ```
2.  **Install backend dependencies**:
    ```bash    
    cd backend
    npm install
     ```
3.  **Start backend development server**:
    ```bash
    npm start
     ``` 
4.  **In a new terminal install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    ```
5.  **Start frontend development server**:
    ```bash
    npm run dev
    ```
#### Database Setup:
    The SQLite database is automatically set up with predefined users when you run the application for the first time. 
    The default users are:
        - Username: admin1, Password: password1
        - Username: admin2, Password: password2


The website will be available at `http://localhost:5173`.
----------

### Docker Setup

To run the project using Docker, follow these steps:

1.  **Build with Docker**:
    ```bash
    cd telio-homework
    docker compose up
    ```
2.  Once the containers are up, access the website at `http://localhost:5173`.
    

----------
## Usage

1.  **Main Page**: You can choose wich task you want to see.
2.  **Login**: On the login page, enter one of the predefined usernames and passwords.
3.  **Dashboard**: After successful login, you’ll be redirected to the dashboard showing a welcome message.
4.  **Spherical Icosahedron**: Navigate to the Icosahedron Visualization page to view the 3D representation of the spherical icosahedron.

----------

## License
This project is licensed under the MIT License.
