import socketIOClient from "socket.io-client";
import React from 'react'
import { useEffect } from "react";
const ENDPOINT = "http://127.0.0.1:8000";

export default function CreateGame() {
    const roomCode = Math.floor(1000 + Math.random() * 9000);
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.emit("createRoom", {roomCode: roomCode, socketId: socket.id })
    }, [])

    return (
        <div className="text-center">
            <h1>{roomCode}</h1>
            Waiting for other players to join this room...
        </div>
    )
}
