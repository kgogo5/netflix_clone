import React from "react";
import PlatformPresenter from "./PlatformPresenter";
import { PlatformsApi } from "api";

export default class extends React.Component {
  state = {
    platformLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: platformLists },
      } = await PlatformsApi.platformLists();
      this.setState({
        platformLists,
      });
    } catch {
      this.setState({
        error: "Can't find platform information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { platformLists, error, loading } = this.state;
    console.log(this.state);
    return (
      <PlatformPresenter
        platformLists={platformLists}
        error={error}
        loading={loading}
      />
    );
  }
}
