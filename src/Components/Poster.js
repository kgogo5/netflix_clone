import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Img = styled.div`
  position: relative;
  .img_link {
    position: relative;
    display: block;
    width: 100%;
    min-height: 132px;
    overflow: hidden;

    @media (max-width: 1042px) {
      min-height: 198px;
    }
    @media (max-width: 768px) {
      min-height: unset;
    }
  }

  img {
    display: inline-block;
    width: 100%;
    min-height: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25%;
    margin-left: -50%;
    transition: 0.15s;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      top: 0;
      left: 0;
      margin: 0;
      position: static;
    }
  }
`;

const Title = styled.strong`
  display: block;
  padding: 10px;
  text-align: center;

  & > a:hover,
  & > a:focus {
    color: #9e9e9e;
  }
`;

const Info = styled.span`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .score {
    margin-left: 4px;
    display: inline-block;
    color: #fff;
    padding: 0 4px;
    border-radius: 2px;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    background-color: ${(props) => {
      if (props.color) {
        if (props.color >= 90) {
          return `#2ecc71`;
        } else if (props.color < 90 && props.color >= 80) {
          return `#f1c40f`;
        } else if (props.color <= 80) {
          return `#e67e22`;
        }
      }
    }};
  }
`;

const ListId = styled.li`
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  }
  .link_type {
    position: absolute;
    padding: 3px 5px;
    top: 3px;
    right: 3px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Poster = ({ id, bgURL, name, released, metacritic, infoURL, domain }) => (
  <Container>
    <ul>
      <ListId key={id}>
        <Img>
          <Link to={`/${infoURL}/${id}`} className="img_link" role="button">
            <img src={bgURL} alt={`${name} images`} />
          </Link>
          <Title>
            <Link to={`/${infoURL}/${id}`} role="button">
              {name.length > 30 ? `${name.substring(0, 30)}...` : name}
            </Link>
            {metacritic ? (
              <Info className="metacritic" color={metacritic}>
                <span>MetaScore : </span>
                <span className="score">
                  {metacritic === undefined ? `` : `${metacritic}`}
                </span>
              </Info>
            ) : null}
            {released ? (
              <Info>{released === undefined ? `` : ` ${released}`}</Info>
            ) : null}
            {domain ? (
              <a
                href={`https://${domain}`}
                className="link_type"
                role="button"
                rel="noopener noreferrer"
                target="_blank"
              >
                {domain === undefined ? `` : `Link`}
              </a>
            ) : null}
          </Title>
        </Img>
      </ListId>
    </ul>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  bgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.string,
  metacritic: PropTypes.number,
  infoURL: PropTypes.string,
  domain: PropTypes.string,
};

export default Poster;
