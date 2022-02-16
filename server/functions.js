const createGame = (data, games) => {
    games.push({"roomCode":data.roomCode, "host":data.host, "board":data.board})
}

const joinGame = (data, games, sock) => {
    console.log(data.roomCode, games)
    for (let i = 0; i < games.length; i++){
        if (games[i].roomCode.toString() === data.roomCode){
            console.log("test")
            sock.emit("started")
        }
    }
}


module.exports = {createGame, joinGame}