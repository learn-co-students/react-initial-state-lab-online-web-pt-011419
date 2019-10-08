// your Bomb code here!
import React, {Component} from 'react';

 class Bomb extends Component {
  constructor(props){
    super();
    this.state = {
      secondsLeft: props.initialCount,
    }
  }


  render(){
    return(
      <div className="bomb">
        {(this.state.secondsLeft > 0) ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!' }

      </div>
    );
  }
}

export default Bomb;
