export default function Join({ setPlayerData, setRoomId, onJoin }) {
    return (<div className='background d-flex justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={onJoin} className="text-center">
                <input id="room-code" onChange={(e) => setRoomId(e.target.value)} type="text" className="form-control text-center" placeholder="Room Code" />
                <input id="room-code" onChange={(e) => setPlayerData(e.target.value)} type="text" className="form-control text-center mt-2" placeholder="Player Name" />
                <button className="btn custom-btn mt-2" type="submit">Enter</button>
            </form>
        </div>
    </div>)
}