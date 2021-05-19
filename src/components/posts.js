import React, { useState, useEffect } from "react";
import { client } from "../sanityClient";
import { PostCard } from "./postCard";

import "./style.css";

export const Posts = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    const query = `*[_type == 'post'] | order(_createdAt){
            "image":mainImage.asset->url,
            title,
            body[0],
            "date": _createdAt
        }`;
    const posts = await client.fetch(query);
    console.log(posts);
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postList">
      {!posts
        ? ""
        : posts.map((post, index) => {
            return <PostCard key={index} props={post} />;
          })}
    </div>
  );
};
