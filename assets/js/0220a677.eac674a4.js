"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33047],{23875:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var i=t(87462),a=(t(67294),t(3905)),s=t(26389),l=t(94891),n=t(75190),p=(t(47507),t(24310)),r=(t(63303),t(75035),t(85162));const d={id:"call-deprovision-webhook",title:"callDeprovisionWebhook",description:"callDeprovisionWebhook",sidebar_label:"callDeprovisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"callDeprovisionWebhook",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{error:{type:"boolean",example:null},errorMessage:{type:"string",example:null},inProcess:{type:"boolean",example:null},provisionedResourceId:{type:"string",example:null}}}}}},responses:{default:{description:"default response"}},tags:["HTTP Provisioner Webhook"],description:"callDeprovisionWebhook",method:"post",path:"/callback/{processId}/deprovision",jsonRequestBodyExample:null,info:{title:"EDC Provision HTTP",description:null,license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.0.1-SNAPSHOT"},postman:{name:"call Deprovision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","deprovision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/edc-provision-http",custom_edit_url:null},c=void 0,m={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook",title:"callDeprovisionWebhook",description:"callDeprovisionWebhook",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-deprovision-webhook",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"call-deprovision-webhook",title:"callDeprovisionWebhook",description:"callDeprovisionWebhook",sidebar_label:"callDeprovisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"callDeprovisionWebhook",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{error:{type:"boolean",example:null},errorMessage:{type:"string",example:null},inProcess:{type:"boolean",example:null},provisionedResourceId:{type:"string",example:null}}}}}},responses:{default:{description:"default response"}},tags:["HTTP Provisioner Webhook"],description:"callDeprovisionWebhook",method:"post",path:"/callback/{processId}/deprovision",jsonRequestBodyExample:null,info:{title:"EDC Provision HTTP",description:null,license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.0.1-SNAPSHOT"},postman:{name:"call Deprovision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","deprovision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/edc-provision-http",custom_edit_url:null},sidebar:"kits",previous:{title:"updatePolicy",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/update-policy"},next:{title:"callProvisionWebhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/provision-http/call-provision-webhook"}},u={},v=[{value:"callDeprovisionWebhook",id:"calldeprovisionwebhook",level:2}],k={toc:v};function h(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"calldeprovisionwebhook"},"callDeprovisionWebhook"),(0,a.kt)("p",null,"callDeprovisionWebhook"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,a.kt)(l.Z,{mdxType:"MimeTabs"},(0,a.kt)(r.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorMessage",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"inProcess",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"provisionedResourceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(r.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"default response")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);