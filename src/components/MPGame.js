import React from 'react'
import MPBoard from './MPBoard'
import { useState } from 'react'


export default function MPGame() {
    const [status, setStatus] = useState("")
    const [screen, setScreen] = useState(2) // 0 for selection of symbol, 1 for game, 2 for mode
    const [playerSymbol, setPlayerSymbol] = useState("")
    const [opponentSymbol, setOpponentSymbol] = useState("")
    const [player, setPlayer] = useState("")
    const [opponent, setOpponent] = useState("")


    return (
        <div className='container d-flex flex-column justify-content-around align-items-center h-100'>
            <MPBoard player={player} opponent={opponent} setStatus={setStatus} />
        </div>
    )
}
