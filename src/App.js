import './App.css';
import Jobs from './components/Jobs';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { StatePractice } from './components/StatePractice';
import Counter from './components/StateExercise';
import { AddTask } from './components/AddTask';

function App() {
  return (
    <div className="App">
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
