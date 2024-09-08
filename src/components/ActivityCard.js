import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <Card className="activity-card">
      <CardContent>
        <Typography variant="h6">Date: {activity.date}</Typography>
        <Typography>Steps Taken: {activity.steps}</Typography>
        <Typography>Calories Burned: {activity.calories}</Typography>
        <Typography>Workout Time: {activity.workoutTime} minutes</Typography>
      </CardContent>
    </Card>
  );
};
export default ActivityCard;
