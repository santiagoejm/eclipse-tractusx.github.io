"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[80485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={},o="SSI Core Identity Service Module",l={unversionedId:"kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/README",id:"kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/README",title:"SSI Core Identity Service Module",description:"This module contains an implementation of the EDC identity service for SSI.",source:"@site/docs-kits/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core",slug:"/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/ssi/ssi-identity-core/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"JsonWebSignature2020",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/ssi/jws2020-crypto-suite/"},next:{title:"MIW Client Credential Module",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/ssi/ssi-miw-credential-client/"}},s={},c=[{value:"Configuration",id:"configuration",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ssi-core-identity-service-module"},"SSI Core Identity Service Module"),(0,r.kt)("p",null,"This module contains an implementation of the EDC identity service for SSI.\nThe SsiIdentityService contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiTokenValidationService")," for validating the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," token,\nthat uses an implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiCredentialClient")," for validating the JWT token and then check custom rules registered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiValidationRuleRegistry")),(0,r.kt)("p",null,"For obtaining the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," token, the identity service also delegate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiCredentialClient")," ."),(0,r.kt)("p",null,"The default implementation according to the first milestone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/tree/main/docs/architecture/cx-3-2"},"here"),"\nwill rely on an MIW and the implementations in available in the module ",(0,r.kt)("inlineCode",{parentName:"p"},":edc-extensions:ssi:ssi-miw-credential-client"),"."),(0,r.kt)("p",null,"The implementation also provide a rule registry ",(0,r.kt)("inlineCode",{parentName:"p"},"SsiValidationRuleRegistry")," where custom rule can be registered for validating the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClaimToken")," extracted from the ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," token."),(0,r.kt)("p",null,"Custom rule could be like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audience validation"),(0,r.kt)("li",{parentName:"ul"},"VP/VC validation"),(0,r.kt)("li",{parentName:"ul"},"Expiration"),(0,r.kt)("li",{parentName:"ul"},"..etc")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tx.ssi.endpoint.audience"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint URL for audience check (DSP)")))))}u.isMDXComponent=!0}}]);