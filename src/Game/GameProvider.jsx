import { createContext, useContext, useState, useEffect, useRef } from "react";
import { v4 as uuid4 } from 'uuid';

const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [roomId, setRoomId] = useState('')
    const [playerName, setPlayerName] = useState('')
    const [started, setStarted] = useState(false)
    const [connected, setConnected] = useState(false)
    const [question, setQuestion] = useState({ })


    const [gameData, setGameData] = useState([])
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
                msg.joined ? setConnected(true) : setConnected(false)
            }
            if (msg.event === 'start') {
                console.log('start')
                setStarted(true)
            }
            if (msg.event === 'update') {
                setGameData(msg.data.players)
            }
            if (msg.event === 'question') {
                console.log(msg)
                setQuestion(msg.data)
            }
        }

        ws.close = (e) => console.log(e)

        return () => ws.close()
    }, [])

    function createRoom() {
        wsRef.current.send(JSON.stringify({ event: 'create' }))
    }

    function nextQuestion(e) {
        e.preventDefault()
        wsRef.current.send(JSON.stringify({ event: 'nextQuestion', roomId, question: { question: new Date(), options: ["A", "B", "C", "D"] } }))
    }

    function startGame(e) {
        e.preventDefault()
        setStarted(true)
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



    return (
        <GameContext.Provider value={{
            gameData, setRockets, onJoin, roomId,
            setRoomId, setStarted, question,
            started, setPlayerName, connected, 
            startGame, createRoom, nextQuestion
        }}>
            {children}
        </GameContext.Provider>
    );
};