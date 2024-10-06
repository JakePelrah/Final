export default function WaitingRoom({ startGame }) {

    return (<div className="background">
        <button onClick={(e) => startGame(e)}>START</button>
        Waiting room</div>)
}