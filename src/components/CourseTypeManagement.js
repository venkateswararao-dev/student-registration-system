
import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, List, ListItem, ListItemText,
  IconButton, Paper, Typography, Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CourseTypeManagement({ courseTypes, addCourseType, updateCourseType, deleteCourseType }) {
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (editingId) {
      const typeToEdit = courseTypes.find(type => type.id === editingId);
      if (typeToEdit) {
        setName(typeToEdit.name);
      }
    } else {
      setName('');
    }
  }, [editingId, courseTypes]);

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Course type name cannot be empty.');
      return;
    }
    if (editingId) {
      updateCourseType(editingId, name);
      setEditingId(null);
    } else {
      addCourseType(name);
    }
    setName('');
  };

  const handleEdit = (type) => {
    setEditingId(type.id);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Manage Course Types
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Course Type Name"
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
          {editingId ? 'Update Type' : 'Add Type'}
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Existing Course Types
      </Typography>
      {courseTypes.length === 0 ? (
        <Typography variant="body2" color="text.secondary">No course types added yet.</Typography>
      ) : (
        <List>
          {courseTypes.map((type) => (
            <ListItem
              key={type.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(type)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteCourseType(type.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText primary={type.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default CourseTypeManagement;