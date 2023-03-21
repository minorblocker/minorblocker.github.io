import{i as e,F as t}from"./chunk.8ef09eaa.js";let html='<blockquote>\n<p>This article is originally from my <a href="https://satnaing.dev/blog/posts/how-do-i-develop-my-terminal-portfolio-website-with-react">blog post</a>. I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.</p>\n</blockquote>\n<p>Developing a terminal-like website using ReactJS, TypeScript and Styled-Components. Includes features like autocomplete, multiple themes, command hints etc.</p>\n<p><img src="https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png&#x26;w=2048&#x26;q=75" alt="Sat Naing&#x27;s Terminal Portfolio"></p>\n<h2 id="table-of-contents">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li>\n<p><a href="#intro">Intro</a></p>\n</li>\n<li>\n<p><a href="#tech-stack">Tech Stack</a></p>\n</li>\n<li>\n<p><a href="#features">Features</a></p>\n<ul>\n<li><a href="#multiple-themes">Multiple Themes</a></li>\n<li><a href="#command-line-completion">Command-line Completion</a></li>\n<li><a href="#previous-commands">Previous Commands</a></li>\n<li><a href="#viewclear-command-history">View/Clear Command History</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#outro">Outro</a></p>\n</li>\n<li>\n<p><a href="#project-links">Project Links</a></p>\n</li>\n</ul>\n<p></p></details><p></p>\n<h2 id="intro">Intro</h2>\n<p>Recently, I’ve developed and published my portfolio + a blog. I’m glad I got some good feedback for it. Today, I want to introduce my new terminal-like portfolio website. It is developed using ReactJS, TypeScript. I got this idea from CodePen and YouTube.</p>\n<h2 id="tech-stack">Tech Stack</h2>\n<p>This project is a frontend project without any backend codes. The UI/UX part is designed in Figma. For the frontend user-interface, I chose React over pain JavaScript and NextJS. Why?</p>\n<ul>\n<li>Firstly, I want to write declarative code. Managing HTML DOM using JavaScript imperatively is really tedious.</li>\n<li>Secondly, because it is React!!! It is fast, and reliable.</li>\n<li>Lastly, I don’t need much of the SEO features, routing and image optimization provided by NextJS.</li>\n</ul>\n<p>And of course there’s TypeScript for type checking.</p>\n<p>For styling, I took a different approach than what I usually do. Instead of choosing Pure CSS, Sass, or Utility CSS Framework like TailwindCSS, I chose the CSS-in-JS way (Styled-Components). Although I’ve known about Styled-Components for some time, I’ve never tried it out. So, the writing style and structures of Styled-Components in this project may not be very organized or very good.</p>\n<p>This project doesn’t need very complex state management. I just use ContextAPI in this project for multiple theming and to avoid prop drilling.</p>\n<p>Here’s a quick recap for the tech stack.</p>\n<ul>\n<li>Frontend: <a href="https://reactjs.org/" title="React Website">ReactJS</a>, <a href="https://www.typescriptlang.org/" title="TypeScript Website">TypeScript</a></li>\n<li>Styling: <a href="https://styled-components.com/" title="Styled-Components Website">Styled-Components</a></li>\n<li>UI/UX: <a href="https://figma.com/" title="Figma Website">Figma</a></li>\n<li>State Management: <a href="https://reactjs.org/docs/context.html" title="React ContextAPI">ContextAPI</a></li>\n<li>Deployment: <a href="https://www.netlify.com/" title="Netlify Website">Netlify</a></li>\n</ul>\n<h2 id="features">Features</h2>\n<p>Here are some features of the project.</p>\n<h3 id="multiple-themes">Multiple Themes</h3>\n<p>Users can change multiple themes. At the time of writing this post, there are 5 themes; and more themes will probably be added in the future. The selected theme is saved in local storage so that the theme won’t change on page refresh.</p>\n<p><img src="https://i.ibb.co/fSTCnWB/terminal-portfolio-multiple-themes.gif" alt="Setting different theme"></p>\n<h3 id="command-line-completion">Command-line Completion</h3>\n<p>To look and feel as close to the actual terminal as possible, I put a command-line completion feature which auto fills in partially typed commands by simply pressing ‘Tab’ or ‘Ctrl + i’.</p>\n<p><img src="https://i.ibb.co/CQTGGLF/terminal-autocomplete.gif" alt="Demonstrating command-line completion"></p>\n<h3 id="previous-commands">Previous Commands</h3>\n<p>Users can go back to the previous commands or navigate the previously typed commands by pressing Up &#x26; Down Arrows.</p>\n<p><img src="https://i.ibb.co/vD1pSRv/terminal-up-down.gif" alt="Going back to previous commands with UP Arrow"></p>\n<h3 id="viewclear-command-history">View/Clear Command History</h3>\n<p>previously typed commands can be viewed by typing ‘history’ in the command line. All the command history and terminal screen can be wiped out by typing ‘clear’ or pressing ‘Ctrl + l’.</p>\n<p><img src="https://i.ibb.co/SJBy8Rr/terminal-clear.gif" alt="Clearing the terminal with &#x27;clear&#x27; or &#x27;Ctrl + L&#x27; command"></p>\n<h2 id="outro">Outro</h2>\n<p>This is a really fun project, and one special part of this project is I had to focus on logic rather than user-interface (even though this is kind of a frontend project).</p>\n<h2 id="project-links">Project Links</h2>\n<ul>\n<li>Website: <a href="https://terminal.satnaing.dev/" title="https://terminal.satnaing.dev/">https://terminal.satnaing.dev/</a></li>\n<li>Repo: <a href="https://github.com/satnaing/terminal-portfolio" title="https://github.com/satnaing/terminal-portfolio">https://github.com/satnaing/terminal-portfolio</a></li>\n</ul>',frontmatter={title:"How Do I Develop My Terminal Portfolio Website with React",author:"Sat Naing",pubDatetime:"2022-06-09T03:42:51.000Z",postSlug:"how-do-i-develop-my-terminal-portfolio-website-with-react",featured:!1,draft:!0,tags:["JavaScript","ReactJS","ContextAPI","Styled-Components","TypeScript"],description:"EXAMPLE POST: Developing a terminal-like website using ReactJS, TypeScript and Styled-Components. Includes features like autocomplete, multiple themes, command hints etc."},file="/home/runner/work/minorblocker.github.io/minorblocker.github.io/src/content/blog/terminal-development.md",url=void 0;function rawContent(){return'\n> This article is originally from my [blog post](https://satnaing.dev/blog/posts/how-do-i-develop-my-terminal-portfolio-website-with-react). I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.\n\nDeveloping a terminal-like website using ReactJS, TypeScript and Styled-Components. Includes features like autocomplete, multiple themes, command hints etc.\n\n![Sat Naing\'s Terminal Portfolio](https://satnaing.dev/_ipx/w_2048,q_75/https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png?url=https%3A%2F%2Fres.cloudinary.com%2Fnoezectz%2Fimage%2Fupload%2Fv1654754125%2FSatNaing%2Fterminal-screenshot_gu3kkc.png&w=2048&q=75)\n\n## Table of contents\n\n## Intro\n\nRecently, I\'ve developed and published my portfolio + a blog. I’m glad I got some good feedback for it. Today, I want to introduce my new terminal-like portfolio website. It is developed using ReactJS, TypeScript. I got this idea from CodePen and YouTube.\n\n## Tech Stack\n\nThis project is a frontend project without any backend codes. The UI/UX part is designed in Figma. For the frontend user-interface, I chose React over pain JavaScript and NextJS. Why?\n\n- Firstly, I want to write declarative code. Managing HTML DOM using JavaScript imperatively is really tedious.\n- Secondly, because it is React!!! It is fast, and reliable.\n- Lastly, I don’t need much of the SEO features, routing and image optimization provided by NextJS.\n\nAnd of course there\'s TypeScript for type checking.\n\nFor styling, I took a different approach than what I usually do. Instead of choosing Pure CSS, Sass, or Utility CSS Framework like TailwindCSS, I chose the CSS-in-JS way (Styled-Components). Although I’ve known about Styled-Components for some time, I’ve never tried it out. So, the writing style and structures of Styled-Components in this project may not be very organized or very good.\n\nThis project doesn’t need very complex state management. I just use ContextAPI in this project for multiple theming and to avoid prop drilling.\n\nHere’s a quick recap for the tech stack.\n\n- Frontend: [ReactJS](https://reactjs.org/ "React Website"), [TypeScript](https://www.typescriptlang.org/ "TypeScript Website")\n- Styling: [Styled-Components](https://styled-components.com/ "Styled-Components Website")\n- UI/UX: [Figma](https://figma.com/ "Figma Website")\n- State Management: [ContextAPI](https://reactjs.org/docs/context.html "React ContextAPI")\n- Deployment: [Netlify](https://www.netlify.com/ "Netlify Website")\n\n## Features\n\nHere are some features of the project.\n\n### Multiple Themes\n\nUsers can change multiple themes. At the time of writing this post, there are 5 themes; and more themes will probably be added in the future. The selected theme is saved in local storage so that the theme won’t change on page refresh.\n\n![Setting different theme](https://i.ibb.co/fSTCnWB/terminal-portfolio-multiple-themes.gif)\n\n### Command-line Completion\n\nTo look and feel as close to the actual terminal as possible, I put a command-line completion feature which auto fills in partially typed commands by simply pressing ‘Tab’ or ‘Ctrl + i’.\n\n![Demonstrating command-line completion](https://i.ibb.co/CQTGGLF/terminal-autocomplete.gif)\n\n### Previous Commands\n\nUsers can go back to the previous commands or navigate the previously typed commands by pressing Up & Down Arrows.\n\n![Going back to previous commands with UP Arrow](https://i.ibb.co/vD1pSRv/terminal-up-down.gif)\n\n### View/Clear Command History\n\npreviously typed commands can be viewed by typing ‘history’ in the command line. All the command history and terminal screen can be wiped out by typing ‘clear’ or pressing ‘Ctrl + l’.\n\n![Clearing the terminal with \'clear\' or \'Ctrl + L\' command](https://i.ibb.co/SJBy8Rr/terminal-clear.gif)\n\n## Outro\n\nThis is a really fun project, and one special part of this project is I had to focus on logic rather than user-interface (even though this is kind of a frontend project).\n\n## Project Links\n\n- Website: [https://terminal.satnaing.dev/](https://terminal.satnaing.dev/ "https://terminal.satnaing.dev/")\n- Repo: [https://github.com/satnaing/terminal-portfolio](https://github.com/satnaing/terminal-portfolio "https://github.com/satnaing/terminal-portfolio")\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"table-of-contents",text:"Table of contents"},{depth:2,slug:"intro",text:"Intro"},{depth:2,slug:"tech-stack",text:"Tech Stack"},{depth:2,slug:"features",text:"Features"},{depth:3,slug:"multiple-themes",text:"Multiple Themes"},{depth:3,slug:"command-line-completion",text:"Command-line Completion"},{depth:3,slug:"previous-commands",text:"Previous Commands"},{depth:3,slug:"viewclear-command-history",text:"View/Clear Command History"},{depth:2,slug:"outro",text:"Outro"},{depth:2,slug:"project-links",text:"Project Links"}]}async function Content(){let{layout:n,...o}=frontmatter;o.file=file,o.url=url;let i=e(t,{"set:html":html});return i}Content[Symbol.for("astro.needsHeadRendering")]=!0;export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};