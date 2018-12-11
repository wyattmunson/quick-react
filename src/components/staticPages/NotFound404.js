import React from "react";

export default class NotFound404 extends React.Component {
  render() {
    return (
      <div className="caontainer">
        <h1>It's not you, it's me.</h1>
        <code>404 - Not Found</code>
        <p>
          That page doesn't exist anymore, or never did. Either way, it's not
          here right now.
        </p>
      </div>
    );
  }
}
