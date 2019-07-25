import React from "react";

const ErrorPage = props => {
  return (
    <div className="container text-center">
      <h1 className="iconPageHeader">Error</h1>
      <h3>{props.text}</h3>
      {/* <h1>
        <i class="far fa-flushed fa-3x fa-spin" />
      </h1> */}
    </div>
  );
};

export default ErrorPage;
