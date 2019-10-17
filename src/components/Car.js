import React from 'react'
import withStarter from './withStarter'

class Car extends React.Component {

  render() {
    const { isStarted, onToggle } = this.props
    return (
      <div>
        The car is { isStarted ? 'on' : 'off' }
        <br/>
        <button onClick={onToggle}>toggle</button>
      </div>
    )
  }

}
export default withStarter(Car)