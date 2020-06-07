import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";

const Image = styled.img`
  max-width: 120px;
  margin-right: 25px;
  vertical-align: top;

  @media (max-width: 620px) {
    max-width: 160px;
    margin-right: 0;
  }
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);

  & .logo {
    @media (max-width: 620px) {
      display: block;
      position: absolute;
      top: 20px;
      left: 0;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 620px) {
    padding-top: 50px;
    height: 100px;
  }
`;

const List = styled.ul`
  display: flex;
  height: 100%;

  @media (max-width: 620px) {
    overflow: auto;
  }
`;

const Item = styled.li`
  padding: 0 10px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#E50914" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Slink = styled(Link)`
  display: flex;
  font-size: 14px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/" className="logo" role="button">
      <Image src={Logo} alt={`STEAMFLIX Logo`} />
    </Link>
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Home</Slink>
      </Item>
      <Item current={pathname === "/game"}>
        <Slink to="/game">Game</Slink>
      </Item>
      <Item current={pathname === "/store"}>
        <Slink to="/store">Store</Slink>
      </Item>
      <Item current={pathname === "/platform"}>
        <Slink to="/platform">Platform</Slink>
      </Item>
      <Item current={pathname === "/genre"}>
        <Slink to="/genre">Genre</Slink>
      </Item>
      <Item current={pathname === "/tag"}>
        <Slink to="/tag">Tag</Slink>
      </Item>
      <Item current={pathname === "/publisher"}>
        <Slink to="/publisher">Publisher</Slink>
      </Item>
    </List>
  </Header>
));
