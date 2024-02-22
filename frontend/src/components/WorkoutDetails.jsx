import React from 'react';
import axios from 'axios';
const WorkoutDetails = ({ workout }) => {

  const handleDelete = async ()=>{
    await  axios.delete("/api/v1/users/workouts/" +workout._id) ;
     window.location.reload();
  }
  const deleteIconStyle = {
    cursor: 'pointer',
    color: 'red',
    fontSize: '20px',
    marginLeft: '5px',
  };
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h4> <strong>title:</strong> {workout.title}</h4>
      <p>
        <strong>Load (Kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <span onClick={handleDelete} style={deleteIconStyle}>🗑️</span>
    </div>
  );
};

export default WorkoutDetails;
