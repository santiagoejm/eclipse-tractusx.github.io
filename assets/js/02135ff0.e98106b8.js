"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[63182],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={},l="Etiquette for pull requests",o={unversionedId:"kits/tractusx-edc/pr_etiquette",id:"kits/tractusx-edc/pr_etiquette",title:"Etiquette for pull requests",description:"As an author",source:"@site/docs-kits/kits/tractusx-edc/pr_etiquette.md",sourceDirName:"kits/tractusx-edc",slug:"/kits/tractusx-edc/pr_etiquette",permalink:"/docs-kits/next/kits/tractusx-edc/pr_etiquette",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Coding Principles and Style Guide",permalink:"/docs-kits/next/kits/tractusx-edc/docs/development/coding-principles"},next:{title:"Eclipse Tractus-X EDC Code Style Guide",permalink:"/docs-kits/next/kits/tractusx-edc/styleguide"}},s={},u=[{value:"As an author",id:"as-an-author",level:2},{value:"As a reviewer",id:"as-a-reviewer",level:2},{value:"The technical committers (as of April 05, 2023)",id:"the-technical-committers-as-of-april-05-2023",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"etiquette-for-pull-requests"},"Etiquette for pull requests"),(0,i.kt)("h2",{id:"as-an-author"},"As an author"),(0,i.kt)("p",null,"Submitting pull requests in EDC should be done while adhering to a couple of simple rules."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiarize yourself\nwith ",(0,i.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/styleguide"},"coding style"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/docs/development/coding-principles"},"architectural patterns")," and\nother contribution guidelines."),(0,i.kt)("li",{parentName:"ul"},"No surprise PRs please. Before you submit a PR, open a discussion or an issue outlining your planned work and give\npeople time to comment. It may even be advisable to contact committers using the ",(0,i.kt)("inlineCode",{parentName:"li"},"@mention")," feature. Unsolicited PRs\nmay get ignored or rejected."),(0,i.kt)("li",{parentName:"ul"},"Create your working branch in your fork of Tractus-X EDC, and create the PR against the upstream ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch"),(0,i.kt)("li",{parentName:"ul"},"Create focused PRs: your work should be focused on one particular feature or bug. Do not create broad-scoped PRs that\nsolve multiple issues as reviewers may reject those PR bombs outright."),(0,i.kt)("li",{parentName:"ul"},"Provide a clear description and motivation in the PR description in GitHub. This makes the reviewer's life much\neasier. It is also helpful to outline the broad changes that were made, e.g. \"Changes the schema of XYZ-Entity:\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"age")," field changed from ",(0,i.kt)("inlineCode",{parentName:"li"},"long")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),'".'),(0,i.kt)("li",{parentName:"ul"},"If you introduce new 3rd party dependencies, be sure to note them in the PR description and explain why they are\nnecessary."),(0,i.kt)("li",{parentName:"ul"},"Stick to the established code style, please refer to the ",(0,i.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/styleguide"},"styleguide document"),"."),(0,i.kt)("li",{parentName:"ul"},"All tests should be green, especially when your PR is in ",(0,i.kt)("inlineCode",{parentName:"li"},'"Ready for review"')),(0,i.kt)("li",{parentName:"ul"},"Mark PRs as ",(0,i.kt)("inlineCode",{parentName:"li"},'"Ready for review"')," only when you're prepared to defend your work. By that time you have completed your\nwork and shouldn't need to push any more commits other than to incorporate review comments."),(0,i.kt)("li",{parentName:"ul"},"Merge conflicts should be resolved by squashing all commits on the PR branch, rebasing onto ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," and\nforce-pushing. Do this when your PR is ready to review."),(0,i.kt)("li",{parentName:"ul"},"If you require a reviewer's input while it's still in draft, please contact the designated reviewer using\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"@mention")," feature and let them know what you'd like them to look at."),(0,i.kt)("li",{parentName:"ul"},"Request a review from one of the committers. Requesting a review from anyone else is still possible, and\nsometimes may be advisable, but only committers can merge PRs, so be sure to include them early on."),(0,i.kt)("li",{parentName:"ul"},"Re-request reviews after all remarks have been adopted. This helps reviewers track their work in GitHub."),(0,i.kt)("li",{parentName:"ul"},"If you disagree with a committer's remarks, feel free to object and argue, but if no agreement is reached, you'll have\nto either accept the decision or withdraw your PR."),(0,i.kt)("li",{parentName:"ul"},"Be civil and objective. No foul language, insulting or otherwise abusive language will be tolerated."),(0,i.kt)("li",{parentName:"ul"},"The PR titles must follow ",(0,i.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The title must follow the format as ",(0,i.kt)("inlineCode",{parentName:"li"},"<type>(<optional scope>): <description>"),".\n",(0,i.kt)("inlineCode",{parentName:"li"},"build"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"chore"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ci"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"docs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"feat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fix"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"perf"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"refactor"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"revert"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"style"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," are allowed for\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"<type>"),"."),(0,i.kt)("li",{parentName:"ul"},"The length must be kept under 80 characters.")))),(0,i.kt)("h2",{id:"as-a-reviewer"},"As a reviewer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please complete reviews within two business days or delegate to another committer, removing yourself as a reviewer."),(0,i.kt)("li",{parentName:"ul"},"If you have been requested as reviewer, but cannot do the review for any reason (lack of time or expertise in a\nparticular area, etc.) please comment that in the PR and remove yourself as a reviewer, suggesting a stand-in.\nThe ",(0,i.kt)("a",{parentName:"li",href:"CODEOWNERS"},"code owners document")," should help with that."),(0,i.kt)("li",{parentName:"ul"},"Don't be overly pedantic."),(0,i.kt)("li",{parentName:"ul"},"Don't argue basic principles (code style, architectural decisions, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"suggestion")," feature of GitHub for small/simple changes."),(0,i.kt)("li",{parentName:"ul"},"The following could serve you as a review checklist:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"no unnecessary dependencies in ",(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle.kts")),(0,i.kt)("li",{parentName:"ul"},"sensible unit tests, prefer unit tests over integration tests wherever possible (test runtime). Also check the\nusage of test tags."),(0,i.kt)("li",{parentName:"ul"},"code style"),(0,i.kt)("li",{parentName:"ul"},'simplicity and "uncluttered-ness" of the code'),(0,i.kt)("li",{parentName:"ul"},"overall focus of the PR"))),(0,i.kt)("li",{parentName:"ul"},"Don't just wave through any PR. Please take the time to look at them carefully."),(0,i.kt)("li",{parentName:"ul"},"Be civil and objective. No foul language, insulting or otherwise abusive language will be tolerated. The goal is to\n",(0,i.kt)("em",{parentName:"li"},"encourage")," contributions.")),(0,i.kt)("h2",{id:"the-technical-committers-as-of-april-05-2023"},"The technical committers (as of April 05, 2023)"),(0,i.kt)("p",null,"Main committers for the Tractus-X EDC project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@paullatzelsperger"),(0,i.kt)("li",{parentName:"ul"},"@florianrusch-zf")),(0,i.kt)("p",null,"Alternatively, the following Tractus-X committers can also step in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@SebastianBezold")))}p.isMDXComponent=!0}}]);