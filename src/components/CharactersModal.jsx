import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Card from "./common/Card"

import { chars_fa } from "../utils/chars-fa";
import { chars_en } from "../utils/chars-en";

// translate
import { objects_fa } from "./translations/CharModal/CharModal-fa";
import { objects_en } from "./translations/CharModal/CharModal-en";

const getNumberOfRegions = () => {
  const selection_times = JSON.parse(localStorage.getItem("times"))
    ? JSON.parse(localStorage.getItem("times"))
    : undefined;

  if (!selection_times) return [0, 0, 0, 0];

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

class CharactersModal extends Component {
  state = {
    new_names: JSON.parse(localStorage.getItem("new_names")),
    new_players: JSON.parse(localStorage.getItem("new_players")),
    index: 0,
    n_p: {},
    item: {},
    chosen_player: "",
    show: false,
    show_2: false,
    show_3: false,
    show_4: false,
    number_of_players: localStorage.getItem("number_of_players"),
    selected: 0,
    times: JSON.parse(localStorage.getItem("times")),
    characters: JSON.parse(localStorage.getItem("characters")),
    players: JSON.parse(localStorage.getItem("players")),
    players_check: JSON.parse(localStorage.getItem("players")),
    names: JSON.parse(localStorage.getItem("names")),
    name: "",
    character_list: undefined,

    edit_field: {
      name: "",
      idx: undefined,
    },

    info_char: undefined,

    type_counts: {
      citizen: getNumberOfRegions()[0],
      mafia: getNumberOfRegions()[1],
      "mid-independent": getNumberOfRegions()[2],
      independent: getNumberOfRegions()[3],
    },
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleDone = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show_2: false });
    this.setState({ show: true });
  };

  sum = (arr) => {
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    return sum;
  };

  handleSelect = (idx) => {
    let times = [...this.state.times];
    let names_alt = [...this.state.names];
    let { type_counts } = { ...this.state };

    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const { names } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    if (
      times[idx] < characters[idx][names[idx]].max &&
      this.sum(times) < this.state.number_of_players
    ) {
      times[idx]++;
      const characters_alt = [...this.state.characters, characters[idx]];
      names_alt.push(names[idx]);
      const type = characters[idx][names[idx]].type;
      type_counts[type]++;
      this.setState({
        characters: characters_alt,
        times,
        names: names_alt,
        type_counts,
      });

      localStorage.setItem("characters", JSON.stringify(characters_alt));
      localStorage.setItem("times", JSON.stringify(times));
      localStorage.setItem("names", JSON.stringify(names_alt));

      localStorage.setItem("type_counts", JSON.stringify(type_counts));
    }
  };

  handleDeSelect = (idx) => {
    let times = [...this.state.times];
    let characters_alt = [...this.state.characters];
    let names_alt = [...this.state.names];
    let { type_counts } = { ...this.state };
    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const { names } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;

    const l_char_idx = this.state.characters.lastIndexOf(characters[idx]);
    const l_name_idx = this.state.names.lastIndexOf(names[idx]);

    if (times[idx] > 0) {
      times[idx]--;
      const type = characters[idx][names[idx]].type;
      type_counts[type]--;
      characters_alt.splice(l_char_idx, 1);
      names_alt.splice(l_name_idx, 1);
      this.setState({
        characters: characters_alt,
        times,
        names: names_alt,
      });

      localStorage.setItem("characters", JSON.stringify(characters_alt));
      localStorage.setItem("times", JSON.stringify(times));
      localStorage.setItem("names", JSON.stringify(names_alt));
    }
  };

  handleReset = () => {
    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const len = characters.length;
    let times = new Array(len);
    for (let i in characters) {
      times[i] = 0;
    }
    this.setState({
      characters: [],
      times,
      names: [],
      type_counts: {
        citizen: 0,
        mafia: 0,
        independent: 0,
        "mid-independent": 0,
      },
    });
    localStorage.setItem("characters", JSON.stringify([]));
    localStorage.setItem("names", JSON.stringify([]));
    localStorage.setItem("times", JSON.stringify(times));
  };

  handleEnterNames = () => {
    this.setState({ show_2: true });
  };

  handleClose2 = () => {
    this.setState({ show_2: false });
  };

  handleAdd = (e) => {
    e.preventDefault();
    if (
      !this.state.players_check.includes(
        this.state.name.trim().toLowerCase()
      ) &&
      this.state.name !== "" &&
      this.state.players.length < this.state.number_of_players
    ) {
      const players = [...this.state.players, this.state.name];
      const players_check = [
        ...this.state.players_check,
        this.state.name.trim().toLowerCase(),
      ];
      this.setState({ players, players_check });
      localStorage.setItem("players", JSON.stringify(players));
      this.setState({ name: "" });
    }
  };

  handleShow2 = () => {
    this.setState({ show_2: true });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const changeFields = this.state;
    changeFields[name] = e.target.value;
    this.setState({ changeFields });
  };

  handleReset2 = (e) => {
    e.preventDefault();
    localStorage.setItem("players", JSON.stringify([]));
    this.setState({ players: [], players_check: [] });
  };

  getColor = (type) => {
    let color;
    if (type === "citizen") color = "#66DE93";
    if (type === "mafia") color = "#DA0037";
    if (type === "independent") color = "#5C527F";
    if (type === "mid-independent") color = "#F6D167";
    return color;
  };

  getCharactersButtonList = (type) => {
    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const { names } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const character_list = characters
      .filter((character) => {
        const index = characters.indexOf(character);
        const char = character[names[index]];
        return char.type === type;
      })
      .map((character) => {
        const index = characters.indexOf(character);
        const char = character[names[index]];
        return { char, index };
      });

    this.setState({ character_list });
  };

  handleBack = () => {
    this.setState({ character_list: undefined });
  };

  // EDIT SECTION
  handleEdit = (idx) => {
    this.setState({
      show_3: true,
      show_2: false,
      edit_field: { name: "", idx },
    });
    localStorage.setItem("edit_idx", idx);
  };

  handleEditClose = () => {
    this.setState({ show_3: false, show_2: true });
  };

  handleEditDone = (e) => {
    e.preventDefault();
    this.setState({ show_3: false });
    const { name } = { ...this.state.edit_field };
    const idx = localStorage.getItem("edit_idx");
    if (
      idx !== "undefined" &&
      name !== "" &&
      !this.state.players_check.includes(
        this.state.edit_field.name.trim().toLowerCase()
      )
    ) {
      let players = [...this.state.players];
      let players_check = [...this.state.players_check];
      players[idx] = name;
      players_check[idx] = name;
      localStorage.setItem("players", JSON.stringify(players));
      this.setState({
        edit_field: { name: "", idx: undefined },
        players,
        players_check,
      });
    }
    this.setState({ show_2: true });
  };

  handleEditChange = (e) => {
    const name = e.target.value;
    this.setState({ edit_field: { name } });
  };

  // Role Management
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
      this.state.characters.length !==
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

  handleShowCharacterInfo = (idx) => {
    const { characters, names } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;

    const info_char = characters[idx][names[idx]];
    this.setState({ show: false, show_4: true, info_char });
  };

  handleCloseCharacterInfo = () => {
    this.setState({ show: true, show_4: false })
  };

  render() {
    const {
      prompt_1,
      prompt_2,
      prompt_3,
      prompt_4,
      side_mafia,
      side_citizen,
      side_mid_indep,
      side_indep,
      buttons,
      placeholder_1,
      start_game,
    } = localStorage.getItem("language") === "uk" ? objects_en : objects_fa;

    const { type_counts, info_char } = { ...this.state };
    return (
      <div>
        <ButtonContainer>
          <SelectCharacters onClick={this.handleEnterNames}>
            {prompt_1}
          </SelectCharacters>
        </ButtonContainer>

        {/* Character Select Modal*/}
        <ModalContainer show={this.state.show} onHide={this.handleClose}>
          <div>
            <Modal.Header closeButton>
              <div>
                {this.state.number_of_players - this.state.characters.length <=
                0 ? (
                  <Title>{buttons.done}</Title>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Title>{prompt_2}</Title>
                    <Title style={{ marginLeft: "5px" }}>
                      {this.state.number_of_players -
                        this.state.characters.length}
                    </Title>
                  </div>
                )}
              </div>
            </Modal.Header>
            <CharactersDiv>
              {this.state.character_list ? (
                <>
                  <button onClick={this.handleBack} className="btn btn-danger">
                    <i className="fa fa-arrow-left"></i>
                  </button>
                  {this.state.character_list.map(({ char, index }) => {
                    const color = this.getColor(char.type);
                    return (
                      <CharacterButtonContainer key={`${char.type}-${index}`}>
                        <button
                          className="bg-purple-800 hover:bg-purple-900 bg-blend-darken transition duration-300"
                          onClick={() => this.handleShowCharacterInfo(index)}
                        >
                          <i className="fa fa-info"></i>
                        </button>
                        <button
                          id="char-btn"
                          key={index}
                          onClick={() => this.handleSelect(index)}
                          style={{ color, width: "100%" }}
                        >
                          <i className={char.icon} />
                          <>
                            {char.title}
                            {this.state.times[index] === 0
                              ? ""
                              : ` x${this.state.times[index]}`}
                          </>
                        </button>
                        <button
                          className="bg-purple-800 hover:bg-purple-900 bg-blend-darken transition duration-300"
                          onClick={() => this.handleDeSelect(index)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </CharacterButtonContainer>
                    );
                  })}
                  <button onClick={this.handleBack} className="btn btn-danger">
                    <i className="fa fa-arrow-left"></i>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => this.getCharactersButtonList("citizen")}
                    className="char-gp-btn"
                    style={{ color: this.getColor("citizen") }}
                  >
                    {side_citizen}
                    {type_counts["citizen"] && type_counts["citizen"] !== 0 ? (
                      <span>{type_counts["citizen"]}</span>
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    onClick={() => this.getCharactersButtonList("mafia")}
                    className="char-gp-btn"
                    style={{ color: this.getColor("mafia") }}
                  >
                    {side_mafia}
                    {type_counts["mafia"] && type_counts["mafia"] !== 0 ? (
                      <span>{type_counts["mafia"]}</span>
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    onClick={() =>
                      this.getCharactersButtonList("mid-independent")
                    }
                    className="char-gp-btn"
                    style={{ color: this.getColor("mid-independent") }}
                  >
                    {side_mid_indep}
                    {type_counts["mid-independent"] &&
                    type_counts["mid-independent"] !== 0 ? (
                      <span>{type_counts["mid-independent"]}</span>
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    onClick={() => this.getCharactersButtonList("independent")}
                    className="char-gp-btn"
                    style={{ color: this.getColor("independent") }}
                  >
                    {side_indep}
                    {type_counts["independent"] &&
                    type_counts["independent"] !== 0 ? (
                      <span>{type_counts["independent"]}</span>
                    ) : (
                      ""
                    )}
                  </button>
                </>
              )}
            </CharactersDiv>
            <Modal.Footer>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="danger"
                onClick={this.handleClose}
              >
                {buttons.close}
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="primary"
                onClick={this.handleReset}
              >
                {buttons.reset}
              </Button>
              <Button
                className="footer-btn"
                variant="success"
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                onClick={this.handleDone}
                disabled={
                  this.state.number_of_players - this.state.characters.length <=
                  0
                    ? ""
                    : "disabled"
                }
              >
                {buttons.done}
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>
        {/* Players Modal */}
        <ModalContainer show={this.state.show_2} onHide={this.handleClose2}>
          <div>
            <Modal.Header closeButton>
              {this.state.number_of_players - this.state.players.length <= 0 ? (
                <Title>{buttons.done}</Title>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Title>{prompt_3}</Title>
                  <Title style={{ marginLeft: "5px" }}>
                    {this.state.number_of_players - this.state.players.length}
                  </Title>
                </div>
              )}
            </Modal.Header>
            {this.state.players.map((player, index) => (
              <div key={index} className="player-name">
                <h4>{`${player}`}</h4>
                <h4>
                  <button onClick={() => this.handleEdit(index)}>
                    <i className="fa fa-edit text-purple-600"></i>
                  </button>
                </h4>
              </div>
            ))}
            <FormDiv onSubmit={this.handleAdd}>
              <Input
                type="text"
                className="block w-full text-white p-3 rounded mb-4"
                name="name"
                placeholder={placeholder_1}
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                maxLength={12}
              />
            </FormDiv>
            <Modal.Footer>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="danger"
                onClick={this.handleClose2}
              >
                {buttons.close}
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="primary"
                onClick={this.handleReset2}
              >
                {buttons.reset}
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="warning"
                type="submit"
                onClick={this.handleAdd}
              >
                {buttons.add}
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="success"
                onClick={this.handleShow}
                disabled={
                  this.state.number_of_players - this.state.players.length <= 0
                    ? ""
                    : "disabled"
                }
              >
                {buttons.done}
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>
        {/* Edit Player Modal */}
        <ModalContainer show={this.state.show_3} onHide={this.handleEditClose}>
          <div>
            <Modal.Header closeButton>
              <div>
                <Title>{prompt_4}</Title>
              </div>
            </Modal.Header>
            <form onSubmit={this.handleEditDone}>
              <Input
                type="text"
                className="block w-full text-white p-3 rounded mb-4"
                name="name"
                placeholder={placeholder_1}
                id="new_name"
                onChange={this.handleEditChange}
                maxLength={12}
              />
            </form>
            <Modal.Footer>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="danger"
                onClick={this.handleEditClose}
              >
                {buttons.close}
              </Button>
              <Button
                className="footer-btn"
                variant="success"
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                onClick={this.handleEditDone}
              >
                {buttons.done}
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>
        {/* Character Info Modal */}
        <ModalContainer
          show={this.state.show_4}
          onHide={this.handleCloseCharacterInfo}
        >
          <div>
            <ModalHeader closeButton>
            </ModalHeader>
            <CharacterDiv>
              <Card
                title={info_char && info_char.title}
                description={info_char && info_char.description}
                html={info_char && info_char.html}
                type={info_char && info_char.type}
                icon={info_char && info_char.icon}
              />
            </CharacterDiv>
            <Modal.Footer>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="danger"
                onClick={this.handleCloseCharacterInfo}
              >
                {buttons.close}
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>
        {this.state.players.length ===
          Number(localStorage.getItem("number_of_players")) &&
        this.state.characters.length ===
          Number(localStorage.getItem("number_of_players")) ? (
          <ButtonAlt onClick={this.shuffleRoles}>{start_game}</ButtonAlt>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

const ModalHeader = styled(Modal.Header)`
  h1 {
    text-align: center;
  }
  background: rgba(0, 0, 0, 0.2);
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

const Title = styled.h1`
  margin-top: 10px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  text-align: right;
`;

const CharacterButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const CharactersDiv = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  button {
    padding: 12px;
    margin-bottom: 3px;
  }

  .char-gp-btn {
    font-family: "Cairo", sans-serif;
    background: rgba(62, 44, 65, 0.7);
    transition: all 0.2s;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    &:hover {
      background: rgba(62, 44, 65, 0.4);
      border-radius: 10px;
    }
  }
`;

const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Cairo", sans-serif;
  text-align: center;
`;

const ModalContainer = styled(Modal)`
  border: 1px solid rgba(62, 44, 65, 0.7);
  div {
    background: rgba(38, 28, 44, 0.7);
    border-radius: 15px;
    border: none;
    #char-btn {
      font-family: "Cairo", sans-serif;
      font-weight: 600;
      font-size: 18px;
      background: rgba(62, 44, 65, 0.7);
      border-radius: 0;
      transition: all 0.2s;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &:hover {
        background: rgba(62, 44, 65, 0.4);
        border-radius: 10px;
      }
      &:active {
        background: rgba(62, 44, 65, 0.4);
      }
      &:focus {
        background: rgba(62, 44, 65, 0.4);
      }
      &:after {
        background: rgba(62, 44, 65, 0.4);
      }
    }

    .player-name {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
      background: rgb(38, 28, 44, 0.4);
      border: 1px solid rgba(62, 44, 65, 0.4);
    }

    button {
      color: #fdd2bf;
    }

    .footer-btn {
      color: white;
    }

    h4 {
      color: rgb(80, 203, 147);
      text-align: right;
      font-family: "Cairo", sans-serif;
      font-size: 25px;
    }
  }
`;

const SelectCharacters = styled.button`
  background: rgba(92, 82, 127, 0.6);
  transition: all 0.2s;
  color: rgb(80, 203, 147);
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background: rgba(92, 82, 127, 0.9);
  }
  margin-bottom: 10px;
  font-family: "Cairo", sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const FormDiv = styled.form`
  padding: 25px;
  input:focus {
    outline: none;
  }
`;

const ButtonAlt = styled.button`
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

export default withRouter(CharactersModal);
