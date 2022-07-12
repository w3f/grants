"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[610],{6165:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(7294),r=a(6010),n=a(261),s=a(6742);const c="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";var g=a(4973);function h({sidebar:e}){return 0===e.items.length?null:l.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},e.title),l.createElement("ul",{className:i},e.items.map((e=>l.createElement("li",{key:e.permalink,className:m},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var E=a(571);const p=function(e){const{sidebar:t,toc:a,children:s,...c}=e,o=t&&t.items.length>0;return l.createElement(n.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&l.createElement("div",{className:"col col--2"},l.createElement(E.Z,{toc:a})))))}},3146:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),c=a(6742),o=a(3018),i=a(2757),m=a(1217),d=a(6146);const u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";const E=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:E,metadata:p,truncated:b,isBlogPostPage:f=!1}=e,{date:v,formattedDate:_,permalink:N,tags:k,readingTime:Z,title:T,editUrl:w}=p,{author:L,image:P,keywords:y}=E,C=E.author_url||E.authorURL,I=E.author_title||E.authorTitle,M=E.author_image_url||E.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(m.Z,{keywords:y,image:P}),l.createElement("article",{className:f?void 0:"margin-bottom--xl"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:u},f?T:l.createElement(c.Z,{to:N},T)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:v},_),Z&&l.createElement(l.Fragment,null," \xb7 ",t(Z))),l.createElement("div",{className:"avatar margin-vert--md"},M&&l.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:C},l.createElement("img",{src:M,alt:L})),l.createElement("div",{className:"avatar__intro"},L&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(c.Z,{href:C},L)),l.createElement("small",{className:"avatar__subtitle"},I)))))})(),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:i.Z},a)),(k.length>0||b)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[h]:f})},k.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((({label:e,permalink:t})=>l.createElement(c.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),f&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:w})),!f&&b&&l.createElement("div",{className:"col text--right"},l.createElement(c.Z,{to:p.permalink,"aria-label":"Read more about "+T},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(7294),r=a(6742),n=a(6165),s=a(3146),c=a(4973),o=a(3018);const i=function(e){const{metadata:t,items:a,sidebar:i}=e,{allTagsPath:m,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return l.createElement(n.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:i},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,h),l.createElement(r.Z,{href:m},l.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>l.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.createElement(e,null)))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(4973),n=a(7462),s=a(6010);const c="iconEdit_2_ui",o=({className:e,...t})=>l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,e),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function i({editUrl:e}){return l.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>o,Z:()=>i});var l=a(7294),r=a(6010);const n=function(e,t,a){const[r,n]=(0,l.useState)(void 0);(0,l.useEffect)((()=>{function l(){const l=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(l){let a=0,s=!1;const c=document.getElementsByClassName(e);for(;a<c.length&&!s;){const e=c[a],{href:o}=e,i=decodeURIComponent(o.substring(o.indexOf("#")+1));l.id===i&&(r&&r.classList.remove(t),e.classList.add(t),n(e),s=!0),a+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},s="tableOfContents_35-E",c="table-of-contents__link";function o({toc:e,isChild:t}){return e.length?l.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children}))))):null}const i=function({toc:e}){return n(c,"table-of-contents__link--active",100),l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},l.createElement(o,{toc:e}))}}}]);