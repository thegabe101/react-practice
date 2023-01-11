import './App.css';
import Jobs from './components/Jobs';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { StatePractice } from './components/StatePractice';

function App() {
  return (
    <div className="App">
      <Jobs />
      <People />
      <Planets />
      <StatePractice />
    </div>
  );
}

export default App;
