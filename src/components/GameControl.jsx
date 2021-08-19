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
    citizen: 0,
    mafia: 0,
    indep: 0,
    mid_indep: 0,
  };

  componentDidMount = () => {
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
    const n_p = JSON.parse(localStorage.getItem('n_p'))
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

  getNumberOfRegions = () => {
    const selection_times = JSON.parse(localStorage.getItem("times"));

    const citizens_section_start = 0;
    const citizens_section_finish = 33;

    const mafias_section_start = 34;
    const mafias_section_finish = 50;

    const mid_indeps_section_start = 51;
    const mid_indeps_section_finish = 55;

    const indeps_section_start = 56;
    const indeps_section_finish = 64;

    let sums = [0, 0, 0, 0];
    for (let i = citizens_section_start; i <= citizens_section_finish; i++)
      sums[0] += selection_times[i];
    for (let i = mafias_section_start; i <= mafias_section_finish; i++)
      sums[1] += selection_times[i];
    for (let i = mid_indeps_section_start; i <= mid_indeps_section_finish; i++)
      sums[2] += selection_times[i];
    for (let i = indeps_section_start; i <= indeps_section_finish; i++)
      sums[3] += selection_times[i];

    return sums;
  };

  render() {
    if (!localStorage.getItem("number_of_players")) {
      this.props.history.push("/");
      return <></>;
    }
    const { players, item, chosen_player } = this.state;
    const [citizen, mafia, indep, mid_indep] = this.getNumberOfRegions();
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
        <PageHeader>
          <TitleAlt>بازیکن ها</TitleAlt>
          <RegionsNumberSection>
            <div>
              <div>
                <h2 style={{ color: "#66DE93" }}>شهروند</h2>
                <h2 style={{ color: "#66DE93" }}>{citizen}</h2>
              </div>
              <div>
                <h2 style={{ color: "#DA0037" }}>مافیا</h2>
                <h2 style={{ color: "#DA0037" }}>{mafia}</h2>
              </div>
              <div>
                <h2 style={{ color: "#5C527F" }}>نیمه مستقل</h2>
                <h2 style={{ color: "#5C527F" }}>{mid_indep}</h2>
              </div>
              <div style={{ borderBottom: "none" }}>
                <h2 style={{ color: "#F6D167" }}>مستقل</h2>
                <h2 style={{ color: "#F6D167" }}>{indep}</h2>
              </div>
            </div>
          </RegionsNumberSection>
        </PageHeader>
        <PlayersContainer>
          {players.map((player, index) => {
            return (
              <button id="player-btn" key={index} onClick={this.showRole}>
                {player}
              </button>
            );
          })}
        </PlayersContainer>
        <RefreshButton id="refresh-btn" onClick={this.shuffleRoles}>
          بروز رسانی
        </RefreshButton>
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
const PageHeader = styled.div`
  text-align: center;
`;
const RegionsNumberSection = styled.div`
  border-radius: 15px;
  font-family: "Cairo", sans-serif;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  margin: 10px 20px;
  padding: 10px 40px;
  div {
    text-align: center;
    div {
      h2 {
        font-size: 25px;
      }
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }
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
  margin-bottom: 15px;
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
    padding: 10px;
    width: 85%;
    font-family: "Cairo", sans-serif;
    color: #9e7777;
    font-weight: 600;
    font-size: 18px;
    background: rgba(62, 44, 65, 0.7);
    border-radius: 4px;
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
