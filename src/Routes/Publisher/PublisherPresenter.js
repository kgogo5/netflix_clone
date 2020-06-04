import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const PublisherPresenter = ({ publisherLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {publisherLists && publisherLists.length > 0 && (
        <Section title="Publishers List">
          <ul>
            {publisherLists.map((publisherLists) => (
              <Poster
                key={publisherLists.id}
                id={publisherLists.id}
                bgURL={publisherLists.image_background}
                name={publisherLists.name}
                released={publisherLists.released}
                metacritic={publisherLists.metacritic}
                infoURL={"publisher"}
              />
            ))}
          </ul>
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

PublisherPresenter.propTypes = {
  publisherLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PublisherPresenter;
