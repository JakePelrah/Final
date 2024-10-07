
import { useGame } from "./GameProvider"

export default function CreateGame() {
    const { roomId, startGame, createRoom, nextQuestion, started } = useGame()


    function displayButton() {
        console.log(roomId, started)

        if (roomId && started) {
            return <button onClick={nextQuestion} className="custom-btn btn">Next</button>
        }

        else if (roomId) {
            return <button onClick={startGame} className="custom-btn btn">Start</button>
        }
        else {
            return <button onClick={createRoom} className="custom-btn btn">Create</button>
        }

    }

    return (<div className='background d-flex justify-content-center align-items-center'>

        <div className='controls d-flex flex-column justify-content-center align-items-center'>
            <div className="text-white fw-bold">{roomId}</div>
            {displayButton()}
        </div>
    </div>)
}