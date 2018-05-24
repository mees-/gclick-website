import * as React from 'react'
import InvestmentCard from './InvestmentCard'
import GClick from 'gclick'

export type InvestmentState = {
  amount: number
  currentDuration: number
  price: number
  profitPerCycle: number
  profitPerSecond: number
  maxBuy: number
}

type Props = { game: GClick }
type State = {
  money: number
  investments: Array<InvestmentState>
}

export default class Game extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = Game.getDerivedStateFromProps(this.props)

    this.gameTickListener = this.gameTickListener.bind(this)
  }

  gameTickListener() {
    this.setState(Game.getDerivedStateFromProps(this.props))
  }

  componentDidMount() {
    this.props.game.start(this.gameTickListener)
  }

  componentWillUnmount() {
    this.props.game.stop()
  }

  static getDerivedStateFromProps({ game }: Props): State {
    return {
      money: game.money,
      investments: game.investments.map(investment => ({
        amount: investment.amount,
        currentDuration: investment.currentDuration,
        price: investment.price(),
        profitPerCycle: investment.profitPerCycle,
        profitPerSecond: investment.profitPerSecond,
        maxBuy: investment.maxBuy(game.money)
      }))
    }
  }

  render() {
    return (
      <div className="game">
        <p>money: {this.state.money}</p>
        {this.state.investments.map((state: InvestmentState, idx: number) => {
          const investment = this.props.game.investments[idx]
          return (
            <InvestmentCard
              name={investment.name}
              state={state}
              buy={(amount?: number) => {
                investment.buy(amount)
                this.gameTickListener()
              }}
              key={idx}
            />
          )
        })}
      </div>
    )
  }
}
