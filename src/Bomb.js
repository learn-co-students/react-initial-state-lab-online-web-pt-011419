// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  timer = () => {
    if (this.state.secondsLeft > 0) {
      setTimeout(() => {
        this.setState({ secondsLeft: this.state.secondsLeft - 1 })
      }, 100)
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return 'Boom!'
    }
  }

  render() {
    return (
      <div>
        {this.timer()}
      </div>
    )
  }

}
