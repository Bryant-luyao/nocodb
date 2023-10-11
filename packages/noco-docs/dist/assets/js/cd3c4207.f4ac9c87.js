"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[485],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>f});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(l),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return l?a.createElement(f,i(i({ref:t},p),{},{components:l})):a.createElement(f,i({ref:t},p))}));function f(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=l[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},67047:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=l(87462),n=(l(67294),l(3905));const r={title:"Rollup",description:"This article explains how to create & work with a Rollup field.",tags:["Fields","Field types","Links based types","Rollup"],keywords:["Fields","Field types","Links based types","Rollup","Create rollup field"]},i=void 0,o={unversionedId:"fields/field-types/links-based/rollup",id:"fields/field-types/links-based/rollup",title:"Rollup",description:"This article explains how to create & work with a Rollup field.",source:"@site/docs/070.fields/040.field-types/040.links-based/030.rollup.md",sourceDirName:"070.fields/040.field-types/040.links-based",slug:"/fields/field-types/links-based/rollup",permalink:"/fields/field-types/links-based/rollup",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/040.links-based/030.rollup.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Links based types",permalink:"/tags/links-based-types"},{label:"Rollup",permalink:"/tags/rollup"}],version:"current",sidebarPosition:30,frontMatter:{title:"Rollup",description:"This article explains how to create & work with a Rollup field.",tags:["Fields","Field types","Links based types","Rollup"],keywords:["Fields","Field types","Links based types","Rollup","Create rollup field"]},sidebar:"tutorialSidebar",previous:{title:"Lookup",permalink:"/fields/field-types/links-based/lookup"},next:{title:"Attachment",permalink:"/fields/field-types/custom-types/attachment"}},s={},d=[{value:"Create a Rollup Field",id:"create-a-rollup-field",level:2},{value:"Aggregation Functions",id:"aggregation-functions",level:3},{value:"Similar links-based fields",id:"similar-links-based-fields",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Rollup")," fields are used to aggregate data from fields in the related table. Often used to calculate totals, averages, and other aggregate data."),(0,n.kt)("h2",{id:"create-a-rollup-field"},"Create a Rollup Field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Lookup")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Select the link field from the dropdown. This is the field that links the current table to the related table."),(0,n.kt)("li",{parentName:"ol"},"Select the field for display from the dropdown. This is the field that will be displayed in the current table."),(0,n.kt)("li",{parentName:"ol"},"Select the aggregation function from the dropdown. This is the function that will be used to aggregate the data."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:l(11345).Z,width:"2880",height:"1480"})),(0,n.kt)("h3",{id:"aggregation-functions"},"Aggregation Functions"),(0,n.kt)("p",null,"Here's a table with brief descriptions for each of the aggregation functions supported by NocoDB:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Aggregation Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Count"),(0,n.kt)("td",{parentName:"tr",align:null},"Counts the number of records in a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Minimum"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves the minimum value from a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves the maximum value from a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Average"),(0,n.kt)("td",{parentName:"tr",align:null},"Calculates the average value in a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sum"),(0,n.kt)("td",{parentName:"tr",align:null},"Adds up all the values in a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Count Distinct"),(0,n.kt)("td",{parentName:"tr",align:null},"Counts the number of distinct values in a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sum Distinct"),(0,n.kt)("td",{parentName:"tr",align:null},"Adds up all the distinct values in a dataset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Average Distinct"),(0,n.kt)("td",{parentName:"tr",align:null},"Calculates the average of distinct values in a dataset.")))),(0,n.kt)("h2",{id:"similar-links-based-fields"},"Similar links-based fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/links-based/links"},"Links")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/links-based/lookup"},"Lookup"))))}c.isMDXComponent=!0},11345:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/rollup-bf68cdbc91743484a43f978f74ce18ef.png"}}]);