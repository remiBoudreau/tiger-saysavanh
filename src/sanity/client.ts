import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "7oau9tsu",
  dataset: "production",
  useCdn: true
});