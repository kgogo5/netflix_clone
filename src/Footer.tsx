import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 30px;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 1080px) {
    display: block;
    justify-content: unset;
    text-align: center;
  }
  @media (max-width: 768px) {
    position: static;
  }
`;

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

    @media (max-width: 1080px) {
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

  @media (max-width: 1080px) {
    margin: 0 auto;
    width: 60%;
    padding: 30px 0;
  }
`;

const SocialList = styled.ul`
  margin-top: 8px;
  display: flex;
  gap: 8px;

  & img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1080px) {
    margin-top: 18px;
    justify-content: center;
    gap: 16px;

    & img {
      width: 36px;
      height: 36px;
    }
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <>
        <Inner>
          <h2>
            <Slink to="/">
              <img src="images/logo.png" alt="STEAMFLIX Logo" />
            </Slink>
          </h2>
          <p>
            It is made of React v18 and Vite, ES6, Yarn, TanStack Query V5,
            Axios, RAWG Video Games Database API, styled component, React
            Router, react helmet, gh-pages, styled reset, Axios.
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
            <Slink to="/publisher">Publisher</Slink>
          </nav>
        </Inner>
        <Inner>
          <h2>SOCIAL</h2>
          <SocialList>
            <li>
              <a
                className="snsLink"
                href="https://www.instagram.com/seungtaekim0510/"
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                <img src="images/instagram_icon.svg" alt="instagram icon" />
              </a>
            </li>
            <li>
              <a
                className="snsLink"
                href="https://github.com/kgogo5"
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                <img src="images/github_icon.svg" alt="github icon" />
              </a>
            </li>
          </SocialList>
        </Inner>
      </>
    </Wrap>
  );
}
