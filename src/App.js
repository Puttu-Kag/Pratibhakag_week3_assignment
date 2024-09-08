import React, { useState, useEffect } from 'react';
import ActivityForm from './components/ActivityForm';
import './App.css';
import Dashboard from './components/DashBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem('activities', JSON.stringify(activities));
    }
  }, [activities]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<ActivityForm addActivity={addActivity} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard activities={activities} />}
          />
        </Routes>
      </div>
    </Router>

  );
}
export default App;
