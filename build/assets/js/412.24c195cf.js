(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[412],{6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>p,Z:()=>u});var o=n(7462),r=n(7294),l=n(6010),s=n(4973),a=n(3018);const c="enhancedAnchor_2LWZ",i="h1Heading_27L5",p=function({...e}){return r.createElement("header",null,r.createElement("h1",(0,o.Z)({},e,{id:void 0,className:i}),e.children))},u=e=>{return"h1"===e?p:(t=e,function({id:e,...n}){const{navbar:{hideOnScroll:o}}=(0,a.LU)();return e?r.createElement(t,n,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",{[c]:!o}),id:e}),n.children,r.createElement("a",{className:"hash-link",href:"#"+e,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,n)});var t}},6891:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var o=n(7462),r=n(7294),l=n(6742),s=n(6010);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(7410).Z,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=p({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var s=o?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(a))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,s=p({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,s=0,a=[],c=[a];s>-1;){for(;(l=o[s]++)<r[s];){var i=void 0,p=t[s],h=n[s][l];if("string"==typeof h?(p=s>0?p:["plain"],i=h):(p=y(p,h.type),h.alias&&(p=y(p,h.alias)),i=h.content),"string"==typeof i){var m=i.split(u),g=m.length;a.push({types:p,content:m[0]});for(var f=1;f<g;f++)d(a),c.push(a=[]),a.push({types:p,content:m[f]})}else s++,t.push(p),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return d(a),c}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var f=n(7594),v=n.n(f);const b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var k=n(5350),E=n(3018);const j=()=>{const{prism:e}=(0,E.LU)(),{isDarkTheme:t}=(0,k.Z)(),n=e.theme||b,o=e.darkTheme||n;return t?o:n};var N=n(4973);const Z="codeBlockContainer_K1bP",T="codeBlockContent_hGly",x="codeBlockTitle_eoMF",C="codeBlock_23N8",L="copyButton_Ue-o",B="codeBlockLines_39YC",P=/{([\d,-]+)}/,D=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")")).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function O({children:e,className:t,metastring:n,title:l}){const{prism:a}=(0,E.LU)(),[i,p]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!1);(0,r.useEffect)((()=>{d(!0)}),[]);const y=(0,E.bc)(n)||l,h=(0,r.useRef)(null);let m=[];const f=j(),b=Array.isArray(e)?e.join(""):e;if(n&&P.test(n)){const e=n.match(P)[1];m=v()(e).filter((e=>e>0))}let k=t&&t.replace(/language-/,"");!k&&a.defaultLanguage&&(k=a.defaultLanguage);let O=b.replace(/\n$/,"");if(0===m.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"]);case"jsx":case"tsx":return D(["js","jsBlock","jsx"]);case"html":return D(["js","jsBlock","html"]);case"python":case"py":return D(["python"]);default:return D()}})(k),n=b.replace(/\n$/,"").split("\n");let o;for(let r=0;r<n.length;){const l=r+1,s=n[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=l+",";break;case"highlight-start":o=l;break;case"highlight-end":e+=o+"-"+(l-1)+","}n.splice(r,1)}else r+=1}m=v()(e),O=n.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(O),p(!0),setTimeout((()=>p(!1)),2e3)};return r.createElement(g,(0,o.Z)({},c,{key:String(u),theme:f,code:O,language:k}),(({className:e,style:t,tokens:n,getLineProps:l,getTokenProps:a})=>r.createElement("div",{className:Z},y&&r.createElement("div",{style:t,className:x},y),r.createElement("div",{className:(0,s.Z)(T,k)},r.createElement("pre",{tabIndex:0,className:(0,s.Z)(e,C,"thin-scrollbar"),style:t},r.createElement("code",{className:B},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=l({line:e,key:t});return m.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},a({token:e,key:t}))))))})))),r.createElement("button",{ref:h,type:"button","aria-label":(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(L,"clean-btn"),onClick:S},i?r.createElement(N.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(N.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}var S=n(6159);const _="details_1VDD";function w({...e}){return r.createElement(E.PO,(0,o.Z)({},e,{className:(0,s.Z)("alert alert--info",_,e.className)}))}const A={code:e=>{const{children:t}=e;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(O,e):r.createElement("code",e)},a:e=>r.createElement(l.Z,e),pre:e=>{var t;const{children:n}=e;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(O,(0,r.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(w,(0,o.Z)({},e,{summary:n}),l)},h1:(0,S.Z)("h1"),h2:(0,S.Z)("h2"),h3:(0,S.Z)("h3"),h4:(0,S.Z)("h4"),h5:(0,S.Z)("h5"),h6:(0,S.Z)("h6")}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);