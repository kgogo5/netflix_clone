import React from "react";
import HomePresenter from "./HomePresenter";
import {
  GamesApi,
  PlatformsApi,
  GenresApi,
  TagApi,
  StoreApi,
  PublisherApi,
} from "api";

export default class extends React.Component {
  state = {
    gameLists: null,
    storeLists: null,
    platformLists: null,
    genreLists: null,
    tagLists: null,
    publisherLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const $this = this;
    const loading = {
      gameLists: false,
      storeLists: false,
      platformLists: false,
      genreLists: false,
      tagLists: false,
      publisherLists: false,
      getLoading: function () {
        if (
          this.gameLists *
          this.storeLists *
          this.platformLists *
          this.genreLists *
          this.tagLists *
          this.publisherLists
        ) {
          $this.setState({
            loading: false,
          });
        }
      },
    };
    GamesApi.gameLists().then(function (res) {
      loading.gameLists = true;
      loading.getLoading();
      $this.setState({
        gameLists: res.data.results,
      });
    });

    StoreApi.storeLists().then(function (res) {
      loading.storeLists = true;
      loading.getLoading();
      $this.setState({
        storeLists: res.data.results,
      });
    });

    PlatformsApi.platformLists().then(function (res) {
      loading.platformLists = true;
      loading.getLoading();
      $this.setState({
        platformLists: res.data.results,
      });
    });

    GenresApi.genreLists().then(function (res) {
      loading.genreLists = true;
      loading.getLoading();
      $this.setState({
        genreLists: res.data.results,
      });
    });

    TagApi.tagLists().then(function (res) {
      loading.tagLists = true;
      loading.getLoading();
      $this.setState({
        tagLists: res.data.results,
      });
    });

    PublisherApi.publisherLists().then(function (res) {
      loading.publisherLists = true;
      loading.getLoading();
      $this.setState({
        publisherLists: res.data.results,
      });
    });
  }

  render() {
    const {
      gameLists,
      storeLists,
      platformLists,
      genreLists,
      tagLists,
      publisherLists,
      error,
      loading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        gameLists={gameLists}
        storeLists={storeLists}
        platformLists={platformLists}
        genreLists={genreLists}
        tagLists={tagLists}
        publisherLists={publisherLists}
        error={error}
        loading={loading}
      />
    );
  }
}
