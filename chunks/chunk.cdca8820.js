const id = "tailwind-typography.md";
const collection = "blog";
const slug = "tailwind-typography";
const body = "\n> This article is from [TailwindLabs](https://tailwindcss-typography.vercel.app/). I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.\n\nBy default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you _really are_ just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.\n\nWe get lots of complaints about it actually, with people regularly asking us things like:\n\n> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?\n> We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a `p` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.\n\nThe `@tailwindcss/typography` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.\n\nIt adds a new `prose` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:\n\n```html\n<article class=\"prose\">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread\n    with cheese to their children, with the food earning such an iconic status\n    in our culture that kids will often dress up as warm, cheesy loaf for\n    Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a\n    series of rabies cases springing up around the country.\n  </p>\n  <!-- ... -->\n</article>\n```\n\nFor more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).\n\n---\n\n## What to expect from here on out\n\nWhat follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.\n\nIt's important to cover all of these use cases for a few reasons:\n\n1. We want everything to look good out of the box.\n2. Really just the first reason, that's the whole point of the plugin.\n3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.\n\nNow we're going to try out another header style.\n\n### Typography should be easy\n\nSo that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.\n\nSomething a wise person once told me about typography is:\n\n> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.\n> It's probably important that images look okay here by default as well:\n\n<figure>\n  <img\n    src=\"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80\"\n    alt=\"\"\n  />\n  <figcaption>\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n    classical Latin literature from 45 BC, making it over 2000 years old.\n  </figcaption>\n</figure>\n\nNow I'm going to show you an example of an unordered list to make sure that looks good, too:\n\n- So here is the first item in this list.\n- In this example we're keeping the items short.\n- Later, we'll use longer, more complex list items.\n\nAnd that's the end of this section.\n\n## What if we stack headings?\n\n### We should make sure that looks good, too.\n\nSometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.\n\n### When a heading comes after a paragraph …\n\nWhen a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.\n\n- **I often do this thing where list items have headings.**\n\n  For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.\n\n  I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.\n\n- **Since this is a list, I need at least two items.**\n\n  I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.\n\n- **It's not a bad idea to add a third item either.**\n\n  I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.\n\nAfter this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.\n\n## Code should look okay by default.\n\nI think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.\n\nHere's what a default `tailwind.config.js` file looks like at the time of writing:\n\n```js\nmodule.exports = {\n  purge: [],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n};\n```\n\nHopefully that looks good enough to you.\n\n### What about nested lists?\n\nNested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.\n\n1. **Nested lists are rarely a good idea.**\n   - You might feel like you are being really \"organized\" or something but you are just creating a gross shape on the screen that is hard to read.\n   - Nested navigation in UIs is a bad idea too, keep things as flat as possible.\n   - Nesting tons of folders in your source code is also not helpful.\n2. **Since we need to have more items, here's another one.**\n   - I'm not sure if we'll bother styling more than two levels deep.\n   - Two is already too much, three is guaranteed to be a bad idea.\n   - If you nest four levels deep you belong in prison.\n3. **Two items isn't really a list, three is good though.**\n   - Again please don't nest lists if you want people to actually read your content.\n   - Nobody wants to look at this.\n   - I'm upset that we even have to bother styling this.\n\nThe most annoying thing about lists in Markdown is that `<li>` elements aren't given a child `<p>` tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.\n\n- **For example, here's another nested list.**\n\n  But this time with a second paragraph.\n\n  - These list items won't have `<p>` tags\n  - Because they are only one line each\n\n- **But in this second top-level list item, they will.**\n\n  This is especially annoying because of the spacing on this paragraph.\n\n  - As you can see here, because I've added a second line, this list item now has a `<p>` tag.\n\n    This is the second line I'm talking about by the way.\n\n  - Finally here's another list item so it's more like a list.\n\n- A closing list item, but with no nested list, because why not?\n\nAnd finally a sentence to close off this section.\n\n## There are other elements we need to style\n\nI almost forgot to mention links, like [this link to the Tailwind CSS website](https://tailwindcss.com). We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.\n\nWe even included table styles, check it out:\n\n| Wrestler                | Origin       | Finisher           |\n| ----------------------- | ------------ | ------------------ |\n| Bret \"The Hitman\" Hart  | Calgary, AB  | Sharpshooter       |\n| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |\n| Randy Savage            | Sarasota, FL | Elbow Drop         |\n| Vader                   | Boulder, CO  | Vader Bomb         |\n| Razor Ramon             | Chuluota, FL | Razor's Edge       |\n\nWe also need to make sure inline code looks good, like if I wanted to talk about `<span>` elements or tell you the good news about `@tailwindcss/typography`.\n\n### Sometimes I even use `code` in headings\n\nEven though it's probably a bad idea, and historically I've had a hard time making it look good. This _\"wrap the code blocks in backticks\"_ trick works pretty well though really.\n\nAnother thing I've done in the past is put a `code` tag inside of a link, like if I wanted to tell you about the [`tailwindcss/docs`](https://github.com/tailwindcss/docs) repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.\n\n#### We haven't used an `h4` yet\n\nBut now we have. Please don't use `h5` or `h6` in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a `before` pseudo-element to scream at you if you use an `h5` or `h6`.\n\nWe don't style them at all out of the box because `h4` elements are already so small that they are the same size as the body copy. What are we supposed to do with an `h5`, make it _smaller_ than the body copy? No thanks.\n\n### We still need to think about stacked headings though.\n\n#### Let's make sure we don't screw that up with `h4` elements, either.\n\nPhew, with any luck we have styled the headings above this text and they look pretty good.\n\nLet's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.\n\nWhat I've written here is probably long enough, but adding this final sentence can't hurt.\n";
const data = {author:"Sat Naing",pubDatetime:new Date(1656986751000),title:"Tailwind Typography Plugin",featured:false,draft:true,tags:["TypeScript","Astro"],ogImage:"",description:"EXAMPLE POST: About Tailwind Typography Plugin and how you can use it effectively."};
const _internal = {
	filePath: "/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/tailwind-typography.md",
	rawData: "\ntitle: Tailwind Typography Plugin\nauthor: Sat Naing\npubDatetime: 2022-07-05T02:05:51Z\nfeatured: false\ndraft: true\ntags:\n  - TypeScript\n  - Astro\nogImage: \"\"\ndescription: \"EXAMPLE POST: About Tailwind Typography Plugin and how you can use it effectively.\"",
};

export { _internal, body, collection, data, id, slug };
