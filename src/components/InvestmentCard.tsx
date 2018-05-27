import * as React from 'react'
import { InvestmentState } from './Game'
import { Investment } from 'gclick'
import { Card, Button, ButtonGroup, Alignment } from '@blueprintjs/core'

import './InvestmentCard.css'

type Props = { name: string; buy: Investment['buy'] } & InvestmentState

export default ({
  name,
  amount,
  currentDuration,
  price,
  profitPerCycle,
  profitPerSecond,
  maxBuy,
  buy
}: Props) => (
  <Card elevation={3} className="investment-card">
    <h3>{name}</h3>
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
          <td>currentDuration</td>
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
    <hr />
    <ButtonGroup alignText={Alignment.CENTER}>
      <Button text="buy" onClick={() => buy()} />
      <Button text="buy max" onClick={() => buy(maxBuy)} />
    </ButtonGroup>
  </Card>
)
