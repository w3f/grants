"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3570:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"suggesting",sidebar_position:4,title:"Suggesting a Project"},i=void 0,s={unversionedId:"suggesting",id:"suggesting",isDocsHomePage:!1,title:"Suggesting a Project",description:"If you think that we should support the development of certain tools or projects that aren't in the Polkadot/Kusama tech stack, feel free to submit a suggestion using the process described below. We are particularly interested in supporting projects that could be leveraged by other builders in our ecosystem.",source:"@site/docs/suggesting_a_project.md",sourceDirName:".",slug:"/suggesting",permalink:"/grants/docs/suggesting",editUrl:"https://github.com/w3f/grants/edit/master/docs/suggesting_a_project.md",tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1657581626,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:4,frontMatter:{id:"suggesting",sidebar_position:4,title:"Suggesting a Project"},sidebar:"defaultSidebar",previous:{title:"4. Changes to a Grant",permalink:"/grants/docs/Process/changes"},next:{title:"Maintenance Grants",permalink:"/grants/docs/maintenance"}},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you think that we should support the development of certain tools or projects that aren't in the Polkadot/Kusama ",(0,n.kt)("a",{parentName:"p",href:"docs/polkadot_stack.md"},"tech stack"),", feel free to submit a suggestion using the process described below. We are particularly interested in supporting projects that could be leveraged by other builders in our ecosystem."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Submit an idea:")),(0,n.kt)("p",null,"If you have an idea for a project or would like to highlight an area in which you'd like to see teams build, but lack the technical background to create a detailed outline, you're welcome to open an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/issues/new"},"issue")," or add it to the ",(0,n.kt)("a",{parentName:"p",href:"docs/polkadot_stack.md"},"tech stack")," as a potentially interesting project. We will review your suggestion and, if necessary, will create an RFP based on it and reach out to teams able to build it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Submit an RFP (Request for Proposals):")),(0,n.kt)("p",null,"Ideas generally have better chances of being implemented if they're presented in a project outline format that can be picked up straight away by a team, so if you have a good concept of the milestones required to bring your project to life, you can follow the process below and directly submit an RFP:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/fork"},"Fork")," this repository."),(0,n.kt)("li",{parentName:"ol"},"In the newly created fork, create a copy of the suggestion template (",(0,n.kt)("a",{parentName:"li",href:"rfps/suggestion-template.md"},(0,n.kt)("inlineCode",{parentName:"a"},"rfps/suggestion-template.md")),") inside the ",(0,n.kt)("a",{parentName:"li",href:"rfps"},(0,n.kt)("inlineCode",{parentName:"a"},"rfps"))," folder. Make sure you create a new file and copy the ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/w3f/Grants-Program/master/rfps/suggestion-template.md"},"contents")," of the template into the new one, and ",(0,n.kt)("em",{parentName:"li"},"do not modify the template file directly.")),(0,n.kt)("li",{parentName:"ol"},"Name the file after your idea: ",(0,n.kt)("inlineCode",{parentName:"li"},"project_name.md"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill out the template with the project details. Please include as many details as possible."),(0,n.kt)("li",{parentName:"ol"},"Once you're done, create a pull request. The pull request should only contain ",(0,n.kt)("em",{parentName:"li"},"one new file"),"\u2014the Markdown file you created from the template."),(0,n.kt)("li",{parentName:"ol"},"You will see the same template as for creating an application. Please replace it with ",(0,n.kt)("a",{parentName:"li",href:".github/PULL_REQUEST_TEMPLATE/rfp_pr_template.md"},"this one"),".")))}c.isMDXComponent=!0}}]);