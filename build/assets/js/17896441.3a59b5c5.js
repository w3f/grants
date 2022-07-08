"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[918],{7313:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(7294),l=a(6010),s=a(907),i=a(3783),o=a(6742),r=a(4973);const c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=a(2263),m=a(3018);const u={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v({versionLabel:e,to:t,onClick:a}){return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:t,onClick:a},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b({versionMetadata:e}){const{siteConfig:{title:t}}=(0,d.Z)(),{pluginId:a}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,m.J)(a),{latestDocSuggestion:i,latestVersionSuggestion:o}=(0,s.Jo)(a),r=null!=i?i:(c=o).docs.find((e=>e.id===c.mainDocId));var c;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:o.label,to:r.path,onClick:()=>l(o.name)})))}const E=function({versionMetadata:e}){return"none"===e.banner?n.createElement(n.Fragment,null):n.createElement(b,{versionMetadata:e})};var h=a(1217);function g({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function f({lastUpdatedBy:e}){return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function _({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement(n.Fragment,null,n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(g,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(f,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(571);const U="tocCollapsible_1PrD",T="tocCollapsibleButton_2O1e",k="tocCollapsibleContent_2Ydz",L="tocCollapsibleExpanded_3GYr";function Z({toc:e,className:t}){const{collapsed:a,toggleCollapsed:s}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(U,{[L]:!a},t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",T),onClick:s},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:k,collapsed:a},n.createElement(N.r,{toc:e})))}var y=a(6146),w=a(6159);const C="docItemContainer_33ec",A="lastUpdated_3DPF",M="docItemCol_3FnS",B="tocMobile_3Hoh";const D=function(e){const{content:t,versionMetadata:a}=e,{metadata:o,frontMatter:r}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:p}=r,{description:v,title:b,editUrl:g,lastUpdatedAt:f,formattedLastUpdatedAt:U,lastUpdatedBy:T}=o,{pluginId:k}=(0,s.gA)({failfast:!0}),L=(0,s.gB)(k).length>1,D=!u&&void 0===t.contentTitle,V=(0,i.Z)(),x=!p&&t.toc&&t.toc.length>0,I=x&&("desktop"===V||"ssr"===V);return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:b,description:v,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[M]:!p})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:C},n.createElement("article",null,L&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),x&&n.createElement(Z,{toc:t.toc,className:B}),n.createElement("div",{className:"markdown"},D&&n.createElement(w.N,null,b),n.createElement(t,null)),(g||f||T)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},g&&n.createElement(y.Z,{editUrl:g})),n.createElement("div",{className:(0,l.Z)("col",A)},(f||T)&&n.createElement(_,{lastUpdatedAt:f,formattedLastUpdatedAt:U,lastUpdatedBy:T})))),n.createElement(c,{metadata:o}))),I&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:t.toc}))))}}}]);