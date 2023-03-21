import { c as createCollectionToGlobResultMap, a as createGetCollection, b as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, _ as __astro_tag_component__, h as renderComponent, i as createVNode, F as Fragment$1 } from './chunk.8ef09eaa.js';
/* empty css                */import rss from '@astrojs/rss';
import Fuse from 'fuse.js';
import { useRef, useState, useEffect } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import { slug } from 'github-slugger';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import satori from 'satori';
import { writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/adding-new-post.md": () => import('./chunk.1c7b0bbe.js'),"/src/content/blog/astro-paper-2.md": () => import('./chunk.a3fd8ffb.js'),"/src/content/blog/customizing-astropaper-theme-color-schemes.md": () => import('./chunk.ae958e3f.js'),"/src/content/blog/dynamic-og-images.md": () => import('./chunk.8922441f.js'),"/src/content/blog/how-to-configure-astropaper-theme.md": () => import('./chunk.aeaa275c.js'),"/src/content/blog/how-to-connect-astro-paper-blog-with-forestry-cms.md": () => import('./chunk.01727ba5.js'),"/src/content/blog/portfolio-website-development.md": () => import('./chunk.107ee4ab.js'),"/src/content/blog/predefined-color-schemes.md": () => import('./chunk.1c5db045.js'),"/src/content/blog/rec-2.md": () => import('./chunk.ae32d259.js'),"/src/content/blog/tailwind-typography.md": () => import('./chunk.cdca8820.js'),"/src/content/blog/terminal-development.md": () => import('./chunk.2f22f1be.js'),"/src/content/blog/wheels-of-time.md": () => import('./chunk.a720db23.js')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/adding-new-post.md": () => import('./chunk.938aa0cf.js'),"/src/content/blog/astro-paper-2.md": () => import('./chunk.58174fef.js'),"/src/content/blog/customizing-astropaper-theme-color-schemes.md": () => import('./chunk.a6852d5a.js'),"/src/content/blog/dynamic-og-images.md": () => import('./chunk.10df8291.js'),"/src/content/blog/how-to-configure-astropaper-theme.md": () => import('./chunk.ec0a5055.js'),"/src/content/blog/how-to-connect-astro-paper-blog-with-forestry-cms.md": () => import('./chunk.d987b4b4.js'),"/src/content/blog/portfolio-website-development.md": () => import('./chunk.5ffe1938.js'),"/src/content/blog/predefined-color-schemes.md": () => import('./chunk.6e226e97.js'),"/src/content/blog/rec-2.md": () => import('./chunk.e38091ac.js'),"/src/content/blog/tailwind-typography.md": () => import('./chunk.4963ac2e.js'),"/src/content/blog/terminal-development.md": () => import('./chunk.c1c9bbaf.js'),"/src/content/blog/wheels-of-time.md": () => import('./chunk.c5020115.js')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Sat Naing",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "MB",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3
};
const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: true
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$i = createAstro("https://astro-paper.pages.dev/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = ({}).PUBLIC_GOOGLE_SITE_VERIFICATION;
  const {
    title = SITE.title,
    author = SITE.author,
    description = SITE.desc,
    ogImage = SITE.ogImage
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(
    ogImage ? ogImage : SITE.ogImage,
    Astro2.url.origin
  ).href;
  return renderTemplate(
    _a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <link rel="canonical"', '>\n    <meta name="generator"', ">\n\n    <!-- General Meta Tags -->\n    <title>", '</title>\n    <meta name="title"', '>\n    <meta name="description"', '>\n    <meta name="author"', '>\n\n    <!-- Open Graph / Facebook -->\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:url"', '>\n    <meta property="og:image"', '>\n\n    <!-- Twitter -->\n    <meta property="twitter:card" content="summary_large_image">\n    <meta property="twitter:url"', '>\n    <meta property="twitter:title"', '>\n    <meta property="twitter:description"', '>\n    <meta property="twitter:image"', '>\n\n    <!-- Google Font -->\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">\n\n    ', '\n\n    <script src="/toggle-theme.js"><\/script>\n  ', "</head>\n  <body>\n	  ", "\n  </body></html>"])),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    googleSiteVerification && renderTemplate`<meta name="google-site-verification"${addAttribute(googleSiteVerification, "content")}>`,
    renderHead($$result),
    renderSlot($$result, $$slots["default"])
  );
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/layouts/Layout.astro");

const $$Astro$h = createAstro("https://astro-paper.pages.dev/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Footer;
  (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer${addAttribute(`${noMarginTop ? "" : "mt-auto"} astro-SZ7XMLTE`, "class")}>
  <!-- <Hr noPadding />
  <div class="footer-wrapper">
    <div class="copyright-wrapper">
      <span>Copyright &#169; {currentYear}</span>
      <span class="separator">&nbsp;|&nbsp;</span>
      <span>All rights reserved.</span>
    </div>
  </div> -->
</footer>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/Footer.astro");

const $$Astro$g = createAstro("https://astro-paper.pages.dev/");
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href, className, ariaLabel, title, disabled = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a type="button"${addAttribute(disabled ? "#" : href, "href")}${addAttribute(disabled ? "-1" : "0", "tabindex")}${addAttribute(`group ${className} astro-5EUNQZKT`, "class")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>
  ${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/LinkButton.astro");

function Datetime({
  datetime,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: `post-date-time flex items-center space-x-2 opacity-80 ${className}`,
    children: [/* @__PURE__ */ jsx("span", {
      className: `italic ${size === "sm" ? "text-xs" : "text-sm"}`,
      children: /* @__PURE__ */ jsx(FormattedDatetime, {
        datetime
      })
    }), /* @__PURE__ */ jsx("span", {
      className: "sr-only",
      children: "Posted on:"
    })]
  });
}
const FormattedDatetime = ({
  datetime
}) => {
  const myDatetime = new Date(datetime);
  const date = myDatetime.toLocaleDateString([], {
    // year: "numeric",
    // month: "long",
    // day: "numeric",
  });
  myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: date
  });
};
__astro_tag_component__(Datetime, "@astrojs/react");

function Card({
  href,
  frontmatter,
  secHeading = true
}) {
  const {
    title,
    pubDatetime,
    description
  } = frontmatter;
  return /* @__PURE__ */ jsxs("li", {
    className: "my-8 post-card",
    children: [/* @__PURE__ */ jsx("a", {
      href,
      className: "inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0",
      children: secHeading ? /* @__PURE__ */ jsx("h2", {
        className: "text-lg font-medium decoration-dashed hover:underline post-card-title",
        children: title
      }) : /* @__PURE__ */ jsx("h3", {
        className: "text-lg font-medium decoration-dashed hover:underline post-card-title",
        children: title
      })
    }), /* @__PURE__ */ jsx("p", {
      children: description
    }), /* @__PURE__ */ jsx("div", {
      className: "post-card-footer",
      children: /* @__PURE__ */ jsx(Datetime, {
        datetime: pubDatetime
      })
    })]
  });
}
__astro_tag_component__(Card, "@astrojs/react");

const getSortedPosts = (posts) => posts.filter(({ data }) => !data.draft).sort(
  (a, b) => Math.floor(new Date(b.data.pubDatetime).getTime() / 1e3) - Math.floor(new Date(a.data.pubDatetime).getTime() / 1e3)
);

const slugifyStr = (str) => slug(str);
const slugify = (post) => post.postSlug ? slug(post.postSlug) : slug(post.title);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));

const $$Astro$f = createAstro("https://astro-paper.pages.dev/");
const $$MinorHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MinorHeader;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3SXCCNFQ">
	<div class="nav-container astro-3SXCCNFQ">
		<a href="/" class="logo astro-3SXCCNFQ"><div class="site-title astro-3SXCCNFQ">${SITE.title}</div></a>
	</div>
</header>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/MinorHeader.astro");

const $$Astro$e = createAstro("https://astro-paper.pages.dev/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  sortedPosts.filter(({ data }) => data.featured);
  SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MinorHeader", $$MinorHeader, { "class": "astro-J7PV25F6" })}${maybeRenderHead($$result2)}<main id="main-content" class="astro-J7PV25F6">
    <section id="recent-posts" class="astro-J7PV25F6">
      <!-- <h2>Recent Posts</h2> -->
      <ul class="astro-J7PV25F6">
        ${sortedPosts.map(
    ({ data }, index) => index < 4 && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data, "secHeading": false, "class": "astro-J7PV25F6" })}`
  )}
      </ul>
      <div class="all-posts-btn-wrapper astro-J7PV25F6">
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
          All Posts
          <svg xmlns="http://www.w3.org/2000/svg" class="astro-J7PV25F6"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-J7PV25F6"></path>
          </svg>` })}
      </div>
    </section>
  </main>${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/index.astro");

const $$file$6 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/index.astro";
const $$url$6 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

async function get$1() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime)
    }))
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get: get$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://astro-paper.pages.dev/");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Main;
  const { pageTitle, pageDesc } = Astro2.props;
  return renderTemplate`<!-- <Breadcrumbs /> -->${maybeRenderHead($$result)}<main id="main-content" class="astro-HSP6OTUF">
  <!-- <h1>{pageTitle}</h1> -->
  <p class="astro-HSP6OTUF">${pageDesc}</p>
  ${renderSlot($$result, $$slots["default"])}
</main>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/layouts/Main.astro");

const $$Astro$c = createAstro("https://astro-paper.pages.dev/");
const $$Hr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}>
  <hr class="border-skin-line"${addAttribute(ariaHidden, "aria-hidden")}>
</div>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/Hr.astro");

const $$Astro$b = createAstro("https://astro-paper.pages.dev/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
  <a id="skip-to-content" href="#main-content" class="astro-3EF6KSR2">Skip to content</a>
  <div class="nav-container astro-3EF6KSR2">
    <div class="top-nav-wrap astro-3EF6KSR2">
      <a href="/" class="logo astro-3EF6KSR2">
        ${SITE.title}
      </a>
      <nav id="nav-menu" class="astro-3EF6KSR2">
        <button class="hamburger-menu focus-outline astro-3EF6KSR2" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items">
          <div class="icon-container flex astro-3EF6KSR2">
            <div id="first-line" class="astro-3EF6KSR2"></div>
            <div id="second-line" class="astro-3EF6KSR2"></div>
            <div id="third-line" class="astro-3EF6KSR2"></div>
          </div>
        </button>
        <ul id="menu-items" class="display-none sm:flex astro-3EF6KSR2">
          <li class="astro-3EF6KSR2">
            <a href="/posts"${addAttribute((activeNav === "posts" ? "active" : "") + " astro-3EF6KSR2", "class")}>
              Posts
            </a>
          </li>
          <li class="astro-3EF6KSR2">
            <a href="/tags"${addAttribute((activeNav === "tags" ? "active" : "") + " astro-3EF6KSR2", "class")}>
              Tags
            </a>
          </li>
          <li class="astro-3EF6KSR2">
            <a href="/about"${addAttribute((activeNav === "about" ? "active" : "") + " astro-3EF6KSR2", "class")}>
              About
            </a>
          </li>
          <li class="astro-3EF6KSR2">
            ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/search", "className": `focus-outline p-3 sm:p-1 ${activeNav === "search" ? "active" : ""} astro-3EF6KSR2`, "ariaLabel": "search", "title": "Search" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="scale-125 sm:scale-100 astro-3EF6KSR2"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" class="astro-3EF6KSR2"></path>
              </svg>` })}
          </li>
          <li class="astro-3EF6KSR2">
            ${renderTemplate`<button id="theme-btn" class="focus-outline astro-3EF6KSR2" title="Toggles light & dark" aria-label="auto" aria-live="polite">
                  <svg xmlns="http://www.w3.org/2000/svg" id="moon-svg" class="astro-3EF6KSR2">
                    <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" class="astro-3EF6KSR2"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" id="sun-svg" class="astro-3EF6KSR2">
                    <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" class="astro-3EF6KSR2"></path>
                  </svg>
                </button>`}
          </li>
        </ul>
      </nav>
    </div>
  </div>
  ${renderComponent($$result, "Hr", $$Hr, { "class": "astro-3EF6KSR2" })}
