import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';
import '../styles/ActivityForm.css';
import { useNavigate } from 'react-router-dom';


const ActivityForm = ({ addActivity }) => {
  const [activity, setActivity] = useState({
    date: '',
    steps: '',
    calories: '',
    workoutTime: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(activity);
    setActivity({ date: '', steps: '', calories: '', workoutTime: '' });
    console.log(activity, "activities");
    
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <h1 className='main'>Fitness Challenge Tracker</h1>
      <form className="activity-form" onSubmit={handleSubmit}>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={activity.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />

        <TextField
          label="Steps Taken"
          name="steps"
          type="number"
          value={activity.steps}
          onChange={handleChange}
          required
        />
        <TextField
          label="Calories Burned"
          name="calories"
          type="number"
          value={activity.calories}
          onChange={handleChange}
          required
        />
        <TextField
          label="Workout Time (minutes)"
          name="workoutTime"
          type="number"
          value={activity.workoutTime}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Activity
        </Button>
      </form>
       <Button
            className="go-to-dashboard"
            variant="outlined"
            color="secondary"
            onClick={goToDashboard}
           >
            Go to Dashboard
          </Button>
    </>
  );
};

export default ActivityForm;
