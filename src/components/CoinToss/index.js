// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {
    tossFinalImage: HEAD_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEAD_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAIL_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossFinalImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossFinalImage, headsCount, tailsCount} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={tossFinalImage} alt="Toss Coin" className="image" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="list">
            <p className="total">Total : {headsCount + tailsCount}</p>
            <p className="total">Heads:{headsCount}</p>
            <p className="total">Tails : {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
