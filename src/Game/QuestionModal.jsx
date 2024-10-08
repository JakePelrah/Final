import { useEffect, useRef, useState } from "react"
import * as bootstrap from 'bootstrap'

export default function QuestionModal({ question }) {
    const [timer, setTimer] = useState(10)
    const modalRef = useRef(null)


    useEffect(() => {
        if (question.question) {
            modalRef.current = new bootstrap.Modal('.modal')
            modalRef.current.show()
        }
    }, [question])


    useEffect(() => {

        const timerId = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        if (timer === 0) {
            clearInterval(timerId)
            setTimer(10)
            modalRef.current.hide()
        }

        return () => clearInterval(timerId);
    }, [timer])



    return (
        <div className="modal fade" tabindex="-1" data-bs-backdrop="static" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">JavaScript</h1>
                    </div>
                    <div className="modal-body">
                        {question.question}
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                {question?.options?.[0]}
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                {question?.options?.[1]}

                            </label>
                        </div>  <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                {question?.options?.[2]}

                            </label>
                        </div>  <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                {question?.options?.[3]}

                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div>{timer}</div>
                    </div>
                </div>
            </div>
        </div>)
}