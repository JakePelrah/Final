import { useGame } from './GameProvider'
import './App.css'

function App() {
 const {increment}= useGame()

  return (
   <button onClick={increment}>INC</button>
  )
}

export default App
