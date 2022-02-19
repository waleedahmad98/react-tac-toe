import React from 'react'
import { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import MPGame from './MPGame';
const ENDPOINT = process.env.REACT_APP_ENDPOINT//"http://127.0.0.1:8000";

export default function JoinGame() {
    const [roomCode, setRoomCode] = useState("")
    const [startedGame, setStartedGame] = useState(false)
    const [gameData, setGameData] = useState(null)

    const handleSub = (e) => {
        e.preventDefault()
        const socket = socketIOClient(ENDPOINT);
        socket.emit("joinRoom", { roomCode: roomCode, socketId: socket.id })
        
        
    }

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("started", (data)=>{
            setGameData(data)
            setStartedGame(true)
        })
    }, [])

    if (startedGame === false) {
        return (
            <div className='text-center'>
                <form onSubmit={handleSub}>
                    <div class="mb-3">
                        <label for="roomCodeInput" class="form-label">Enter Room Code</label>
                        <input type="text" class="form-control" id="roomCodeInput" value={roomCode} onChange={(e) => { setRoomCode(e.target.value) }} />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Join</button>
                </form>
            </div>
        )
    } else {
        return (
            <>
                <MPGame gameData = {gameData} hoster = {false} />
            </>
        )
    }
}
