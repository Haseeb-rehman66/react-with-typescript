import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddtoList from './components/AddtoList';


export interface IState{
  people:{
    name: string
    url: string
    age: number
    note?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allegeric to stay on same team"
    }
  ])

  
  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddtoList people={people} setPeople={setPeople}/>
      
    </div>
  );
}

export default App;
