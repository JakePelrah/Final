import Rocket from "../Rocket/Rocket"
import './gameBoard.css'
import QuestionModal from "../Game/QuestionModal"


export default function GameBoard({question}) {

    // const renderScore = [...Array(gameData || 0).keys()]?.map(star => <div><img className="star" src="./star.svg"></img></div>)
    // const renderUsers = [...Array(18).keys()].map(user => <span className="player-badge">
    //     MM
    // </span>
    // )
    return (
        <div id="gameboard" className="d-flex justify-content-between">

            <div id="score-left" className="score">
                <div className="">
                    {/* {renderScore} */}
                </div>
            </div>

            <div id="launch-platform" className="d-flex gap-5">
                <Rocket imgPath='rocket_01.svg' variation={0} />
                <Rocket imgPath='rocket_02.svg' variation={1} />
            </div>

            <div className="game-layers d-flex align-items-center gap-5">

                <div className="d-flex justify-content-center flex-wrap gap-2">
                    {/* {renderUsers} */}
                </div>

                <div className="divider m-5">
                </div>

                <div className="d-flex justify-content-center flex-wrap gap-2">
                    {/* {renderUsers} */}
                </div>
            </div>

            <div id="score=right" className="score">
                <div className="">

                    {/* {renderScore} */}
                </div>
            </div>

            <QuestionModal question={question} />
        </div>

    )
}