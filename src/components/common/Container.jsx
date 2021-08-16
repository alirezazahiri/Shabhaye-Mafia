import styled from "styled-components";

const Container = styled.main`
  position: relative;
  height: 92.35vh;
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  text-align: center;
  &:after {
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
      url("/img/home-bg.jpg") center center / cover no-repeat fixed;
    content: "";
    position: fixed;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Container;
