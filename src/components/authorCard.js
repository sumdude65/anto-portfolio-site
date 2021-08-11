import React from "react";

import "./style.css";

const BlockContent = require("@sanity/block-content-to-react");

export const AuthorCard = (props) => {
  const { name, bio, image } = props.props;
  return (
    <div className="authorInfo">
      <figure className="authorInfo-pic">
        <img src={image} alt={name} />
      </figure>
      <div className="authorInfo-bio">
        <div className="authorInfo-bio-title">
          <h1>{name}</h1>
        </div>
        <div className="authorInfo-bio-content">
          <BlockContent blocks={bio} />
        </div>
      </div>
    </div>
  );
};
