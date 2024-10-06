import { useEffect, useRef, useState } from "react"
import * as bootstrap from 'bootstrap'
import { useGame } from "./GameProvider"

export default function QuestionModal() {
    const { increment } = useGame()
    const [timer, setTimer] = useState(10)
    const modalRef = useRef(null)


    useEffect(() => {
        modalRef.current = new bootstrap.Modal('.modal')
        modalRef.current.show()
    }, [])


    useEffect(() => {

        const timerId = setInterval(() => {
            setTimer(timer - 1)
            increment()
        }, 1000)

        if (timer === 0) {
            clearInterval(timerId)
            modalRef.current.hide()
        }

        return () => clearInterval(timerId);
    }, [timer])



    return (
        <div class="modal fade" tabindex="-1" data-bs-backdrop="static" >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">JavaScript</h1>
                    </div>
                    <div class="modal-body">
                        The question
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>  <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>  <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div>{timer}</div>
                    </div>
                </div>
            </div>
        </div>)
}