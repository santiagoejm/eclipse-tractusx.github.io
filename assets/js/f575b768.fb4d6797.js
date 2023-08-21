"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[36633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"Operation View",title:"Operation View",description:"Business Partner Kit",sidebar_position:3},i=void 0,l={unversionedId:"kits/Business Partner Kit/Operation View",id:"kits/Business Partner Kit/Operation View",title:"Operation View",description:"Business Partner Kit",source:"@site/docs-kits/kits/Business Partner Kit/page_software-operation-view.md",sourceDirName:"kits/Business Partner Kit",slug:"/kits/Business Partner Kit/Operation View",permalink:"/docs-kits/next/kits/Business Partner Kit/Operation View",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Operation View",title:"Operation View",description:"Business Partner Kit",sidebar_position:3},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/Business Partner Kit/Adoption View"},next:{title:"Development View",permalink:"/docs-kits/next/category/development-view"}},s={},p=[{value:"Business Partner KIT",id:"business-partner-kit",level:3},{value:"Local Deployment",id:"local-deployment",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Check out the code",id:"step-2-check-out-the-code",level:3},{value:"Step 3: Installing the services",id:"step-3-installing-the-services",level:3},{value:"1. Start the cluster",id:"1-start-the-cluster",level:4},{value:"1.1 Get the status of the deployment",id:"11-get-the-status-of-the-deployment",level:5},{value:"2. Forward ports",id:"2-forward-ports",level:4},{value:"Deploy Individual Service",id:"deploy-individual-service",level:2},{value:"1. BPDM Pool",id:"1-bpdm-pool",level:3},{value:"Image Tag",id:"image-tag",level:4},{value:"Profiles",id:"profiles",level:4},{value:"Ingress",id:"ingress",level:4},{value:"Pool Configuration",id:"pool-configuration",level:4},{value:"Helm Dependencies",id:"helm-dependencies",level:4},{value:"2. BPDM Gate",id:"2-bpdm-gate",level:3},{value:"Image Tag",id:"image-tag-1",level:4},{value:"Profiles",id:"profiles-1",level:4},{value:"Ingress",id:"ingress-1",level:4},{value:"Gate Configuration",id:"gate-configuration",level:4},{value:"3. BPDM Bridge Dummy",id:"3-bpdm-bridge-dummy",level:3},{value:"Image Tag",id:"image-tag-2",level:4},{value:"Profiles",id:"profiles-2",level:4},{value:"Ingress",id:"ingress-2",level:4},{value:"Bridge Dummy Configuration",id:"bridge-dummy-configuration",level:4},{value:"Stopping the cluster",id:"stopping-the-cluster",level:2},{value:"How to debug an application in the cluster",id:"how-to-debug-an-application-in-the-cluster",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Business partner kit banner",src:n(20140).Z,width:"285",height:"244"})),(0,r.kt)("h3",{id:"business-partner-kit"},"Business Partner KIT"),(0,r.kt)("h2",{id:"local-deployment"},"Local Deployment"),(0,r.kt)("p",null,"BPDM is an acronym for business partner data management. This project provides core services for querying, adding and changing business partner base information in the Eclipse Tractus-X landscape. BPDM project is SpringBoot Kotlin software project managed by Maven and consists of three microservices. This section contains information on how to configure and run the BPDM application."),(0,r.kt)("p",null,"This local deployment is an easy installation with helm. This setup is built to run on a kubernetes cluster."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Step"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"arrow down",src:n(98810).Z,width:"54",height:"72"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#step-1-prerequisites"},"Install the prerequisites"))),(0,r.kt)("td",{parentName:"tr",align:null},"Install all necessary tools for this setup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"vector",src:n(66445).Z,width:"59",height:"59"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#step-2-check-out-the-code"},"Check out the Code"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get all necessary code to deploy the service and dependencies to the kuberneetes cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"check",src:n(56793).Z,width:"47",height:"47"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#step-3-installing-the-services"},"Installing the Service"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start cluster and interact with Services")))),(0,r.kt)("h3",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," is installed and the Docker deamon is running with at least 8GB of memory")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm")," is installed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," is installed and running.",(0,r.kt)("br",{parentName:"p"}),"\n","You can also use any other local Kubernetes cluster, this guide is just using Minikube as a reference."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --memory 8192 --cpus 2 \n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Optional"),": enable minikube metrics"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons enable metrics-server\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," is installed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.compose.com/articles/postgresql-tips-installing-the-postgresql-client/"},"psql")," client is installed"))),(0,r.kt)("h3",{id:"step-2-check-out-the-code"},"Step 2: Check out the code"),(0,r.kt)("p",null,"Check out the project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm"},"BPDM")," or download a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm/releases"},"released version")," of the project."),(0,r.kt)("h3",{id:"step-3-installing-the-services"},"Step 3: Installing the services"),(0,r.kt)("h4",{id:"1-start-the-cluster"},"1. Start the cluster"),(0,r.kt)("p",null,"To deploy the services on kubernetes using helm charts, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd local/bpdm\nhelm install your_namespace ./charts/bpdm/\n")),(0,r.kt)("p",null,"If postgresql is not available in your cluster then you might get following error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Error: INSTALLATION FAILED: An error occurred while checking for chart dependencies. You may need to run `helm dependency build` to fetch missing dependencies: found in Chart.yaml, but missing in charts/ directory: opensearch, postgresql\n")),(0,r.kt)("p",null,"You can resolve it by adding dependancy to the build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm dependency build ./charts/bpdm/\n")),(0,r.kt)("p",null,"This can take up to ",(0,r.kt)("strong",{parentName:"p"},"5 minutes"),"."),(0,r.kt)("p",null,"When the deployment is finished you can expect that 3 deployments can be seen in the minikube dashboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bpdm-bridge-dummy"),(0,r.kt)("li",{parentName:"ul"},"bpdm-gate"),(0,r.kt)("li",{parentName:"ul"},"bpdm-pool")),(0,r.kt)("p",null,"Also in total 5 Pods are up and running."),(0,r.kt)("h5",{id:"11-get-the-status-of-the-deployment"},"1.1 Get the status of the deployment"),(0,r.kt)("p",null,"The minikube dashboard will give you feedback on how the status of the deployment currently is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  minikube dashboard \n")),(0,r.kt)("p",null,"Make sure you select the namespace ",(0,r.kt)("strong",{parentName:"p"},"your_namespace"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"expected status",src:n(27400).Z,width:"2076",height:"1262"})),(0,r.kt)("h4",{id:"2-forward-ports"},"2. Forward ports"),(0,r.kt)("p",null,"When the deployment has been finished, you can for port forwarding using k9s. Also, if k9s tool is not installed the you can use ",(0,r.kt)("a",{parentName:"p",href:"https://k9scli.io/topics/install/"},"installer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<shift+f>\n")),(0,r.kt)("p",null,"or port forwarding can also be achived kubernetes command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward <pod-name> <locahost-port>:<pod-port>\n")),(0,r.kt)("p",null,"After that you can access the:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bpdm-bridge-dummy:")," ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8083"},"http://localhost:8083")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bpdm-gate:")," ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8081"},"http://localhost:8081")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bpdm-pool:")," ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080"))),(0,r.kt)("h2",{id:"deploy-individual-service"},"Deploy Individual Service"),(0,r.kt)("h3",{id:"1-bpdm-pool"},"1. BPDM Pool"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#step-1-prerequisites"},"prerequisites")," for running this service. In an existing Kubernetes cluster the application can be deployed with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install release_name ./charts/bpdm/bpdm-pool --namespace your_namespace\n")),(0,r.kt)("p",null,"This will install a new release of the BPDM Pool in the given namespace.On default values this release deploys the latest image tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," from the repository's GitHub Container Registry. The application is run on default profile (without authorization).\nAdditionally, the Helm deployment contains a PostgreSQL database and Opensearch instance which the BPDM Pool connects to."),(0,r.kt)("p",null,"On the default values deployment no further action is needed to make the BPDM Pool deployment run.\nHowever, per default, ingress as well as authentication for endpoints are disabled."),(0,r.kt)("p",null,"By giving your own values file you can configure the Helm deployment of the BPDM Pool freely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install release_name ./charts/bpdm/bpdm-pool --namespace your_namespace -f ./path/to/your/values.yaml\n")),(0,r.kt)("p",null,"In the following sections you can have a look at the most important configuration options."),(0,r.kt)("h4",{id:"image-tag"},"Image Tag"),(0,r.kt)("p",null,"Per default, the Helm deployment references a certain BPDM Pool release version where the newest Helm release points to the newest Pool version.\nThis is a stable tag pointing to a fixed release version of the BPDM Pool.\nFor your deployment you might want to follow the latest application releases instead."),(0,r.kt)("p",null,"In your values file you can overwrite the default tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  tag: "latest"\n')),(0,r.kt)("h4",{id:"profiles"},"Profiles"),(0,r.kt)("p",null,"You can also activate Spring profiles in which the BPDM Pool should be run.\nIn case you want to run the Pool with authorization enabled you can write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"springProfiles:\n  - auth\n")),(0,r.kt)("h4",{id:"ingress"},"Ingress"),(0,r.kt)("p",null,"You can specify your own ingress configuration for the Helm deployment to make the BPDM Pool available over Ingress.\nNote that you need to have the appropriate Ingress controller installed in your cluster first.\nFor example, consider a Kubernetes cluster with an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress-Nginx")," installed.\nAn Ingress configuration for the Pool deployment could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n  enabled: true\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"\n  hosts:\n    - host: business-partners.your-domain.net\n      paths:\n        - path: /pool\n          pathType: Prefix\n')),(0,r.kt)("h4",{id:"pool-configuration"},"Pool Configuration"),(0,r.kt)("p",null,"The Helm deployment comes with the ability to configure the BPDM Pool application directly over the values file.\nThis way you are able to overwrite any configuration property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"application-auth.properties")," files.\nConsider that you would need to turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"auth"),"  profile first before overwriting any property in the corresponding properties file could take effect.\nOverwriting configuration properties can be useful to connect to a remote service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationConfig:\n  bpdm:\n    security:\n      auth-server-url: https://remote.keycloak.domain.com\n      realm: CUSTOM_REALM\n      client-id: POOL_CLIENT\n")),(0,r.kt)("p",null,"In this example above a Pool with authenticated activated connects to a remote Keycloak instance and uses its custom realm and resource."),(0,r.kt)("p",null,'Entries in the "applicationConfig" value are written directly to a configMap that is part of the Helm deployment.\nThis can be a problem if you want to overwrite configuration properties with secrets.\nTherefore, you can specify secret configuration values in a different Helm value ',(0,r.kt)("inlineCode",{parentName:"p"},"applicationSecrets"),".\nContent of this value is written in a Kubernetes secret instead.\nIf you want to specify a custom database password for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationSecrets:\n  spring:\n    datasource:\n      password: your_database_secret\n")),(0,r.kt)("h4",{id:"helm-dependencies"},"Helm Dependencies"),(0,r.kt)("p",null,"On default, the Helm deployment also contains a PostgreSQL and Opensearch deployment.\nYou can configure these deployments in your value file as well.\nFor this, consider the documentation of the correspondent dependency ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/bitnami/postgresql/11.9.13"},"PostgreSQL"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://opensearch.org/docs/latest/dashboards/install/helm/"},"Opensearch"),".\nIn case you want to use an already deployed database or Opensearch instance you can also disable the respective dependency and overwrite the default host\naddress in the ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationConfig:\n  spring:\n    datasource:\n      url: jdbc:postgresql://remote.host.net:5432/bpdm\npostgres:\n  enabled: false\n")),(0,r.kt)("h3",{id:"2-bpdm-gate"},"2. BPDM Gate"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#step-1-prerequisites"},"prerequisites")," for running this service is same except this service need running BPDM Pool instance."),(0,r.kt)("p",null,"In an existing Kubernetes cluster the application can be deployed with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install release_name ./charts/bpdm/bpdm-gate --namespace your_namespace -f /path/to/my_release-values.yaml\n")),(0,r.kt)("p",null,"This will install a new release of the BPDM Gate in the given namespace.\nOn default values this release deploys the latest image tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," from the repository's GitHub Container Registry.\nThe application is run on default profile (without authorization for its own endpoints or BPDM Pool endpoints).\nThis deployment requires a BPDM Pool deployment to be reachable under host name ",(0,r.kt)("inlineCode",{parentName:"p"},"bpdm-pool")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"."),(0,r.kt)("p",null,"By giving your own values file you can configure the Helm deployment of the BPDM Gate freely.\nIn the following sections you can have a look at the most important configuration options."),(0,r.kt)("h4",{id:"image-tag-1"},"Image Tag"),(0,r.kt)("p",null,"Per default, the Helm deployment references the latest BPDM gate release tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),".\nThis tag follows the latest version of the Gate and contains the newest features and bug fixes.\nYou might want to switch to a more stable release tag instead for your deployment.\nIn your values file you can overwrite the default tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  tag: "latest"\n')),(0,r.kt)("h4",{id:"profiles-1"},"Profiles"),(0,r.kt)("p",null,"You can also activate Spring profiles in which the BPDM Gate should be run.\nIn case you want to run the Gate with authorization and oAuth Pool client enabled you can write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"springProfiles:\n  - auth\n  - pool-auth\n")),(0,r.kt)("h4",{id:"ingress-1"},"Ingress"),(0,r.kt)("p",null,"You can specify your own ingress configuration for the Helm deployment to make the BPDM Gate available over Ingress.\nNote that you need to have the appropriate Ingress controller installed in your cluster first.\nFor example, consider a Kubernetes cluster with an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress-Nginx")," installed.\nAn Ingress configuration for the Gate deployment could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n  enabled: true\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"\n  hosts:\n    - host: business-partners.your-domain.net\n      paths:\n        - path: /companies/test-company\n          pathType: Prefix\n')),(0,r.kt)("h4",{id:"gate-configuration"},"Gate Configuration"),(0,r.kt)("p",null,"For the default deployment you already need to overwrite the configuration properties of the application.\nThe Helm deployment comes with the ability to configure the BPDM Gate application directly over the values file.\nThis way you are able to overwrite any configuration property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"application-auth.properties"),"\nand  ",(0,r.kt)("inlineCode",{parentName:"p"},"application-pool-auth.properties")," files.\nConsider that you would need to turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pool-auth")," profile first before overwriting any property in the corresponding properties file could take\neffect.\nOverwriting configuration properties can be useful for connecting to a remotely hosted BPDM Pool instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationConfig:\n  bpdm:\n    pool:\n      base-url: http://remote.domain.net/api/catena\n")),(0,r.kt)("p",null,'Entries in the "applicationConfig" value are written directly to a configMap that is part of the Helm deployment.\nThis can be a problem if you want to overwrite configuration properties with secrets.\nTherefore, you can specify secret configuration values in a different Helm value ',(0,r.kt)("inlineCode",{parentName:"p"},"applicationSecrets"),".\nContent of this value is written in a Kubernetes secret instead.\nIf you want to specify a keycloak client secret for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationSecrets:\n  bpdm:\n    security:\n      credentials:\n        secret: your_client_secret\n")),(0,r.kt)("h3",{id:"3-bpdm-bridge-dummy"},"3. BPDM Bridge Dummy"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#step-1-prerequisites"},"prerequisites")," for running this service is same. In an existing Kubernetes cluster the application can be deployed with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install release_name ./charts/bpdm/bpdm-bridge-dummy --namespace your_namespace -f /path/to/my_release-values.yaml\n")),(0,r.kt)("p",null,"This will install a new release of the BPDM Bridge Dummy in the given namespace.\nOn default values this release deploys the latest image tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," from the repository's GitHub Container Registry."),(0,r.kt)("p",null,"By giving your own values file you can configure the Helm deployment of the BPDM Bridge Dummy freely.\nIn the following sections you can have a look at the most important configuration options."),(0,r.kt)("h4",{id:"image-tag-2"},"Image Tag"),(0,r.kt)("p",null,"Per default, the Helm deployment references the latest BPDM Bridge Dummy release tagged as ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),".\nThis tag follows the latest version of the Bridge Dummy and contains the newest features and bug fixes.\nYou might want to switch to a more stable release tag instead for your deployment.\nIn your values file you can overwrite the default tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\n  tag: "latest"\n')),(0,r.kt)("h4",{id:"profiles-2"},"Profiles"),(0,r.kt)("p",null,"You can also activate Spring profiles in which the BPDM Bridge Dummy should be run.\nIn case you want to run the Bridge Dummy with authorization enabled you can write the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"springProfiles:\n  - auth\n")),(0,r.kt)("h4",{id:"ingress-2"},"Ingress"),(0,r.kt)("p",null,"You can specify your own ingress configuration for the Helm deployment to make the BPDM Bridge Dummy available over Ingress.\nNote that you need to have the appropriate Ingress controller installed in your cluster first.\nFor example, consider a Kubernetes cluster with an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress-Nginx")," installed.\nAn Ingress configuration for the Bridge Dummy deployment could somehow look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n  enabled: true\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"\n  hosts:\n    - host: business-partners.your-domain.net\n      paths:\n        - path: /bridge\n          pathType: Prefix\n')),(0,r.kt)("h4",{id:"bridge-dummy-configuration"},"Bridge Dummy Configuration"),(0,r.kt)("p",null,"For the default deployment you already need to overwrite the configuration properties of the application.\nThe Helm deployment comes with the ability to configure the BPDM Bridge Dummy application directly over the values file.\nThis way you are able to overwrite any configuration property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"application-auth.properties")," files.\nConsider that you would need to turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," profile first before overwriting any property in the corresponding properties file could take\neffect.\nOverwriting configuration properties can be useful for connecting to a remotely hosted BPDM Gate and Pool instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationConfig:\n  bpdm:\n    pool:\n      base-url: http://remote.domain.net/api/catena\n    gate:\n      base-url: http://remote.domain.net/api/catena\n")),(0,r.kt)("p",null,'Entries in the "applicationConfig" value are written directly to a configMap that is part of the Helm deployment.\nThis can be a problem if you want to overwrite configuration properties with secrets.\nTherefore, you can specify secret configuration values in a different Helm value ',(0,r.kt)("inlineCode",{parentName:"p"},"applicationSecrets"),".\nContent of this value is written in a Kubernetes secret instead.\nIf you want to specify a keycloak client secret for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"applicationSecrets:\n  bpdm:\n    security:\n      credentials:\n        secret: your_client_secret\n")),(0,r.kt)("h2",{id:"stopping-the-cluster"},"Stopping the cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"stop minikube"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube stop\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"stop the processes used for port forwarding and minikube dashboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"shut down the Docker daemon"))),(0,r.kt)("h2",{id:"how-to-debug-an-application-in-the-cluster"},"How to debug an application in the cluster"),(0,r.kt)("p",null,"If you want to connect your IDE to one of the applications in the cluster, you need to enable debug mode for that application by overriding the entrypoint (using the ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," fields in the deployment resource). How to do this depends on the application. For the BPDM, as it is based on Spring Boot and Kotlin, you would need to add this flag to the start command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000\n")),(0,r.kt)("p",null,"Then you can forward the port 8000 for the BPDM deployment to your host machine and connect your IDE to that port."))}c.isMDXComponent=!0},20140:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/BPKitIcon-55e920e08d5706764626858aebe41780.png"},98810:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABICAYAAAC9bQZsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD4SURBVHgB7dPRDQIhEIThOSuyBEuxE9dOtkNLWNFooonR8w64HTJ/AjySL7ATKhUlVGgqoUI7DJpgbAnGlmBsCcaWYGwJxpZgbAnGlmBsCcaWYGwJxpZgbAnGlmBsCcaWYGwJxpZgbAnGlmBsDQubIsLKecJYne/7DRfjZG/EGANnH98vuHH29XMGJ85mTV5w4eahyHCGJUVunGFNkRNnqFHkwhlqFjlwhhbFtjhDy8oFx+ifoUedcYaedcI5tqgxzrFljXCODFXGOTJVCefI2EqcI3MLcQ6G/sQ5mJqJczD2A+dgrgAOZV2GQj0rkP0LzjFSD5yjU1cRwNvKUW2LGwAAAABJRU5ErkJggg=="},56793:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKxSURBVHgBzZmBcZtAEEWXVCA3kJHTgCmBuIEkFcSTBuJJA1IaiF2BSAVRB5LSgJMKhOwCZFfg9f7Rgc/oQNxxd/BmdrABwf/LcndaJdQTZp7IJpW4kMjU3xMVJTsVTxIbib9JkvynoRDRmUQu8chuFOrzU4qFEr1mv+RBTcjF0wCiw5uQC37neGwlUuqLXGSishGbZ4kZuaKE/+PhcDMwAuEl9gbkAzc8HmDguqvwGY+PPRte4qQmfCqbgoZhR4cZuGmkKWRW/qDveFc7YUnDgIR9lLiUaFo2nEty58YjcuCKh2Grnjg0IM64ebBA+UxM4guOTyVc03HKwLwuPOP4HAk3GDAt+qrslzV/RXFBjV/KC7hrOI6B5Be9XVaXYN/n6j92X9a60JhxpSXh00uSVXlyzJLxIRzscT7KJqM4tJYKhMtmQd1KGMuXFOIvyB5MJl/oMLF0wafwkhQftF2A4f1I1U2nfHqI9VUqdW5sX9ZKuHbzNgNFIOFgQRYnHwk/YaAIKBwsbcTn1ELNQGjhYGUjHsw6GFhHEA6WLmuauQS54FE4WGCofLKTQMi+tQF2Gw7beMBFf7MbnQ2w34wDfDX8hMy79gw7PQH2n/GS+7IT1odWAxym77PVb9B3VWk0wOEaVgv9JnPuT2WA/de4Duo908VP2Q8wEFI42Joe8Zr9ELLThqx/LTUnmng8ijWNmze9m6pvIzs3srml8YIX6qe+o94xw5fbO4lzGh+5JPibviOpn6HKZ2U6NiDGb2L1dl9ZPj9oPDxSe5vkGPYz9vfF2B22MfDMw+AuXDNwPYABPz+qKQNTdcEY/GFTJ9iDCZTRnsOA5GQUEj48hVzdzEc53bE25UeDDz9I4DHvlZGuZrAEv+2baW8TkRKC1uGZxHt6naV3anuv/t5YjdktvAC2Xa6gg5881QAAAABJRU5ErkJggg=="},27400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/minikube-bpdm-dashboard-overview-915ac7440a104551e56f963396d307db.png"},66445:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFdSURBVHgB7dmNacJQFIbh75YO0BG6QbtBcYNuIE7SdIK2EzSbdAU36BnBDeI5akDB3B+I4PlyXriIJAQfck1uNA3D8A/gGfxJUuyAhfSABRVY1lqxOziuBbvRsYJjcC12k1LqdWzhGFyDPUDHN57BJewFdMwrOIe9Ch3zCJ7CGmCLQt7AU9gnHX+6knxFIU/g3DSmA5cuUFTgmlsPDbh2UUEBblkuuge3PggY+LdmxxP4G3dU6y8VomOlECntqIdd60uPO6rlzAocQ61arMA51Hqs2EcwP/QHt/k+v+v4mtpYwgpuc0Z3NcdsTT9D9uqfm8YCgql7Xu6phwpq5Z561ijkCWrlpnGnmI+pjd6gVunWcxXsEWrV3HoMbMu/T3szE/RNj9Nh/l5yG1uWix2OV+geTot/8VgLLGuBZS2wrAWWtcCyFljWAstaYFkLLGuBZS2wrAWWtcVhBctI9okuo48bmQW2AAAAAElFTkSuQmCC"}}]);