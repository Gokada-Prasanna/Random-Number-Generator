// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="generatedNumber">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