</header>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/Header.astro");

function SearchBar({
  searchList
}) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = new Fuse(searchList, {
    keys: ["title", "description"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr)
      setInputVal(searchStr);
    setTimeout(function() {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
    }, 50);
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("label", {
      className: "relative block",
      children: [/* @__PURE__ */ jsx("span", {
        className: "absolute inset-y-0 left-0 flex items-center pl-2 opacity-75",
        children: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx("path", {
            d: "M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
          })
        })
      }), /* @__PURE__ */ jsx("input", {
        className: "block w-full rounded border border-skin-fill \n        border-opacity-40 bg-skin-fill py-3 pl-10\n        pr-3 placeholder:italic placeholder:text-opacity-75 \n        focus:border-skin-accent focus:outline-none",
        placeholder: "Search for anything...",
        type: "text",
        name: "search",
        value: inputVal,
        onChange: handleChange,
        autoComplete: "off",
        autoFocus: true,
        ref: inputRef
      })]
    }), inputVal.length > 1 && /* @__PURE__ */ jsxs("div", {
      className: "mt-8",
      children: ["Found ", searchResults?.length, searchResults?.length && searchResults?.length === 1 ? " result" : " results", " ", "for '", inputVal, "'"]
    }), /* @__PURE__ */ jsx("ul", {
      children: searchResults && searchResults.map(({
        item,
        refIndex
      }) => /* @__PURE__ */ jsx(Card, {
        href: `/posts/${slugify(item.data)}`,
        frontmatter: item.data
      }, `${refIndex}-${slugify(item.data)}`))
    })]
  });
}
__astro_tag_component__(SearchBar, "@astrojs/react");

