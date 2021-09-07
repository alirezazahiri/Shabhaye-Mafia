import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation, withRouter } from "react-router-dom";

// translate
import { objects_en } from "./translations/Navbar/NavBar-en";
import { objects_fa } from "./translations/Navbar/NavBar-fa";

const NavBar = (props) => {
  const [lang, setLang] = useState(null);

  const toggleLang = () => {
    localStorage.setItem("prevLang", lang);
    const current = localStorage.getItem("language")
      ? localStorage.getItem("language")
      : "iran";
    if (current === "iran") {
      localStorage.setItem("language", "uk");
      setLang("uk");
    } else {
      localStorage.setItem("language", "iran");
      setLang("iran");
    }
    props.history.push("/language-changed");
  };
  const { title, senarios, players, gods_room, game_setup } =
    localStorage.getItem("language") === "uk" ? objects_en : objects_fa;
  return (
    <Navbar className="bg-black" variant="dark" expand="lg" sticky="top">
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <NavToggle aria-controls="basic-navbar-nav" />
        <Title to="/">{title}</Title>
        <button onClick={toggleLang}>
          <img
            src={
              "./img/" +
              `${
                localStorage.getItem("language")
                  ? localStorage.getItem("language")
                  : "iran"
              }` +
              "-flag-round-icon-64.png"
            }
            alt="fa"
            style={{ width: "32px", height: "32px" }}
          />
        </button>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavContainer className="me-auto">
            {useLocation().pathname !== "/language-changed" ? (
              <NavBarItem to="/game">{game_setup}</NavBarItem>
            ) : (
              ""
            )}
            {useLocation().pathname !== "/language-changed" ? (
              <NavBarItem to="/game-control">{players}</NavBarItem>
            ) : (
              ""
            )}
            {useLocation().pathname === "/language-changed" ? (
              ""
            ) : (
              <NavBarItem to="/god-vision">{gods_room}</NavBarItem>
            )}
            {useLocation().pathname !== "/language-changed" ? (
              <NavBarItem to="/senario">{senarios}</NavBarItem>
            ) : (
              ""
            )}
          </NavContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarItem = styled(NavLink)`
  color: #f9f9f9;
  text-decoration: none;
  font-family: "Cairo", "sans-serif";
  &:hover {
    text-decoration: none;
    color: rgba(249, 249, 249, 0.6);
  }
  margin-top: 10px;
  margin-right: 16px;
  margin-bottom: 10px;
  color: #6b7aa1;
`;

const NavContainer = styled(Nav)`
  margin-left: 60%;
  text-align: right;
`;

const Title = styled(Link)`
  background-image: -webkit-gradient(
    linear,
    40% 100%,
    75% 50%,
    from(#da0037),
    to(#66de93)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Kufam", sans-serif;
  font-size: 28px;
  font-weight: 900;
  text-decoration: none;
`;

const NavToggle = styled(Navbar.Toggle)`
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    background: rgba(0, 0, 0, 0.5);
  }
  &:after {
    outline: none;
  }
`;

export default withRouter(NavBar);
