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

  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-New-Person-Container">
          <NewPerson onClickNewPerson={onNewPersonAddHandler}/>
        </div>
        <div className="App-Person-List-Container">
          <PersonList persons={persons} onDelete={(index) => console.log(index)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
