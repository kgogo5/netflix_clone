import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const GamePresenter = ({ gameLists, error, loading }) => (
  <>
    <Helmet>
      <title>STEAMFLIX | Games</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {gameLists && gameLists.length > 0 && (
          <Section title="Games List">
            <ul>
              {gameLists.map((gameLists) => (
                <Poster
                  key={gameLists.id}
                  id={gameLists.id}
                  bgURL={gameLists.background_image}
                  name={gameLists.name}
                  released={gameLists.released}
                  metacritic={gameLists.metacritic}
                  infoURL={"game"}
                />
              ))}
            </ul>
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

GamePresenter.propTypes = {
  gameLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GamePresenter;
