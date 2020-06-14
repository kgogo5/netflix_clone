import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const PlatformPresenter = ({ platformLists, error, loading }) => (
  <>
    <Helmet>
      <title>STEAMFLIX | Platform</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {platformLists && platformLists.length > 0 && (
          <Section title="Platforms List">
            <ul>
              {platformLists.map((platformLists) => (
                <Poster
                  key={platformLists.id}
                  id={platformLists.id}
                  bgURL={platformLists.image_background}
                  name={platformLists.name}
                  released={platformLists.released}
                  metacritic={platformLists.metacritic}
                  infoURL={"platform"}
                />
              ))}
            </ul>
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

PlatformPresenter.propTypes = {
  platformLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PlatformPresenter;
