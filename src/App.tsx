import GClick from 'gclick'
import Game from './components/Game'
import * as React from 'react'
import './App.css'

type Props = { game: GClick }

export default (props: Props) => <Game className="game-container" {...props} />
