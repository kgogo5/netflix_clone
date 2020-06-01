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
    try {
      const {
        data: { results: tagLists },
      } = await TagApi.tagLists();
      this.setState({
        tagLists,
      });
    } catch {
      this.setState({
        error: "Can't find tag information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { tagLists, error, loading } = this.state;
    console.log(this.state);
    return <TagPresenter tagLists={tagLists} error={error} loading={loading} />;
  }
}