const $$Astro$a = createAstro("https://astro-paper.pages.dev/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const searchList = posts.map(({ data }) => ({
    title: data.title,
    description: data.description,
    data
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "activeNav": "search" })}${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Search", "pageDesc": "Search any article ..." }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Search", SearchBar, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })}` })}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/search.astro");

const $$file$5 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/search.astro";
const $$url$5 = "/search";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://astro-paper.pages.dev/");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumb astro-ILHXCYM7" aria-label="breadcrumb">
  <ul class="astro-ILHXCYM7">
    <li class="astro-ILHXCYM7">
      <a href="/" class="astro-ILHXCYM7">Home</a>
      <span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
    </li>
    ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li class="astro-ILHXCYM7">
            <span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"} astro-ILHXCYM7`, "class")} aria-current="page">
              
              ${breadcrumb}
            </span>
          </li>` : renderTemplate`<li class="astro-ILHXCYM7">
            <a${addAttribute(`/${breadcrumb}`, "href")} class="astro-ILHXCYM7">${breadcrumb}</a>
            <span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
          </li>`
  )}
  </ul>
</nav>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/Breadcrumbs.astro");

const $$Astro$8 = createAstro("https://astro-paper.pages.dev/");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })}${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})}${maybeRenderHead($$result2)}<main id="main-content">
    <section id="about" class="prose mb-28 max-w-4xl prose-img:border-0">
      <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1>
      ${renderSlot($$result2, $$slots["default"])}
    </section>
  </main>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/layouts/AboutLayout.astro");

const html = "<!-- \nAstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on [my personal blog](https://satnaing.dev/blog).\n\nThis theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.\n\nThis theme is self-documented \\_ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.\n\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n\n## Tech Stack\n\nThis theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.\n\n## Features\n\nHere are certain features of this site.\n\n- fully responsive and accessible\n- SEO-friendly\n- light & dark mode\n- fuzzy search\n- super fast performance\n- draft posts\n- pagination\n- sitemap & rss feed\n- highly customizable\n\nIf you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  \nOr you can even give any feedback via my [email](mailto:contact@satnaing.dev). -->";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "<!-- \nAstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on [my personal blog](https://satnaing.dev/blog).\n\nThis theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.\n\nThis theme is self-documented \\_ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.\n\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n\n## Tech Stack\n\nThis theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.\n\n## Features\n\nHere are certain features of this site.\n\n- fully responsive and accessible\n- SEO-friendly\n- light & dark mode\n- fuzzy search\n- super fast performance\n- draft posts\n- pagination\n- sitemap & rss feed\n- highly customizable\n\nIf you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  \nOr you can even give any feedback via my [email](mailto:contact@satnaing.dev). -->\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html });
					return createVNode($$AboutLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://astro-paper.pages.dev/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Posts;
  const { pageNum, totalPages, posts } = Astro2.props;
  const prev = pageNum > 1 ? "" : "disabled";
  const next = pageNum < totalPages ? "" : "disabled";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}`, "class": "astro-EENKY23Y" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MinorHeader", $$MinorHeader, { "activeNav": "posts", "class": "astro-EENKY23Y" })}${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted.", "class": "astro-EENKY23Y" }, { "default": ($$result3) => renderTemplate`${maybeRenderHead($$result3)}<ul class="astro-EENKY23Y">
      ${posts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data, "class": "astro-EENKY23Y" })}`)}
    </ul>` })}${totalPages > 1 && renderTemplate`<nav class="pagination-wrapper astro-EENKY23Y" aria-label="Pagination">
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": prev === "disabled", "href": `/posts${pageNum - 1 !== 1 ? "/" + (pageNum - 1) : ""}`, "className": `mr-4 select-none ${prev} astro-EENKY23Y`, "ariaLabel": "Previous" }, { "default": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${prev}-svg astro-EENKY23Y`, "class")}>
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" class="astro-EENKY23Y"></path>
          </svg>
          Prev
        ` })}
        ${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": next === "disabled", "href": `/posts/${pageNum + 1}`, "className": `ml-4 select-none ${next} astro-EENKY23Y`, "ariaLabel": "Next" }, { "default": ($$result3) => renderTemplate`
          Next
          <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${next}-svg astro-EENKY23Y`, "class")}>
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-EENKY23Y"></path>
          </svg>` })}
      </nav>`}${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1, "class": "astro-EENKY23Y" })}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/layouts/Posts.astro");

const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

const $$Astro$6 = createAstro("https://astro-paper.pages.dev/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const paginatedPosts = sortedPosts.slice(0, SITE.postPerPage);
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNum": 1, "totalPages": totalPages.length })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/posts/index.astro");

const $$file$4 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/posts/index.astro";
const $$url$4 = "/posts";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://astro-paper.pages.dev/");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tag;
  const { name, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li${addAttribute(`inline-block ${size === "sm" ? "my-1 underline-offset-4" : "my-3 mx-1 underline-offset-8"} astro-BLWJYJPT`, "class")}>
  <a${addAttribute(`/tags/${name.toLowerCase()}`, "href")}${addAttribute(`${size === "sm" ? "text-sm" : "text-lg"} pr-2 group astro-BLWJYJPT`, "class")}>
    <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${size === "sm" ? " scale-75" : "scale-110"} astro-BLWJYJPT`, "class")}><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z" class="astro-BLWJYJPT"></path>
    </svg>
    &nbsp;<span class="astro-BLWJYJPT">${name.toLowerCase()}</span>
  </a>
