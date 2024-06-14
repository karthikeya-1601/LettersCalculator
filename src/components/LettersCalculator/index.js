import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  change = event => {
    const enteredvalue = event.target.value
    this.setState(() => ({count: enteredvalue.length}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-cont">
        <div className="block1">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="name">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.change}
            id="name"
          />
          <p className="block1-cont">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
