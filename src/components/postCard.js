import React from "react";

import "./style.css";

const BlockContent = require("@sanity/block-content-to-react");

export const PostCard = (props) => {
  const { image, title, body, date } = props.props;
  return (
    <div className="postCard">
      <div className="postCard-image">
        <img src={image} alt={title} />
      </div>
      <div className="postCard-metadata">
        <div className="postCard-title">
          <h1>{title}</h1>
        </div>
        <div className="postCard-content">
          <BlockContent blocks={body} />
        </div>
        <div className="postCard-date">
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
};
