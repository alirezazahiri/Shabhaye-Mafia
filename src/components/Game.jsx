import React, { Component } from "react";
import CharactersModal from "./CharactersModal";
import Container from "./common/Container";
import styled from "styled-components";

class Game extends Component {
  state = {
    roles_in_game: JSON.parse(localStorage.getItem("characters")),
    selected: 0,
    players: JSON.parse(localStorage.getItem("players")),
    characters: JSON.parse(localStorage.getItem("characters")),
    names: JSON.parse(localStorage.getItem("names")),
    new_names: JSON.parse(localStorage.getItem("new_names")),
    new_players: JSON.parse(localStorage.getItem("new_players")),
    show: false,
    index: 0,
    n_p: {},
    item: {},
    chosen_player: "",
  };

  make_dict = (names, players) => {
    let n_p = {};
    for (let i in players) {
      n_p[players[i]] = names[i];
    }
    return n_p;
  };

  make_status_dict = (players) => {
    let s_p = {};
    for (let i in players) {
      s_p[players[i]] = "";
    }
    return s_p;
  };

  shuffleIndexes = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  shuffleRoles = () => {
    if (
      this.state.roles_in_game.length !==
      Number(localStorage.getItem("number_of_players"))
    )
      return;

    this.props.history.push("/game-control");
    let { players, characters, names } = { ...this.state };

    let new_names = new Array(names.length);
    let new_players = new Array(players.length);
    let indexes = new Array(characters.length);
    for (let i in characters) {
      indexes[i] = Number(i);
    }

    indexes = this.shuffleIndexes(indexes);
    new_names = indexes.map((index) => {
      return names[index];
    });
    localStorage.setItem("new_names", JSON.stringify(new_names));

    indexes = this.shuffleIndexes(indexes);
    new_players = indexes.map((index) => {
      return players[index];
    });
    localStorage.setItem("new_players", JSON.stringify(new_players));

    this.setState({ new_names, new_players, ...this.state });
    const n_p = this.make_dict(new_names, new_players);
    localStorage.setItem("n_p", JSON.stringify(n_p));
    const s_p = this.make_status_dict(new_players);
    localStorage.setItem("s_p", JSON.stringify(s_p));
    this.setState({
      n_p,
      ...this.state,
    });
  };

  render() {
    if (!localStorage.getItem("number_of_players")) {
      this.props.history.push("/");
      return <></>;
    }

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
        {JSON.parse(localStorage.getItem("players")).length ===
          Number(localStorage.getItem("number_of_players")) &&
        JSON.parse(localStorage.getItem("characters")).length ===
          Number(localStorage.getItem("number_of_players")) ? (
          <Button onClick={this.shuffleRoles}>شروع بازی</Button>
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
