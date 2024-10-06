
import { useGame } from "./GameProvider"

export default function CreateGame() {
    const {setRoomId, roomId}=useGame()

    function createRoom() {
        fetch('/create', { method: 'POST' })
            .then(res => res.json())
            .then(({ roomId }) => setRoomId(roomId))
    }

    return (<div className='background d-flex justify-content-center align-items-center'>

        <div className='controls d-flex justify-content-center align-items-center'>
            <button onClick={createRoom} className="custom-btn btn">Create</button>
        </div>
        {roomId}
    </div>)
}