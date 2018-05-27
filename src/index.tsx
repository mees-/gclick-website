import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import GameView from './components/Game/index'
import registerServiceWorker from './registerServiceWorker'
import { Toaster, IToaster } from '@blueprintjs/core'

import Game from 'gclick-test-preset'

const game = new Game()

declare global {
  interface Window {
    game: Game
    toaster: IToaster
    gameView: GameView
  }
}
window.game = game

window.toaster = Toaster.create()

ReactDOM.render(<App game={game} />, document.getElementById('root'))
registerServiceWorker()
