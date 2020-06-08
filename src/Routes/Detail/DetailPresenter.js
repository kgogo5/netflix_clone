import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  min-height: calc(100vh - 50px);
`;

const Title = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 28px;
    font-weight: 500;
  }

  .genresList {
    margin-left: 10px;
    display: inline-block;
    span {
      margin-left: 5px;
      padding: 0 6px 2px;
      border: 1px solid #fff;
      border-radius: 2px;
      font-size: 12px;
      cursor: default;

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const PageContent = styled.div`
  margin-top: 20px;
  display: flex;

  background-color: rgba(0, 0, 0, 0.6);
  .img_area {
    width: calc(100% - 300px);
  }
  .contentArea {
    padding: 15px 20px;
    width: 300px;
    .metacrinic {
      display: flex;
      justify-content: space-around;
    }
  }
`;

const Metacritic = styled.img`
  max-width: 160px;
  width: 100%;
`;

const Score = styled.span`
  margin-left: 4px;
  display: inline-block;
  padding: 7px 9px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  vertical-align: top;
  font-size: 22px;
  background-color: ${(props) => {
    if (props.color) {
      if (props.color >= 90) {
        return `#2ecc71`;
      } else if (props.color < 90 && props.color >= 80) {
        return `#f1c40f`;
      } else if (props.color <= 80) {
        return `#e67e22`;
      }
    }
  }};
`;

const ContentImage = styled.img`
  width: 100%;
  vertical-align: top;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: -1;
`;

const Breadcrumb = styled.div`
  & > a:hover,
  & > a:focus {
    color: #999;
  }
`;

const CurrentPath = styled.span`
  color: #bdbdbd;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Breadcrumb>
          <Link to="/">Home</Link> >{" "}
          <Link to={`/${window.location.pathname.split("/")[1]}`}>
            {window.location.pathname.split("/")[1]}
          </Link>
          <CurrentPath> > {result.slug}</CurrentPath>
        </Breadcrumb>

        <Title>
          <h1>{result.name}</h1>
          <div className="genresList">
            {result.genres
              ? result.genres.map((genres) => (
                  <span key={genres.id}>{genres.name}</span>
                ))
              : null}
          </div>
        </Title>

        {window.location.pathname.split("/")[1] === "game" ? (
          <PageContent>
            <div className="img_area">
              <ContentImage
                src={result.background_image}
                alt={`${result.name} main images`}
              />
            </div>
            <div className="contentArea">
              {result.metacritic ? (
                <div className="metacrinic">
                  <Metacritic src={require("images/Metacritic_black.png")} />{" "}
                  <Score color={result.metacritic}>{result.metacritic}</Score>
                </div>
              ) : null}

              {result.developers ? (
                <div className="developer">
                  <strong>Developers</strong> :{" "}
                  {result.developers.map((developers) => {
                    let dev = developers.name;
                    return <span>{dev}</span>;
                  })}
                </div>
              ) : null}
            </div>
          </PageContent>
        ) : null}

        {error && <Message color="#e74c3c" text={error} />}
      </Container>
      <Backdrop
        bgImage={
          result.background_image_additional
            ? result.background_image_additional
            : result.image_background
        }
      />
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
