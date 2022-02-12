import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState("")

  const player = 'X';
  const opponent = 'O';

  let winner = "";
  if (status === player){
    winner = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ff5a79" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z"/></svg>
  }
  else if (status === opponent){
    winner = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 51c-11.6 0-21-9.4-21-21s9.4-21 21-21s21 9.4 21 21s-9.4 21-21 21" fill="#ff5a79"/></svg>
  }

  return (
    <div className='container d-flex flex-column justify-content-around align-items-center h-100'>
      <Board  player = {player} opponent = {opponent} setStatus = {setStatus}/>
      <h1 className='h-25'>{winner}</h1>
    </div>
  );
}

export default App;
