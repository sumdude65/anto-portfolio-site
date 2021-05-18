const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: "y6gb4tz0",
  dataset: "production",
  apiVersion: "2021-05-18",
  useCdn: false,
  // use current UTC date - see "specifying API version"!
});