</li>`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/components/Tag.astro");

const $$Astro$4 = createAstro("https://astro-paper.pages.dev/");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post } = Astro2.props;
  const { title, author, description, ogImage, pubDatetime, tags } = post.data;
  const { Content } = await post.render();
  const ogUrl = new URL(ogImage ? ogImage : `${title}.png`, Astro2.url.origin).href;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "author": author, "description": description, "ogImage": ogUrl, "class": "astro-VJ4TPSPI" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MinorHeader", $$MinorHeader, { "class": "astro-VJ4TPSPI" })}${maybeRenderHead($$result2)}<main id="main-content" class="astro-VJ4TPSPI">
    <h1 class="post-title astro-VJ4TPSPI">${title}</h1>
    ${renderComponent($$result2, "Datetime", Datetime, { "datetime": pubDatetime, "size": "sm", "className": "my-2 astro-VJ4TPSPI" })}
    <article id="article" role="article" class="prose mx-auto mt-8 max-w-3xl astro-VJ4TPSPI">
      ${renderComponent($$result2, "Content", Content, { "class": "astro-VJ4TPSPI" })}
    </article>

    <ul class="tags-container astro-VJ4TPSPI">
      ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "name": tag, "class": "astro-VJ4TPSPI" })}`)}
    </ul>
  </main>${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-VJ4TPSPI" })}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/layouts/PostDetails.astro");

