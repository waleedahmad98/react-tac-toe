import React from 'react';

export default function Box(props) {

    const processMove = () => {
        let board = [...props.board];
        if (board[props.place.row][props.place.col] === '') {
            board[props.place.row][props.place.col] = 'X'
            props.setBoard(board)
            props.makeMove()
        }
        else{
            alert("Invalid Move")
        }
    }

    return (
        <div className="box" onClick={processMove}>
            {props.board[props.place.row][props.place.col]}
        </div>);
}
