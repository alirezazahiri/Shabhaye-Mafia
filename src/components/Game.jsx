import React, { Component } from "react";
import CharactersModal from "./CharactersModal";
import Container from "./common/Container";
import styled from "styled-components";

class Game extends Component {
  state = {
    roles_in_game: JSON.parse(localStorage.getItem("characters")),
    selected: 0,
  };

  handleStartGame = () => {
    if (
      this.state.roles_in_game.length !==
      Number(localStorage.getItem("number_of_players"))
    ) {
      console.log("UnExpected Error");
    } else {
      this.props.history.push("/game-control");
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Title>آماده سازی بازی</Title>
          <Description>
            .در این بخش شما میتوانید کاراکتر هایی که آنها را در بازی میخواهید
            داشته باشید, انتخاب کنید
          </Description>
        </Content>
        <CharactersModal />
        {Number(localStorage.getItem("number_of_players")) ===
          this.state.roles_in_game.length &&
        JSON.parse(localStorage.getItem("players")).length ===
          this.state.roles_in_game.length ? (
          <Button onClick={this.handleStartGame}>شروع بازی</Button>
        ) : (
          <p></p>
        )}
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

const Content = styled.div`
  margin-top: 200px;
`;

const Button = styled.button`
  border: none;
  border-radius: 15px;
  padding: 12px;
  background: rgba(92, 82, 127, 0.9);
  color: rgb(80, 203, 147);
  transition: all 0.2s;
  &:hover {
    background: rgba(80, 203, 147, 0.9);
    color: rgba(92, 82, 127, 2);
  }
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Cairo", sans-serif;
`;

export default Game;
