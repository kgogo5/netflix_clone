import { memo } from "react";
import { Helmet } from "react-helmet";
import { Platform as PlatformComponent } from "../home/Platform";

const ExtendPlatform = () => {
  return (
    <>
      <Helmet>
        <title>Platform | STEAMFLIX</title>
      </Helmet>
      <PlatformComponent />
    </>
  );
};

export const Platform = memo(ExtendPlatform);
