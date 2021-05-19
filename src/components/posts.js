import React, { useState, useEffect } from "react";
import { client } from "../sanityClient";
import { PostCard } from "./postCard";

import "./style.css";

export const Posts = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    const query = `*[_type = 'post'] | order(_createdAt)[10]{
            "image":mainImage.asset->url,
            title,
            body,
            "date": _createdAt
        }`;
    const posts = await client.fetch(query);

    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {!posts
        ? ""
        : posts.map((post, index) => {
            return <PostCard key={index} props={post} />;
          })}
    </>
  );
};
