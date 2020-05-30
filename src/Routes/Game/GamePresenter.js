import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const GamePresenter = ({ gameLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {gameLists && gameLists.length > 0 && (
        <Section title="Games List">
          <ul>
            {gameLists.map((gameLists) => (
              <li kye={gameLists.id}>
                <a href="#">
                  <span className="imgBox">
                    <img src={gameLists.background_image} alt={gameLists} />
                  </span>
                  <strong>{gameLists.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </Container>
  );

GamePresenter.propTypes = {
  gameLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GamePresenter;
