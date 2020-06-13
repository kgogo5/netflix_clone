import React from "react";
import TagPresenter from "./TagPresenter";
import { TagApi } from "api";

export default class extends React.Component {
  state = {
    tagLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const $this = this;
    const loading = {
      tagLists: false,
      getLoading: function () {
        if (this.tagLists) {
          $this.setState({
            loading: false,
          });
        }
      },
    };

    TagApi.tagLists().then(function (res) {
      loading.tagLists = true;
      loading.getLoading();
      $this.setState({
        tagLists: res.data.results,
      });
    });
  }

  render() {
    const { tagLists, error, loading } = this.state;
    console.log(this.state);
    return <TagPresenter tagLists={tagLists} error={error} loading={loading} />;
  }
}
