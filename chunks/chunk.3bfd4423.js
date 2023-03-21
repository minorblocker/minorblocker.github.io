import{i as e,F as t}from"./chunk.8ef09eaa.js";let html='<p>New feature in AstroPaper v1.4.0, introducing dynamic OG image generation for blog posts.</p>\n<h2 id="table-of-contents">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href="#intro">Intro</a></li>\n<li><a href="#defaultstatic-og-image-the-old-way">Default/Static OG image (the old way)</a></li>\n<li><a href="#dynamic-og-image">Dynamic OG Image</a></li>\n<li><a href="#anatomy-of-astropaper-dynamic-og-image">Anatomy of AstroPaper dynamic OG image</a></li>\n<li><a href="#limitations">Limitations</a></li>\n</ul>\n<p></p></details><p></p>\n<h2 id="intro">Intro</h2>\n<p>OG images (aka Social Images) play an important role in social media engagements. In case you don’t know what OG image means, it is an image displayed whenever we share our website URL on social media such as Facebook, Discord etc.</p>\n<blockquote>\n<p>The Social Image used for Twitter is technically not called OG image. However, in this post, I’ll be using the term OG image for all types of Social Images.</p>\n</blockquote>\n<h2 id="defaultstatic-og-image-the-old-way">Default/Static OG image (the old way)</h2>\n<p>AstroPaper already provided a way to add an OG image to a blog post. The author can specify the OG image in the frontmatter <code>ogImage</code>. Even when the author doesn’t define the OG image in the frontmatter, the default OG image will be used as a fallback (in this case <code>public/astropaper-og.jpg</code>). But the problem is that the default OG image is static, which means every blog post that does not include an OG image in the frontmatter will always use the same default OG image despite each post title/content being different from others.</p>\n<h2 id="dynamic-og-image">Dynamic OG Image</h2>\n<p>Generating a dynamic OG image for each post allows the author to avoid specifying an OG image for every single blog post. Besides, this will prevent the fallback OG image from being identical to all blog posts.</p>\n<p>In AstroPaper v1.4.0, Vercel’s <a href="https://github.com/vercel/satori">Satori</a> package is used for dynamic OG image generation.</p>\n<p>Dynamic OG images will be generated at build time for blog posts that</p>\n<ul>\n<li>don’t include OG image in the frontmatter</li>\n<li>are not marked as draft.</li>\n</ul>\n<h2 id="anatomy-of-astropaper-dynamic-og-image">Anatomy of AstroPaper dynamic OG image</h2>\n<p>Dynamic OG image of AstroPaper includes <em>the blog post title</em>, <em>author name</em> and <em>site title</em>. Author name and site title will be retrieved via <code>SITE.author</code> and <code>SITE.title</code> of <strong>“src/config.ts”</strong> file. The title is generated from the blog post frontmatter <code>title</code>.<br>\n<img src="https://user-images.githubusercontent.com/53733092/209704501-e9c2236a-3f4d-4c67-bab3-025aebd63382.png" alt="Example Dynamic OG Image link"></p>\n<h2 id="limitations">Limitations</h2>\n<p>At the time of writing this, <a href="https://github.com/vercel/satori">Satori</a> is fairly new and has not reached major release yet. So, there are still some limitations to this dynamic OG image feature.</p>\n<ul>\n<li>If you have Blog posts with non-English titles, you have to set <code>embedFonts</code> option to <code>false</code> (file: <code>src/utils/generateOgImage.tsx</code>). Even after this, the OG image might not be displayed very well.</li>\n<li>Besides, RTL languages are not supported yet.</li>\n<li><a href="https://github.com/vercel/satori#emojis">Using emoji</a> in the title might be a little bit tricky.</li>\n<li>Sadly, this new dynamic OG image generation feature cannot be used for Twitter social images since <code>svg</code> image type is not supported for Twitter Cards.</li>\n</ul>',frontmatter={author:"Sat Naing",pubDatetime:"2022-12-28T04:59:04.866Z",title:"Dynamic OG image generation in AstroPaper blog posts",postSlug:"dynamic-og-image-generation-in-astropaper-blog-posts",featured:!1,draft:!0,tags:["docs","release"],ogImage:"",description:"New feature in AstroPaper v1.4.0, introducing dynamic OG image generation for blog posts."},file="/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/dynamic-og-images.md",url=void 0;function rawContent(){return"\nNew feature in AstroPaper v1.4.0, introducing dynamic OG image generation for blog posts.\n\n## Table of contents\n\n## Intro\n\nOG images (aka Social Images) play an important role in social media engagements. In case you don't know what OG image means, it is an image displayed whenever we share our website URL on social media such as Facebook, Discord etc.\n\n> The Social Image used for Twitter is technically not called OG image. However, in this post, I'll be using the term OG image for all types of Social Images.\n\n## Default/Static OG image (the old way)\n\nAstroPaper already provided a way to add an OG image to a blog post. The author can specify the OG image in the frontmatter `ogImage`. Even when the author doesn't define the OG image in the frontmatter, the default OG image will be used as a fallback (in this case `public/astropaper-og.jpg`). But the problem is that the default OG image is static, which means every blog post that does not include an OG image in the frontmatter will always use the same default OG image despite each post title/content being different from others.\n\n## Dynamic OG Image\n\nGenerating a dynamic OG image for each post allows the author to avoid specifying an OG image for every single blog post. Besides, this will prevent the fallback OG image from being identical to all blog posts.\n\nIn AstroPaper v1.4.0, Vercel's [Satori](https://github.com/vercel/satori) package is used for dynamic OG image generation.\n\nDynamic OG images will be generated at build time for blog posts that\n\n- don't include OG image in the frontmatter\n- are not marked as draft.\n\n## Anatomy of AstroPaper dynamic OG image\n\nDynamic OG image of AstroPaper includes _the blog post title_, _author name_ and _site title_. Author name and site title will be retrieved via `SITE.author` and `SITE.title` of **\"src/config.ts\"** file. The title is generated from the blog post frontmatter `title`.  \n![Example Dynamic OG Image link](https://user-images.githubusercontent.com/53733092/209704501-e9c2236a-3f4d-4c67-bab3-025aebd63382.png)\n\n## Limitations\n\nAt the time of writing this, [Satori](https://github.com/vercel/satori) is fairly new and has not reached major release yet. So, there are still some limitations to this dynamic OG image feature.\n\n- If you have Blog posts with non-English titles, you have to set `embedFonts` option to `false` (file: `src/utils/generateOgImage.tsx`). Even after this, the OG image might not be displayed very well.\n- Besides, RTL languages are not supported yet.\n- [Using emoji](https://github.com/vercel/satori#emojis) in the title might be a little bit tricky.\n- Sadly, this new dynamic OG image generation feature cannot be used for Twitter social images since `svg` image type is not supported for Twitter Cards.\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"table-of-contents",text:"Table of contents"},{depth:2,slug:"intro",text:"Intro"},{depth:2,slug:"defaultstatic-og-image-the-old-way",text:"Default/Static OG image (the old way)"},{depth:2,slug:"dynamic-og-image",text:"Dynamic OG Image"},{depth:2,slug:"anatomy-of-astropaper-dynamic-og-image",text:"Anatomy of AstroPaper dynamic OG image"},{depth:2,slug:"limitations",text:"Limitations"}]}async function Content(){let{layout:a,...i}=frontmatter;i.file=file,i.url=url;let n=e(t,{"set:html":html});return n}Content[Symbol.for("astro.needsHeadRendering")]=!0;export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};