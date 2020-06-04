import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const TagPresenter = ({ tagLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tagLists && tagLists.length > 0 && (
        <Section title="Tags List">
          <ul>
            {tagLists.map((tagLists) => (
              <Poster
                key={tagLists.id}
                id={tagLists.id}
                bgURL={tagLists.image_background}
                name={tagLists.name}
                released={tagLists.released}
                metacritic={tagLists.metacritic}
                infoURL="tag"
              />
            ))}
          </ul>
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TagPresenter.propTypes = {
  tagLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TagPresenter;
