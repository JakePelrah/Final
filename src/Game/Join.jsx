import { useState } from "react"
import {v4 as uuid4} from 'uuid'

export default function Join() {
    const [roomCode, setRoomCode] = useState('')
    const [playerName, setPlayerName] = useState('')



    function onSubmit(e) {

        e.preventDefault()

        if (!isNaN(roomCode) && roomCode.length === 6 && playerName) {
            fetch('/auth', {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify({ roomCode, player:{playerName, uuid:uuid4()} }),

            }).then(res => res.json())
                .then(console.log)
        }
        else {
            alert('invalid room')
            setRoomCode('')
        }
    }


    return (<div className='background d-flex justify-content-center align-items-center'>

        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={onSubmit} className="text-center">
                <input id="room-code" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" class="form-control text-center" placeholder="Room Code" />
                <input id="room-code"  value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" class="form-control text-center mt-2" placeholder="Player Name" />
                <button class="btn custom-btn mt-2" type="submit">Enter</button>
            </form>
        </div>
    </div>)
}