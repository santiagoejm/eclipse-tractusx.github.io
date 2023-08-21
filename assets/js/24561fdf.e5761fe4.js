"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[52587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c="Notice for Docker image",i={unversionedId:"kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice",id:"kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice",title:"Notice for Docker image",description:"An EDC Control Plane using memory-based storage, and Azure KeyVault as secret store.",source:"@site/docs-kits/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice.md",sourceDirName:"kits/tractusx-edc/edc-controlplane/edc-runtime-memory",slug:"/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice",permalink:"/docs-kits/next/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC Control-Plane backed by In-Memory Stores",permalink:"/docs-kits/next/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/"},next:{title:"Data Plane",permalink:"/docs-kits/next/kits/tractusx-edc/edc-dataplane/"}},s={},l=[{value:"Tractus-X EDC Control Plane",id:"tractus-x-edc-control-plane",level:2},{value:"Used base image",id:"used-base-image",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notice-for-docker-image"},"Notice for Docker image"),(0,o.kt)("p",null,"An EDC Control Plane using memory-based storage, and Azure KeyVault as secret store."),(0,o.kt)("p",null,"DockerHub: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tractusx/edc-runtime-memory"},"https://hub.docker.com/r/tractusx/edc-runtime-memory")),(0,o.kt)("p",null,"Eclipse Tractus-X product(s) installed within the image:"),(0,o.kt)("h2",{id:"tractus-x-edc-control-plane"},"Tractus-X EDC Control Plane"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc")),(0,o.kt)("li",{parentName:"ul"},"Project home: ",(0,o.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx"},"https://projects.eclipse.org/projects/automotive.tractusx")),(0,o.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-runtime-memory/src/main/docker/Dockerfile"},"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-runtime-memory/src/main/docker/Dockerfile")),(0,o.kt)("li",{parentName:"ul"},"Project license: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},"Apache License, Version 2.0"))),(0,o.kt)("h2",{id:"used-base-image"},"Used base image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"eclipse-temurin:17.0.6_10-jre-alpine")),(0,o.kt)("li",{parentName:"ul"},"Official Eclipse Temurin DockerHub page: ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"https://hub.docker.com/_/eclipse-temurin")),(0,o.kt)("li",{parentName:"ul"},"Eclipse Temurin Project: ",(0,o.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"https://projects.eclipse.org/projects/adoptium.temurin")),(0,o.kt)("li",{parentName:"ul"},"Additional information about the Eclipse Temurin\nimages: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"))),(0,o.kt)("p",null,"As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc\nfrom the base distribution, along with any direct or indirect dependencies of the primary software being contained)."),(0,o.kt)("p",null,"As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies\nwith any relevant licenses for all software contained within."))}p.isMDXComponent=!0}}]);