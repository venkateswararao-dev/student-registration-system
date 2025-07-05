Student Registration System

A simple, intuitive, and user-friendly application for managing course types, courses, course offerings, and student registrations. Built with React and Material-UI (MUI), this project demonstrates fundamental CRUD (Create, Read, Update, Delete) operations and client-side data management.

Features

- Course Type Management: Add, edit, and delete various course types (e.g., Individual, Group, Special).
- Course Management: Add, edit, and delete specific courses (e.g., Hindi, English, Urdu).
- Course Offering Management: Create and manage combinations of courses and their types (e.g., "Group - English").
    - Validation to prevent duplicate offerings.
    - Prevention of deletion if associated with student registrations.
- Student Registration: Register students for available course offerings.
    - Filter course offerings by type for easier selection.
    - Prevention of duplicate student registration for the same offering.
- Intuitive User Interface: Powered by Material-UI for a clean, modern, and responsive design.
- Modular Code Structure: Application logic is separated into distinct, reusable components for better maintainability.

Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Material-UI (MUI): A popular React UI framework that implements Google's Material Design.
- JavaScript (ES6+): For application logic.
- CSS: Minimal global styling.

Setup & Installation

Follow these steps to get the project up and running on your local machine.

1.  Clone the Repository:
    If you haven't already, clone this repository to your local machine:
    git clone https://github.com/venkateswararao-dev/student-registration-system.git
    Navigate into the project directory:
    cd student-registration-system

2.  Install Dependencies:
    This project requires Node.js and npm (or yarn). Install the necessary project dependencies, including Material-UI:
    npm install
    OR
    yarn install
    Make sure to install Material-UI and its icons specifically if you encounter module not found errors:
    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
    OR
    yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material

3.  Start the Development Server:
    Once all dependencies are installed, you can start the React development server:
    npm start
    OR
    yarn start
    This will open the application in your default web browser at http://localhost:3000.

Usage

The application is straightforward to use:

- Manage Course Types & Courses: Use the respective sections to define your available course types (e.g., "Individual", "Group") and courses (e.g., "Hindi", "English").
- Create Course Offerings: Combine a course type and a course to create a specific offering (e.g., "Group - English").
- Register Students: In the "Student Registrations" section, enter a student's name and select an available course offering. You can filter offerings by course type.
- Data is In-Memory: Please note that all data is stored in the browser's memory and will reset if you close or refresh the page.

Project Structure

The project is structured for modularity and clarity:

student-registration-system/
├── public/                 # Public assets (index.html, favicon)
├── src/
│   ├── components/         # Reusable UI components and feature-specific management modules
│   │   ├── CourseManagement.js
│   │   ├── CourseOfferingManagement.js
│   │   ├── CourseTypeManagement.js
│   │   └── StudentRegistrationManagement.js
│   ├── App.js              # Main application component, handles global state and data logic
│   ├── index.js            # React entry point
│   └── index.css           # Minimal global CSS styles
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Project dependencies and scripts
└── README.md               # This file

Future Enhancements

- Data Persistence: Implement local storage, a JSON server, or connect to a backend API (Node.js, Python, etc.) to save data permanently.
- Student List & Management: A dedicated section to view and manage all registered students.
- More Robust Validation: Implement more comprehensive form validation and error feedback.
- Search Functionality: Add search capabilities for courses, offerings, and students.
- Filtering & Sorting: Enhanced filtering and sorting options for all lists.
- User Authentication: Implement user login/logout for secure access.

Support: 
   For any queries, please contact venkateswararaokukkala.y@gmail.com.
