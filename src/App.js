import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';

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
      <Form />
    </div>
  );
}

export default App;
