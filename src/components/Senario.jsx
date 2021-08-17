import React, { Component } from "react";
import Card from "./common/Card";
import Container from "./common/Container";
import characters, { names } from "../utils/characters";
import styled from "styled-components";

class Senario extends Component {
  state = {
    fields: {
      role: "",
    },
  };

  getCharacter = (idx) => {
    return characters[idx][names[idx]];
  };

  handleChange = (e) => {
    const name = e.target.name;
    const changeFields = this.state.fields;
    changeFields[name] = e.target.value;
    this.setState({ fields: changeFields });
  };

  render() {
    return (
      <Container>
        <Input
          type="text"
          className="block w-full text-white p-3 rounded mb-4"
          name="role"
          placeholder="... نقش مورد نظر را جستجو کنید"
          id="role"
          onChange={this.handleChange}
        />
        <Title>سناریو ها</Title>
        {characters
          .filter((character) => {
            const idx = characters.indexOf(character)
            return character[names[idx]].title
              .trim()
              .toLowerCase()
              .includes(this.state.fields.role.trim().toLowerCase());
          })
          .map((character) => {
            const idx = characters.indexOf(character)
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

export default Senario;
