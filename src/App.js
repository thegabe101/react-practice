import './App.css';
import Jobs from './components/Jobs';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { StatePractice } from './components/StatePractice';
import Counter from './components/StateExercise';
import { AddTask } from './components/AddTask';
import { CatFact } from './components/CatFact';
import { AgePredictor } from './components/AgePredictor';

function App() {
  return (
    <div className="App">
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
