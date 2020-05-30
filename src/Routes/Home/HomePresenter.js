import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const HomePresenter = ({
  gameLists,
  platformLists,
  genreLists,
  tagLists,
  storeLists,
  publisherLists,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
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

      <Container>
        {platformLists && platformLists.length > 0 && (
          <Section title="Platforms List">
            {platformLists
              .splice(0, 5)
              .map((platformLists) => platformLists.name)}
          </Section>
        )}
      </Container>

      <Container>
        {genreLists && genreLists.length > 0 && (
          <Section title="Genres List">
            {genreLists.splice(0, 5).map((genreLists) => genreLists.name)}
          </Section>
        )}
      </Container>

      <Container>
        {tagLists && tagLists.length > 0 && (
          <Section title="Tags List">
            {tagLists.splice(0, 5).map((tagLists) => tagLists.name)}
          </Section>
        )}
      </Container>

      <Container>
        {storeLists && storeLists.length > 0 && (
          <Section title="Stores List">
            {storeLists.splice(0, 5).map((storeLists) => storeLists.name)}
          </Section>
        )}
      </Container>

      <Container>
        {publisherLists && publisherLists.length > 0 && (
          <Section title="Publishers List">
            {publisherLists
              .splice(0, 5)
              .map((publisherLists) => publisherLists.name)}
          </Section>
        )}
      </Container>
    </>
  );

HomePresenter.propTypes = {
  gameLists: PropTypes.array,
  platformLists: PropTypes.array,
  genreLists: PropTypes.array,
  tagLists: PropTypes.array,
  storeLists: PropTypes.array,
  publisherLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
