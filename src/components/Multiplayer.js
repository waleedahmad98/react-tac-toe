import React, { useState, useEffect } from "react";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";


function Multiplayer() {
  const [response, setResponse] = useState("");
  const [createMode, setCreateMode] = useState(0);
  const [joinMode, setJoinMode] = useState(0);
  


  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);

  if (createMode === 1) {
    return(
    <div className='container d-flex flex-row justify-content-center align-items-center h-100'>
      <CreateGame />
    </div>
    )
  }
  else if (joinMode === 1) {
    return(
    <div className='container d-flex flex-row justify-content-center align-items-center h-100'>
      <JoinGame />
    </div>
    )
  }
  else {
    return (
      <div className='container d-flex flex-row justify-content-center align-items-center h-100'>
        <button className="btn btn-outline-info mx-2 h-25 w-25" onClick={() => {
          setCreateMode(1);
        }}> Create </button>
        <button className="btn btn-outline-info mx-2 h-25 w-25" onClick={() => {
          setJoinMode(1);
        }}> Join </button>
      </div>
    )
  }
}

export default Multiplayer;