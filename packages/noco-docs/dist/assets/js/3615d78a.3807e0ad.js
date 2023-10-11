"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={title:"Releases & Builds",description:"NocoDB creates Docker and Binaries for each PR"},o=void 0,r={unversionedId:"engineering/builds-and-releases",id:"version-0.109.7/engineering/builds-and-releases",title:"Releases & Builds",description:"NocoDB creates Docker and Binaries for each PR",source:"@site/versioned_docs/version-0.109.7/050.engineering/060.builds-and-releases.md",sourceDirName:"050.engineering",slug:"/engineering/builds-and-releases",permalink:"/0.109.7/engineering/builds-and-releases",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/050.engineering/060.builds-and-releases.md",tags:[],version:"0.109.7",sidebarPosition:60,frontMatter:{title:"Releases & Builds",description:"NocoDB creates Docker and Binaries for each PR"},sidebar:"tutorialSidebar",previous:{title:"Playwright E2E Testing",permalink:"/0.109.7/engineering/playwright"},next:{title:"i18n translation",permalink:"/0.109.7/engineering/translation"}},s={},d=[{value:"Builds of NocoDB",id:"builds-of-nocodb",level:2},{value:"Release builds",id:"release-builds",level:2},{value:"How to make a release build  ?",id:"how-to-make-a-release-build--",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Case 1: Leaving inputs blank",id:"case-1-leaving-inputs-blank",level:3},{value:"Case 2: Manually Input",id:"case-2-manually-input",level:3},{value:"How does release action work ?",id:"how-does-release-action-work-",level:3},{value:"validate-branch",id:"validate-branch",level:4},{value:"process-input",id:"process-input",level:4},{value:"pr-to-master",id:"pr-to-master",level:4},{value:"release-npm",id:"release-npm",level:4},{value:"release-draft-note",id:"release-draft-note",level:4},{value:"release-docker",id:"release-docker",level:4},{value:"close-issues",id:"close-issues",level:4},{value:"publish-docs",id:"publish-docs",level:4},{value:"update-sdk-path",id:"update-sdk-path",level:4},{value:"sync-to-develop",id:"sync-to-develop",level:4},{value:"Daily builds",id:"daily-builds",level:2},{value:"What are daily builds ?",id:"what-are-daily-builds-",level:3},{value:"Docker images",id:"docker-images",level:3},{value:"Timely builds",id:"timely-builds",level:2},{value:"What are timely builds ?",id:"what-are-timely-builds-",level:3},{value:"Docker images",id:"docker-images-1",level:3},{value:"Executables or Binaries",id:"executables-or-binaries",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"builds-of-nocodb"},"Builds of NocoDB"),(0,l.kt)("p",null,"There are 3 kinds of docker builds in NocoDB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Release builds ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nocodb/nocodb"},"nocodb/nocodb")," : built during NocoDB release. "),(0,l.kt)("li",{parentName:"ul"},"Daily builds ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nocodb/nocodb-daily"},"nocodb/nocodb-daily")," : built every 6 hours from Develop branch."),(0,l.kt)("li",{parentName:"ul"},"Timely builds ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nocodb/nocodb-timely"},"nocodb/nocodb-timely"),": built for every PR and manually triggered PRs.")),(0,l.kt)("p",null,"Below is an overview of how to make these builds and what happens behind the scenes."),(0,l.kt)("h2",{id:"release-builds"},"Release builds"),(0,l.kt)("h3",{id:"how-to-make-a-release-build--"},"How to make a release build  ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb/actions/workflows/release-nocodb.yml"},"NocoDB release action"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You should see the below screen"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/167240353-a02f690f-c865-4ade-8645-64382405c9ea.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Change ",(0,l.kt)("inlineCode",{parentName:"p"},"Use workflow from")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Branch: master"),". If you choose the wrong branch, the workflow will be ended."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/167240383-dda05f76-8323-4f4a-b3e7-9db886dbd68d.png",alt:"image"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then there would be two cases - you can either leave target tag and pervious tag blank or manually input some values")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Target Tag means the target deployment version, while Previous Tag means the latest version as of now. Previous Tag is used for Release Note only - showing the file / commit differences between two tags."))),(0,l.kt)("h3",{id:"tagging"},"Tagging"),(0,l.kt)("p",null,"The naming convention would be following given the actual release tag is ",(0,l.kt)("inlineCode",{parentName:"p"},"0.100.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.0-beta.0")," (first version of pre-release)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.0-beta.1")," (include bug fix changes on top of the previous version)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.0-beta.2"),"(include bug fix changes on top of the previous version)"),(0,l.kt)("li",{parentName:"ul"},"and so on ..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.0")," (actual release)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.1")," (minor bug fix release)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.100.2")," (minor bug fix release)")),(0,l.kt)("h3",{id:"case-1-leaving-inputs-blank"},"Case 1: Leaving inputs blank"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If Previous Tag is blank, then the value will be fetched from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nocodb/nocodb/releases/latest"},"latest")),(0,l.kt)("li",{parentName:"ul"},"If Target Tag is blank, then the value will be Previous Tag plus one. Example: 0.90.11 (Previous Tag) + 0.0.1 = 0.90.12 (Target Tag)")),(0,l.kt)("h3",{id:"case-2-manually-input"},"Case 2: Manually Input"),(0,l.kt)("p",null,"Why? Sometimes we may mess up in NPM deployment. As NPM doesn't allow us to redeploy to the same tag again, in this case we cannot just use the previous tag + 1. Therefore, we need to use previous tag + 2 instead and we manually configure it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After that, click ",(0,l.kt)("inlineCode",{parentName:"li"},"Run workflow")," to start"),(0,l.kt)("li",{parentName:"ul"},"You can see Summary for the overall job status."),(0,l.kt)("li",{parentName:"ul"},"Once ",(0,l.kt)("inlineCode",{parentName:"li"},"release-draft-note")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"release-executables")," is finished, then go to ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nocodb/nocodb/releases"},"releases"),", edit the draft note and save as draft for time being.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: Adding header, update content if necessary, and click ",(0,l.kt)("inlineCode",{parentName:"li"},"Auto-generate release notes")," to include more info."))),(0,l.kt)("li",{parentName:"ul"},"Once ",(0,l.kt)("inlineCode",{parentName:"li"},"release-docker")," is finished, then test it locally first. You'll be expected to see ",(0,l.kt)("inlineCode",{parentName:"li"},"Upgrade Available")," notification in UI as we haven't published the release note. (the version is retrieved from there)"),(0,l.kt)("li",{parentName:"ul"},"Once everything is finished, then publish the release note and the deployment is considered as DONE.")),(0,l.kt)("h3",{id:"how-does-release-action-work-"},"How does release action work ?"),(0,l.kt)("h4",{id:"validate-branch"},"validate-branch"),(0,l.kt)("p",null,"To check if ",(0,l.kt)("inlineCode",{parentName:"p"},"github.ref")," is master. Otherwise, other branches will be not accepted."),(0,l.kt)("h4",{id:"process-input"},"process-input"),(0,l.kt)("p",null,"To enrich target tag or previous tag if necessary."),(0,l.kt)("h4",{id:"pr-to-master"},"pr-to-master"),(0,l.kt)("p",null,"Automate a PR from develop to master branch so that we know the actual differences between the previous tag and the current tag. We choose master branch for a deployment base."),(0,l.kt)("h4",{id:"release-npm"},"release-npm"),(0,l.kt)("p",null,"Build frontend and backend and release them to NPM. The changes during built such as version bumping will be committed and pushed to a temporary branch and an automated PR will be created and merged to master branch."),(0,l.kt)("p",null,"Note that once you publish with a certain tag, you cannot publish with the same tag again."),(0,l.kt)("h4",{id:"release-draft-note"},"release-draft-note"),(0,l.kt)("p",null,"Generate a draft release note. Some actions need to be done after this step."),(0,l.kt)("h4",{id:"release-docker"},"release-docker"),(0,l.kt)("p",null,"Build docker image and publish it to Docker Hub. It may take around 15 - 30 mins."),(0,l.kt)("h4",{id:"close-issues"},"close-issues"),(0,l.kt)("p",null,"Open issues marked with label ",(0,l.kt)("inlineCode",{parentName:"p"},"Status: Fixed")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Status: Resolved")," will be closed by bot automatically with comment mentioning the fix is included in which version."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/167241574-f8f7061f-c689-444a-b761-0a727974c53f.png",alt:"image"})),(0,l.kt)("h4",{id:"publish-docs"},"publish-docs"),(0,l.kt)("p",null,"Publish Documentations"),(0,l.kt)("h4",{id:"update-sdk-path"},"update-sdk-path"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nocodb-sdk")," is used in frontend and backend. However, in develop branch, the value would be ",(0,l.kt)("inlineCode",{parentName:"p"},"file:../nocodb-sdk")," for development purpose (so that the changes done in nocodb-sdk in develop will be included in frontend and backend). During the deployment, the value will be changed to the target tag. This job is to update them back."),(0,l.kt)("h4",{id:"sync-to-develop"},"sync-to-develop"),(0,l.kt)("p",null,"Once the deployment is finished, there would be some new changes being pushed to master branch. This job is to sync the changes back to develop so that both branch won't have any difference."),(0,l.kt)("h2",{id:"daily-builds"},"Daily builds"),(0,l.kt)("h3",{id:"what-are-daily-builds-"},"What are daily builds ?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NocoDB creates every 6 hours from develop branches and publishes as nocodb/nocodb-daily"),(0,l.kt)("li",{parentName:"ul"},"This is so that we can easily try what is in the develop branch easily.")),(0,l.kt)("h3",{id:"docker-images"},"Docker images"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The docker images will be built and pushed to Docker Hub (See ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nocodb/nocodb-daily/tags"},"nocodb/nocodb-daily")," for the full list). ")),(0,l.kt)("h2",{id:"timely-builds"},"Timely builds"),(0,l.kt)("h3",{id:"what-are-timely-builds-"},"What are timely builds ?"),(0,l.kt)("p",null,"NocoDB has github actions which creates docker and binaries for each PR! And these can be found as a ",(0,l.kt)("strong",{parentName:"p"},"comment on the last commit")," of the PR.  "),(0,l.kt)("p",null,"Example shown below"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to a PR and click on the comment."),(0,l.kt)("img",{width:"1111",alt:"Screenshot 2023-01-23 at 15 46 36",src:"https://user-images.githubusercontent.com/5435402/214083736-80062398-3712-430f-9865-86b110090c91.png"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click on the link to copy the docker image and run it locally."),(0,l.kt)("img",{width:"1231",alt:"Screenshot 2023-01-23 at 15 46 55",src:"https://user-images.githubusercontent.com/5435402/214083755-945d9485-2b9e-4739-8408-068bdf4a84b7.png"}))),(0,l.kt)("p",null,"This is to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reduce pull request cycle time"),(0,l.kt)("li",{parentName:"ul"},"allow issue reporters / reviewers to verify the fix without setting up their local machines")),(0,l.kt)("h3",{id:"docker-images-1"},"Docker images"),(0,l.kt)("p",null,"When a non-draft Pull Request is created, reopened or synchronized, a timely build for Docker would be triggered for the changes only included in the following paths."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"packages/nocodb-sdk/**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"packages/nc-gui/**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"packages/nc-plugin/**")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"packages/nocodb/**"))),(0,l.kt)("p",null,"The docker images will be built and pushed to Docker Hub (See ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nocodb/nocodb-timely/tags"},"nocodb/nocodb-timely")," for the full list). Once the image is ready, Github bot will add a comment with the command in the pull request. The tag would be ",(0,l.kt)("inlineCode",{parentName:"p"},"<NOCODB_CURRENT_VERSION>-pr-<PR_NUMBER>-<YYYYMMDD>-<HHMM>"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/175012097-240dab05-da93-4c4e-87c1-1c36fb1350bd.png",alt:"image"})),(0,l.kt)("h2",{id:"executables-or-binaries"},"Executables or Binaries"),(0,l.kt)("p",null,"Similarly, we provide a timely build for executables for non-docker users. The source code will be built, packaged as binary files, and pushed to Github (See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nocodb/nocodb-timely/releases"},"nocodb/nocodb-timely")," for the full list)."),(0,l.kt)("p",null,"Currently, we only support the following targets:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-linux-arm64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-macos-arm64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-win-arm64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-linux-x64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-macos-x64")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node16-win-x64"))),(0,l.kt)("p",null,"Once the executables are ready, Github bot will add a comment with the commands in the pull request."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/175012070-f5f3e7b8-6dc5-4d1c-9f7e-654bc5039521.png",alt:"image"})),(0,l.kt)("p",null,"NocoDB creates Docker and Binaries for each PR."),(0,l.kt)("p",null,"This is to"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reduce pull request cycle time"),(0,l.kt)("li",{parentName:"ul"},"allow issue reporters / reviewers to verify the fix without setting up their local machines")))}p.isMDXComponent=!0}}]);