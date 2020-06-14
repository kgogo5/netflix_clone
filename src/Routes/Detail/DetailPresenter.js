import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
  padding: 30px 20px 60px;
  width: 100%;
  min-height: calc(100vh - 50px);

  h2 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 500;
  }

  .videoArea {
    margin-top: 40px;
  }
  .storeArea {
    margin-top: 40px;

    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      @media (max-width: 1042px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 620px) {
        grid-template-columns: repeat(1, 1fr);
      }

      &.store {
      }
    }
  }
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
  display: flex;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1040px) {
    display: block;
  }

  .img_area {
    width: calc(100% - 300px);

    @media (max-width: 1040px) {
      width: 100%;
    }
  }

  .contentArea {
    padding: 15px 20px;
    width: 300px;

    @media (max-width: 1040px) {
      width: 100%;
    }

    .metacrinic {
      display: flex;
      justify-content: space-around;

      @media (max-width: 1040px) {
        display: block;
      }
    }
    .developer,
    .publishers,
    .playtime,
    .parent_platforms,
    .tag {
      margin-top: 15px;
      line-height: 1.4;
      span {
        color: #95d862;
      }
    }
    .playtime,
    .parent_platforms {
      span {
        font-weight: 600;
        color: #b3b3b3;
      }
    }
    .tag {
      span {
        padding: 0 4px;
        line-height: 1.8;
        color: #8dd0ff;
        border-radius: 2px;
        background-color: #2d5977;
        word-break: break-all;
        & + span {
          margin-left: 6px;
        }
      }
    }
  }
`;

const Description = styled.p`
  margin-top: 40px;
  padding: 20px 25px;
  font-size: 18px;
  line-height: 1.6;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Store = styled.li`
  padding: 8px;
  height: 120px;

  a {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.2s;
    background-size: 100%;
    text-align: center;
    vertical-align: middle;

    &:hover,
    &:focus {
      background-size: 120%;
    }
    &:hover,
    &:focus {
      &:after {
        top: 70%;
      }

      span {
        top: 76%;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      transition: 0.2s;
      z-index: 0;
    }

    span {
      top: 43%;
      position: relative;
      padding: 5px 0;
      font-size: 18px;
      font-weight: 500;
      transition: 0.2s;
      z-index: 1;

      @media (max-width: 1042px) {
        font-size: 16px;
      }

      @media (max-width: 620px) {
        font-size: 15px;
      }

      @media (max-width: 480px) {
        font-size: 18px;
      }
    }
  }
`;

const StoreLink = styled.a`
  display: block;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
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

const DetailPresenter = ({ result, error, loading }) => (
  <>
    <Helmet>
      <title>Loading | STEAMFLIX</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Container>
          <Helmet>
            <title>{result.name} | STEAMFLIX</title>
          </Helmet>
          <Breadcrumb>
            <Link to="/">Home</Link> &gt;{" "}
            <Link to={`/${window.location.pathname.split("/")[1]}`}>
              {window.location.pathname.split("/")[1]}
            </Link>
            <CurrentPath> &gt; {result.slug}</CurrentPath>
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
                    <span>
                      {result.developers.map((dev) => dev.name).join(`, `)}
                    </span>
                  </div>
                ) : null}

                {result.publishers ? (
                  <div className="publishers">
                    <strong>Publishers</strong> :{" "}
                    <span>
                      {result.publishers.map((pub) => pub.name).join(`, `)}
                    </span>
                  </div>
                ) : null}

                {result.playtime ? (
                  <div className="playtime">
                    <strong>Playtime</strong> :{" "}
                    <span>{result.playtime} Hours</span>
                  </div>
                ) : null}

                {result.parent_platforms ? (
                  <div className="parent_platforms">
                    <strong>Platforms</strong> :{" "}
                    <span>
                      {result.parent_platforms
                        .map((plat) => plat.platform.name)
                        .join(`, `)}
                    </span>
                  </div>
                ) : null}

                {result.tags ? (
                  <div className="tag">
                    <strong>Tags</strong> :{" "}
                    {result.tags.map((tag) => (
                      <span key={tag.id}>{tag.name}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </PageContent>
          ) : null}

          {result.description ? (
            <Description
              dangerouslySetInnerHTML={{ __html: result.description }}
            ></Description>
          ) : (
            <Description>No information is available.</Description>
          )}

          {result.domain ? (
            <div className="storeArea store">
              <h2>STORE</h2>
              <ul>
                <Store key={result.id}>
                  <StoreLink
                    href={result.domain}
                    bg={result.image_background}
                    target="_blank"
                  >
                    <span>{result.name}</span>
                  </StoreLink>
                </Store>
              </ul>
            </div>
          ) : null}

          {result.clip ? (
            <div className="videoArea">
              <h2>VIDEO</h2>
              <Video controls>
                <source src={result.clip.clips.full} type="video/mp4" />
              </Video>
            </div>
          ) : null}

          {result.stores ? (
            <div className="storeArea">
              <h2>STORES</h2>
              <ul>
                {result.stores.map((stores) => (
                  <Store key={stores.id}>
                    <StoreLink
                      href={stores.url}
                      bg={stores.store.image_background}
                      target="_blank"
                    >
                      <span>{stores.store.name}</span>
                    </StoreLink>
                  </Store>
                ))}
              </ul>
            </div>
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
    )}
  </>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
