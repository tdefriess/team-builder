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
  const addNewTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamList([...teamList, newMember]);
  }
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewTeamMember} />
      <TeamList team={teamList} />      
    </div>
  );
}

export default App;
