import React from "react";

const Loader = () => {
  return (
    <div className="container text-center">
      <h1 className="iconPageHeader">Loading</h1>
      <h1>
        <i class="far fa-flushed fa-3x fa-spin" />
      </h1>
    </div>
  );
};

export default Loader;
