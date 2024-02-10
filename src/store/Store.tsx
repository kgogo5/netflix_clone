import { memo } from "react";
import { Helmet } from "react-helmet";
import { Store as StoreComponent } from "../home/Store";

const ExtendStore = () => {
  return (
    <>
      <Helmet>
        <title>Store | STEAMFLIX</title>
      </Helmet>
      <StoreComponent />
    </>
  );
};

export const Store = memo(ExtendStore);
