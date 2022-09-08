import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import Timeline from './components/Timeline/Timeline';
import Events from './components/Events/Events';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero d-flex align-items-center justify-content-center mb-4">
        <div className="hero-text text-center">
          <h1>TECHNITUDE</h1>
          <h1>2022</h1>
        </div>
      </div>
      <div className="container-fluid p-3">
        <Timer />
      </div>
      <div className="container-fluid p-3">
        <Timeline />
      </div>
      <div className="container-fluid p-3">
        <Events />
      </div>
    </div >
  );
}

export default App;
