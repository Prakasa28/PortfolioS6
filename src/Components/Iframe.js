import React from "react";
function IframeComponent({ src, title, width, height }) {
  return <iframe src={src} title={title} width={width} height={height} />;
}
export default IframeComponent;
