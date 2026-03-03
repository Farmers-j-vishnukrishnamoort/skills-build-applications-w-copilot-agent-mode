import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched activities:', data);
        setActivities(data.results || data);
      });
  }, []);
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity.user} - {activity.type} - {activity.duration} min</li>
        ))}
      </ul>
    </div>
  );
};
export default Activities;
