import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      });
  }, []);
  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, idx) => (
          <li key={idx}>{workout.name}: {workout.description}</li>
        ))}
      </ul>
    </div>
  );
};
export default Workouts;
