
import Join from "./Join";
import WaitingRoom from "./WaitingRoom";
import GameBoard from "../GameBoard/GameBoard";
import { useGame } from "./GameProvider";


export default function Game() {
    const { setRoomId,
        setPlayerName, started,
        connected, onJoin, gameData, question } = useGame()

    function renderPage() {
        if (!connected) {
            return <Join setRoomId={setRoomId}
                setPlayerName={setPlayerName}
                onJoin={onJoin} />
        }
        else if (connected && !started) {
            return <WaitingRoom gameData={gameData} />
        }
        else if (connected && started) {
            return <GameBoard question={question} />
        }
    }

    return (<>
        {renderPage()}
    </>)
}