import React from 'react'
import MPBoard from './MPBoard'
import { useState, useEffect } from 'react'


export default function MPGame(props) {
    const [status, setStatus] = useState("")
    const [hostSymbol, setHostSymbol] = useState("")
    const [joinSymbol, setJoinSymbol] = useState("")
    const [turn, setTurn] = useState(props.gameData.isHostTurn)
    const [host, setHost] = useState(()=>{
        return props.gameData.host
    })
    const [join, setJoin] = useState("")

    let winner = "";
    if (status === host && host !== undefined) {
      winner = hostSymbol
    }
    else if (status === join && join !== undefined) {
        winner = joinSymbol
    }
  

    useEffect(() => {
      console.log(props.gameData)
      if (host === "X") {setJoin("O"); setHostSymbol(x); setJoinSymbol(o)}
      else if (host === "O") {setJoin('X'); setHostSymbol(o); setJoinSymbol(x)}
    }, [])
    

    const x = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="#ff5a79" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z" /></svg>
    const o = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 51c-11.6 0-21-9.4-21-21s9.4-21 21-21s21 9.4 21 21s-9.4 21-21 21" fill="#ff5a79" /></svg>


    return (
        <div className='container d-flex flex-column justify-content-around align-items-center h-100'>
            {props.hoster !== true ? <h1>You are {host}</h1> : <h1>You are {join}</h1>}
            {turn !== true ? <h2>{join}'s Turn</h2> : <h2>{host}'s Turn</h2>}
            {join !== "" ? <MPBoard host={host} join={join} turn = {turn} setTurn = {setTurn} roomCode = {props.gameData.roomCode} hoster = {props.hoster} setStatus={setStatus} /> : <></>}
            <h1 className='h-25'>{winner}</h1>
        </div>
    )
}
