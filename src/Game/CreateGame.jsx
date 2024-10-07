
import { useGame } from "./GameProvider"

export default function CreateGame() {
    const { roomId, startGame, createRoom, nextQuestion, started, setHostName} = useGame()
    
    function displayButton() {

        if (roomId && started) {
            return <button onClick={nextQuestion} className="custom-btn btn">Next</button>
        }

        else if (roomId) {
            return <button onClick={startGame} className="custom-btn btn">Start</button>
        }

        else {
            return <div className="d-flex flex-column justify-content-center">
                <input type="text" onChange={(e)=>setHostName(e.target.value)} placeholder="Host Name"></input>
                <button onClick={createRoom} className="custom-btn btn mt-2">Create</button>
            </div>
        }
    }

    return (<div className='background d-flex justify-content-center align-items-center'>

        <div className='controls d-flex flex-column justify-content-center align-items-center'>
            <div className="text-white fw-bold">{roomId}</div>
            {displayButton()}
        </div>
    </div>)
}