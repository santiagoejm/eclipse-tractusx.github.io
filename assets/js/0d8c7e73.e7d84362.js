"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[74883],{96940:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),o=s(75190),p=s(47507),l=s(24310),m=s(63303),d=(s(75035),s(85162));const c={id:"search-sites",title:"Search site partners by BPNs and/or parent BPNs",description:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",sidebar_label:"Search site partners by BPNs and/or parent BPNs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",operationId:"searchSites",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{legalEntities:{type:"array",items:{type:"string"}},sites:{type:"array",items:{type:"string"}}}}}},required:!0},responses:{200:{description:"Found sites that belong to specified legal entites",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{site:{type:"object",properties:{bpn:{type:"string"},name:{type:"string"}},description:"Business partner of type site"},bpnLegalEntity:{type:"string"}},description:"Business partner of type site with parent BPN"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"post",path:"/api/catena/sites/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{legalEntities:["string"],sites:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Search site partners by BPNs and/or parent BPNs",description:{content:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",type:"text/plain"},url:{path:["api","catena","sites","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/search-sites",id:"version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/search-sites",title:"Search site partners by BPNs and/or parent BPNs",description:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/search-sites.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/search-sites",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/search-sites",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"search-sites",title:"Search site partners by BPNs and/or parent BPNs",description:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",sidebar_label:"Search site partners by BPNs and/or parent BPNs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",operationId:"searchSites",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{legalEntities:{type:"array",items:{type:"string"}},sites:{type:"array",items:{type:"string"}}}}}},required:!0},responses:{200:{description:"Found sites that belong to specified legal entites",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{site:{type:"object",properties:{bpn:{type:"string"},name:{type:"string"}},description:"Business partner of type site"},bpnLegalEntity:{type:"string"}},description:"Business partner of type site with parent BPN"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"post",path:"/api/catena/sites/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{legalEntities:["string"],sites:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Search site partners by BPNs and/or parent BPNs",description:{content:"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities",type:"text/plain"},url:{path:["api","catena","sites","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Create new site business partners",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/create-site"},next:{title:"Search Main Addresses",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/search-main-addresses"}},h={},g=[{value:"Search site partners by BPNs and/or parent BPNs",id:"search-site-partners-by-bpns-andor-parent-bpns",level:2}],b={toc:g};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"search-site-partners-by-bpns-andor-parent-bpns"},"Search site partners by BPNs and/or parent BPNs"),(0,i.kt)("p",null,"Search business partners of type site by their BPNSs or by the BPNLs of their parent legal entities"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"legalEntities",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"sites",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Found sites that belong to specified legal entites")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"site"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Business partner of type site")),(0,i.kt)(l.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"bpnLegalEntity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "site": {\n        "bpn": "string",\n        "name": "string"\n      },\n      "bpnLegalEntity": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"On malformed request parameters")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);