import { useEffect, useRef } from "react"
import { useGame } from "./GameProvider"
import Rocket from "./Rocket"
import './gameBoard.css'


export default function GameBoard() {
    const { score } = useGame()

    const renderScore = score => [...Array(score).keys()].map(star => <div><img className="star" src="./star.svg"></img></div>)

    return (
        <div id="gameboard" className="d-flex justify-content-between">

            <div id="score-left" className="score">
                <div className="">
                    {renderScore(score[0])}
                </div>
            </div>

            <div id="launch-platform" className="d-flex gap-5">
                <Rocket imgPath='rocket_01.svg' />
                <Rocket imgPath='rocket_02.svg' />
            </div>
            <div className="controls"></div>

            <div id="score=right" className="score">
                <div className="">

                    {renderScore(score[1])}
                </div>
            </div>

        </div>

    )
}