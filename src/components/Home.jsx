import React, { Component } from "react";
import Container from "./common/Container";
import styled from "styled-components";

import {chars_fa} from "../utils/chars-fa";
import {chars_en} from "../utils/chars-en";

// translate
import { objects_fa } from "./translations/Home/Home-fa";
import { objects_en } from "./translations/Home/Home-en";

class Home extends Component {
  state = {
    fields: { quantity: 0 },
  };

  handleChange = (e) => {
    const name = e.target.name;
    const changeFields = this.state.fields;
    changeFields[name] =
      name === "quantity" ? Math.floor(Number(e.target.value)) : e.target.value;
    this.setState({ fields: changeFields });
  };

  handleStart = (e) => {
    e.preventDefault();
    const current_lang = localStorage.getItem("language")
    if (this.state.fields.quantity >= 4 && this.state.fields.quantity <= 80) {
      localStorage.clear();
      document.getElementById("quantity").style = "border: 1px solid green;";
      this.props.history.push("/game");
      localStorage.setItem("number_of_players", this.state.fields.quantity);
      localStorage.setItem("players", JSON.stringify([]));
      localStorage.setItem("characters", JSON.stringify([]));
      localStorage.setItem("language", current_lang);
      const {characters} = localStorage.getItem("language") === "uk"
    ? chars_en
    : chars_fa;
      let times = new Array(characters.length);
      for (let i in characters) {
        times[i] = 0;
      }
      localStorage.setItem("times", JSON.stringify(times));
      localStorage.setItem("names", JSON.stringify([]));
      localStorage.setItem("checked", JSON.stringify(true));
    } else {
      document.getElementById("quantity").style = "border: 1px solid red;";
    }
  };

  render() {
    const { title, description, placeholder_1, start } =
      localStorage.getItem("language") === "uk" ? objects_en : objects_fa;
    
    return (
      <Container className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <StartGame
            id="start-game"
            className="px-6 py-8 rounded shadow-md text-black w-full"
          >
            <Title className="mb-8 text-3xl text-center">{title}</Title>
            <Description>{description}</Description>
            <MainMenu>
              <Input
                pattern="\d*"
                type="number"
                className="block w-full text-white p-3 rounded mb-4"
                name="quantity"
                placeholder={placeholder_1}
                id="quantity"
                max="80"
                min="4"
                onChange={this.handleChange}
              />

              <Button
                type="submit"
                className="w-full text-center py-3 rounded focus:outline-none my-1"
                id="start"
                onClick={this.handleStart}
              >
                {start}
              </Button>
            </MainMenu>
          </StartGame>
        </div>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "0",
            fontFamily: "Lato, sans-serif",
          }}
        >
          All rights reserved by Alireza Zahiri&trade;
        </p>
      </Container>
    );
  }
}

const Title = styled.h1`
  margin-top: 10px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 45px;
  font-weight: 900;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-family: "Cairo", sans-serif;
  color: #50cb93;
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
  margin-top: 25px;
`;

const MainMenu = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Cairo", sans-serif;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  background: rgba(92, 82, 127, 0.9);
  color: rgb(80, 203, 147);
  transition: all 0.2s;
  font-family: "Cairo", sans-serif;
  &:hover {
    background: rgba(80, 203, 147, 0.9);
    color: rgba(92, 82, 127, 2);
  }
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
`;

const StartGame = styled.div`
  padding-top: 125px;
`;

export default Home;
