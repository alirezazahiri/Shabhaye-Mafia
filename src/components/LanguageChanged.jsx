import React, { Component } from "react";
import Container from "./common/Container";
import styled from "styled-components";

// translate
import { objects_fa } from "./translations/LanguageChanged/LanguageChanged-fa";
import { objects_en } from "./translations/LanguageChanged/LanguageChanged-en";

class LanguageChanged extends Component {
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
