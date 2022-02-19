const createGame = (data, games) => {
    games[data.roomCode] = { "host": data.host, "board": data.board }
    console.log(games)
}

const joinGame = (data, games, sock) => {
    if (games[data.roomCode] !== undefined || games[data.roomCode] !== ''){
        let arr = [true, false]
        sock.emit("started", { roomCode: data.roomCode, board: games[data.roomCode].board, host: games[data.roomCode].host, isHostTurn: arr[Math.floor(Math.random() * arr.length)] })
    }
    else
        console.log("error")
}

const stateChange = (data, games, sock) => {
    games[data.roomCode].board = data.board
    console.log(games[data.roomCode].board , data.board)
    sock.emit("change", { roomCode: data.roomCode, board: games[data.roomCode].board, turn: !data.turn})
}


module.exports = { createGame, joinGame, stateChange }