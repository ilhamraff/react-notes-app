import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={300}
    height={160}
    viewBox="0 0 300 160"
    backgroundColor="#94acbc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="28" rx="3" ry="3" width="100" height="6" />
    <rect x="0" y="165" rx="3" ry="3" width="493" height="6" />
    <rect x="5" y="73" rx="3" ry="3" width="300" height="6" />
    <rect x="5" y="127" rx="3" ry="3" width="300" height="6" />
    <rect x="5" y="100" rx="3" ry="3" width="300" height="6" />
    <rect x="5" y="46" rx="3" ry="3" width="100" height="6" />
  </ContentLoader>
);

export default MyLoader;
