import React, { useState } from "react";
import Box from "./Box";
import findBestMove from "../logic/minimax";

export default function Board(props) {
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const checkBoxesForWin = (r1, c1, r2, c2, r3, c3, symbol) => {
        if (board[r1][c1] === board[r2][c2] && board[r2][c2] === board[r3][c3] && board[r3][c3] === symbol)
            return true;
        return false;
    };

    const drawWin = (r1, c1, r2, c2, r3, c3, symbol) => {
        let copyboard = [...board];
        copyboard[r1][c1] = symbol + "W";
        copyboard[r2][c2] = symbol + "W";
        copyboard[r3][c3] = symbol + "W";
        setBoard(copyboard);
    }

    const checkWin = (symbol) => {
        if (checkBoxesForWin(0, 0, 0, 1, 0, 2, symbol) === true) {
            drawWin(0, 0, 0, 1, 0, 2, symbol)
            return true;
        }
        else if (checkBoxesForWin(1, 0, 1, 1, 1, 2, symbol) === true) {
            drawWin(1, 0, 1, 1, 1, 2, symbol)
            return true;
        }
        else if (checkBoxesForWin(2, 0, 2, 1, 2, 2, symbol) === true) {
            drawWin(2, 0, 2, 1, 2, 2, symbol)
            return true;
        }
        else if (checkBoxesForWin(0, 0, 1, 0, 2, 0, symbol) === true) {
            drawWin(0, 0, 1, 0, 2, 0, symbol)
            return true;
        }
        else if (checkBoxesForWin(0, 1, 1, 1, 2, 1, symbol) === true) {
            drawWin(0, 1, 1, 1, 2, 1, symbol)
            return true;
        }
        else if (checkBoxesForWin(0, 2, 1, 2, 2, 2, symbol) === true) {
            drawWin(0, 2, 1, 2, 2, 2, symbol)
            return true;
        }
        else if (checkBoxesForWin(0, 0, 1, 1, 2, 2, symbol) === true) {
            drawWin(0, 0, 1, 1, 2, 2, symbol)
            return true;
        }
        else if (checkBoxesForWin(0, 2, 1, 1, 2, 0, symbol) === true) {
            drawWin(0, 2, 1, 1, 2, 0, symbol)
            return true;
        }
    };
    const makeMove = () => {
        let bestMove = findBestMove(board);
        let copyboard = [...board];
        copyboard[bestMove.row][bestMove.col] = props.opponent;
        setBoard(copyboard);
        if (checkWin(props.player) === true)
            props.setStatus(props.player)
        if (checkWin(props.opponent) === true)
            props.setStatus(props.opponent)
        for (let i = 0; i < 3; i++){
            for (let j = 0; j<3; j++){
                if (board[i][j] === '')
                    return
            }
        }
        props.setStatus('D');
        
    };

    return (
        <div>
            <div className="row">
                <div className="col-4 tl">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 0, col: 0 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 tm">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 0, col: 1 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 tr">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 0, col: 2 }}
                        makeMove={makeMove}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4 ml">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 1, col: 0 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 mm">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 1, col: 1 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 mr">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 1, col: 2 }}
                        makeMove={makeMove}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4 bl">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 2, col: 0 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 bm">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 2, col: 1 }}
                        makeMove={makeMove}
                    />
                </div>
                <div className="col-4 br">
                    <Box
                        board={board}
                        setBoard={setBoard}
                        place={{ row: 2, col: 2 }}
                        makeMove={makeMove}
                    />
                </div>
            </div>
        </div>
    );
}
