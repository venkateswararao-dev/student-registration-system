
import React, { useState, useEffect } from 'react';
import './App.css'; 

import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';

// Import  components
import CourseTypeManagement from './components/CourseTypeManagement';
import CourseManagement from './components/CourseManagement';
import CourseOfferingManagement from './components/CourseOfferingManagement';
import StudentRegistrationManagement from './components/StudentRegistrationManagement';

// Utility function 
const generateId = () => Math.random().toString(36).substr(2, 9);

function App() {
  const [courseTypes, setCourseTypes] = useState([
    { id: generateId(), name: 'Individual' },
    { id: generateId(), name: 'Group' },
    { id: generateId(), name: 'Special' },
  ]);

  const [courses, setCourses] = useState([
    { id: generateId(), name: 'Hindi' },
    { id: generateId(), name: 'English' },
    { id: generateId(), name: 'Urdu' },
  ]);

  const [courseOfferings, setCourseOfferings] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  

  const addCourseType = (name) => {
    setCourseTypes([...courseTypes, { id: generateId(), name }]);
  };

  const updateCourseType = (id, newName) => {
    setCourseTypes(courseTypes.map((type) => (type.id === id ? { ...type, name: newName } : type)));
  };

  const deleteCourseType = (id) => {
    const hasOfferings = courseOfferings.some(offering => offering.courseTypeId === id);
    if (hasOfferings) {
      alert('Cannot delete course type: it is associated with existing course offerings.');
      return;
    }
    setCourseTypes(courseTypes.filter((type) => type.id !== id));
  };

  const addCourse = (name) => {
    setCourses([...courses, { id: generateId(), name }]);
  };

  const updateCourse = (id, newName) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, name: newName } : course)));
  };

  const deleteCourse = (id) => {
    const hasOfferings = courseOfferings.some(offering => offering.courseId === id);
    if (hasOfferings) {
      alert('Cannot delete course: it is associated with existing course offerings.');
      return;
    }
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addCourseOffering = (courseId, courseTypeId) => {
    const isDuplicate = courseOfferings.some(
      (offering) => offering.courseId === courseId && offering.courseTypeId === courseTypeId
    );
    if (isDuplicate) {
      alert('This course offering already exists.');
      return;
    }
    setCourseOfferings([...courseOfferings, { id: generateId(), courseId, courseTypeId }]);
  };

  const updateCourseOffering = (id, newCourseId, newCourseTypeId) => {
    const isDuplicate = courseOfferings.some(
      (offering) =>
        offering.id !== id && offering.courseId === newCourseId && offering.courseTypeId === newCourseTypeId
    );
    if (isDuplicate) {
      alert('This updated course offering would create a duplicate.');
      return;
    }
    setCourseOfferings(
      courseOfferings.map((offering) =>
        offering.id === id ? { ...offering, courseId: newCourseId, courseTypeId: newCourseTypeId } : offering
      )
    );
  };

  const deleteCourseOffering = (id) => {
    const hasRegistrations = registrations.some(reg => reg.courseOfferingId === id);
    if (hasRegistrations) {
      alert('Cannot delete course offering: students are registered for it.');
      return;
    }
    setCourseOfferings(courseOfferings.filter((offering) => offering.id !== id));
  };

  const registerStudent = (studentName, courseOfferingId) => {
    const isAlreadyRegistered = registrations.some(
      (reg) => reg.studentName.toLowerCase() === studentName.toLowerCase() && reg.courseOfferingId === courseOfferingId
    );
    if (isAlreadyRegistered) {
      alert(`Student "${studentName}" is already registered for this course offering.`);
      return;
    }
    setRegistrations([...registrations, { id: generateId(), studentName, courseOfferingId }]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Registration System
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <CourseTypeManagement
          courseTypes={courseTypes}
          addCourseType={addCourseType}
          updateCourseType={updateCourseType}
          deleteCourseType={deleteCourseType}
        />
        <CourseManagement
          courses={courses}
          addCourse={addCourse}
          updateCourse={updateCourse}
          deleteCourse={deleteCourse}
        />
        <CourseOfferingManagement
          courseOfferings={courseOfferings}
          courses={courses}
          courseTypes={courseTypes}
          addCourseOffering={addCourseOffering}
          updateCourseOffering={updateCourseOffering}
          deleteCourseOffering={deleteCourseOffering}
        />
        <StudentRegistrationManagement
          courseOfferings={courseOfferings}
          courses={courses}
          courseTypes={courseTypes}
          registrations={registrations}
          registerStudent={registerStudent}
        />
      </Container>
    </Box>
  );
}

export default App;