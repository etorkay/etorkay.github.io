"use strict";(self.webpackChunketorkay_github_io=self.webpackChunketorkay_github_io||[]).push([[745],{745:(e,n,t)=>{t.d(n,{ZP:()=>Rn});var r=t(791);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const c=["children","options"],l="0",a="1",o="2",s="3",u="4",d="5",p="6",f="7",h="8",m="9",g="10",y="11",k="12",x="13",v="14",b="15",w="16",E="17",z="18",A="19",C="20",O="21",S="22",$="23",T="24",R="25",L="26",M="27",_="28",I="29",j="30",N="31",U="32",H="33";var P,W;(W=P||(P={}))[W.MAX=0]="MAX",W[W.HIGH=1]="HIGH",W[W.MED=2]="MED",W[W.LOW=3]="LOW",W[W.MIN=4]="MIN";const Z=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,n)=>(e[n.toLowerCase()]=n,e)),{for:"htmlFor"}),F={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},G=["style","script"],B=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,D=/mailto:/i,q=/\n{2,}$/,V=/^(\s*>[\s\S]*?)(?=\n{2,})/,X=/^ *> ?/gm,J=/^ {2,}\n/,K=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Q=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,Y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,ee=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,ne=/^(?:\n *)*\n/,te=/\r\n?/g,re=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,ie=/^\[\^([^\]]+)]/,ce=/\f/g,le=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,ae=/^\s*?\[(x|\s)\]/,oe=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,se=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,ue=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,de=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,pe=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,fe=/^<!--[\s\S]*?(?:-->)/,he=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,me=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,ge=/^\{.*\}$/,ye=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,ke=/^<([^ >]+@[^ >]+)>/,xe=/^<([^ >]+:\/[^ >]+)>/,ve=/-([a-z])?/gi,be=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,we=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Ee=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,ze=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Ae=/(\[|\])/g,Ce=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Oe=/\t/g,Se=/(^ *\||\| *$)/g,$e=/^ *:-+: *$/,Te=/^ *:-+ *$/,Re=/^ *-+: *$/,Le="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",Me=new RegExp("^([*_])\\1".concat(Le,"\\1\\1(?!\\1)")),_e=new RegExp("^([*_])".concat(Le,"\\1(?!\\1|\\w)")),Ie=new RegExp("^==".concat(Le,"==")),je=new RegExp("^~~".concat(Le,"~~")),Ne=/^\\([^0-9A-Za-z\s])/,Ue=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,He=/^\n+/,Pe=/^([ \t]*)/,We=/\\([^\\])/g,Ze=/ *\n+$/,Fe=/(?:^|\n)( *)$/,Ge="(?:\\d+\\.)",Be="(?:[*+-])";function De(e){return"( *)("+(1===e?Ge:Be)+") +"}const qe=De(1),Ve=De(2);function Xe(e){return new RegExp("^"+(1===e?qe:Ve))}const Je=Xe(1),Ke=Xe(2);function Qe(e){return new RegExp("^"+(1===e?qe:Ve)+"[^\\n]*(?:\\n(?!\\1"+(1===e?Ge:Be)+" )[^\\n]*)*(\\n|$)","gm")}const Ye=Qe(1),en=Qe(2);function nn(e){const n=1===e?Ge:Be;return new RegExp("^( *)("+n+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+n+" (?!"+n+" ))\\n*|\\s*\\n*$)")}const tn=nn(1),rn=nn(2);function cn(e,n){const t=1===n,r=t?tn:rn,i=t?Ye:en,c=t?Je:Ke;return{match(e,n,t){const i=Fe.exec(t);return i&&(n.list||!n.inline&&!n.simple)?r.exec(e=i[1]+e):null},order:1,parse(e,n,r){const l=t?+e[2]:void 0,a=e[0].replace(q,"\n").match(i);let o=!1;return{items:a.map((function(e,t){const i=c.exec(e)[0].length,l=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(l,"").replace(c,""),u=t===a.length-1,d=-1!==s.indexOf("\n\n")||u&&o;o=d;const p=r.inline,f=r.list;let h;r.list=!0,d?(r.inline=!1,h=s.replace(Ze,"\n\n")):(r.inline=!0,h=s.replace(Ze,""));const m=n(h,r);return r.inline=p,r.list=f,m})),ordered:t,start:l}},render:(n,t,r)=>e(n.ordered?"ol":"ul",{key:r.key,start:n.type===C?n.start:void 0},n.items.map((function(n,i){return e("li",{key:i},t(n,r))})))}}const ln=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),an=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,on=[V,Q,Y,oe,ue,se,fe,be,Ye,tn,en,rn],sn=[...on,/^[^\n]+(?:  \n|\n{2,})/,de,me];function un(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function dn(e){return Re.test(e)?"right":$e.test(e)?"center":Te.test(e)?"left":null}function pn(e,n,t,r){const i=t.inTable;t.inTable=!0;let c=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce(((e,i)=>("|"===i.trim()?e.push(r?{type:L}:{type:M,text:i}):""!==i&&e.push.apply(e,n(i,t)),e)),[]);t.inTable=i;let l=[[]];return c.forEach((function(e,n){e.type===L?0!==n&&n!==c.length-1&&l.push([]):(e.type!==M||null!=c[n+1]&&c[n+1].type!==L||(e.text=e.text.trimEnd()),l[l.length-1].push(e))})),l}function fn(e,n,t){t.inline=!0;const r=e[2]?e[2].replace(Se,"").split("|").map(dn):[],i=e[3]?function(e,n,t){return e.trim().split("\n").map((function(e){return pn(e,n,t,!0)}))}(e[3],n,t):[],c=pn(e[1],n,t,!!i.length);return t.inline=!1,i.length?{align:r,cells:i,header:c,type:R}:{children:c,type:O}}function hn(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function mn(e){return function(n,t){return t.inline?e.exec(n):null}}function gn(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function yn(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function kn(e){return function(n){return e.exec(n)}}function xn(e,n,t){if(n.inline||n.simple)return null;if(t&&!t.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!on.some((n=>n.test(e)))&&(r+=e+"\n",e.trim())));const i=r.trimEnd();return""==i?null:[r,i]}function vn(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function bn(e){return e.replace(We,"$1")}function wn(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!0,t.simple=!0;const c=e(n,t);return t.inline=r,t.simple=i,c}function En(e,n,t){const r=t.inline||!1,i=t.simple||!1;t.inline=!1,t.simple=!0;const c=e(n,t);return t.inline=r,t.simple=i,c}function zn(e,n,t){const r=t.inline||!1;t.inline=!1;const i=e(n,t);return t.inline=r,i}const An=(e,n,t)=>({children:wn(n,e[1],t)});function Cn(){return{}}function On(){return null}function Sn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function $n(e,n,t){let r=e;const i=n.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||t}function Tn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function t(e,t){const r=$n(n.overrides,"".concat(e,".props"),{});for(var c=arguments.length,l=new Array(c>2?c-2:0),a=2;a<c;a++)l[a-2]=arguments[a];return n.createElement(function(e,n){const t=$n(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:$n(n,"".concat(e,".component"),e):e}(e,n.overrides),i({},t,r,{className:Sn(null==t?void 0:t.className,r.className)||void 0}),...l)}function c(e){e=e.replace(le,"");let i=!1;n.forceInline?i=!0:n.forceBlock||(i=!1===Ce.test(e));const c=$e(Se(i?e:"".concat(e.trimEnd().replace(He,""),"\n\n"),{inline:i}));for(;"string"==typeof c[c.length-1]&&!c[c.length-1].trim();)c.pop();if(null===n.wrapper)return c;const l=n.wrapper||(i?"span":"div");let a;if(c.length>1||n.forceWrapper)a=c;else{if(1===c.length)return a=c[0],"string"==typeof a?t("span",{key:"outer"},a):a;a=null}return r.createElement(l,{key:"outer"},a)}function L(e,t){const i=t.match(B);return i?i.reduce((function(t,i,l){const a=i.indexOf("=");if(-1!==a){const o=function(e){return-1!==e.indexOf("-")&&null===e.match(he)&&(e=e.replace(ve,(function(e,n){return n.toUpperCase()}))),e}(i.slice(0,a)).trim(),s=function(e){const n=e[0];return('"'===n||"'"===n)&&e.length>=2&&e[e.length-1]===n?e.slice(1,-1):e}(i.slice(a+1).trim()),u=Z[o]||o,d=t[u]=function(e,n,t,r){return"style"===n?t.split(/;\s?/).reduce((function(e,n){const t=n.slice(0,n.indexOf(":"));return e[t.trim().replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=n.slice(t.length+1).trim(),e}),{}):"href"===n||"src"===n?r(t,e,n):(t.match(ge)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(e,o,s,n.sanitizer);"string"==typeof d&&(de.test(d)||me.test(d))&&(t[u]=r.cloneElement(c(d.trim()),{key:l}))}else"style"!==i&&(t[Z[i]||i]=!0);return t}),{}):null}n.overrides=n.overrides||{},n.sanitizer=n.sanitizer||vn,n.slugify=n.slugify||un,n.namedCodesToUnicode=n.namedCodesToUnicode?i({},F,n.namedCodesToUnicode):F,n.createElement=n.createElement||r.createElement;const P=[],W={},q={[l]:{match:yn(V),order:1,parse:(e,n,t)=>({children:n(e[0].replace(X,""),t)}),render:(e,n,r)=>t("blockquote",{key:r.key},n(e.children,r))},[a]:{match:kn(J),order:1,parse:Cn,render:(e,n,r)=>t("br",{key:r.key})},[o]:{match:yn(K),order:1,parse:Cn,render:(e,n,r)=>t("hr",{key:r.key})},[s]:{match:yn(Y),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>t("pre",{key:r.key},t("code",i({},e.attrs,{className:e.lang?"lang-".concat(e.lang):""}),e.text))},[u]:{match:yn(Q),order:0,parse:e=>({attrs:L("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:s})},[d]:{match:gn(ee),order:3,parse:e=>({text:e[2]}),render:(e,n,r)=>t("code",{key:r.key},e.text)},[p]:{match:yn(re),order:0,parse:e=>(P.push({footnote:e[2],identifier:e[1]}),{}),render:On},[f]:{match:mn(ie),order:1,parse:e=>({target:"#".concat(n.slugify(e[1],un)),text:e[1]}),render:(e,r,i)=>t("a",{key:i.key,href:n.sanitizer(e.target,"a","href")},t("sup",{key:i.key},e.text))},[h]:{match:mn(ae),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,n,r)=>t("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[m]:{match:yn(n.enforceAtxHeadings?se:oe),order:1,parse:(e,t,r)=>({children:wn(t,e[2],r),id:n.slugify(e[2],un),level:e[1].length}),render:(e,n,r)=>t("h".concat(e.level),{id:e.id,key:r.key},n(e.children,r))},[g]:{match:yn(ue),order:0,parse:(e,n,t)=>({children:wn(n,e[1],t),level:"="===e[2]?1:2,type:m})},[y]:{match:kn(de),order:1,parse(e,n,t){const[,r]=e[3].match(Pe),i=new RegExp("^".concat(r),"gm"),c=e[3].replace(i,""),l=(a=c,sn.some((e=>e.test(a)))?zn:wn);var a;const o=e[1].toLowerCase(),s=-1!==G.indexOf(o),u=(s?o:e[1]).trim(),d={attrs:L(u,e[2]),noInnerParse:s,tag:u};return t.inAnchor=t.inAnchor||"a"===o,s?d.text=e[3]:d.children=l(n,c,t),t.inAnchor=!1,d},render:(e,n,r)=>t(e.tag,i({key:r.key},e.attrs),e.text||n(e.children,r))},[x]:{match:kn(me),order:1,parse(e){const n=e[1].trim();return{attrs:L(n,e[2]||""),tag:n}},render:(e,n,r)=>t(e.tag,i({},e.attrs,{key:r.key}))},[k]:{match:kn(fe),order:1,parse:()=>({}),render:On},[v]:{match:gn(an),order:1,parse:e=>({alt:e[1],target:bn(e[2]),title:e[3]}),render:(e,r,i)=>t("img",{key:i.key,alt:e.alt||void 0,title:e.title||void 0,src:n.sanitizer(e.target,"img","src")})},[b]:{match:mn(ln),order:3,parse:(e,n,t)=>({children:En(n,e[1],t),target:bn(e[2]),title:e[3]}),render:(e,r,i)=>t("a",{key:i.key,href:n.sanitizer(e.target,"a","href"),title:e.title},r(e.children,i))},[w]:{match:mn(xe),order:0,parse:e=>({children:[{text:e[1],type:M}],target:e[1],type:b})},[E]:{match:(e,n)=>n.inAnchor?null:mn(ye)(e,n),order:0,parse:e=>({children:[{text:e[1],type:M}],target:e[1],title:void 0,type:b})},[z]:{match:mn(ke),order:0,parse(e){let n=e[1],t=e[1];return D.test(t)||(t="mailto:"+t),{children:[{text:n.replace("mailto:",""),type:M}],target:t,type:b}}},[C]:cn(t,1),[H]:cn(t,2),[A]:{match:yn(ne),order:3,parse:Cn,render:()=>"\n"},[O]:{match:xn,order:3,parse:An,render:(e,n,r)=>t("p",{key:r.key},n(e.children,r))},[S]:{match:mn(we),order:0,parse:e=>(W[e[1]]={target:e[2],title:e[4]},{}),render:On},[$]:{match:gn(Ee),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,i)=>W[e.ref]?t("img",{key:i.key,alt:e.alt,src:n.sanitizer(W[e.ref].target,"img","src"),title:W[e.ref].title}):null},[T]:{match:mn(ze),order:0,parse:(e,n,t)=>({children:n(e[1],t),fallbackChildren:n(e[0].replace(Ae,"\\$1"),t),ref:e[2]}),render:(e,r,i)=>W[e.ref]?t("a",{key:i.key,href:n.sanitizer(W[e.ref].target,"a","href"),title:W[e.ref].title},r(e.children,i)):t("span",{key:i.key},r(e.fallbackChildren,i))},[R]:{match:yn(be),order:1,parse:fn,render(e,n,r){const i=e;return t("table",{key:r.key},t("thead",null,t("tr",null,i.header.map((function(e,c){return t("th",{key:c,style:hn(i,c)},n(e,r))})))),t("tbody",null,i.cells.map((function(e,c){return t("tr",{key:c},e.map((function(e,c){return t("td",{key:c,style:hn(i,c)},n(e,r))})))}))))}},[M]:{match:kn(Ue),order:4,parse:e=>({text:e[0].replace(pe,((e,t)=>n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e))}),render:e=>e.text},[_]:{match:gn(Me),order:2,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,r)=>t("strong",{key:r.key},n(e.children,r))},[I]:{match:gn(_e),order:3,parse:(e,n,t)=>({children:n(e[2],t)}),render:(e,n,r)=>t("em",{key:r.key},n(e.children,r))},[j]:{match:gn(Ne),order:1,parse:e=>({text:e[1],type:M})},[N]:{match:gn(Ie),order:3,parse:An,render:(e,n,r)=>t("mark",{key:r.key},n(e.children,r))},[U]:{match:gn(je),order:3,parse:An,render:(e,n,r)=>t("del",{key:r.key},n(e.children,r))}};!0===n.disableParsingRawHTML&&(delete q[y],delete q[x]);const Se=function(e){let n=Object.keys(e);function t(r,i){let c=[],l="";for(;r;){let a=0;for(;a<n.length;){const o=n[a],s=e[o],u=s.match(r,i,l);if(u){const e=u[0];r=r.substring(e.length);const n=s.parse(u,t,i);null==n.type&&(n.type=o),c.push(n),l=e;break}a++}}return c}return n.sort((function(n,t){let r=e[n].order,i=e[t].order;return r!==i?r-i:n<t?-1:1})),function(e,n){return t(function(e){return e.replace(te,"\n").replace(ce,"").replace(Oe,"    ")}(e),n)}}(q),$e=(Te=function(e,n){return function(t,r,i){const c=e[t.type].render;return n?n((()=>c(t,r,i)),t,r,i):c(t,r,i)}}(q,n.renderRule),function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(n)){const r=t.key,i=[];let c=!1;for(let l=0;l<n.length;l++){t.key=l;const r=e(n[l],t),a="string"==typeof r;a&&c?i[i.length-1]+=r:null!==r&&i.push(r),c=a}return t.key=r,i}return Te(n,e,t)});var Te;const Re=c(e);return P.length?t("div",null,Re,t("footer",{key:"footer"},P.map((function(e){return t("div",{id:n.slugify(e.identifier,un),key:e.identifier},e.identifier,$e(Se(e.footnote,{inline:!0})))})))):Re}const Rn=e=>{let{children:n="",options:t}=e,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n.indexOf(t=c[r])>=0||(i[t]=e[t]);return i}(e,c);return r.cloneElement(Tn(n,t),i)}}}]);
//# sourceMappingURL=745.c166c906.chunk.js.map