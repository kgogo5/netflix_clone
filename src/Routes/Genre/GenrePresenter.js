import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const GenrePresenter = ({ genreLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {genreLists && genreLists.length > 0 && (
        <Section title="Genres List">
          <ul>
            {genreLists.map((genreLists) => (
              <Poster
                key={genreLists.id}
                id={genreLists.id}
                bgURL={genreLists.image_background}
                name={genreLists.name}
                released={genreLists.released}
                metacritic={genreLists.metacritic}
                infoURL={"genre"}
              />
            ))}
          </ul>
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

GenrePresenter.propTypes = {
  genreLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GenrePresenter;
