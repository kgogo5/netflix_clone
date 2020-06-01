import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div``;

const PlatformPresenter = ({ platformLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {platformLists && platformLists.length > 0 && (
        <Section title="Platforms List">
          <ul>
            {platformLists.map((platformLists) => (
              <li key={platformLists.id}>
                <a href="#">
                  <span className="imgBox">
                    <img
                      src={platformLists.image_background}
                      alt={`${platformLists.name} images`}
                    />
                  </span>
                  <strong>{platformLists.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

PlatformPresenter.propTypes = {
  platformLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PlatformPresenter;
