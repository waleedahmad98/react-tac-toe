import React from 'react';

export default function MPBox(props) {

    const processMove = () => {
        let board = [...props.board];
        if ((props.hoster === false && props.turn === true) || (props.hoster === true && props.turn === false)){
            
            if (board[props.place.row][props.place.col] === '') {
                board[props.place.row][props.place.col] = props.player
                props.sock.emit("change", {board: board, roomCode: props.roomCode, turn: props.turn})
            
            }
            else{
                alert("Invalid Move")
            }
        }
        else {
            alert("Not your turn")
        }
    }

    let mark = ''
    if (props.board[props.place.row][props.place.col] === 'X'){
        mark = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="5em" height="5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ff5a79" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z"/></svg>
    }
    else if (props.board[props.place.row][props.place.col] === 'O'){
        mark = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="5em" height="5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 51c-11.6 0-21-9.4-21-21s9.4-21 21-21s21 9.4 21 21s-9.4 21-21 21" fill="#ff5a79"/></svg>
    }
    else if (props.board[props.place.row][props.place.col] === 'OW'){
        mark = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="5em" height="5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 51c-11.6 0-21-9.4-21-21s9.4-21 21-21s21 9.4 21 21s-9.4 21-21 21" fill="#ffda49"/></svg>
    }
    else if (props.board[props.place.row][props.place.col] === 'XW'){
        mark = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="5em" height="5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ffda49" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z"/></svg>
    }
    
    return (
        <div className="box d-flex align-items-center justify-content-center" onClick={processMove}>
            {mark}
        </div>);
}
