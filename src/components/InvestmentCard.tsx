import * as React from 'react'
import { InvestmentState } from './Game'
import { Investment } from 'gclick'

type Props = { name: string; state: InvestmentState; buy: Investment['buy'] }

export default ({ name, state, buy }: Props) => {
  const {
    amount,
    currentDuration,
    price,
    profitPerCycle,
    profitPerSecond,
    maxBuy
  } = state
  return (
    <div className="investmentCard">
      <h1>{name}</h1>
      <table>
        <tbody>
          <tr>
            <td>amount</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>currentDuration:</td>
            <td>{currentDuration}</td>
          </tr>
          <tr>
            <td>profitPerCycle</td>
            <td>{profitPerCycle}</td>
          </tr>
          <tr>
            <td>profitPerSecond</td>
            <td>{profitPerSecond}</td>
          </tr>
          <tr>
            <td>maxBuy</td>
            <td>{maxBuy}</td>
          </tr>
        </tbody>
      </table>
      <button disabled={maxBuy === 0} onClick={() => buy()}>
        buy!
      </button>
    </div>
  )
}
