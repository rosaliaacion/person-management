import { useState } from "react";

import './App.css';

//Importing Components here
import PersonList from "./components/PersonList";
import NewPerson from './components/NewPerson';

function App() {

  const [persons, setPersons] = useState([]);

  const onNewPersonAddHandler = (person) => {
    setPersons([...persons, person])
  }

  // This handlers is executed when the App.js component recives the onDelete event from PersonList component.
  const onDeletePersonHandler = (index) => {
    const tmpPersons = persons;  // Move all persons on the state to a temp array named tmpPersons
    tmpPersons.splice(index, 1); // The splice method on the array takes two params first one index to start and second count items to remove.
    setPersons([...tmpPersons]); // Using the modification function we update the status here whit new persons on the list.
  }

  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-New-Person-Container">
          <NewPerson onClickNewPerson={onNewPersonAddHandler}/>
        </div>
        <div className="App-Person-List-Container">
          <PersonList persons={persons} onDelete={onDeletePersonHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
