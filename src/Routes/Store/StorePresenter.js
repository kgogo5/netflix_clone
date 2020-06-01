import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div``;

const StorePresenter = ({ storeLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {storeLists && storeLists.length > 0 && (
        <Section title="Stores List">
          <ul>
            {storeLists.map((storeLists) => (
              <li key={storeLists.id}>
                <a href="#">
                  <span className="imgBox">
                    <img
                      src={storeLists.image_background}
                      alt={`${storeLists.name} images`}
                    />
                  </span>
                  <strong>{storeLists.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

StorePresenter.propTypes = {
  storeLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default StorePresenter;
