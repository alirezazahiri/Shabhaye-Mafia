import React, { Component } from "react";
import Switch from "react-switch";
import styled from "styled-components";

class DayNightRadio extends Component {
  state = {
    checked: JSON.parse(localStorage.getItem("checked")),
    audio: new Audio('./thumbnails/night.mp3'),
  };

  constructor(props) {
    super(props)
    this.state.audio.load()
  }

  handleChange = (checked) => {
    const { audio } = { ...this.state };
    if (!checked) {
      audio.play();
      audio.loop = true
    }
    if (checked) {
      audio.pause();
      this.setState({ audio: new Audio('./thumbnails/night.mp3') })
    }
    this.setState({ checked });
    localStorage.setItem("checked", JSON.stringify(checked));
  };

  render() {
    return (
      <Content>
        <RadioContainer>
          <label>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              checkedIcon={
                <i
                  className="fa fa-sun-o fa-2x ml-2 mt-1"
                  style={{ color: "#FFE459" }}
                ></i>
              }
              uncheckedIcon={
                <i
                  className="fa fa-moon-o fa-2x ml-5 mt-1"
                  style={{ color: "#D5EEBB" }}
                ></i>
              }
              height={40}
              width={90}
              boxShadow="0px 0px 20px rgba(255, 255, 255, 0.2)"
              activeBoxShadow="0px 0px 10px rgba(255, 255, 255, 0.6)"
              offColor="#11052C"
              onColor="#64C9CF"
              offHandleColor="#3E2C41"
              onHandleColor="#6E85B2"
            />
          </label>
        </RadioContainer>
      </Content>
    );
  }
}

const RadioContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100px;
`;

const Content = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default DayNightRadio;
