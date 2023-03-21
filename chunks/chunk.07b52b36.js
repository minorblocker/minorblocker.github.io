import { i as createVNode, F as Fragment } from './chunk.8ef09eaa.js';

const html = "<p>…</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #282c34; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\"><code><span class=\"line\"><span style=\"color: #C678DD\">function</span><span style=\"color: #ABB2BF\"> </span><span style=\"color: #61AFEF\">name</span><span style=\"color: #ABB2BF\">() {</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #ABB2BF\">}</span></span></code></pre>";

				const frontmatter = {"author":"Sat Naing","pubDatetime":"2023-01-30T15:57:52.737Z","title":"Wheels of Time","postSlug":"wheels-of-time","featured":true,"draft":false,"ogImage":"https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png","tags":["system","operating-system"],"description":"..."};
				const file = "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/wheels-of-time.md";
				const url = undefined;
				function rawContent() {
					return "\n...\n```ts\nfunction name() {\n\n}\n```\n";
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
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
