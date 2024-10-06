import { createContext, useContext, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export default function GameProvider({ children }) {
    const [gameData, setGameData] = useState([])
    const [count, setCount] = useState(0)
    const [score, setScore] = useState([5, 10])
    const [rockets, setRockets] = useState([])
    const wsRef = useRef(null)

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

        if (count === 10) {
            rockets[Math.round(Math.random())].launch()
        }
    }, [count])

    function increment() {
        setCount(count + 1)
    }

    return (
        <GameContext.Provider value={{
            increment, gameData, score, setRockets
        }}>
            {children}
        </GameContext.Provider>
    );
};