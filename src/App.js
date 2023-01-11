import './App.css';
import Jobs from './components/Jobs';
import { People } from './components/People';
import { Planets } from './components/Planets';

function App() {
  return (
    <div className="App">
      <Jobs />
      <People />
      <Planets />
    </div>
  );
}

export default App;
