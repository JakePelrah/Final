import { createRoot } from 'react-dom/client'
import GameProvider from './Game/GameProvider.jsx'
import CreateGame from './Game/CreateGame.jsx';
import Join from './Game/Join.jsx';
import GameBoard from './GameBoard/GameBoard.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Join/>

  },
  {
    path:"/game",
    element:<GameBoard/>

  },
  {
    path:'/create',
    element:<CreateGame/>
  }
]);

createRoot(document.getElementById('root')).render(
  <GameProvider>
    <RouterProvider router={router} />
  </GameProvider>

)
