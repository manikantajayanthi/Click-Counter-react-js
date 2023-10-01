import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <div className="container">
          <h1>
            The Button has been clicked{' '}
            <span className="counter"> {count} </span> times
          </h1>
          <p className="count">Click the button to increase the count!</p>
          <div>
            <button type="button" className="button" onClick={this.onIncrease}>
              Click Me
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
