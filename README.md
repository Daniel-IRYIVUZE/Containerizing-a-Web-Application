# Lineup React Todo List

# Overview: 
The Lineup React Todo List is a minimalist to-do list application built using React and styled with Tailwind CSS and Material UI. It enables users to manage tasks by adding, marking them as complete, and deleting todos.

# Usage Instructions:

# 1. Installation:

- Clone the repository:
git clone https://github.com/Daniel-IRYIVUZE/Containerizing-a-Web-Application.git
- Navigate to the project directory:
cd Containerizing-a-Web-Application
- Install dependencies:
npm install

# 2.Running the Application:

- To run the application locally:
npm run dev
- Access the application at http://localhost:5173/ in your web browser.

# 3. Usage:

- Add a new todo by typing the task in the input field, pressing Enter, or clicking the "Add now" button.

- You can mark a task as completed or progressed by clicking the Update button.

- You can also delete a task by clicking the delete icon next to it.

# 4. Use Docker Image To Test:

- Pull the Docker image from the repository:
docker pull diryivuze/containerizing_a_web_application:latest
- Run the Docker container:
docker run -p 8080:8080 diryivuze/containerizing_a_web_application:latest
- Access the application locally at http://localhost:8080/ in your web browser.
OR: If you wish to configure the Docker settings yourself, follow these steps:

# Usage

# 1. Clone the Repository:

git clone https://github.com/Daniel-IRYIVUZE/Containerizing-a-Web-Application.git

# 2. Navigate to the Project Directory:

cd Containerizing_a_Web_Application 

# 3. Run the Configuration Script: 

- Ensure Docker is installed on your system, And modify the config.sh to match your needs, then execute the following command:

> For Linux User

sudo ./config.sh

> For Windows Users

- with PowerShell terminal
./config.sh

OR

- with bash terminal 
config.sh

" This script will automate Docker image building, container running, and other necessary configurations."

# 4. Access the Application:

- After Docker configuration, access the application locally at http://localhost:8080/ in your web browser.

# Note

- You must have installed Docker before running the configuration script.

# Configuration
Your vite.config.js should resemble the following:

import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  }
});
