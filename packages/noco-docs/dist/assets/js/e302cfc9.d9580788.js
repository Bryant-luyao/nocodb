"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1313],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(r,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={title:"Table details overview",description:"Table details overview",tags:["Table details","Table","Overview"],keywords:["table details","table overview","table"]},s=void 0,o={unversionedId:"table-details/table-details-overview",id:"table-details/table-details-overview",title:"Table details overview",description:"Table details overview",source:"@site/docs/065.table-details/table-details-overview.md",sourceDirName:"065.table-details",slug:"/table-details/table-details-overview",permalink:"/table-details/table-details-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/065.table-details/table-details-overview.md",tags:[{label:"Table details",permalink:"/tags/table-details"},{label:"Table",permalink:"/tags/table"},{label:"Overview",permalink:"/tags/overview"}],version:"current",frontMatter:{title:"Table details overview",description:"Table details overview",tags:["Table details","Table","Overview"],keywords:["table details","table overview","table"]},sidebar:"tutorialSidebar",previous:{title:"Download",permalink:"/table-operations/download"},next:{title:"Fields overview",permalink:"/fields/fields-overview"}},r={},p=[{value:"Fields",id:"fields",level:2},{value:"Relations",id:"relations",level:2},{value:"API Snippet",id:"api-snippet",level:2},{value:"Sample snippets",id:"sample-snippets",level:3},{value:"Supported Snippet",id:"supported-snippet",level:2},{value:"Shell",id:"shell",level:3},{value:"Javascript",id:"javascript",level:3},{value:"Node",id:"node",level:3},{value:"NocoDB SDK",id:"nocodb-sdk",level:3},{value:"PHP",id:"php",level:3},{value:"Python",id:"python",level:3},{value:"Ruby",id:"ruby",level:3},{value:"Java",id:"java",level:3},{value:"C",id:"c",level:3},{value:"Webhook",id:"webhook",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=c("Tabs"),d=c("TabItem"),u={toc:p},h="wrapper";function b(e){let{components:t,...l}=e;return(0,i.kt)(h,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Table Details")," section houses various tools & utilities to manage & work with your table schema & data. This essentially is a place for 'Creators' to build & manage their tables quickly. ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," section is accessible using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data-Details")," toggle switcher in the top navbar. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(52243).Z,width:"2876",height:"208"})),(0,i.kt)("p",null,"This section is divided into 4 parts:"),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("p",null,"Fields is a multi-field table schema editor that allows you to add, edit, delete and reorder fields quickly & easily from one place. Additional details about multi-field editor can be found ",(0,i.kt)("a",{parentName:"p",href:"/fields/multi-fields-editor"},"here")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(63955).Z,width:"2880",height:"1800"})),(0,i.kt)("h2",{id:"relations"},"Relations"),(0,i.kt)("p",null,"Relations are vital for managing data connections in a database. In a complex schema, it's essential to have a clear understanding of these connections because they:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Maintain data accuracy."),(0,i.kt)("li",{parentName:"ol"},"Enhance query efficiency."),(0,i.kt)("li",{parentName:"ol"},"Aid in logical schema design."),(0,i.kt)("li",{parentName:"ol"},"Support data analysis."),(0,i.kt)("li",{parentName:"ol"},"Enable proper application development.")),(0,i.kt)("p",null,"Visualizing these relations through an Entity Relationship Diagram (ERD) simplifies their comprehension and management, especially as the database grows in complexity."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(29613).Z,width:"2880",height:"1800"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can drag drop the tables to rearrange them in the diagram. Note that, such reordering will not persist across sessions.")),(0,i.kt)("h2",{id:"api-snippet"},"API Snippet"),(0,i.kt)("p",null,"NocoDB provides programmatic access to your data via REST APIs. API snippets in NocoDB offer ready-made code examples in various programming languages, simplifying the process of integrating your data with external applications. These snippets save time and effort by providing a quick and easy reference for developers, enabling them to interact with your NocoDB database programmatically without the need to write code from scratch."),(0,i.kt)("p",null,"A quick snippet for different scripts & languages is listed in this section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(30175).Z,width:"2880",height:"1800"})),(0,i.kt)("h3",{id:"sample-snippets"},"Sample snippets"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(d,{value:"Shell",label:"Shell",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=' \\\n  --header 'xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n"))),(0,i.kt)(d,{value:"Javascript",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"import axios from \"axios\";\n\nconst options = {\n  method: 'GET',\n  url: 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer',\n  params: {offset: '0', limit: '25', where: ''},\n  headers: {\n    'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n"))),(0,i.kt)(d,{value:"Node",label:"Node",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"var axios = require(\"axios\").default;\n\nvar options = {\n  method: 'GET',\n  url: 'http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer',\n  params: {offset: '0', limit: '25', where: ''},\n  headers: {\n    'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n  }\n};\n\naxios.request(options).then(function (response) {\n  console.log(response.data);\n}).catch(function (error) {\n  console.error(error);\n});\n"))),(0,i.kt)(d,{value:"NocoDB SDK",label:"NocoDB SDK",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'import { Api } from "nocodb-sdk";\nconst api = new Api({\n  baseURL: "http://localhost:8080",\n  headers: {\n    "xc-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU"\n  }\n})\n\napi.dbViewRow.list(\n  "noco",\n  "ExternalDB",\n  "Customer",\n  "Customer", {\n    "offset": 0,\n    "limit": 25,\n    "where": ""\n}).then(function (data) {\n  console.log(data);\n}).catch(function (error) {\n  console.error(error);\n});\n'))),(0,i.kt)(d,{value:"PHP",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_PORT => "8080",\n  CURLOPT_URL => "http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "GET",\n  CURLOPT_HTTPHEADER => [\n    "xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU"\n  ],\n]);\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo "cURL Error #:" . $err;\n} else {\n  echo $response;\n}\n'))),(0,i.kt)(d,{value:"Python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'import http.client\n\nconn = http.client.HTTPConnection("localhost:8080")\n\nheaders = { \'xc-auth\': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU" }\n\nconn.request("GET", "/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=", headers=headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode("utf-8"))\n'))),(0,i.kt)(d,{value:"Ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"require 'uri'\nrequire 'net/http'\n\nurl = URI(\"http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=\")\n\nhttp = Net::HTTP.new(url.host, url.port)\n\nrequest = Net::HTTP::Get.new(url)\nrequest[\"xc-auth\"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU'\n\nresponse = http.request(request)\nputs response.read_body\n"))),(0,i.kt)(d,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'HttpResponse<String> response = Unirest.get("http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=")\n  .header("xc-auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU")\n  .asString();\n'))),(0,i.kt)(d,{value:"C",label:"C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CURL *hnd = curl_easy_init();\n\ncurl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");\ncurl_easy_setopt(hnd, CURLOPT_URL, "http://localhost:8080/api/v1/db/data/noco/p18h72lcfwzpsvu/Customer/views/Customer?offset=0&limit=25&where=");\n\nstruct curl_slist *headers = NULL;\nheaders = curl_slist_append(headers, "xc-auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbm9jb2RiLmNvbSIsImRpc3BsYXlfbmFtZSI6IlJpY2hhcmQiLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3ExbGNpeWp4ejh5bzY4Iiwicm9sZXMiOnsib3JnLWxldmVsLXZpZXdlciI6dHJ1ZX0sInRva2VuX3ZlcnNpb24iOiI0ZjUyOTUxZGQwOTZmMTVjMTY0Y2U5MDM1OTk1YzlmMDE1MTJjMGNjOThkYmRiMDU2ZmFhM2JhZWE1OWY4Y2QzMTcyN2FjOWZkMTJjNDA2ZiIsImlhdCI6MTY5NTk5MTg0NywiZXhwIjoxNjk2MDI3ODQ3fQ.I7P5caoiDSO4j_3D032XxWxxXwyEju6pL5y3Mnu_MNU");\ncurl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);\n\nCURLcode ret = curl_easy_perform(hnd);\n')))),(0,i.kt)("h2",{id:"supported-snippet"},"Supported Snippet"),(0,i.kt)("h3",{id:"shell"},"Shell"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cURL"),(0,i.kt)("li",{parentName:"ul"},"wget")),(0,i.kt)("h3",{id:"javascript"},"Javascript"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Axios"),(0,i.kt)("li",{parentName:"ul"},"Fetch"),(0,i.kt)("li",{parentName:"ul"},"jQuery"),(0,i.kt)("li",{parentName:"ul"},"XHR")),(0,i.kt)("h3",{id:"node"},"Node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Axios"),(0,i.kt)("li",{parentName:"ul"},"Fetch"),(0,i.kt)("li",{parentName:"ul"},"Request"),(0,i.kt)("li",{parentName:"ul"},"Native"),(0,i.kt)("li",{parentName:"ul"},"Unirest")),(0,i.kt)("h3",{id:"nocodb-sdk"},"NocoDB SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Javascript"),(0,i.kt)("li",{parentName:"ul"},"Node")),(0,i.kt)("h3",{id:"php"},"PHP"),(0,i.kt)("h3",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http.client"),(0,i.kt)("li",{parentName:"ul"},"request")),(0,i.kt)("h3",{id:"ruby"},"Ruby"),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("h3",{id:"c"},"C"),(0,i.kt)("h2",{id:"webhook"},"Webhook"),(0,i.kt)("p",null,"Webhooks are essential for real-time communication and automation between NocoDB and external systems. They serve several crucial purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Instant Notifications:")," Webhooks enable immediate notifications when there are changes in your NocoDB database. This real-time information can be crucial for timely responses to important events, such as new data entries, updates, or deletions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Automation:")," They facilitate the automation of processes by triggering actions in external systems based on database events. For example, you can automate tasks like sending emails, updating spreadsheets, or syncing data with other applications in response to changes in NocoDB.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integration:")," Webhooks allow you to seamlessly integrate NocoDB with other tools and services, enhancing the overall functionality of your database. This integration can streamline workflows, improve data consistency, and reduce manual data entry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Bulk Operations:")," NocoDB's support for webhooks in bulk endpoints makes it efficient to handle multiple records simultaneously. This is especially useful when dealing with large datasets or when you need to perform batch operations in external systems."))),(0,i.kt)("p",null,"In summary, webhooks in NocoDB empower you to create dynamic, responsive, and interconnected workflows by keeping external systems in sync with your database's activities."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(30731).Z,width:"2880",height:"1800"})),(0,i.kt)("p",null,"Note that, Webhooks currently are specific for associated table. Additional procedural details about webhooks can be found ",(0,i.kt)("a",{parentName:"p",href:"/automation/webhook/webhook-overview"},"here")))}b.isMDXComponent=!0},30175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details-api-snippet-78906ef3b2248845b8955eed84a3031e.png"},63955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details-field-editor-6b80e39a53b09c20af27e53b9777ea9a.png"},29613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details-relations-0716794b3e749928f581e2a2f78931a3.png"},52243:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details-tab-8aeca1f70ead223a641ead51b82e97f5.png"},30731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details-webhook-834a408cf5a6b9d711ac6ab63a1eaa4a.png"}}]);