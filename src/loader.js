import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#fdfeffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
        wrapperClass="custom-loader"
        visible={true}
      />
    </div>
  );
}
