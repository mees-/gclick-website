import GClick from 'gclick'
import Game from './components/Game/index'
import * as React from 'react'
import './App.css'

type Props = { game: GClick }

export default (props: Props) => <Game {...props} />
