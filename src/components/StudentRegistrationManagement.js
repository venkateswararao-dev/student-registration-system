
import React, { useState } from 'react';
import {
  Box, TextField, Select, MenuItem, FormControl, InputLabel, Button,
  List, ListItem, ListItemText, Paper, Typography, Grid
} from '@mui/material';

function StudentRegistrationManagement({
  courseOfferings, courses, courseTypes, registrations, registerStudent
}) {
  const [studentName, setStudentName] = useState('');
  const [selectedOfferingId, setSelectedOfferingId] = useState('');
  const [filterCourseTypeId, setFilterCourseTypeId] = useState('');

  const getCourseName = (id) => courses.find(c => c.id === id)?.name || 'N/A';
  const getCourseTypeName = (id) => courseTypes.find(ct => ct.id === id)?.name || 'N/A';
  const getCourseOfferingDetails = (offeringId) => {
    const offering = courseOfferings.find(co => co.id === offeringId);
    if (!offering) return 'N/A';
    return `${getCourseTypeName(offering.courseTypeId)} - ${getCourseName(offering.courseId)}`;
  };

  const filteredOfferings = courseOfferings.filter(offering =>
    filterCourseTypeId ? offering.courseTypeId === filterCourseTypeId : true
  );

  const handleRegister = () => {
    if (!studentName.trim() || !selectedOfferingId) {
      alert('Please enter student name and select a course offering.');
      return;
    }
    registerStudent(studentName, selectedOfferingId);
    setStudentName('');
    setSelectedOfferingId('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Student Registrations
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          label="Student Name"
          variant="outlined"
          size="small"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleRegister();
            }
          }}
          sx={{ flexGrow: 1 }}
        />
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter by Type</InputLabel>
          <Select
            value={filterCourseTypeId}
            label="Filter by Type"
            onChange={(e) => setFilterCourseTypeId(e.target.value)}
          >
            <MenuItem value=""><em>All Types</em></MenuItem>
            {courseTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Select Offering</InputLabel>
          <Select
            value={selectedOfferingId}
            label="Select Offering"
            onChange={(e) => setSelectedOfferingId(e.target.value)}
          >
            {filteredOfferings.length === 0 && (
              <MenuItem value="" disabled>No offerings available</MenuItem>
            )}
            {filteredOfferings.map((offering) => (
              <MenuItem key={offering.id} value={offering.id}>
                {getCourseOfferingDetails(offering.id)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Registered Students by Offering
      </Typography>
      {courseOfferings.length === 0 ? (
        <Typography variant="body2" color="text.secondary">No course offerings available to show registrations.</Typography>
      ) : (
        <List>
          {courseOfferings.map(offering => {
            const studentsForThisOffering = registrations.filter(reg => reg.courseOfferingId === offering.id);
            if (studentsForThisOffering.length === 0) return null; // Don't show if no students

            return (
              <Paper key={offering.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                  {getCourseOfferingDetails(offering.id)}
                </Typography>
                <List dense>
                  {studentsForThisOffering.map(reg => (
                    <ListItem key={reg.id}>
                      <ListItemText primary={reg.studentName} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            );
          })}
        </List>
      )}
    </Paper>
  );
}

export default StudentRegistrationManagement;