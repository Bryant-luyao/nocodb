"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||b[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Share base",description:"Procedures to share a base publicly & generating embedded iframe",tags:["Collaboration","Bases","Share"],keywords:["NocoDB base","share base","base collaboration","base actions","base settings"]},i=void 0,l={unversionedId:"collaboration/share-base",id:"collaboration/share-base",title:"Share base",description:"Procedures to share a base publicly & generating embedded iframe",source:"@site/docs/120.collaboration/030.share-base.md",sourceDirName:"120.collaboration",slug:"/collaboration/share-base",permalink:"/collaboration/share-base",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/120.collaboration/030.share-base.md",tags:[{label:"Collaboration",permalink:"/tags/collaboration"},{label:"Bases",permalink:"/tags/bases"},{label:"Share",permalink:"/tags/share"}],version:"current",sidebarPosition:30,frontMatter:{title:"Share base",description:"Procedures to share a base publicly & generating embedded iframe",tags:["Collaboration","Bases","Share"],keywords:["NocoDB base","share base","base collaboration","base actions","base settings"]},sidebar:"tutorialSidebar",previous:{title:"Base collaboration",permalink:"/collaboration/base-collaboration"},next:{title:"Share view",permalink:"/collaboration/share-view"}},s={},c=[{value:"Copy base",id:"copy-base",level:2},{value:"Modify Share base",id:"modify-share-base",level:2},{value:"Disable Share base",id:"disable-share-base",level:2},{value:"Share base Access Permissions",id:"share-base-access-permissions",level:2},{value:"Embeddable Frame",id:"embeddable-frame",level:2},{value:"Embed into application&#39;s HTML Body",id:"embed-into-applications-html-body",level:3}],p={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To share a base, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the top right corner of the top navigation bar and click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," button."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Shared base")," section, toggle the switch to ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable public access")," in order to activate the shared base feature."),(0,o.kt)("li",{parentName:"ol"},"The generated link for the shared base will be displayed above and can be utilized to share this project with others. To copy the URL, simply click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Copy Link")," option.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share base",src:a(3132).Z,width:"2898",height:"1216"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share base",src:a(43320).Z,width:"2876",height:"1324"})),(0,o.kt)("h2",{id:"copy-base"},"Copy base"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy base")," feature allows users to create a copy of the base (import base) into their own Workspace. This feature is also useful for users who wish to utilize a base as a template for future projects. To copy a base, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access shared base URL that you wish to copy."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Copy base")," button located in the top right corner of the toolbar."),(0,o.kt)("li",{parentName:"ol"},"A modal will appear, prompting you to select the Workspace you wish to copy the base to. Select the desired Workspace "),(0,o.kt)("li",{parentName:"ol"},"Configure if you wish to copy the base with or without data / views."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Copy base")," button to complete the process.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy base",src:a(86636).Z,width:"2876",height:"1038"}),"\n",(0,o.kt)("img",{alt:"Copy base",src:a(78986).Z,width:"2876",height:"1422"})),(0,o.kt)("h2",{id:"modify-share-base"},"Modify Share base"),(0,o.kt)("p",null,"Amending the ",(0,o.kt)("inlineCode",{parentName:"p"},"Share base")," setting will render the previously generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Share base")," link invalid and generate a new link in its place.\nHere are the steps to modify it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," button located in the top right corner of the toolbar."),(0,o.kt)("li",{parentName:"ol"},"Toggle the option labeled ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable public access")," to deactivate the base share."),(0,o.kt)("li",{parentName:"ol"},"Toggle the same option, ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable public access,")," to reactivate the base share, subsequently generating a new link.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable public access",src:a(78830).Z,width:"2874",height:"1790"})),(0,o.kt)("h2",{id:"disable-share-base"},"Disable Share base"),(0,o.kt)("p",null,"Disabling ",(0,o.kt)("inlineCode",{parentName:"p"},"Share base")," will render the previously generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Share base")," link invalid\nHere are the steps to disable it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the 'Share' button located in the top right corner of the toolbar."),(0,o.kt)("li",{parentName:"ol"},"Toggle the option labeled ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable public access")," to deactivate the base share.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable public access",src:a(78830).Z,width:"2874",height:"1790"})),(0,o.kt)("h2",{id:"share-base-access-permissions"},"Share base Access Permissions"),(0,o.kt)("p",null,'The "Shared base" can be configured in two modes:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Viewer")," - Users with the provided link will have ",(0,o.kt)("strong",{parentName:"li"},"read-only")," access to the base data."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Editor")," - Users with the provided link will have ",(0,o.kt)("strong",{parentName:"li"},"read and write")," access to the base data.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The default access permission is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"Viewer")),(0,o.kt)("li",{parentName:"ul"},"Shared base with ",(0,o.kt)("inlineCode",{parentName:"li"},"Editor")," access permission is only available in Self-hosted version currently"))),(0,o.kt)("p",null,"Toggle ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Editor Access")," button to configure permissions as desired\n",(0,o.kt)("img",{alt:"Share base edit access",src:a(82630).Z,width:"2874",height:"1790"})),(0,o.kt)("h2",{id:"embeddable-frame"},"Embeddable Frame"),(0,o.kt)("p",null,"The NocoDB interface can be seamlessly integrated into existing applications through the utilization of the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"HTML IFRAME")," attribute. This feature empowers users to embed the NocoDB interface into their applications, allowing for a unified user experience. To generate the embeddable HTML code, follow these steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To Generate Embeddable HTML Code:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," button located in the top right corner of the toolbar."),(0,o.kt)("li",{parentName:"ol"},"Within the ",(0,o.kt)("inlineCode",{parentName:"li"},"Shared base link")," tab, select the button to copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"Embeddable HTML code")," to your clipboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share base iFrame",src:a(41464).Z,width:"2874",height:"1790"})),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n        class="nc-embed"\n        src="https://nocodb-nocodb-rsyir.ondigitalocean.app/dashboard/#/nc/base/e3bba9df-4fc1-4d11-b7ce-41c4a3ad6810?embed"\n        frameBorder="0"\n        width="100%"\n        height="700"\n        style="background: transparent; border: 1px solid #ddd"\n>\n</iframe>\n')),(0,o.kt)("h3",{id:"embed-into-applications-html-body"},"Embed into application's HTML Body"),(0,o.kt)("p",null,"Sample code with embedded iframe generated above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n<iframe\n        class="nc-embed"\n        src="http://localhost:3000/#/nc/base/7d4b551c-b5e0-41c9-a87b-f3984c21d2c7?embed"\n        frameBorder="0"\n        width="100%"\n        height="700"\n        style="background: transparent; "\n></iframe>\n</body>\n</html>\n')))}b.isMDXComponent=!0},3132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-1-b9c4bddb603c184a16da76c4e1e08edb.png"},43320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-2-07354533111aa13a608996b10640f468.png"},78986:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-copy-base-2-6284b3e7a0c196202d52377af31abae0.png"},86636:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-copy-base-d3104cd78770d32c4c70d8a585ec3d00.png"},82630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-edit-access-b293bc0349998853d6de8a9784ae9e54.png"},78830:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-enable-public-access-70567245aad03d619b620d838cbdb21a.png"},41464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-base-iframe-5cf906c782389e1cf39b132cd1ab62ac.png"}}]);