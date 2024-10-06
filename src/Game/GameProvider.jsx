import { createContext, useContext, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [roomId, setRoomId] = useState('')
    const [playerData, setPlayerData] = useState('')
    const [started, setStarted] = useState(false)
    const [connected, setConnected] = useState(false)


    const [gameData, setGameData] = useState(0)
    const [count, setCount] = useState(0)
    const [rockets, setRockets] = useState([])
    const wsRef = useRef(null)


    function startGame(e){
        e.preventDefault()
        console.log('starting game')
        setStarted(true)
    }

    function onJoin(e) {

        alert(e)
        e.preventDefault()
        console.log(roomId, playerData)
        setConnected(true)

        // if (!isNaN(roomId) && roomId.length === 6 && playerName) {
        //     fetch('/auth', {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         method: 'POST',
        //         body: JSON.stringify({ roomId, player: { playerName, uuid: uuid4() } }),

        //     }).then(res => res.json())
                
        // }
        // else {
        //     alert('invalid room')
        // }
    }

    // init ws
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = function () {
            wsRef.current = ws
            ws.send(JSON.stringify({ event: 'open', name: 'Jake', id: uuidv4() }))
        };

        ws.onmessage = (msg) => {
            setGameData(JSON.parse(msg.data)[0].count)
        }

        ws.close = (e) => console.log(e)

        return () => ws.close()
    }, [])

    useEffect(() => {
        wsRef.current?.send(JSON.stringify({ event: 'count', count }))
    }, [count])

    function increment() {
        setCount(count + 1)
    }

    return (
        <GameContext.Provider value={{
            increment, gameData, setRockets, onJoin, roomId, setRoomId, setStarted,
            started, setPlayerData,connected, startGame
        }}>
            {children}
        </GameContext.Provider>
    );
};