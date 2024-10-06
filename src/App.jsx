import { useGame } from './GameProvider'
import GameBoard from './GameBoard'

function App() {
  const { increment, gameData } = useGame()

  return (
    <div className='container-fluid'>
      <GameBoard />
    </div>
  )
}

export default App
