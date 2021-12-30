import './App.css';
import Sessions from './Components/Sessions';
import Home from './Components/Home';
import TeamContainer from './Components/Team/TeamContainer';
import SponsorsContainer from './Components/Sponsors/SponsorsContainer';

function App() {
  return (
      <div className="App">
        <Home />
        <SponsorsContainer/>
        <TeamContainer/>
      {/* <Sessions /> */}
      </div>
  );
}

export default App;
