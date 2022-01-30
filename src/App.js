import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Board from './components/Board';

function App() {
  return (
    <div className='container d-flex justify-content-around'>
      <Board/>
    </div>
  );
}

export default App;
