import React, { Component } from "react";
import Card from "./common/Card";
import Container from "./common/Container";
import characters, {names} from "../utils/characters";
import styled from 'styled-components'

class Senario extends Component {
  state = {};

  getCharacter = (idx) => {
      return characters[idx][names[idx]]
  }
  render() {
    return (
      <Container>
        <Title>سناریو ها</Title>
        {characters.map((character, index) => {
            const char = this.getCharacter(index)
          return (
            <Card
              key={names[index]}
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
  font-family: 'Cairo', sans-serif;
`;

export default Senario;
