import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const TagPresenter = ({ tagLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tagLists && tagLists.length > 0 && (
        <Section title="Tags List">
          {tagLists.map((tagLists) => tagLists.name)}
        </Section>
      )}
    </Container>
  );

TagPresenter.propTypes = {
  tagLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TagPresenter;
