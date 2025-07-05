
import React, { useState, useEffect } from 'react';
import {
  Box, Select, MenuItem, FormControl, InputLabel, Button,
  List, ListItem, ListItemText, IconButton, Paper, Typography, Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CourseOfferingManagement({
  courseOfferings, courses, courseTypes,
  addCourseOffering, updateCourseOffering, deleteCourseOffering
}) {
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedCourseTypeId, setSelectedCourseTypeId] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (editingId) {
      const offeringToEdit = courseOfferings.find(offering => offering.id === editingId);
      if (offeringToEdit) {
        setSelectedCourseId(offeringToEdit.courseId);
        setSelectedCourseTypeId(offeringToEdit.courseTypeId);
      }
    } else {
      setSelectedCourseId('');
      setSelectedCourseTypeId('');
    }
  }, [editingId, courseOfferings]);

  const getCourseName = (id) => courses.find(c => c.id === id)?.name || 'N/A';
  const getCourseTypeName = (id) => courseTypes.find(ct => ct.id === id)?.name || 'N/A';

  const handleSubmit = () => {
    if (!selectedCourseId || !selectedCourseTypeId) {
      alert('Please select both a course and a course type.');
      return;
    }
    if (editingId) {
      updateCourseOffering(editingId, selectedCourseId, selectedCourseTypeId);
      setEditingId(null);
    } else {
      addCourseOffering(selectedCourseId, selectedCourseTypeId);
    }
    setSelectedCourseId('');
    setSelectedCourseTypeId('');
  };

  const handleEdit = (offering) => {
    setEditingId(offering.id);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Manage Course Offerings
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Course</InputLabel>
          <Select
            value={selectedCourseId}
            label="Course"
            onChange={(e) => setSelectedCourseId(e.target.value)}
          >
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>{course.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel>Course Type</InputLabel>
          <Select
            value={selectedCourseTypeId}
            label="Course Type"
            onChange={(e) => setSelectedCourseTypeId(e.target.value)}
          >
            {courseTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          {editingId ? 'Update Offering' : 'Add Offering'}
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Available Course Offerings
      </Typography>
      {courseOfferings.length === 0 ? (
        <Typography variant="body2" color="text.secondary">No course offerings added yet.</Typography>
      ) : (
        <List>
          {courseOfferings.map((offering) => (
            <ListItem
              key={offering.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(offering)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteCourseOffering(offering.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText primary={`${getCourseTypeName(offering.courseTypeId)} - ${getCourseName(offering.courseId)}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default CourseOfferingManagement;