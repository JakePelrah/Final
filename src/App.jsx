import { useGame } from './GameProvider'
import GameBoard from './GameBoard'

function App() {
  const { increment, gameData } = useGame()

  return (
      <GameBoard />
  )
}

export default App
