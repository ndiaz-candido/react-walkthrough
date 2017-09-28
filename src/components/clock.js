import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    // Create the state and set the default properties values.
    this.state = { 
      date: new Date()
    };
  }

  // Mounting hooks
  componentDidMount() {
    // Starts a set interval and keeps its ID.
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // Clears the set interval.
    clearInterval(this.timerID);
  }

  // Updating hooks
  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  tick() {
    // Updates the state to make the component to re-render.
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
