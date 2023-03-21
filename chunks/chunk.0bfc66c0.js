import { i as createVNode, F as Fragment } from './chunk.8ef09eaa.js';

const html = "<p>My experience about developing my first portfolio website and a blog using NextJS and a headless CMS.</p>\n<h2 id=\"motivation\">Motivation</h2>\n<p>rec 1</p>";

				const frontmatter = {"title":"My recent article 2","author":"Sat Naing","pubDatetime":"2022-06-06T04:06:31.000Z","postSlug":"my-recent-2","featured":false,"draft":true,"tags":["TypeScript","Astro"],"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est"};
				const file = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/rec-2.md";
				const url = undefined;
				function rawContent() {
					return "\nMy experience about developing my first portfolio website and a blog using NextJS and a headless CMS.\n\n## Motivation\n\nrec 1\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"motivation","text":"Motivation"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
