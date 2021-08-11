import React from "react";
import { FeaturedPost } from "../featuredPost";
import { Posts } from "../posts";

import "../style.css";

export const Home = () => {
  return (
    <div className="homepage">
      <FeaturedPost />
      <Posts />
    </div>
  );
};
