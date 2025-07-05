Student Registration System

A simple and user-friendly web application to manage course types, courses, course offerings, and student registrations. Built using **React** and styled with **Material-UI (MUI)**, this project demonstrates essential CRUD operations and clean client-side state management.

---

## ✨ Features

- **Course Types:** Create, edit, and delete types like "Individual", "Group", and "Special".
- **Courses:** Add and manage different courses such as "Hindi", "English", and "Urdu".
- **Course Offerings:** Combine courses with types (e.g., "Group - English").
  - Prevents duplicates.
  - Restricts deletion if students are already registered.
- **Student Registration:**
  - Register students to specific course offerings.
  - Filter offerings by course type.
  - Prevent duplicate registrations.
- **Responsive UI:** Clean layout powered by Material-UI.
- **Modular Structure:** Organized components for easier maintenance and scalability.

---

## 🚀 Technologies Used

- **React.js** — Frontend framework for building interactive UIs
- **Material-UI (MUI)** — UI library for fast, modern, responsive design
- **JavaScript (ES6+)** — Application logic
- **CSS** — Global styling

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/venkateswararao-dev/student-registration-system.git
cd student-registration-system
```

### 2. Install Dependencies
Make sure Node.js and npm (or yarn) are installed. Then run:
```bash
npm install
# or
yarn install
```

Install Material-UI if not already:
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
# or
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 3. Run the App
```bash
npm start
# or
yarn start
```
Open your browser to `http://localhost:3000`

---

## 🖱️ How to Use

1. **Course Types / Courses:**
   - Add new course types (e.g., "Individual") and courses (e.g., "English").

2. **Course Offerings:**
   - Select a course and a type to create an offering.
   - Example: "Group - Hindi"

3. **Student Registration:**
   - Register students to offerings.
   - Use the filter to quickly find offerings by type.

> ℹ️ Data is stored in-memory only and resets when the page is refreshed.

---

## 📁 Project Structure

```
student-registration-system/
├── public/                      # Static files and index.html
├── src/
│   ├── components/              # Reusable components
│   │   ├── CourseTypeManagement.js
│   │   ├── CourseManagement.js
│   │   ├── CourseOfferingManagement.js
│   │   └── StudentRegistrationManagement.js
│   ├── App.js                   # Main application logic
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
├── package.json                 # Project config and dependencies
├── .gitignore                   # Ignore rules
└── README.md                    # You are here
```

---

## 🔮 Future Improvements

- **Persistent Storage:** Save data to localStorage or a backend.
- **Student Dashboard:** View/edit all student registrations in one place.
- **Advanced Validation:** Better form checks and feedback.
- **Search & Sort:** Easier navigation of lists.
- **Authentication:** Add user login/logout and access control.

📬 Support
For any queries, feedback, or support, feel free to reach out at:
📧 venkateswararaokukkala.y@gmail.com.
