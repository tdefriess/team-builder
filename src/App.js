import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: 'Tyler',
      email: 'tyler@someplace.com',
      role: 'Full Stack Web Developer'
    }
  ]);
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamList team={teamList} />
    </div>
  );
}

export default App;
