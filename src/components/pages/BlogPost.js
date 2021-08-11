import React, { useState, useEffect } from "react";
import { client } from "../../sanityClient";
import { useParams } from "react-router-dom";
import { AuthorCard } from "../authorCard";

import "../style.css";

const BlockContent = require("@sanity/block-content-to-react");

export const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  const getPost = async (slug) => {
    const query = `*[_type == 'post' && slug.current == '${slug}'][0]{
        title,body,"mainImage":mainImage.asset->url,_createdAt,"author":author->{name,bio,"image":image.asset->url}
    }`;
    const data = await client.fetch(query);
    setPost(data);
  };

  useEffect(() => {
    getPost(slug);
  }, [slug]);

  return (
    <>
      {!post ? (
        ""
      ) : (
        <article className="blogPost">
          <header className="blogPost-title">
            <h1>{post.title}</h1>
            <div className="blogPost-metadata">
              <a href="/">{post.author.name} </a>
              <time> at {post._createdAt}</time>
            </div>
          </header>
          <figure className="blogPost-mainImage">
            <img src={post.mainImage} alt={post.title} />
          </figure>
          <section className="blogPost-body">
            <BlockContent
              blocks={post.body}
              projectId="y6gb4tz0"
              dataset="production"
            />
            <div className="authorCard">
              <AuthorCard props={post.author} />
            </div>
          </section>
        </article>
      )}
    </>
  );
};
