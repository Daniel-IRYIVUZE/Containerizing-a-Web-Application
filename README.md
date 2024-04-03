# Lineup React Todo List

# Overview: 
The Lineup React Todo List is a minimalist to-do list application built using React and styled with Tailwind CSS and Material UI. It enables users to manage tasks by adding, modifying, and changing the status (Completed or Progressed) todos.

# 1. Usage Instructions:

# Installation:

- Clone the repository:
git clone https://github.com/Daniel-IRYIVUZE/Containerizing-a-Web-Application.git
- Navigate to the project directory:
cd Containerizing-a-Web-Application
- Install dependencies:
npm install

# Running the Application:

- To run the application locally:
npm run dev
- Access the application at http://localhost:5173/ in your web browser.

# Usage:

- Add a new todo by typing the task in the input field, pressing Enter, or clicking the "Add now" button.

- You can mark a task as completed or progressed by clicking the Update button.

- You can also delete a task by clicking the delete icon next to it.

# Use Docker Image To Test:

- Pull the Docker image from the repository:
docker pull diryivuze/containerizing_a_web_application:latest
- Run the Docker container:
docker run -p 8080:8080 diryivuze/containerizing_a_web_application:latest
- Access the application locally at http://localhost:8080/ in your web browser.
OR: If you wish to configure the Docker settings yourself, follow these steps:

# 2. Usage

# Clone the Repository:

git clone https://github.com/Daniel-IRYIVUZE/Containerizing-a-Web-Application.git

# Navigate to the Project Directory:

cd Containerizing_a_Web_Application 

# Run the Configuration Script: 

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

# Access the Application:

- After Docker configuration, access the application locally at http://localhost:8080/ in your web browser.

# Note

- You must have installed Docker before running the configuration script.

# 3. Configuration
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
> # Author
> Daniel - IRYIVUZE 
