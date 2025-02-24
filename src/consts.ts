import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "michioxd's blog",
  EMAIL: "neko@michioxd.ch",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "hello world to my blog :)",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "something i wanna tell you...",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/michioxd"
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/michioxd",
  },
  {
    NAME: "facebook",
    HREF: "https://fb.com/michioxd",
  }
];
