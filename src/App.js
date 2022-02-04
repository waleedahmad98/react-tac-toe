import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Board from './components/Board';

function App() {
  return (
    <div className='container d-flex justify-content-around align-items-center h-100'>
      <Board/>
    </div>
  );
}

export default App;
