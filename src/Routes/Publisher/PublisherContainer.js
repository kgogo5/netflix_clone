import React, { useState, useEffect } from "react";
import PublisherPresenter from "./PublisherPresenter";
import { PublisherApi } from "api";

const _ = () => {
  const [publisherLists, setPublisherLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function getPublisherLists() {
    try {
      const { data } = await PublisherApi.publisherLists();
      console.log(data);
      setPublisherLists(data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getPublisherLists();
  }, []);

  return (
    <>
      <PublisherPresenter
        publisherLists={publisherLists}
        error={error}
        loading={loading}
      />
    </>
  );
};
export default _;
