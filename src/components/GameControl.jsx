import React, { Component } from "react";
import Container from "./common/Container";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Card from "./common/Card";
import characters, { names } from "../utils/characters";

class GameControl extends Component {
  state = {
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

  componentDidMount = () => {
    this.shuffleRoles();
    this.setState({ n_p: JSON.parse(localStorage.getItem("n_p")) });
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

  showRole = (e) => {
    const { n_p } = this.state;
    const player_name = e.target.innerHTML;
    this.setState({
      ...this.state,
      item: characters[names.indexOf(n_p[player_name])][n_p[player_name]],
      show: true,
      chosen_player: player_name,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    const { players, item, chosen_player } = this.state;
    return (
      <Container>
        <ModalContainer show={this.state.show} onHide={this.handleClose}>
          <div>
            <ModalHeader closeButton>
              <Title>{chosen_player}</Title>
            </ModalHeader>
            <CharacterDiv>
              <Card
                title={item.title}
                description={item.description}
                type={item.type}
                icon={item.icon}
              />
            </CharacterDiv>
            <Modal.Footer>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="danger"
                onClick={this.handleClose}
              >
                بستن
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>

        <TitleAlt>بازیکن ها</TitleAlt>
        <PlayersContainer>
          {players.map((player, index) => {
            return (
              <button id="player-btn" key={index} onClick={this.showRole}>
                {player}
              </button>
            );
          })}
        </PlayersContainer>
        <RefreshButton onClick={this.handleRefresh}>بروز رسانی</RefreshButton>
      </Container>
    );
  }
}

const Title = styled.h1`
  margin-top: 10px;
  margin-left: 30px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 1px;
`;

const RefreshButton = styled.button`
  display: inline-block;
  padding: 12px;
  font-family: "Cairo", "sans-serif";
  border-radius: 10%;
  color: rgba(92, 82, 127, 2);
  background-color: rgba(92, 82, 127, 0.1);
  transition: all 0.5s;
  &:hover {
    background-color: rgba(92, 82, 127, 0.4);
  }
  margin-top: 15px;
`;

const TitleAlt = styled.h1`
  margin-top: 60px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
`;

const ModalHeader = styled(Modal.Header)`
  h1 {
    text-align: center;
  }
  background: rgba(0, 0, 0, 0.2);
`;

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #player-btn {
    margin: 5px;
    padding: 5px;
    width: 360px;
    font-family: "Cairo", sans-serif;
    color: #9e7777;
    font-weight: 600;
    font-size: 18px;
    background: rgba(62, 44, 65, 0.7);
    border-radius: 0;
    transition: all 0.2s;
    &:hover {
      background: rgba(62, 44, 65, 0.4);
      border-radius: 10px;
    }
  }
`;

const CharacterDiv = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  button {
    padding: 12px;
    margin-bottom: 3px;

    font-family: "Cairo", sans-serif;
  }
`;

const ModalContainer = styled(Modal)`
  border: 1px solid rgba(62, 44, 65, 0.7);
  div {
    background: rgba(38, 28, 44, 0.7);
    border-radius: 15px;
    border: none;
    button {
      color: #9e7777;
    }
    #char-btn {
      font-family: "Lato", sans-serif;
      color: #9e7777;
      font-weight: 600;
      font-size: 18px;
      background: rgba(62, 44, 65, 0.7);
      border-radius: 0;
      transition: all 0.2s;
      &:hover {
        background: rgba(62, 44, 65, 0.4);
        border-radius: 10px;
      }
    }

    .footer-btn {
      color: white;
    }

    h4 {
      color: rgb(80, 203, 147);
      margin-left: 12px;
    }
  }
`;

export default GameControl;
