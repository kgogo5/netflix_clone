import React, { useState, useEffect } from "react";
import StorePresenter from "./StorePresenter";
import { StoreApi } from "api";

const _ = () => {
  const [storeLists, setStoreLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function getStoreLists() {
    try {
      const { data } = await StoreApi.storeLists();
      console.log(data);
      setStoreLists(data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getStoreLists();
  }, []);

  return (
    <>
      <StorePresenter storeLists={storeLists} error={error} loading={loading} />
    </>
  );
};
export default _;
