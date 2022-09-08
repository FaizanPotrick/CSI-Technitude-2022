import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="hero-text text-center">
          <h1>TECHNITUDE</h1>
          <h1>2022</h1>
        </div>
      </div>
      <div className="container-fluid p-3">
        <Timer />
      </div>
    </div >
  );
}

export default App;
