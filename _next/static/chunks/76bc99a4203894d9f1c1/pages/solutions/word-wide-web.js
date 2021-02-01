_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[114],{"6Lli":function(e,a,s){"use strict";s.r(a);var t=s("MX0m"),n=s.n(t),o=s("q1tI"),i=s.n(o),r=s("MBA7"),l=s("KtV6"),c=s("XwIU"),d=s.n(c),h=s("GZfw"),u=s.n(h),m=i.a.createElement;a.default=function(){return m(i.a.Fragment,null,m(l.b,{title:"Word Wide Web",slug:"word-wide-web",answer:"PANCAKE STACK",authors:"Written by David Hashe and Ivan Wang"},m("div",{className:"jsx-889659338"},m("object",{type:"image/svg+xml",key:1,data:d.a,className:"jsx-889659338"})),m("div",{className:"jsx-889659338"},m("object",{type:"image/svg+xml",key:2,data:u.a,className:"jsx-889659338"})),m("div",{className:"jsx-889659338"},m("p",{className:"jsx-889659338"},"We are presented with a word web with two kinds of edges (directed and undirected) and some nodes filled in. There is also a node labeled with a dot that has directed lines to all other nodes. This node, the title, and the given words all clue that the words in this word web are all top-level domains (TLDs)."," ",m("a",{href:"https://data.iana.org/TLD/tlds-alpha-by-domain.txt",className:"jsx-889659338"},"Full list of TLDs here.")),m("h2",{className:"jsx-889659338"},"Solving the word web"),m("p",{className:"jsx-889659338"},"The lengths of all unknown words are given through the number of blanks in the top section of the node. Sometimes the blanks are split over two lines for space reasons. This is not significant, but we did make sure to always split on a syllable boundary."),m("p",{className:"jsx-889659338"},"The directed edges represent ",m("em",{className:"jsx-889659338"},"concatenation"),'; the directed edge "plus -> one" exists because "plus one" is a common phrase. Not all possible concatenations are necessarily included as edges, because language is hard, but we tried to include the most obvious ones.'),m("p",{className:"jsx-889659338"},"The undirected edges represent ",m("em",{className:"jsx-889659338"},"country borders"),". Country code top-level domains (ccTLDs) are an interesting subset of TLDs. There are some concatenation edges between ccTLDs and regular TLDs, but all ccTLD to ccTLD edges are undirected and represent that the two countries share a land border. All possible country borders edges are included. Some land borders are particularly surprising:",m("ul",{className:"jsx-889659338"},m("li",{className:"jsx-889659338"},"France and Brazil share a border through the French overseas department of"," ",m("a",{href:"https://en.wikipedia.org/wiki/French_Guiana",className:"jsx-889659338"},"French Guiana"),"."),m("li",{className:"jsx-889659338"},"France and the Netherlands share a border through the Caribbean island of"," ",m("a",{href:"https://en.wikipedia.org/wiki/Saint_Martin_(island)",className:"jsx-889659338"},"Saint Martin"),"."),m("li",{className:"jsx-889659338"},"Poland and Russia share a border through the Russian exclave of"," ",m("a",{href:"https://en.wikipedia.org/wiki/Kaliningrad_Oblast",className:"jsx-889659338"},"Kaliningrad Oblast"),"."),m("li",{className:"jsx-889659338"},"Azerbaijan and Turkey share a border through the Azerbaijani exclave of the"," ",m("a",{href:"https://en.wikipedia.org/wiki/Nakhchivan_Autonomous_Republic",className:"jsx-889659338"},"Nakhchivan Autonomous Republic"),"."))),m("p",{className:"jsx-889659338"},"Filling out the word web reveals that the first letters of the words in the orange nodes, when read in reading order from left-to-right and top-to-bottom, spell out ",m("b",{className:"jsx-889659338"},"FILLOMINO"),"."),m("h2",{className:"jsx-889659338"},"Solving the Fillomino"),m("p",{className:"jsx-889659338"},m("a",{href:"https://en.wikipedia.org/wiki/Fillomino",className:"jsx-889659338"},"Fillomino")," is a logic puzzle usually played on a rectangular grid. A grid is just a graph with a regular adjacency structure, so we take the natural extension of Fillomino to an arbitrary graph. A few notes about our Fillomino variant:",m("ul",{className:"jsx-889659338"},m("li",{className:"jsx-889659338"},"All edges are considered undirected for the purpose of connectivity. A -> B <- C could be a connected group of 3s."),m("li",{className:"jsx-889659338"},"Some number groups have multiple numbers given at the start."),m("li",{className:"jsx-889659338"},"Some number groups have no numbers given at the start."),m("li",{className:"jsx-889659338"},"In particular, some 1 groups are unmarked."))),m("p",{className:"jsx-889659338"},"This Fillomino puzzle has minimal clues: removing any one clue makes multiple solutions possible. Because of this, some advanced strategies are needed to solve the puzzle:",m("ul",{className:"jsx-889659338"},m("li",{className:"jsx-889659338"},"Think about how many empty squares are available when deciding whether two numbers are part of the same group or different groups. For example, if you have five available spaces and two non-adjacent nodes marked 3, then they must be part of the same group of 3."),m("li",{className:"jsx-889659338"},"If you have empty space and need to create one or more groups to fill the space, count the total number of available squares for an upper bound on group size and eliminate options based on the numbers of adjacent groups. For example, if you have a triangle of three available squares, a node marked 1 adjacent to one of the triangle nodes, and nodes marked 2 adjacent to the other two triangle nodes, then you know that all three triangle nodes must form a group of 3."),m("li",{className:"jsx-889659338"},"For large groups, you can often mark some members based on the shape of the available space. For example, let's say you have a group of 5 that can expand in only two directions: _ - _ - _ - 5 - _ - _ - _. You can mark _ - _ - 5 - 5 - 5 - _ - _ because the group must expand at least one in each direction."))),m("h2",{className:"jsx-889659338"},"Extraction"),m("p",{className:"jsx-889659338"},"There is a row of unconnected nodes below the word web. The combination of word length, Fillomino number, and (if present) text underneath identifies a specific node in the word web. Text is present underneath all of the ccTLDs because all ccTLDs have length two, which makes it hard to identify them uniquely with only a Fillomino number."),m("p",{className:"jsx-889659338"},'The most surprising text clue is ">1/2 speak a non-',m("a",{href:"https://en.wikipedia.org/wiki/Indo-European_languages",className:"jsx-889659338"},"Indo-European language"),'". While most people think of Paraguay as a Spanish-speaking country, it is officially bilingual, and the indigenous language Guaran\xed is'," ",m("a",{href:"https://en.wikipedia.org/wiki/Languages_of_Paraguay",className:"jsx-889659338"},"spoken by over 90% of the population"),". Bolivia also comes close to meeting this criteria, but"," ",m("a",{href:"https://en.wikipedia.org/wiki/Languages_of_Bolivia",className:"jsx-889659338"},"only 43% of the population speak an indigenous language"),"."),m("p",{className:"jsx-889659338"},"Identifying the nodes gives us ",m("b",{className:"jsx-889659338"},"SY RU PY FOOD PLUS CALL FR AM ES"),". A pancake is a syrupy food, and the stack in a computer process is made up of call frames, so the answer is"," ",m(l.a,null,"PANCAKE STACK"),"."),m(r.a,null,m("p",{className:"jsx-889659338"},"I\u2019ve always been amused and impressed by the interesting range of gTLDs that exists, and the sheer number of concatenated pairs that work together led nicely to a puzzle idea. The idea of a Fillomino extract was proposed later as a neat variant on a logic puzzle, and felt like a cool way to mix together two different puzzle genres."),m("p",{className:"jsx-889659338"},"This puzzle bore some resemblance to the"," ",m("a",{href:"https://puzzlepotluck.com/3/14",className:"jsx-889659338"},"Black Widow")," web in Puzzle Potluck 3, which we solved after the initial ideation of the puzzle. While we wish we had time to implement a similar interactive answer-box (kudos to their web team!), we feel the style of answers (concatenation and borders as opposed to categories and semantic relations) were sufficient to differentiate the two."),m("p",{className:"jsx-889659338"},"On a technical note, the graph images were generated using a custom R+ggplot+ggraph script that consumed several CSV files specifying nodes, edges, and various styling parameters. This approach let us collaborate on the content over Google Sheets and then quickly render nice prototypes. Most of the concatenations were found by grep'ing through the entire English Wikipedia for two-word sequences that were both TLDs. Graph layout is a hard problem, and the Davidson-Harel algorithm from ggraph (\"dh\") that we used for prototyping tended to create graphs with lots of crosses, so for the final version of the puzzle we wrote a D3.js script that placed the nodes according to a force-graph but let us interactively move and fix nodes until we were satisfied with the output. That's how we generated the final layout that is used on the site."),m("p",{className:"jsx-889659338"},"We also implemented a solver for our extension of Fillomino using the Z3 theorem prover. This ended up being very challenging and may not have been the best approach, but it worked! It was important that we prove that our puzzle had a unique solution because Fillomino lets you do crazy things like insert new number groups and combine existing number groups, which means that a tiny change to one part of the puzzle can easily propagate throughout the puzzle. We also wanted to have a puzzle with minimal clues, but the main motivation was to make sure it was actually correct."))),m(n.a,{id:"889659338"},["div.jsx-889659338{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"])))}},GZfw:function(e,a){e.exports="/_next/static/assets/assets/solution/word-wide-web/ff821594c88f3b3cb3d07c1551e06e7b.svg"},KtV6:function(e,a,s){"use strict";s.d(a,"a",(function(){return u}));var t=s("MX0m"),n=s.n(t),o=s("q1tI"),i=s.n(o),r=s("8Kt/"),l=s.n(r),c=s("qTru"),d=s("otFC"),h=i.a.createElement,u=function(e){var a=e.children;return h("strong",{className:"jsx-1605562794 monospace"},a,h(n.a,{id:"1605562794"},[".monospace.jsx-1605562794{font-size:16px;}"]))};a.b=function(e){var a=e.title,s=e.slug,t=e.answer,o=e.authors,i=e.url,r=void 0===i?void 0:i,u=e.children;return h(c.a,null,h(l.a,null,h("meta",{name:"robots",content:"noindex",className:"jsx-2146329486"})),h("div",{className:"jsx-2146329486 center"},h(d.a,{title:"".concat(a," - Solution")}),o&&h("h3",{className:"jsx-2146329486"},o),h("h3",{className:"jsx-2146329486"},"Answer: ",h("span",{className:"jsx-2146329486 spoiler monospace"},t)),h("div",{className:"jsx-2146329486 link"},h("a",{href:"/stats/".concat(s),className:"jsx-2146329486"},"View Stats"),h("a",{href:r||"/puzzles/".concat(s),className:"jsx-2146329486"},"Back to Puzzle"))),u,h(n.a,{id:"2146329486"},[".link.jsx-2146329486{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:20px 0 40px;}"]))}},MBA7:function(e,a,s){"use strict";var t=s("q1tI"),n=s.n(t),o=n.a.createElement;a.a=function(e){var a=e.children;return o(n.a.Fragment,null,o("h4",null,"Author's Notes"),a)}},XwIU:function(e,a){e.exports="/_next/static/assets/assets/solution/word-wide-web/6478df17a2622443efc22fb693ea3642.svg"},maHl:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/word-wide-web",function(){return s("6Lli")}])},otFC:function(e,a,s){"use strict";var t=s("MX0m"),n=s.n(t),o=s("q1tI"),i=s.n(o),r=s("8Kt/"),l=s.n(r),c=i.a.createElement;a.a=function(e){var a=e.title,s=e.pageTitle,t=e.suppressPageTitle,o=e.removeMargin,r=e.id,d=s||a;return c(i.a.Fragment,null,!t&&c(l.a,null,c("title",{className:"jsx-1930915425"},d)),c("h1",{id:r,className:"jsx-1930915425 "+((o?"nomargin":"")||"")},c("span",{className:"jsx-1930915425"},a)),c(n.a,{id:"1930915425"},["h1.jsx-1930915425{text-align:center;word-wrap:break-word;}",".nomargin.jsx-1930915425{margin:0px;}","span.jsx-1930915425{background-color:rgba(255,255,255,0.5);padding:0 16px;}","@media (max-width:800px){h1.jsx-1930915425{font-size:40px;line-height:40px;}}"]))}}},[["maHl",1,0,2]]]);