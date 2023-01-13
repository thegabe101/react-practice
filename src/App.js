import './App.css';
import Jobs from './components/Jobs';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { StatePractice } from './components/StatePractice';
import Counter from './components/StateExercise';
import { AddTask } from './components/AddTask';
import { CatFact } from './components/CatFact';
import { AgePredictor } from './components/AgePredictor';
import { Excuser } from './components/Excuser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useToggle } from './components/useToggle';

function App() {

  const [isVisible, toggle] = useToggle();

  //can call another custom hook from the export usetoggle simply by renaming the const array

  return (
    <div className="App">
      {isVisible && <h1>Text is visible using usetoggle</h1>}
      <button onClick={toggle}>Hide/Show Text</button>
      <Excuser />
      <AgePredictor />
      <CatFact />
      <AddTask />
      <Jobs />
      <People />
      <Planets />
      <StatePractice />
      <Counter />
    </div>
  );
}

export default App;
