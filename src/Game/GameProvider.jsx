import { createContext, useContext, useState, useEffect, useRef } from "react";
import { v4 as uuid4 } from 'uuid';

const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [roomId, setRoomId] = useState('')
    const [playerName, setPlayerName] = useState('')
    const [started, setStarted] = useState(false)
    const [connected, setConnected] = useState(false)

    const [gameData, setGameData] = useState(0)
    const [count, setCount] = useState(0)
    const [rockets, setRockets] = useState([])
    const wsRef = useRef(null)

    // init ws
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = function () {
            wsRef.current = ws
            ws.send(JSON.stringify({ event: 'open', name: 'Jake', id: uuid4() }))
        };

        ws.onmessage = (msg) => {
            msg = JSON.parse(msg.data)
            if (msg.event === 'created') {
                setRoomId(msg.roomId)
            }
            if (msg.event === 'joined') {
                console.log(msg.joined)
                msg.joined ? setConnected(true) : setConnected(false)
            }
            if (msg.event === 'start') {
                setStarted(true)
            }
        }

        ws.close = (e) => console.log(e)

        return () => ws.close()
    }, [])

    function createRoom() {
        wsRef.current.send(JSON.stringify({ event: 'create' }))
    }

    function startGame(e) {
        e.preventDefault()
        wsRef.current.send(JSON.stringify({ event: 'start', roomId }))
    }

    function onJoin(e) {
        e.preventDefault()
        if (!isNaN(roomId) && roomId.length === 6 && playerName) {
            wsRef.current.send(JSON.stringify({ event: 'join', roomId, playerName, uuid: uuid4() }))
        }
        else {
            alert('invalid room')
        }
    }

    useEffect(() => {
        wsRef.current?.send(JSON.stringify({ event: 'count', count }))
    }, [count])


    return (
        <GameContext.Provider value={{
            gameData, setRockets, onJoin, roomId,
            setRoomId, setStarted,
            started, setPlayerName, connected, startGame, createRoom
        }}>
            {children}
        </GameContext.Provider>
    );
};