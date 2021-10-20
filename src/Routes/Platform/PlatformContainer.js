import React, { useState, useEffect } from "react";
import PlatformPresenter from "./PlatformPresenter";
import { PlatformsApi } from "api";

const _ = () => {
  const [platformLists, setPlatformLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function getPlatformLists() {
    try {
      const { data } = await PlatformsApi.platformLists();
      console.log(data);
      setPlatformLists(data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getPlatformLists();
  }, []);

  return (
    <>
      <PlatformPresenter
        platformLists={platformLists}
        error={error}
        loading={loading}
      />
    </>
  );
};
export default _;
