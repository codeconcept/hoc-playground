import React from 'react'
import withStarter from './withStarter'

class Bike extends React.Component {

  render() { 
    const { isStarted, onToggle } = this.props
    return (
      <div>
        Bike is { isStarted ? 'on' : 'off' }
        <br/>
        <button onClick={onToggle}>toggle</button>
      </div>
    )
  }

} // end Bike
 
export default withStarter(Bike);