import React from 'react'
import { useEffect, useState } from 'react';
import MPBox from './MPBox';
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_ENDPOINT//"http://127.0.0.1:8000";


export default function MPBoard(props) {
  const [roomCode, setRoomCode] = useState(() => {
    return props.roomCode
  })
  const [player, setPlayer] = useState(() => {
    if (props.turn === false) {
      return props.join
    }
    else
      return props.host
  })
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState(props.turn)
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("change", (data) => {
      let temp = [["", "", ""], ["", "", ""], ["", "", ""]]
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          temp[i][j] = data.board[i][j]
        }
      }
      setBoard(temp)
      setTurn(data.turn)
      props.setTurn(data.turn)
      if (data.turn === false) {
        setPlayer(props.join)

      }
      else {
        setPlayer(props.host)
      }
    })
  }, [])

  useEffect(() => {
    if (checkWin(props.host) === true) {
      props.setStatus(props.host)
    }
    else if (checkWin(props.join) === true) {
      props.setStatus(props.join)
    }
  }, [board])

  const checkBoxesForWin = (r1, c1, r2, c2, r3, c3, symbol) => {
    if (
      board[r1][c1] === board[r2][c2] &&
      board[r2][c2] === board[r3][c3] &&
      board[r3][c3] === symbol
    )
      return true;
    return false;
  };

  const drawWin = (r1, c1, r2, c2, r3, c3, symbol) => {
    let copyboard = [...board];
    copyboard[r1][c1] = symbol + "W";
    copyboard[r2][c2] = symbol + "W";
    copyboard[r3][c3] = symbol + "W";
    setBoard(copyboard);
  };

  const checkWin = (symbol) => {
    if (checkBoxesForWin(0, 0, 0, 1, 0, 2, symbol) === true) {
      drawWin(0, 0, 0, 1, 0, 2, symbol);
      return true;
    } else if (checkBoxesForWin(1, 0, 1, 1, 1, 2, symbol) === true) {
      drawWin(1, 0, 1, 1, 1, 2, symbol);
      return true;
    } else if (checkBoxesForWin(2, 0, 2, 1, 2, 2, symbol) === true) {
      drawWin(2, 0, 2, 1, 2, 2, symbol);
      return true;
    } else if (checkBoxesForWin(0, 0, 1, 0, 2, 0, symbol) === true) {
      drawWin(0, 0, 1, 0, 2, 0, symbol);
      return true;
    } else if (checkBoxesForWin(0, 1, 1, 1, 2, 1, symbol) === true) {
      drawWin(0, 1, 1, 1, 2, 1, symbol);
      return true;
    } else if (checkBoxesForWin(0, 2, 1, 2, 2, 2, symbol) === true) {
      drawWin(0, 2, 1, 2, 2, 2, symbol);
      return true;
    } else if (checkBoxesForWin(0, 0, 1, 1, 2, 2, symbol) === true) {
      drawWin(0, 0, 1, 1, 2, 2, symbol);
      return true;
    } else if (checkBoxesForWin(0, 2, 1, 1, 2, 0, symbol) === true) {
      drawWin(0, 2, 1, 1, 2, 0, symbol);
      return true;
    }
  };

  if (roomCode !== "") {
    return (
      <div>
        <div className="row">
          <div className="col-4 tl">
            <MPBox
              player={player}
              board={board}
              place={{ row: 0, col: 0 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 tm">
            <MPBox
              player={player}
              board={board}
              place={{ row: 0, col: 1 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 tr">
            <MPBox
              player={player}
              board={board}
              place={{ row: 0, col: 2 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 ml">
            <MPBox
              player={player}
              board={board}
              place={{ row: 1, col: 0 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 mm">
            <MPBox
              player={player}
              board={board}
              place={{ row: 1, col: 1 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 mr">
            <MPBox
              player={player}
              board={board}
              place={{ row: 1, col: 2 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 bl">
            <MPBox
              player={player}
              board={board}
              place={{ row: 2, col: 0 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 bm">
            <MPBox
              player={player}
              board={board}
              place={{ row: 2, col: 1 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
          <div className="col-4 br">
            <MPBox
              player={player}
              board={board}
              place={{ row: 2, col: 2 }} sock={socket} roomCode={roomCode} turn={turn} hoster={props.hoster}
            />
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <></>
    )
  }
}
