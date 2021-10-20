import React, { useEffect, useState, useCallback } from "react";
import HomePresenter from "./HomePresenter";
import {
  HomeGamesApi,
  PlatformsApi,
  GenresApi,
  StoreApi,
  PublisherApi,
} from "api";

const _ = () => {
  const [gameLists, setGameLists] = useState(false),
    [storeLists, setStoreLists] = useState(false),
    [platformLists, setPlatformLists] = useState(false),
    [genreLists, setGenreLists] = useState(false),
    [publisherLists, setPublisherLists] = useState(false),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(false),
    getLoading = useCallback(() => {
      if (
        gameLists &&
        storeLists &&
        platformLists &&
        genreLists &&
        publisherLists
      ) {
        setLoading(false);
      }
    }, [gameLists, genreLists, platformLists, publisherLists, storeLists]);
  useEffect(() => {
    getLoading();
  }, [getLoading]);

  useEffect(() => {
    HomeGamesApi.gameLists()
      .then(function (res) {
        setGameLists(res.data.results);
      })
      .catch((error) => setError(error));

    StoreApi.storeLists()
      .then(function (res) {
        setStoreLists(res.data.results);
      })
      .catch((error) => setError(error));

    PlatformsApi.platformLists()
      .then(function (res) {
        setPlatformLists(res.data.results);
      })
      .catch((error) => setError(error));

    GenresApi.genreLists()
      .then(function (res) {
        setGenreLists(res.data.results);
      })
      .catch((error) => setError(error));

    PublisherApi.publisherLists()
      .then((res) => {
        setPublisherLists(res.data.results);
      })
      .catch((error) => setError(error));
  }, []);
  return (
    <>
      <HomePresenter
        gameLists={gameLists}
        storeLists={storeLists}
        platformLists={platformLists}
        genreLists={genreLists}
        publisherLists={publisherLists}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default _;
