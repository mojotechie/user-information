import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

import './App.css';
const userInfo = [
  {
    name: 'Pooja',
    userId: '1',
    address: 'Bangalore',
    designation: 'software developer',
    skills: ['Html', 'Css', 'React'],
  },
  {
    name: 'Neha',
    userId: '2',
    address: 'Delhi',
    designation: 'software Engineer',
    skills: ['Html', 'React'],
  },
  {
    name: 'Soni',
    userId: '3',
    address: 'Pune',
    designation: 'Technical support',
    skills: ['React', 'Javascript'],
  },
];

function App(props) {
  return (
    <div className="container">
      <div className="row">
        <UserForm />
        <UserList data={userInfo} />
      </div>
    </div>
  );
}

export default App;
