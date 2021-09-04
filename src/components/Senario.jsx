import React, { Component } from "react";
import Card from "./common/Card";
import Container from "./common/Container";

import { chars_fa } from "../utils/chars-fa";
import { chars_en } from "../utils/chars-en";

import styled from "styled-components";

// translations
import { objects_fa } from './translations/Senario/senario-fa';
import { objects_en } from './translations/Senario/senario-en';

class Senario extends Component {
  state = {
    fields: {
      role: "",
    },
    type: "all",
  };

  getCharacter = (idx) => {
    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    const { names } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    return characters[idx][names[idx]];
  };

  handleChange = (e) => {
    const name = e.target.name;
    const changeFields = this.state.fields;
    changeFields[name] = e.target.value;
    this.setState({ fields: changeFields });
  };

  handleChangeType = (e) => {
    const type = e.target.name;
    this.setState({ type });
  };

  render() {
    const {
      placeholder_1,
      title,
      side_mafia,
      side_citizen,
      side_mid_indep,
      side_indep,
      side_all,
    } = localStorage.getItem("language") === "uk" ? objects_en : objects_fa;
    const { characters } =
      localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
    return (
      <Container>
        <Input
          type="text"
          className="block w-full text-white p-3 rounded mb-4"
          name="role"
          placeholder={placeholder_1}
          id="role"
          onChange={this.handleChange}
        />
        <Title>{title}</Title>
        <FilterContainer>
          <button id="mafia" onClick={this.handleChangeType} name="mafia">
            {side_mafia}
          </button>
          <button id="citizen" onClick={this.handleChangeType} name="citizen">
            {side_citizen}
          </button>
          <button id="all" onClick={this.handleChangeType} name="all">
            {side_all}
          </button>
          <button
            id="mid-independent"
            onClick={this.handleChangeType}
            name="mid-independent"
          >
            {side_mid_indep}
          </button>
          <button
            id="independent"
            onClick={this.handleChangeType}
            name="independent"
          >
            {side_indep}
          </button>
        </FilterContainer>
        {characters
          .filter((character) => {
            const { characters } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const { names } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const idx = characters.indexOf(character);
            return character[names[idx]].title
              .trim()
              .toLowerCase()
              .includes(this.state.fields.role.trim().toLowerCase());
          })
          .filter((character) => {
            const { characters } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const { names } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const idx = characters.indexOf(character);
            const { type } = { ...this.state };
            return type === "all" ? true : character[names[idx]].type === type;
          })
          .map((character) => {
            const { characters } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const { names } =
              localStorage.getItem("language") === "uk" ? chars_en : chars_fa;
            const idx = characters.indexOf(character);
            const char = this.getCharacter(idx);
            return (
              <Card
                key={names[idx]}
                title={char.title}
                description={char.description}
                icon={char.icon}
                type={char.type}
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

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  button {
    border-radius: 5px;
    font-family: "Cairo", sans-serif;
    transition: all 0.3s;
    padding: 4px;
    font-size: 18px;
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
    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
  #mafia {
    color: #da0037;
  }

  #citizen {
    color: #66de93;
  }

  #mid-independent {
    color: #f6d167;
  }

  #independent {
    color: #5c527f;
  }

  #all {
    color: white;
  }
`;

export default Senario;
