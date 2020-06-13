import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 30px;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 1042px) {
    display: block;
    justify-content: unset;
    text-align: center;
  }
  @media (max-width: 768px) {
    position: static;
  }
`;

const Image = styled.img``;

const Slink = styled(Link)`
  display: inline-block;
  color: #fff;
  line-height: 1.6;

  & + & {
    margin-left: 10px;
  }
  &:hover,
  &:focus {
    color: #9e9e9e;
  }
`;

const Inner = styled.section`
  width: 33.3333%;
  flex-basis: auto;
  padding: 0 30px;
  color: #fff;

  & + & {
    border-left: 1px solid #212121;

    @media (max-width: 1042px) {
      border-top: 1px solid #212121;
      border-left: 0;
    }
  }

  p {
    margin-top: 12px;
    line-height: 1.4;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    ${Slink} {
      width: 180px;

      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }

  ul {
    margin-top: 8px;
  }

  nav {
    margin-top: 8px;
  }

  .snsLink {
    i {
      font-size: 20px;
      &:hover,
      &:focus {
        color: #9e9e9e;
      }
    }
  }

  @media (max-width: 1042px) {
    margin: 0 auto;
    width: 60%;
    padding: 30px 0;
  }
`;

export default withRouter(() => (
  <Footer>
    <>
      <Inner>
        <h2>
          <Slink to="/">
            <Image src={require("images/logo.png")} alt={`STEAMFLIX Logo`} />
          </Slink>
        </h2>
        <p>
          It is made of React, ES6, AJAX, Typescript, React Hook, RAWG Video
          Games Database API, styled component, React Router, React Context,
          Axios.
        </p>
      </Inner>
      <Inner>
        <h2>MENU</h2>
        <nav>
          <Slink to="/">Home</Slink>
          <Slink to="/game">Game</Slink>
          <Slink to="/store">Store</Slink>
          <Slink to="/platform">Platform</Slink>
          <Slink to="/genre">Genre</Slink>
          <Slink to="/tag">Tag</Slink>
          <Slink to="/publisher">Publisher</Slink>
        </nav>
      </Inner>
      <Inner>
        <h2>SOCIAL</h2>
        <ul>
          <li>
            <a
              className="snsLink"
              href="https://www.instagram.com/seungtaekim0510/"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </Inner>
    </>
  </Footer>
));
