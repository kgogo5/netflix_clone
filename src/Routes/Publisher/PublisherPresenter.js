import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

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
              <li key={publisherLists.id}>
                <a href="#">
                  <span className="imgBox">
                    <img
                      src={publisherLists.image_background}
                      alt={`${publisherLists.name} images`}
                    />
                  </span>
                  <strong>{publisherLists.name}</strong>
                </a>
              </li>
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
