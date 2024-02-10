import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  max-width: 120px;
  margin-right: 25px;
  vertical-align: top;

  @media (max-width: 620px) {
    max-width: 160px;
    margin-right: 0;
  }
`;

const Logo = styled.h1`
  @media (max-width: 620px) {
    position: absolute;
    top: 20px;
    left: 0;
    text-align: center;
    width: 100%;
  }
`;

const Wrap = styled.header`
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

  @media (max-width: 620px) {
    padding-top: 50px;
    height: 100px;
  }
`;

const List = styled.nav`
  height: 100%;
  ul {
    display: flex;
    height: 100%;
  }

  @media (max-width: 620px) {
    overflow: auto;
  }
`;

const Item = styled.li`
  padding: 0 10px;
  border-bottom: 5px solid transparent;
  transition: border-bottom 0.5s ease-in-out;

  &.active {
    border-color: #e50914;
  }
`;

const Slink = styled(Link)`
  display: flex;
  font-size: 14px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Wrap>
      <Logo>
        <Link to="/" className="logo" role="button">
          <Image src="images/logo.png" alt="STEAMFLIX Logo" />
        </Link>
      </Logo>
      <List>
        <ul>
          <Item className={pathname === "/" ? "active" : ""}>
            <Slink to="/">Home</Slink>
          </Item>
          <Item className={pathname.includes("/game") ? "active" : ""}>
            <Slink to="/game">Game</Slink>
          </Item>
          <Item className={pathname.includes("/store") ? "active" : ""}>
            <Slink to="/store">Store</Slink>
          </Item>
          <Item className={pathname.includes("/platform") ? "active" : ""}>
            <Slink to="/platform">Platform</Slink>
          </Item>
          <Item className={pathname.includes("/genre") ? "active" : ""}>
            <Slink to="/genre">Genre</Slink>
          </Item>
          <Item className={pathname.includes("/publisher") ? "active" : ""}>
            <Slink to="/publisher">Publisher</Slink>
          </Item>
        </ul>
      </List>
    </Wrap>
  );
}
