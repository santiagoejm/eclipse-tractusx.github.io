"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[44994],{12722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),o=a(94891),n=(a(75190),a(47507)),r=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}}},isHealthy:{type:"boolean",example:null}}}},isSystemHealthy:{type:"boolean",example:null}}}}}}}},tags:["Application Observability"],method:"get",path:"/check/health",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},d=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}}},isHealthy:{type:"boolean",example:null}}}},isSystemHealthy:{type:"boolean",example:null}}}}}}}},tags:["Application Observability"],method:"get",path:"/check/health",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAssetSynchronous",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/extensions/control-plane-adapter/get-asset-synchronous"},next:{title:"getLiveness",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness"}},u={},y=[{value:"checkHealth",id:"checkhealth",level:2}],k={toc:y};function v(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"checkhealth"},"checkHealth"),(0,l.kt)("p",null,"Performs a liveness probe to determine whether the runtime is working properly."),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"componentResults"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"component",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"failure"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"failureDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(r.Z,{collapsible:!1,name:"isHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(r.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);