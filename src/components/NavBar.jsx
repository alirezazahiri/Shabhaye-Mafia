import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Navbar className="bg-black" variant="dark" expand="lg" sticky="top">
      <Container>
        <NavToggle aria-controls="basic-navbar-nav" />
        <Title to="/">مافیا</Title>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavContainer className="me-auto">
            <NavBarItem to="/game">آماده سازی بازی</NavBarItem>
            <NavBarItem to="/game-control">بازیکن ها</NavBarItem>
            <NavBarItem to="/god-vision">اتاق راوی</NavBarItem>
            <NavBarItem to="/senario">سناریو ها</NavBarItem>
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

export default NavBar;
