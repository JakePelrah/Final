
import { useGame } from "./GameProvider"

export default function CreateGame() {
    const { roomId, startGame, createRoom } = useGame()

    return (<div className='background d-flex justify-content-center align-items-center'>

        <div className='controls d-flex flex-column justify-content-center align-items-center'>
            <div className="text-white fw-bold">{roomId}</div>

            {roomId ? <button onClick={startGame} className="custom-btn btn">Start</button> :
                <button onClick={createRoom} className="custom-btn btn">Create</button>
            }
        </div>
    </div>)
}