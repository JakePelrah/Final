
import Join from "./Join";
import WaitingRoom from "./WaitingRoom";
import GameBoard from "../GameBoard/GameBoard";
import { useGame } from "./GameProvider";

export default function Game() {
    const { setRoomId,
        setPlayerData, started,
        connected, onJoin, startGame } = useGame()

    console.log(connected)
    function renderPage() {
        if (!connected) {
            return <Join setRoomId={setRoomId}
                setPlayerData={setPlayerData}
                onJoin={onJoin} />
        }
        else if (connected && !started) {
            return <WaitingRoom startGame={startGame} />
        }
        else if (connected && started) {
            return <GameBoard />
        }

    }

    return (<>
        {renderPage()}
    </>)
}