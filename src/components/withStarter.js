import React from 'react'

const withStarter = (Comp) => {
  return class CompoWithStarter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isStarted: false
      }
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.handleToggle = this.handleToggle.bind(this)
    }

    start() {
      this.setState({
        isStarted: true
      })
    }

    stop() {
      this.setState({
        isStarted: false
      })
    }

    handleToggle() {
      this.setState((state) => ({
        isStarted: !state.isStarted
      }))
    }

    render() {
      return (
        <Comp {...this.props} isStarted={this.state.isStarted} onToggle={this.handleToggle}  />
      )
    }
  } // end returned class
}

export default withStarter;