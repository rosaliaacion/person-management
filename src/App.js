import './App.css';

//Importing Components here
import PersonList from "./components/PersonList";
import NewPerson from './components/NewPerson';

function App() {
  const dummyPersons = [
    {
      name: 'Dayan',
      last_name: 'Perez',
      age: 30,
      sex: 'M',
      country: 'Cuba',
      ci: '123457-4'
    },
    {
      name: 'Rosalia',
      last_name: 'Acion',
      age: 32,
      sex: 'F',
      country: 'Cuba',
      ci: '123456-4'
    },
    {
      name: 'Rosalia',
      last_name: 'Acion',
      age: 32,
      sex: 'F',
      country: 'Cuba',
      ci: '123456-4'
    },
    {
      name: 'Rosalia',
      last_name: 'Acion',
      age: 32,
      sex: 'F',
      country: 'Cuba',
      ci: '123456-4'
    },
  ]
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-New-Person-Container">
          <NewPerson onClickNewPerson={(payload) => console.log(payload)}/>
        </div>
        <div className="App-Person-List-Container">
          <PersonList persons={dummyPersons}/>
        </div>
      </div>
    </div>
  );
}

export default App;
