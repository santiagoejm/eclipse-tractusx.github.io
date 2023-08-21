"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8759],{48593:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var s=i(87462),r=(i(67294),i(3905)),n=i(26389),a=i(94891),o=(i(75190),i(47507)),d=i(24310),c=i(63303),l=(i(75035),i(85162));const p={id:"create-identifier-type",title:"Create new identifier type",description:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Create new identifier type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierType",requestBody:{content:{"application/json":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}},required:!0},responses:{200:{description:"New identifier type successfully created",content:{"*/*":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier type with specified technical key already exists"}},method:"post",path:"/api/catena/identifier-types",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",name:"string",url:"string"},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Create new identifier type",description:{content:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["api","catena","identifier-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",id:"version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",title:"Create new identifier type",description:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/create-identifier-type",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"create-identifier-type",title:"Create new identifier type",description:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",sidebar_label:"Create new identifier type",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",operationId:"createIdentifierType",requestBody:{content:{"application/json":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}},required:!0},responses:{200:{description:"New identifier type successfully created",content:{"*/*":{schema:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}}},400:{description:"On malformed request parameters"},409:{description:"Identifier type with specified technical key already exists"}},method:"post",path:"/api/catena/identifier-types",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{technicalKey:"string",name:"string",url:"string"},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Create new identifier type",description:{content:"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems.",type:"text/plain"},url:{path:["api","catena","identifier-types"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Get page of identifier types",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-identifier-types"},next:{title:"Get page of identifier statuses",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-identifier-stati"}},m={},y=[{value:"Create new identifier type",id:"create-new-identifier-type",level:2}],f={toc:y};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-new-identifier-type"},"Create new identifier type"),(0,r.kt)("p",null,"Create a new identifier type which can be referenced by business partner records. Identifier types such as BPN or VAT determine with which kind of values a business partner can be identified with. The actual name of the identifier type is free to choose and doesn't need to be unique. The technical key can be freely chosen but needs to be unique as it is used as reference by the business partner records. A recommendation for technical keys: They should be short, descriptive and use a restricted common character set in order to ensure compatibility with older systems."),(0,r.kt)(a.Z,{mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"New identifier type successfully created")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "technicalKey": "string",\n  "name": "string",\n  "url": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"On malformed request parameters")),(0,r.kt)("div",null)),(0,r.kt)(l.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Identifier type with specified technical key already exists")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);