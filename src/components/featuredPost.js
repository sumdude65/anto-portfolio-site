import React, { useState, useEffect } from "react";
import { client } from "../sanityClient";

import "./style.css";

const BlockContent = require("@sanity/block-content-to-react");

export const FeaturedPost = () => {
  const [post, setPost] = useState(null);
  const getPost = async () => {
    const query = `*[_type == 'post'] | order(_createdAt)[0]{
        "image":mainImage.asset->url,
        title,
        "date":_createdAt,
        "body":body[0],
}`;
    const post = await client.fetch(query);
    setPost(post);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {!post ? (
        ""
      ) : (
        <div className="featuredPost-container">
          <div className="featuredPost">
            <div className="featuredPost-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="featuredPost-metadata">
              <div className="featuredPost-date">
                <h2>{post.date}</h2>
              </div>
              <div className="featuredPost-title">
                <h1>{post.title} </h1>
              </div>
              <div className="featuredPost-content">
                <BlockContent blocks={post.body} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
