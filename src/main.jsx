import { createRoot } from 'react-dom/client'
import GameProvider from './Game/GameProvider.jsx'
import CreateGame from './Game/CreateGame.jsx';
import Game from './Game/Game.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />
  },
  {
    path: "/create",
    element: <CreateGame />
  }
  
]);

createRoot(document.getElementById('root')).render(
  <GameProvider>
    <RouterProvider router={router} />
  </GameProvider>

)
