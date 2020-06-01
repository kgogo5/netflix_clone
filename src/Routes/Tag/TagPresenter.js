import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

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
              <li key={tagLists.id}>
                <a href="#">
                  <span className="imgBox">
                    <img
                      src={tagLists.image_background}
                      alt={`${tagLists.name} images`}
                    />
                  </span>
                  <strong>{tagLists.name}</strong>
                </a>
              </li>
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
