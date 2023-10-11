"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4166],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>u});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(l),m=n,u=c["".concat(s,".").concat(m)]||c[m]||f[m]||a;return l?i.createElement(u,r(r({ref:t},p),{},{components:l})):i.createElement(u,r({ref:t},p))}));function u(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<a;d++)r[d]=l[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}m.displayName="MDXCreateElement"},9933:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=l(87462),n=(l(67294),l(3905));const a={title:"Long text",description:"This article explains how to create & work with a Long text field.",tags:["Fields","Field types","Text based types","Long text"],keywords:["Fields","Field types","Text based types","Long text","Create long text field"]},r=void 0,o={unversionedId:"fields/field-types/text-based/long-text",id:"fields/field-types/text-based/long-text",title:"Long text",description:"This article explains how to create & work with a Long text field.",source:"@site/docs/070.fields/040.field-types/010.text-based/020.long-text.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/long-text",permalink:"/fields/field-types/text-based/long-text",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/010.text-based/020.long-text.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Long text",permalink:"/tags/long-text"}],version:"current",sidebarPosition:20,frontMatter:{title:"Long text",description:"This article explains how to create & work with a Long text field.",tags:["Fields","Field types","Text based types","Long text"],keywords:["Fields","Field types","Text based types","Long text","Create long text field"]},sidebar:"tutorialSidebar",previous:{title:"Single line text",permalink:"/fields/field-types/text-based/single-line-text"},next:{title:"Email",permalink:"/fields/field-types/text-based/email"}},s={},d=[{value:"Create a <code>Long Text</code> field",id:"create-a-long-text-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}],p={toc:d},c="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Long Text")," field is text based field that allows text in multiple lines. It is useful for storing lengthy text like description, notes, etc."),(0,n.kt)("h2",{id:"create-a-long-text-field"},"Create a ",(0,n.kt)("inlineCode",{parentName:"h2"},"Long Text")," field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Long text")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:l(23984).Z,width:"2878",height:"1262"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Specify default value without quotes."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Enter")," key to add new line."))),(0,n.kt)("h3",{id:"cell-display"},"Cell display"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Long Text")," field is displayed as a single line text field in the table view. Click on the expand icon in the cell to view the full text."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:l(13676).Z,width:"1390",height:"515"}),"\n",(0,n.kt)("img",{alt:"image",src:l(50419).Z,width:"885",height:"760"})),(0,n.kt)("h2",{id:"similar-text-based-fields"},"Similar text based fields"),(0,n.kt)("p",null,"Following are the other text based fields available in NocoDB, custom-built for specific use cases."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/single-line-text"},"Single line text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/url"},"URL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/email"},"Email")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/phonenumber"},"Phone"))))}f.isMDXComponent=!0},50419:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/long-text-expand-2-09cce09ec85355082b79054a189abb37.png"},13676:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/long-text-expand-d15b69ace110a10185959d52b19bce63.png"},23984:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/longtext-6970b99c2c42d656b549a5b2a0f75123.png"}}]);