const $$Astro$3 = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths$2() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: slugify(post.data) },
    props: { post }
  }));
  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...postResult, ...pagePaths];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const currentPage = slug && !isNaN(Number(slug)) && totalPages.includes(Number(slug)) ? Number(slug) : 0;
  const lastPost = currentPage * SITE.postPerPage;
  const startPost = lastPost - SITE.postPerPage;
  const paginatedPosts = sortedPosts.slice(startPost, lastPost);
  return renderTemplate`${post ? renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post })}` : renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNum": currentPage, "totalPages": totalPages.length })}`}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/posts/[slug].astro");

const $$file$3 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/posts/[slug].astro";
const $$url$3 = "/posts/[slug]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file$3,
    getStaticPaths: getStaticPaths$2,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const getUniqueTags = (posts) => {
  let tags = [];
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  filteredPosts.forEach((post) => {
    tags = [...tags, ...post.data.tags].map((tag) => slugifyStr(tag)).filter(
      (value, index, self) => self.indexOf(value) === index
    );
  });
  return tags;
};

const $$Astro$2 = createAstro("https://astro-paper.pages.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MinorHeader", $$MinorHeader, { "activeNav": "tags" })}${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate`${maybeRenderHead($$result3)}<ul>
      ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "name": tag, "size": "lg" })}`)}
    </ul>` })}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/tags/index.astro");

const $$file$2 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/tags/index.astro";
const $$url$2 = "/tags";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const getPostsByTag = (posts, tag) => posts.filter((post) => slugifyAll(post.data.tags).includes(tag));

const $$Astro$1 = createAstro("https://astro-paper.pages.dev/");
async function getStaticPaths$1() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.map((tag) => {
    return {
      params: { tag },
      props: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagPosts = getPostsByTag(posts, tag);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag:${tag} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "MinorHeader", $$MinorHeader, { "activeNav": "tags" })}${renderComponent($$result2, "Main", $$Main, { "pageTitle": `Tag:${tag}`, "pageDesc": `All the articles with the tag "${tag}".` }, { "default": ($$result3) => renderTemplate`${maybeRenderHead($$result3)}<ul>
      ${tagPosts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data })}`)}
    </ul>` })}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/tags/[tag].astro");

