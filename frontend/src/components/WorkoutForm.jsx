import axios from "axios";
import { useEffect, useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/v1/users/workouts", { title, load, reps })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Exercise Title:
          <input type="text" value={title} name="title" onChange={(e) => { setTitle(e.target.value) }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Load in (KG):
          <input value={load} type="number" onChange={(e) => { setLoad(e.target.value) }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Reps:
          <input value={reps} type="number" onChange={(e) => { setReps(e.target.value) }} />
        </label>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;