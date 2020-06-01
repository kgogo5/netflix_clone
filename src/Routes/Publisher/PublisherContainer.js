import React from "react";
import PublisherPresenter from "./PublisherPresenter";
import { PublisherApi } from "api";

export default class extends React.Component {
  state = {
    publisherLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: publisherLists },
      } = await PublisherApi.publisherLists();
      this.setState({
        publisherLists,
      });
    } catch {
      //작동하지 않을 때 catch부분에서 처리가 된다.
      this.setState({
        error: "Can't find publisher information.",
      });
    } finally {
      //끝나게 되면 작동
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { publisherLists, error, loading } = this.state;
    console.log(this.state);
    return (
      <PublisherPresenter
        publisherLists={publisherLists}
        error={error}
        loading={loading}
      />
    );
  }
}
