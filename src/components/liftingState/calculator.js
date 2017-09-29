import React from 'react';
import BoilerVerdict from './boilerVerdict';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilerVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}