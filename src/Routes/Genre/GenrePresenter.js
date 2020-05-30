import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const GenrePresenter = ({ genreLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {genreLists && genreLists.length > 0 && (
        <Section title="Genres List">
          {genreLists.map((genreLists) => genreLists.name)}
        </Section>
      )}
    </Container>
  );

GenrePresenter.propTypes = {
  genreLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default GenrePresenter;
