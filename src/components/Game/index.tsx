import * as React from 'react'
import InvestmentCard from '../InvestmentCard/index'
import GClick from 'gclick'
import {
  IToaster,
  Intent,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Alignment
} from '@blueprintjs/core'

export type InvestmentState = {
  amount: number
  currentDuration: number
  price: number
  profitPerCycle: number
  profitPerSecond: number
  maxBuy: number
}

type Props = { game: GClick; className?: string }
type State = {
  money: number
  investments: Array<InvestmentState>
}

export default class Game extends React.Component<Props, State> {
  toaster: IToaster
  constructor(props: Props) {
    super(props)

    // get a global toaster
    this.toaster = window.toaster

    this.state = Game.getDerivedStateFromProps(this.props)

    this.gameTickListener = this.gameTickListener.bind(this)
    this.showBuyError = this.showBuyError.bind(this)
  }

  private gameTickListener() {
    this.setState(Game.getDerivedStateFromProps(this.props))
  }

  private showBuyError(investmentName: string): void {
    this.toaster.show({
      message: `Cannot buy ${investmentName}`,
      intent: Intent.DANGER
    })
  }

  public componentDidMount() {
    this.props.game.start(this.gameTickListener)
  }

  public componentWillUnmount() {
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
      <div className={this.props.className}>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>GClick</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <NavbarHeading>money: {this.state.money}</NavbarHeading>
          </NavbarGroup>
        </Navbar>

        {this.state.investments.map((state: InvestmentState, idx: number) => {
          const investment = this.props.game.investments[idx]
          return (
            <InvestmentCard
              name={investment.name}
              {...state}
              buy={(amount?: number) => {
                try {
                  investment.buy(amount)
                  this.gameTickListener()
                } catch (e) {
                  this.showBuyError(investment.name)
                }
              }}
              key={idx}
            />
          )
        })}
      </div>
    )
  }
}
