import React from 'react';

export default function Box(props) {

    const processMove = () => {
        let board = [...props.board];
        board[props.place.row][props.place.col] = 'X'
        props.setBoard(board)
        props.makeMove()
    }

    return (
        <div className="box" onClick={processMove}>
            {props.board[props.place.row][props.place.col]}
        </div>);
}
