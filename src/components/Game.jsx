import React, { Component } from "react";
import CharactersModal from "./CharactersModal";
import Container from "./common/Container";
import styled from "styled-components";

class Game extends Component {
  render() {
    if (!localStorage.getItem("number_of_players")) {
      this.props.history.push("/");
      return <></>;
    }

    return (
      <Container>
        <Content>
          <Title>آماده سازی بازی</Title>
          <Description>
            .در این بخش شما میتوانید کاراکتر هایی که آنها را در بازی میخواهید
            داشته باشید, انتخاب کنید
          </Description>
        </Content>
        <CharactersModal />
      </Container>
    );
  }
}

const Title = styled.h1`
  margin-top: 10px;
  color: rgba(92, 82, 127, 2);
  font-family: "Cairo", sans-serif;
  font-size: 45px;
  font-weight: 900;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-family: "Cairo", sans-serif;
  color: #50cb93;
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
  margin-top: 25px;
`;

const Content = styled.div`
  margin-top: 200px;
`;

export default Game;
