import socketIOClient from "socket.io-client";
import React from 'react'
import { useEffect, useState } from "react";
import MPGame from "./MPGame";
const ENDPOINT = "http://127.0.0.1:8000";

export default function CreateGame() {
    const [mode, setMode] = useState(0)
    const [host, setHost] = useState('')
    const [roomCode, setRoomCode] = useState(()=>{
        return Math.floor(1000 + Math.random() * 9000);
    })

    const x = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ff5a79" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z" /></svg>
    const o = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 51c-11.6 0-21-9.4-21-21s9.4-21 21-21s21 9.4 21 21s-9.4 21-21 21" fill="#ff5a79" /></svg>

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("started", ()=>{
            console.log("test")
            setMode(2)
        })
    }, [])
    

    const createRoom = () => {
        const socket = socketIOClient(ENDPOINT);
        socket.emit("createRoom", { roomCode: roomCode, host: host, board: [['','',''],['','',''],['','','']] })
    }

    if (mode === 1) {
        return (
            <div className="text-center">
                <h1>{roomCode}</h1>
                Waiting for other players to join this room...
            </div>
        )
    } else if (mode === 0) {
        return (
            <div className='container d-flex flex-row justify-content-center align-items-center h-100'>
                <button className="btn btn-outline-info mx-2 h-25 w-25" onClick={() => {
                    createRoom();
                    setHost('X')
                    setMode(1)
                    
                }
                }> {x} </button>
                <button className="btn btn-outline-info mx-2 h-25 w-25" onClick={() => {
                    createRoom();
                    setHost('O')
                    setMode(1)
                    
                }
                }> {o} </button>
            </div>
        )
    }
    else if (mode === 2) {
        return (
            <>
                <MPGame/>
            </>
        )
    }
}
