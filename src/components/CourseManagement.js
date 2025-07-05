
import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, List, ListItem, ListItemText,
  IconButton, Paper, Typography, Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CourseManagement({ courses, addCourse, updateCourse, deleteCourse }) {
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (editingId) {
      const courseToEdit = courses.find(course => course.id === editingId);
      if (courseToEdit) {
        setName(courseToEdit.name);
      }
    } else {
      setName('');
    }
  }, [editingId, courses]);

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Course name cannot be empty.');
      return;
    }
    if (editingId) {
      updateCourse(editingId, name);
      setEditingId(null);
    } else {
      addCourse(name);
    }
    setName('');
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Manage Courses
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Course Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          {editingId ? 'Update Course' : 'Add Course'}
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Existing Courses
      </Typography>
      {courses.length === 0 ? (
        <Typography variant="body2" color="text.secondary">No courses added yet.</Typography>
      ) : (
        <List>
          {courses.map((course) => (
            <ListItem
              key={course.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(course)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteCourse(course.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText primary={course.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default CourseManagement;