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
    type: "all",
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

  handleChangeType = (e) => {
    const type = e.target.name;
    this.setState({ type });
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
        <FilterContainer>
          <button id="mafia" onClick={this.handleChangeType} name="mafia">
            گروه مافیا
          </button>
          <button id="citizen" onClick={this.handleChangeType} name="citizen">
            گروه شهروند
          </button>
          <button id="all" onClick={this.handleChangeType} name="all">
            همه نقش ها
          </button>
          <button
            id="mid-independent"
            onClick={this.handleChangeType}
            name="mid-independent"
          >
            گروه نیمه مستقل
          </button>
          <button
            id="independent"
            onClick={this.handleChangeType}
            name="independent"
          >
            گروه مستقل
          </button>
        </FilterContainer>
        {characters
          .filter((character) => {
            const idx = characters.indexOf(character);
            return character[names[idx]].title
              .trim()
              .toLowerCase()
              .includes(this.state.fields.role.trim().toLowerCase());
          })
          .filter((character) => {
            const idx = characters.indexOf(character);
            const { type } = { ...this.state };
            return type === "all" ? true : character[names[idx]].type === type;
          })
          .map((character) => {
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
