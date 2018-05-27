import * as React from 'react'
import FPSCounter from '../util/FPSCounter'

type Props = { averageSize: number }

export default class FPSCount extends React.Component<Props> {
  counter = new FPSCounter(this.props.averageSize)

  public tick() {
    this.counter.tick()
  }

  render() {
    return this.counter.fps().toString()
  }
}
