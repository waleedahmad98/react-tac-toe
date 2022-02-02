import React, { useState } from 'react';
import Box from './Box';
import findBestMove from '../logic/minimax';



export default function Board() {
    const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']])

    const makeMove = () => {
        let bestMove = findBestMove(board);
        let copyboard = [...board];
        copyboard[bestMove.row][bestMove.col] = 'O'
        setBoard(copyboard)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 0, col: 0}} makeMove = {makeMove} />
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 0, col: 1}} makeMove = {makeMove}/>
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 0, col: 2}} makeMove = {makeMove}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 1, col: 0}} makeMove = {makeMove}/>
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 1, col: 1}} makeMove = {makeMove}/>
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 1, col: 2}} makeMove = {makeMove}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 2, col: 0}} makeMove = {makeMove}/>
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 2, col: 1}} makeMove = {makeMove}/>
                </div>
                <div className='col-4'>
                    <Box board={board} setBoard={setBoard} place={{row: 2, col: 2}} makeMove = {makeMove}/>
                </div>
            </div>
        </div>);
}
