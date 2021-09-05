import React, { Component } from "react";
import Container from "./common/Container";
import styled from "styled-components";

// characters
import { chars_fa } from "../utils/chars-fa";
import { chars_en } from "../utils/chars-en";

// translate
import { objects_fa } from "./translations/LanguageChanged/LanguageChanged-fa";
import { objects_en } from "./translations/LanguageChanged/LanguageChanged-en";

class LanguageChanged extends Component {
  componentDidMount() {
    let names = chars_en.names;
    let roles_in_game = JSON.parse(localStorage.getItem("names"));
    let indexes = [];
    for (let i in roles_in_game) {
      indexes.push(names.indexOf(roles_in_game[i]));
    }

    const current_language = localStorage.getItem("language");

    let new_characters = [];

    let { characters } = current_language === "uk" ? chars_en : chars_fa;

    for (let i in indexes) {
      i = Number(i);
      const char = characters[indexes[i]];
      new_characters.push(char);
    }
    localStorage.setItem("characters", JSON.stringify(new_characters));
  }

  render() {
    const { message, back_btn } =
      localStorage.getItem("language") === "uk" ? objects_en : objects_fa;
    return (
      <Container>
        <Content>
          <Description>{message}</Description>
          <button
            onClick={() => this.props.history.push("/")}
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {back_btn}
          </button>
        </Content>
      </Container>
    );
  }
}

const Description = styled.h2`
  font-family: "Cairo", sans-serif;
  font-weight: 700;
  background-image: -webkit-gradient(
    linear,
    40% 100%,
    75% 50%,
    from(#da0037),
    to(#66de93)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 100px;
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.5);

  margin-top: 125px;
  padding: 100px 0;

  border-radius: 12px;

  button {
    color: #da0037;
    transition: color 0.5s;
    &:hover {
      color: #66de93;
    }
  }
`;

export default LanguageChanged;
