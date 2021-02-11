import React, { Component } from "react";
import styled from 'styled-components';

const StyledDIV = styled.div`
img {
  width: 65px;
  margin-left: 10px;
  margin-bottom: -15px;
}
p {
  font-size: 14px;
}
`;

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    return (
      <StyledDIV>
        <img src={`http://openweathermap.org/img/w/${this.state.data ? this.state.data.weather[0].icon : '?'}.png`} alt="the weather"/> 
        <p>Temp: {this.state.data ? this.state.data.main.temp.toFixed(1) : '?'} °C</p>
        <p>Feels like: {this.state.data ? this.state.data.main.feels_like.toFixed(1) : '?'} °C.</p>
      </StyledDIV>
    )
  }

}

export default Weather;