const $$file$1 = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/tags/[tag].astro";
const $$url$1 = "/tags/[tag]";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found | ${SITE.title}`, "class": "astro-ZETDM5MD" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "class": "astro-ZETDM5MD" })}${maybeRenderHead($$result2)}<main id="main-content" class="astro-ZETDM5MD">
    <div class="not-found-wrapper astro-ZETDM5MD">
      <h1 aria-label="404 Not Found" class="astro-ZETDM5MD">404</h1>
      <span aria-hidden="true" class="astro-ZETDM5MD">¯\\_(ツ)_/¯</span>
      <p class="astro-ZETDM5MD">Page Not Found</p>
      ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "className": "my-6 underline decoration-dashed underline-offset-8 text-lg astro-ZETDM5MD" }, { "default": ($$result3) => renderTemplate`
        Go back home
      ` })}
    </div>
  </main>${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-ZETDM5MD" })}` })}`;
}, "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/404.astro");

const $$file = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/pages/404.astro";
const $$url = "/404";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const fetchFonts = async () => {
  const fontFileRegular = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf");
  const fontRegular2 = await fontFileRegular.arrayBuffer();
  const fontFileBold = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf");
  const fontBold2 = await fontFileBold.arrayBuffer();
  return {
    fontRegular: fontRegular2,
    fontBold: fontBold2
  };
};
const {
  fontRegular,
  fontBold
} = await fetchFonts();
const ogImage = (text) => {
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: "#fefbfb",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: [/* @__PURE__ */ jsx("div", {
      style: {
        position: "absolute",
        top: "-1px",
        right: "-1px",
        border: "4px solid #000",
        background: "#ecebeb",
        opacity: "0.9",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        margin: "2.5rem",
        width: "88%",
        height: "80%"
      }
    }), /* @__PURE__ */ jsx("div", {
      style: {
        border: "4px solid #000",
        background: "#fefbfb",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        margin: "2rem",
        width: "88%",
        height: "80%"
      },
      children: /* @__PURE__ */ jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "20px",
          width: "90%",
          height: "90%"
        },
        children: [/* @__PURE__ */ jsx("p", {
          style: {
            fontSize: 72,
            fontWeight: "bold",
            maxHeight: "84%",
            overflow: "hidden"
          },
          children: text
        }), /* @__PURE__ */ jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "8px",
            fontSize: 28
          },
          children: [/* @__PURE__ */ jsxs("span", {
            children: ["by", " ", /* @__PURE__ */ jsx("span", {
              style: {
                color: "transparent"
              },
              children: '"'
            }), /* @__PURE__ */ jsx("span", {
              style: {
                overflow: "hidden",
                fontWeight: "bold"
              },
              children: SITE.author
            })]
          }), /* @__PURE__ */ jsx("span", {
            style: {
              overflow: "hidden",
              fontWeight: "bold"
            },
            children: SITE.title
          })]
        })]
      })
    })]
  });
};
const options = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [{
    name: "IBM Plex Mono",
    data: fontRegular,
    weight: 400,
    style: "normal"
  }, {
    name: "IBM Plex Mono",
    data: fontBold,
    weight: 600,
    style: "normal"
  }]
};
const generateOgImage = async (mytext = SITE.title) => {
  const svg = await satori(ogImage(mytext), options);
  {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    console.info("Output PNG Image  :", `${mytext}.png`);
    await writeFile(`./dist/${mytext}.png`, pngBuffer);
  }
  return svg;
};
__astro_tag_component__(generateOgImage, "@astrojs/react");

const get = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle)
});
const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);
function getStaticPaths() {
  return posts.filter(({ data }) => !data.ogImage).map(({ data }) => ({
    params: { ogTitle: data.title }
  }));
}

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get,
    getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i };
