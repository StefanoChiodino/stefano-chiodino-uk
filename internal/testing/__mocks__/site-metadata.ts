import author from "./author";
import menu from "./menu";

export default {
  site: {
    siteMetadata: {
      url: "https://stefano.chiodino.uk",
      title: "Blog by Stefano Chiodino",
      subtitle:
        "Whatever comes to mind.",
      copyright: "All rights left.",
      postsPerPage: 4,
      author,
      menu,
    },
  },
};
