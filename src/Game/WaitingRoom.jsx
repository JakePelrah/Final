export default function WaitingRoom({ gameData }) {

    console.log(gameData)
    const players = gameData?.map(player => <div>{player.playerName}</div>)
    return (<div className="background">
        {players}
        Waiting room</div>)
}