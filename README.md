# Review Lineup React Todo List

Project Overview: The Lineup React Todo List is a minimalist to-do list application built using React and styled with Tailwind CSS and Material UI. It enables users to manage tasks by adding, marking them as complete, and deleting todos.

# Usage Instructions:

# 1. Installation:

. Clone the repository:
git clone https://github.com/Daniel-IRYIVUZE/Containerizing-a-Web-Application.git
. Navigate to the project directory:
cd Containerizing-a-Web-Application
. Install dependencies:
npm install
# 2.Running the Application:

* To run the application locally:
npm run dev
* Access the application at http://localhost:5173/ in your web browser.
# 3. Usage:

* Add a new todo by typing the task in the input field, pressing Enter, or clicking the "Add Todo" button.

* Mark a todo as completed by clicking the checkbox next to it.

* Delete a todo by clicking on the delete icon next to it.

* Search for todos.

* Filter todos.

* View total todos.

# 4. Use Docker Image To Test:

* Pull the Docker image from the repository:
docker pull lscblack/group_assignment-todo-list:latest
* Run the Docker container:
docker run -p 8080:8080 lscblack/group_assignment-todo-list:latest
* Access the application at http://localhost:5173/ in your web browser.
OR: If you wish to configure the Docker settings yourself, follow these steps:

# Usage
# 1. Clone the Repository:

git clone https://github.com/lscblack/simple_tailwind_react_todList.git
# 2. Navigate to the Project Directory:

cd simple_tailwind_react_todList
# 3. Run the Configuration Script: Ensure Docker is installed on your system, And modify the lscblack.sh to match your needs, then execute the following command:

# For Linux User
sudo ./lscblack.sh
# For Windows PowerShell User
./lscblack.sh
OR
bash lscblack.sh
This script will automate Docker image building, container running, and other necessary configurations.

# 4. Access the Application: After Docker configuration, access the application at http://localhost:8080 in your web browser.

# Note
Use my codes at your own risk. Docker must be installed before running the configuration script.

# Configuration
Your vite.config.js should resemble the following:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  }
});

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
