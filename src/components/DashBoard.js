import React from 'react';
import ActivityCard from './ActivityCard';
import '../styles/Dashboard.css';
import { Grid } from '@mui/material';

const Dashboard = ({ activities }) => {
  return (
    <>
    <h2>Logged Activities</h2>
    <div className="dashboard">
    <Grid container spacing={2}>
      
      {activities.map((activity, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
        <ActivityCard  activity={activity} />
        </Grid>
      ))}
      </Grid>
    </div>
    </>
    );
};
export default Dashboard;
