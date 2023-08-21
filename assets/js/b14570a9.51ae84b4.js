"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[96729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c="Notice for Docker image",l={unversionedId:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/notice",id:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/notice",title:"Notice for Docker image",description:"An EDC Control Plane using PostgreSQL as persistence backend, and Azure KeyVault as secret store.",source:"@site/docs-kits/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/notice.md",sourceDirName:"kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault",slug:"/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/notice",permalink:"/docs-kits/next/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/notice",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC Control-Plane backed by Postgresql",permalink:"/docs-kits/next/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/"},next:{title:"EDC Control-Plane backed by Postgresql and HashiCorp vault",permalink:"/docs-kits/next/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/"}},i={},s=[{value:"Tractus-X EDC Control Plane",id:"tractus-x-edc-control-plane",level:2},{value:"Used base image",id:"used-base-image",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notice-for-docker-image"},"Notice for Docker image"),(0,a.kt)("p",null,"An EDC Control Plane using PostgreSQL as persistence backend, and Azure KeyVault as secret store."),(0,a.kt)("p",null,"DockerHub: ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tractusx/edc-controlplane-postgresql-azure-vault"},"https://hub.docker.com/r/tractusx/edc-controlplane-postgresql-azure-vault")),(0,a.kt)("p",null,"Eclipse Tractus-X product(s) installed within the image:"),(0,a.kt)("h2",{id:"tractus-x-edc-control-plane"},"Tractus-X EDC Control Plane"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc")),(0,a.kt)("li",{parentName:"ul"},"Project home: ",(0,a.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx"},"https://projects.eclipse.org/projects/automotive.tractusx")),(0,a.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-postgresql-azure-vault/src/main/docker/Dockerfile"},"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-postgresql-azure-vault/src/main/docker/Dockerfile")),(0,a.kt)("li",{parentName:"ul"},"Project license: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/LICENSE"},"Apache License, Version 2.0"))),(0,a.kt)("h2",{id:"used-base-image"},"Used base image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"eclipse-temurin:17.0.6_10-jre-alpine")),(0,a.kt)("li",{parentName:"ul"},"Official Eclipse Temurin DockerHub page: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"https://hub.docker.com/_/eclipse-temurin")),(0,a.kt)("li",{parentName:"ul"},"Eclipse Temurin Project: ",(0,a.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"https://projects.eclipse.org/projects/adoptium.temurin")),(0,a.kt)("li",{parentName:"ul"},"Additional information about the Eclipse Temurin\nimages: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"))),(0,a.kt)("p",null,"As with all Docker images, these likely also contain other software which may be under other licenses (such as Bash, etc\nfrom the base distribution, along with any direct or indirect dependencies of the primary software being contained)."),(0,a.kt)("p",null,"As for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies\nwith any relevant licenses for all software contained within."))}u.isMDXComponent=!0}}]);