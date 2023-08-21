"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[22365],{50903:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>b});var s=t(87462),n=(t(67294),t(3905)),r=t(26389),a=t(94891),o=(t(75190),t(47507)),d=t(24310),p=t(63303),l=(t(75035),t(85162));const u={id:"find-bpns-by-identifiers",title:"Find business partner numbers by identifiers",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",sidebar_label:"Find business partner numbers by identifiers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["bpn-controller"],description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",operationId:"findBpnsByIdentifiers",requestBody:{content:{"application/json":{schema:{type:"object",properties:{lsaType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},idType:{type:"string"},idValues:{type:"array",items:{type:"string"}}},description:"Contains identifiers to search legal entities by"}}},required:!0},responses:{200:{description:"Found bpn to identifier value mappings",content:{"application/json":{schema:{uniqueItems:!0,type:"array",items:{type:"object",properties:{idValue:{type:"string"},bpn:{type:"string"}},description:"Mapping of Business Partner Number to identifier value"}}}}},400:{description:"On malformed request parameters or if number of requested bpns exceeds limit"},404:{description:"Specified identifier type not found"}},method:"post",path:"/api/catena/bpn/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{lsaType:"LEGAL_ENTITY",idType:"string",idValues:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Find business partner numbers by identifiers",description:{content:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",type:"text/plain"},url:{path:["api","catena","bpn","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},m=void 0,c={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",id:"kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",title:"Find business partner numbers by identifiers",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/find-bpns-by-identifiers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"find-bpns-by-identifiers",title:"Find business partner numbers by identifiers",description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",sidebar_label:"Find business partner numbers by identifiers",hide_title:!0,hide_table_of_contents:!0,api:{tags:["bpn-controller"],description:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",operationId:"findBpnsByIdentifiers",requestBody:{content:{"application/json":{schema:{type:"object",properties:{lsaType:{type:"string",description:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",enum:["LEGAL_ENTITY","ADDRESS"]},idType:{type:"string"},idValues:{type:"array",items:{type:"string"}}},description:"Contains identifiers to search legal entities by"}}},required:!0},responses:{200:{description:"Found bpn to identifier value mappings",content:{"application/json":{schema:{uniqueItems:!0,type:"array",items:{type:"object",properties:{idValue:{type:"string"},bpn:{type:"string"}},description:"Mapping of Business Partner Number to identifier value"}}}}},400:{description:"On malformed request parameters or if number of requested bpns exceeds limit"},404:{description:"Specified identifier type not found"}},method:"post",path:"/api/catena/bpn/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{lsaType:"LEGAL_ENTITY",idType:"string",idValues:["string"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Find business partner numbers by identifiers",description:{content:"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries.",type:"text/plain"},url:{path:["api","catena","bpn","search"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"bpn-controller",permalink:"/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Pool Api/bpn-controller"},next:{title:"Bridge Dummy API",permalink:"/docs-kits/next/category/bridge-dummy-api"}},f={},b=[{value:"Find business partner numbers by identifiers",id:"find-business-partner-numbers-by-identifiers",level:2}],h={toc:b};function y(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"find-business-partner-numbers-by-identifiers"},"Find business partner numbers by identifiers"),(0,n.kt)("p",null,"Find business partner numbers by identifiers. The response can contain less results than the number of identifier values that were requested, if some of the identifiers did not exist. For a single request, the maximum number of identifier values to search for is limited to ${bpdm.bpn.search-request-limit} entries."),(0,n.kt)(a.Z,{mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"lsaType",required:!1,deprecated:void 0,schemaDescription:"Specifies if an identifier type is valid for legal entities (L) or addresses (A). Sites (S) are not supported.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"idType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"idValues",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Found bpn to identifier value mappings")),(0,n.kt)("div",null,(0,n.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"idValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'[\n  {\n    "idValue": "string",\n    "bpn": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"On malformed request parameters or if number of requested bpns exceeds limit")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Specified identifier type not found")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);