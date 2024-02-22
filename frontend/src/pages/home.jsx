import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await axios.get("/api/v1/users/workouts");
        setWorkout(response.data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {workout && workout.map((workoutItem) => (
         <WorkoutDetails key={workoutItem.id} workout={workoutItem} /> 
      ))}
      </div>
      
    </div>
  );
};

export default Home;
