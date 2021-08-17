import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { Component } from "react";
import characters, { names } from "../utils/characters";
import styled from "styled-components";

class CharactersModal extends Component {
  state = {
    show: false,
    show_2: false,
    number_of_players: localStorage.getItem("number_of_players"),
    selected: 0,
    times: JSON.parse(localStorage.getItem("times")),
    characters: JSON.parse(localStorage.getItem("characters")),
    players: JSON.parse(localStorage.getItem("players")),
    players_check: JSON.parse(localStorage.getItem("players")),
    names: JSON.parse(localStorage.getItem("names")),
    name: "",
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleDone = () => {
    this.setState({ show: false });
    window.location.reload();
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
    if (
      times[idx] < characters[idx][names[idx]].max &&
      this.sum(times) < this.state.number_of_players
    ) {
      times[idx]++;
      const characters_alt = [...this.state.characters, characters[idx]];
      names_alt.push(names[idx]);
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
    const len = characters.length;
    let times = new Array(len);
    for (let i in characters) {
      times[i] = 0;
    }
    this.setState({ characters: [], times, names: [] });
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

  render() {
    return (
      <div>
        <ButtonContainer>
          <SelectCharacters onClick={this.handleEnterNames}>
            نام ها را وارد کنید
          </SelectCharacters>
        </ButtonContainer>

        <ModalContainer show={this.state.show} onHide={this.handleClose}>
          <div>
            <Modal.Header closeButton>
              <div>
                {this.state.number_of_players - this.state.characters.length <=
                0 ? (
                  <Title>انجام شد</Title>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Title>کاراکتر را انتخاب کنید</Title>
                    <Title style={{ marginLeft: "5px" }}>
                      {this.state.number_of_players -
                        this.state.characters.length}
                    </Title>
                  </div>
                )}
              </div>
            </Modal.Header>
            <CharactersDiv>
              {characters.map((character, index) => {
                return (
                  <button
                    id="char-btn"
                    key={names[index]}
                    onClick={() => this.handleSelect(index)}
                  >
                    <i className={characters[index][names[index]].icon} />
                    <>
                      {characters[index][names[index]].title}
                      {this.state.times[index] === 0
                        ? ""
                        : ` x${this.state.times[index]}`}
                    </>
                  </button>
                );
              })}
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
                بستن
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="primary"
                onClick={this.handleReset}
              >
                دوباره
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
                انجام شد
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>

        <ModalContainer show={this.state.show_2} onHide={this.handleClose2}>
          <div>
            <Modal.Header closeButton>
              {this.state.number_of_players - this.state.players.length <= 0 ? (
                <Title>انجام شد</Title>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Title>نام را وارد کنید</Title>
                  <Title style={{ marginLeft: "5px" }}>
                    {this.state.number_of_players - this.state.players.length}
                  </Title>
                </div>
              )}
            </Modal.Header>
            {this.state.players.map((player, index) => (
              <h4 key={index}>
                {`${player}`} <i className="fa fa-user"></i>
              </h4>
            ))}
            <FormDiv onSubmit={this.handleAdd}>
              <Input
                type="text"
                className="block w-full text-white p-3 rounded mb-4"
                name="name"
                placeholder="نام را وارد کنید"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                maxLength={15}
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
                بستن
              </Button>
              <Button
                style={{
                  fontFamily: `Cairo, sans-serif`,
                }}
                className="footer-btn"
                variant="primary"
                onClick={this.handleReset2}
              >
                دوباره
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
                اضافه کن
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
                انجام شد
              </Button>
            </Modal.Footer>
          </div>
        </ModalContainer>
      </div>
    );
  }
}

const Title = styled.h1`
  margin-top: 10px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  text-align: right;
`;

const CharactersDiv = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  button {
    padding: 12px;
    margin-bottom: 3px;
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
    button {
      color: #9e7777;
    }
    #char-btn {
      font-family: "Cairo", sans-serif;
      color: #9e7777;
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
    }

    .footer-btn {
      color: white;
    }

    h4 {
      color: rgb(80, 203, 147);
      margin-right: 12px;
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
export default CharactersModal;
