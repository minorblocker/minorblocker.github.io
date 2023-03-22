import{i as e,F as t}from"./chunk.8ef09eaa.js";let html='<p>Here are some rules/recommendations, tips &#x26; ticks for creating new posts in AstroPaper blog theme.</p>\n<h2 id="table-of-contents">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li>\n<p><a href="#frontmatter">Frontmatter</a></p>\n<ul>\n<li><a href="#sample-frontmatter">Sample Frontmatter</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#adding-table-of-contents">Adding table of contents</a></p>\n</li>\n<li>\n<p><a href="#headings">Headings</a></p>\n</li>\n<li>\n<p><a href="#bonus">Bonus</a></p>\n<ul>\n<li><a href="#image-compression">Image compression</a></li>\n<li><a href="#og-image">OG Image</a></li>\n</ul>\n</li>\n</ul>\n<p></p></details><p></p>\n<h2 id="frontmatter">Frontmatter</h2>\n<p>Frontmatter is the main place to store some important information about the post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in <a href="https://docs.astro.build/en/guides/markdown-content/">astro documentation</a>.</p>\n<p>Here is the list of frontmatter property for each post.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Property</th><th>Description</th><th>Remark</th></tr></thead><tbody><tr><td><strong><em>title</em></strong></td><td>Title of the post. (h1)</td><td>required<sup>*</sup></td></tr><tr><td><strong><em>description</em></strong></td><td>Description of the post. Used in post excerpt and site description of the post.</td><td>required<sup>*</sup></td></tr><tr><td><strong><em>pubDatetime</em></strong></td><td>Published datetime in ISO 8601 format.</td><td>required<sup>*</sup></td></tr><tr><td><strong><em>author</em></strong></td><td>Author of the post.</td><td>default = SITE.author</td></tr><tr><td><strong><em>postSlug</em></strong></td><td>Slug for the post. Will automatically be slugified.</td><td>default = slugified title</td></tr><tr><td><strong><em>featured</em></strong></td><td>Whether or not display this post in featured section of home page</td><td>default = false</td></tr><tr><td><strong><em>draft</em></strong></td><td>Mark this post ‘unpublished’.</td><td>default = false</td></tr><tr><td><strong><em>tags</em></strong></td><td>Related keywords for this post. Written in array yaml format.</td><td>default = others</td></tr><tr><td><strong><em>ogImage</em></strong></td><td>OG image of the post. Useful for social media sharing and SEO.</td><td>default = SITE.ogImage or generated SVG image</td></tr></tbody></table>\n<p>Only <code>title</code>, <code>description</code> and <code>pubDatetime</code> fields in frontmatter must be specified.</p>\n<p>Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.</p>\n<p><code>slug</code> is the unique identifier of the url. Thus, <code>slug</code> must be unique and different from other posts. The whitespace of <code>slug</code> needs to be separated with <code>-</code> or <code>_</code> but <code>-</code> is recommended. However, even if you don’t write the correct slug, AstroPaper will automatically slugify your incorrect slug. If slug is not specified, the slugified title of the post will be used as slug.</p>\n<p>If you omit <code>tags</code> in a blog post (in other words, if no tag is specified), the default tag <code>others</code> will be used as a tag for that post. You can set the default tag in the <code>/src/content/_schemas.ts</code> file.</p>\n<div data-rehype-pretty-code-fragment=""><pre data-language="ts" data-theme="default"><code data-language="ts" data-theme="default"><span class="line"><span style="color: #7F848E">// src/contents/_schemas.ts</span></span>\n<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">blogSchema</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">z</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">object</span><span style="color: #ABB2BF">({</span></span>\n<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E">// ---</span></span>\n<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E">// replace "others" with whatever you want</span></span>\n<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">tags</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">z</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">array</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">z</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">string</span><span style="color: #ABB2BF">()).</span><span style="color: #61AFEF">default</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">"others"</span><span style="color: #ABB2BF">]),</span></span>\n<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">ogImage</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">z</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">string</span><span style="color: #ABB2BF">().</span><span style="color: #61AFEF">optional</span><span style="color: #ABB2BF">(),</span></span>\n<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">description</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">z</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">string</span><span style="color: #ABB2BF">(),</span></span>\n<span class="line"><span style="color: #ABB2BF">});</span></span></code></pre></div>\n<h3 id="sample-frontmatter">Sample Frontmatter</h3>\n<p>Here is the sample frontmatter for a post.</p>\n<div data-rehype-pretty-code-fragment=""><pre data-language="yaml" data-theme="default"><code data-language="yaml" data-theme="default"><span class="line"><span style="color: #7F848E"># src/contents/sample-post.md</span></span>\n<span class="line"><span style="color: #ABB2BF">---</span></span>\n<span class="line"><span style="color: #E06C75">title</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">The title of the post</span></span>\n<span class="line"><span style="color: #E06C75">author</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">your name</span></span>\n<span class="line"><span style="color: #E06C75">pubDatetime</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2022-09-21T05:17:19Z</span></span>\n<span class="line"><span style="color: #E06C75">postSlug</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">the-title-of-the-post</span></span>\n<span class="line"><span style="color: #E06C75">featured</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">true</span></span>\n<span class="line"><span style="color: #E06C75">draft</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">false</span></span>\n<span class="line"><span style="color: #E06C75">tags</span><span style="color: #ABB2BF">:</span></span>\n<span class="line"><span style="color: #ABB2BF">  - </span><span style="color: #98C379">some</span></span>\n<span class="line"><span style="color: #ABB2BF">  - </span><span style="color: #98C379">example</span></span>\n<span class="line"><span style="color: #ABB2BF">  - </span><span style="color: #98C379">tags</span></span>\n<span class="line"><span style="color: #E06C75">ogImage</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">""</span></span>\n<span class="line"><span style="color: #E06C75">description</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">This is the example description of the example post.</span></span>\n<span class="line"><span style="color: #ABB2BF">---</span></span></code></pre></div>\n<h2 id="adding-table-of-contents">Adding table of contents</h2>\n<p>By default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.</p>\n<p>Write <code>Table of contents</code> in h2 format (## in markdown) and place it where you want it to be appeared on the post.</p>\n<p>For instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.</p>\n<div data-rehype-pretty-code-fragment=""><pre data-language="md" data-theme="default"><code data-language="md" data-theme="default"><span class="line"><span style="color: #ABB2BF">---</span></span>\n<span class="line"><span style="color: #7F848E"># some frontmatter</span></span>\n<span class="line"><span style="color: #ABB2BF">---</span></span>\n<span class="line"> </span>\n<span class="line"><span style="color: #ABB2BF">Here are some recommendations, tips &#x26; ticks for creating new posts in AstroPaper blog theme.</span></span>\n<span class="line"> </span>\n<span class="line"><span style="color: #E06C75">## Table of contents</span></span>\n<span class="line"> </span>\n<span class="line"><span style="color: #7F848E">&#x3C;!-- the rest of the post --></span></span></code></pre></div>\n<h2 id="headings">Headings</h2>\n<p>There’s one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 ~ h6.</p>\n<p>This rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.</p>\n<h2 id="bonus">Bonus</h2>\n<h3 id="image-compression">Image compression</h3>\n<p>When you put images in the blog post, it is recommended that the image is compressed. This will affect the overall performance of the website.</p>\n<p>My recommendation for image compression sites.</p>\n<ul>\n<li><a href="https://tinypng.com/">TinyPng</a></li>\n<li><a href="https://tinyjpg.com/">TinyJPG</a></li>\n</ul>\n<h3 id="og-image">OG Image</h3>\n<p>The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is <strong><em>1200 X 640</em></strong> px.</p>\n<blockquote>\n<p>Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out <a href="https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/">the announcement</a>.</p>\n</blockquote>',frontmatter={author:"Sat Naing",pubDatetime:"2022-09-23T15:22:00.000Z",title:"Adding new posts in AstroPaper theme",postSlug:"adding-new-posts-in-astropaper-theme",featured:!0,draft:!0,tags:["docs"],ogImage:"",description:"Some rules & recommendations for creating or adding new posts using AstroPaper theme."},file="/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/adding-new-post.md",url=void 0;function rawContent(){return'\nHere are some rules/recommendations, tips & ticks for creating new posts in AstroPaper blog theme.\n\n## Table of contents\n\n## Frontmatter\n\nFrontmatter is the main place to store some important information about the post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).\n\nHere is the list of frontmatter property for each post.\n\n| Property          | Description                                                                     | Remark                                        |\n| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------- |\n| **_title_**       | Title of the post. (h1)                                                         | required<sup>\\*</sup>                         |\n| **_description_** | Description of the post. Used in post excerpt and site description of the post. | required<sup>\\*</sup>                         |\n| **_pubDatetime_** | Published datetime in ISO 8601 format.                                          | required<sup>\\*</sup>                         |\n| **_author_**      | Author of the post.                                                             | default = SITE.author                         |\n| **_postSlug_**    | Slug for the post. Will automatically be slugified.                             | default = slugified title                     |\n| **_featured_**    | Whether or not display this post in featured section of home page               | default = false                               |\n| **_draft_**       | Mark this post \'unpublished\'.                                                   | default = false                               |\n| **_tags_**        | Related keywords for this post. Written in array yaml format.                   | default = others                              |\n| **_ogImage_**     | OG image of the post. Useful for social media sharing and SEO.                  | default = SITE.ogImage or generated SVG image |\n\nOnly `title`, `description` and `pubDatetime` fields in frontmatter must be specified.\n\nTitle and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.\n\n`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` needs to be separated with `-` or `_` but `-` is recommended. However, even if you don\'t write the correct slug, AstroPaper will automatically slugify your incorrect slug. If slug is not specified, the slugified title of the post will be used as slug.\n\nIf you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/_schemas.ts` file.\n\n```ts\n// src/contents/_schemas.ts\nexport const blogSchema = z.object({\n  // ---\n  // replace "others" with whatever you want\n  tags: z.array(z.string()).default(["others"]),\n  ogImage: z.string().optional(),\n  description: z.string(),\n});\n```\n\n### Sample Frontmatter\n\nHere is the sample frontmatter for a post.\n\n```yaml\n# src/contents/sample-post.md\n---\ntitle: The title of the post\nauthor: your name\npubDatetime: 2022-09-21T05:17:19Z\npostSlug: the-title-of-the-post\nfeatured: true\ndraft: false\ntags:\n  - some\n  - example\n  - tags\nogImage: ""\ndescription: This is the example description of the example post.\n---\n```\n\n## Adding table of contents\n\nBy default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.\n\nWrite `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.\n\nFor instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.\n\n```md\n---\n# some frontmatter\n---\n\nHere are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.\n\n## Table of contents\n\n<!-- the rest of the post -->\n```\n\n## Headings\n\nThere\'s one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 \\~ h6.\n\nThis rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.\n\n## Bonus\n\n### Image compression\n\nWhen you put images in the blog post, it is recommended that the image is compressed. This will affect the overall performance of the website.\n\nMy recommendation for image compression sites.\n\n- [TinyPng](https://tinypng.com/)\n- [TinyJPG](https://tinyjpg.com/)\n\n### OG Image\n\nThe default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.\n\n> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"table-of-contents",text:"Table of contents"},{depth:2,slug:"frontmatter",text:"Frontmatter"},{depth:3,slug:"sample-frontmatter",text:"Sample Frontmatter"},{depth:2,slug:"adding-table-of-contents",text:"Adding table of contents"},{depth:2,slug:"headings",text:"Headings"},{depth:2,slug:"bonus",text:"Bonus"},{depth:3,slug:"image-compression",text:"Image compression"},{depth:3,slug:"og-image",text:"OG Image"}]}async function Content(){let{layout:n,...s}=frontmatter;s.file=file,s.url=url;let a=e(t,{"set:html":html});return a}Content[Symbol.for("astro.needsHeadRendering")]=!0;export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};