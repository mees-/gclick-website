import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import Game from 'gclick-test-preset'

const game = new Game()

declare global {
  interface Window {
    game: Game
  }
}
window.game = game

ReactDOM.render(<App game={game} />, document.getElementById('root'))
registerServiceWorker()
