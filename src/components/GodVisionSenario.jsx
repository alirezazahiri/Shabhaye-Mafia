import React, { Component } from "react";
import Container from "./common/Container";
import Card from "./common/Card";
import styled from "styled-components";
import DayNightRadio from "./common/DayNightRadio";

class GodVisionSenario extends Component {
  state = {
    characters: JSON.parse(localStorage.getItem("characters")),
    players: JSON.parse(localStorage.getItem("players")),
    names: JSON.parse(localStorage.getItem("names")),
    n_p: JSON.parse(localStorage.getItem("n_p")),
    fields: {
      player: "",
    },
    cheked: JSON.parse(localStorage.getItem("checked")),
  };

  handleChange = (e) => {
    const name = e.target.name;
    const changeFields = this.state.fields;
    changeFields[name] = e.target.value;
    this.setState({ fields: changeFields });
  };

  render() {
    if (
      !localStorage.getItem("number_of_players") ||
      JSON.parse(localStorage.getItem("characters")).length !==
        Number(localStorage.getItem("number_of_players"))
    ) {
      this.props.history.push("/senario");
      return <></>;
    }
    const { characters, players, names, n_p } = { ...this.state };
    return (
      <Container>
        <Input
          type="text"
          className="block w-full text-white p-3 rounded mb-4"
          name="player"
          placeholder="... نقش یا بازیکن مورد نظر را جستجو کنید"
          id="player"
          onChange={this.handleChange}
        />
        <Title>اتاق گرداننده</Title>
        <DayNightRadio />
        {players
          .filter((player) => {
            const char = characters[names.indexOf(n_p[player])][n_p[player]];
            return (
              player
                .trim()
                .toLowerCase()
                .includes(this.state.fields.player.trim().toLowerCase()) ||
              char.title
                .trim()
                .toLowerCase()
                .includes(this.state.fields.player.trim().toLowerCase())
            );
          })
          .map((player) => {
            const item = characters[names.indexOf(n_p[player])][n_p[player]];
            return (
              <Card
                key={player}
                p_name={player}
                title={item.title}
                description={item.description}
                type={item.type}
                icon={item.icon}
                have_status={true}
              />
            );
          })}
      </Container>
    );
  }
}

const Title = styled.h1`
  margin-top: 10px;
  margin-left: 30px;
  color: rgba(92, 82, 127, 2);
  font-family: "Lato", sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  font-family: "Cairo", sans-serif;
`;

const Input = styled.input`
  margin-top: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Cairo", sans-serif;
  text-align: center;
`;

export default GodVisionSenario;
