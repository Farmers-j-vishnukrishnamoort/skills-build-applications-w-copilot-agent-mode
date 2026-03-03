import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      });
  }, []);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, idx) => (
          <li key={idx}>{entry.team}: {entry.points} points</li>
        ))}
      </ul>
    </div>
  );
};
export default Leaderboard;
