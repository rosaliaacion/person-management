import './App.css';

//Importing Components here
import PersonList from "./components/PersonList";
import NewPerson from './components/NewPerson';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-New-Person-Container">
          <NewPerson onClickNewPerson={(payload) => console.log(payload)}/>
        </div>
        <div className="App-Person-List-Container">
          <PersonList />
        </div>
      </div>
    </div>
  );
}

export default App;
