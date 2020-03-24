(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2:function(e,t,n){"use strict";n.r(t);const o=window.console;let s=[];function i(e){const t=document.querySelector("#errorLayout");t&&(e instanceof Error?(e.stack&&s.unshift(e.stack),s.unshift(e.message)):s.unshift(e),o.error(e),t.addEventListener("click",()=>{t.innerHTML="",s=[]},{once:!0}),t.innerHTML=`<div class="danger" style="\n            bottom: 0;\n            right: 0;\n            position: fixed;\n            background-color: #ff0000c7;\n            border: black;\n            padding: 5px;\n            z-index: 9999999;\n            border-radius: 10px;\n        ">\n                Error: <br/>\n                ${s.join("<hr/>")}\n            </div>`)}function r(e,t,n){if(e.includes(t+"="))return e;const[o,s]=e.split("#"),i=o.includes("?")?"&":"?";return o+i+t+"="+encodeURIComponent(n)+(s?"#"+s:"")}function a(e,t){return Object.entries(t).reduce((e,[t,n])=>r(e,t,n),e)}function l(e){return e.text().then(e=>{if(e.includes('"csrfError": true')){const t=JSON.parse(e);t&&(t.csrfError&&t.redirectUrl?window.location.assign(t.redirectUrl):i(t))}else{if(e.includes('"errorMessage":'))return Promise.reject(new Error(JSON.parse(e).errorMessage));var t=document.createElement("div");t.innerHTML=e,i(Array.from(t.querySelectorAll("code")).map(e=>e.innerHTML).join("<br/>"))}return Promise.reject(new Error)})}function c(e,t={}){return Promise.resolve(fetch(a(e,t),{method:"GET",mode:"same-origin",cache:"default",credentials:"same-origin",headers:{Accept:"text/html"},redirect:"follow",referrer:"no-referrer"})).then(e=>{const t=e.headers.get("content-type");if(e.ok){if(t&&t.includes("text/html"))return e.text();throw i("Oops, we haven't got text/html!"),new TypeError("Oops, we haven't got text/html!")}return 500===e.status?l(e):e.json().then(e=>Promise.reject(e))})}function u(e,t,n){let o;return"#text"===e.nodeName?o=n.document.createTextNode(e.data):"#comment"===e.nodeName?o=n.document.createComment(e.data):("svg"===e.nodeName||t?(o=n.document.createElementNS("http://www.w3.org/2000/svg",e.nodeName),t=!0):o=n.document.createElement(e.nodeName),e.attributes&&Object.entries(e.attributes).forEach(([e,t])=>o.setAttribute(e,t)),e.childNodes&&e.childNodes.forEach(e=>o.appendChild(u(e,t,n))),n.valueDiffing&&(e.value&&(o.value=e.value),e.checked&&(o.checked=e.checked),e.selected&&(o.selected=e.selected))),o}function d(e,t){for(t=t.slice();t.length>0;){if(!e.childNodes)return!1;const n=t.splice(0,1)[0];e=e.childNodes[n]}return e}function h(e,t,n){let o,s,i,r,a,l=d(e,t[n._const.route]);const c={diff:t,node:l};if(n.preDiffApply(c))return!0;switch(t[n._const.action]){case n._const.addAttribute:if(!l||!l.setAttribute)return!1;l.setAttribute(t[n._const.name],t[n._const.value]);break;case n._const.modifyAttribute:if(!l||!l.setAttribute)return!1;l.setAttribute(t[n._const.name],t[n._const.newValue]),"INPUT"===l.nodeName&&"value"===t[n._const.name]&&(l.value=t[n._const.newValue]);break;case n._const.removeAttribute:if(!l||!l.removeAttribute)return!1;l.removeAttribute(t[n._const.name]);break;case n._const.modifyTextElement:if(!l||3!==l.nodeType)return!1;n.textDiff(l,l.data,t[n._const.oldValue],t[n._const.newValue]);break;case n._const.modifyValue:if(!l||void 0===l.value)return!1;l.value=t[n._const.newValue];break;case n._const.modifyComment:if(!l||void 0===l.data)return!1;n.textDiff(l,l.data,t[n._const.oldValue],t[n._const.newValue]);break;case n._const.modifyChecked:if(!l||void 0===l.checked)return!1;l.checked=t[n._const.newValue];break;case n._const.modifySelected:if(!l||void 0===l.selected)return!1;l.selected=t[n._const.newValue];break;case n._const.replaceElement:l.parentNode.replaceChild(u(t[n._const.newValue],"http://www.w3.org/2000/svg"===l.namespaceURI,n),l);break;case n._const.relocateGroup:r=Array(...new Array(t.groupLength)).map(()=>l.removeChild(l.childNodes[t[n._const.from]])),r.forEach((e,o)=>{0===o&&(s=l.childNodes[t[n._const.to]]),l.insertBefore(e,s||null)});break;case n._const.removeElement:l.parentNode.removeChild(l);break;case n._const.addElement:i=t[n._const.route].slice(),a=i.splice(i.length-1,1)[0],l=d(e,i),l.insertBefore(u(t[n._const.element],"http://www.w3.org/2000/svg"===l.namespaceURI,n),l.childNodes[a]||null);break;case n._const.removeTextElement:if(!l||3!==l.nodeType)return!1;l.parentNode.removeChild(l);break;case n._const.addTextElement:if(i=t[n._const.route].slice(),a=i.splice(i.length-1,1)[0],o=n.document.createTextNode(t[n._const.value]),l=d(e,i),!l||!l.childNodes)return!1;l.insertBefore(o,l.childNodes[a]||null);break;default:console.log("unknown action")}return c.newNode=o,n.postDiffApply(c),!0}function p(e,t,n){const o=e[t];e[t]=e[n],e[n]=o}function f(e,t,n){t.length||(t=[t]),(t=t.slice()).reverse(),t.forEach(t=>{!function(e,t,n){switch(t[n._const.action]){case n._const.addAttribute:t[n._const.action]=n._const.removeAttribute,h(e,t,n);break;case n._const.modifyAttribute:p(t,n._const.oldValue,n._const.newValue),h(e,t,n);break;case n._const.removeAttribute:t[n._const.action]=n._const.addAttribute,h(e,t,n);break;case n._const.modifyTextElement:case n._const.modifyValue:case n._const.modifyComment:case n._const.modifyChecked:case n._const.modifySelected:case n._const.replaceElement:p(t,n._const.oldValue,n._const.newValue),h(e,t,n);break;case n._const.relocateGroup:p(t,n._const.from,n._const.to),h(e,t,n);break;case n._const.removeElement:t[n._const.action]=n._const.addElement,h(e,t,n);break;case n._const.addElement:t[n._const.action]=n._const.removeElement,h(e,t,n);break;case n._const.removeTextElement:t[n._const.action]=n._const.addTextElement,h(e,t,n);break;case n._const.addTextElement:t[n._const.action]=n._const.removeTextElement,h(e,t,n);break;default:console.log("unknown action")}}(e,t,n)})}class m{constructor(e={}){Object.entries(e).forEach(([e,t])=>this[e]=t)}toString(){return JSON.stringify(this)}setValue(e,t){return this[e]=t,this}}function g(e){const t=[];return"#text"!==e.nodeName&&"#comment"!==e.nodeName&&(t.push(e.nodeName),e.attributes&&(e.attributes.class&&t.push(`${e.nodeName}.${e.attributes.class.replace(/ /g,".")}`),e.attributes.id&&t.push(`${e.nodeName}#${e.attributes.id}`))),t}function _(e){const t={},n={};return e.forEach(e=>{g(e).forEach(e=>{const o=e in t;o||e in n?o&&(delete t[e],n[e]=!0):t[e]=!0})}),t}function V(e,t){const n=_(e),o=_(t),s={};return Object.keys(n).forEach(e=>{o[e]&&(s[e]=!0)}),s}function b(e){return delete e.outerDone,delete e.innerDone,delete e.valueDone,!e.childNodes||e.childNodes.every(b)}function v(e,t){if(!["nodeName","value","checked","selected","data"].every(n=>e[n]===t[n]))return!1;if(Boolean(e.attributes)!==Boolean(t.attributes))return!1;if(Boolean(e.childNodes)!==Boolean(t.childNodes))return!1;if(e.attributes){const n=Object.keys(e.attributes),o=Object.keys(t.attributes);if(n.length!==o.length)return!1;if(!n.every(n=>e.attributes[n]===t.attributes[n]))return!1}if(e.childNodes){if(e.childNodes.length!==t.childNodes.length)return!1;if(!e.childNodes.every((e,n)=>v(e,t.childNodes[n])))return!1}return!0}function w(e,t,n,o,s){if(!e||!t)return!1;if(e.nodeName!==t.nodeName)return!1;if("#text"===e.nodeName)return!!s||e.data===t.data;if(e.nodeName in n)return!0;if(e.attributes&&t.attributes){if(e.attributes.id){if(e.attributes.id!==t.attributes.id)return!1;if(`${e.nodeName}#${e.attributes.id}`in n)return!0}if(e.attributes.class&&e.attributes.class===t.attributes.class){if(`${e.nodeName}.${e.attributes.class.replace(/ /g,".")}`in n)return!0}}if(o)return!0;const i=e.childNodes?e.childNodes.slice().reverse():[],r=t.childNodes?t.childNodes.slice().reverse():[];if(i.length!==r.length)return!1;if(s)return i.every((e,t)=>e.nodeName===r[t].nodeName);{const e=V(i,r);return i.every((t,n)=>w(t,r[n],e,!0,!0))}}function N(e){return JSON.parse(JSON.stringify(e))}function y(e,t,n,o){let s=0,i=[];const r=e.length,a=t.length,l=Array(...new Array(r+1)).map(()=>[]),c=V(e,t);let u=r===a;u&&e.some((e,n)=>{const o=g(e),s=g(t[n]);return o.length!==s.length?(u=!1,!0):(o.some((e,t)=>{if(e!==s[t])return u=!1,!0}),!u||void 0)});for(let d=0;d<r;d++){const r=e[d];for(let e=0;e<a;e++){const a=t[e];n[d]||o[e]||!w(r,a,c,u)?l[d+1][e+1]=0:(l[d+1][e+1]=l[d][e]?l[d][e]+1:1,l[d+1][e+1]>=s&&(s=l[d+1][e+1],i=[d+1,e+1]))}}return 0!==s&&{oldValue:i[0]-s,newValue:i[1]-s,length:s}}function E(e,t){return Array(...new Array(e)).map(()=>t)}class k{constructor(){this.list=[]}add(e){this.list.push(...e)}forEach(e){this.list.forEach(t=>e(t))}}function x(e,t){let n,o,s=e;for(t=t.slice();t.length>0;){if(!s.childNodes)return!1;o=t.splice(0,1)[0],n=s,s=s.childNodes[o]}return{node:s,parentNode:n,nodeIndex:o}}function A(e,t,n){return t.forEach(t=>{!function(e,t,n){const o=x(e,t[n._const.route]);let s=o.node;const i=o.parentNode,r=o.nodeIndex,a=[],l={diff:t,node:s};if(n.preDiffApply(l))return!0;let c,u,d,h;switch(t[n._const.action]){case n._const.addAttribute:s.attributes||(s.attributes={}),s.attributes[t[n._const.name]]=t[n._const.value],"checked"===t[n._const.name]?s.checked=!0:"selected"===t[n._const.name]?s.selected=!0:"INPUT"===s.nodeName&&"value"===t[n._const.name]&&(s.value=t[n._const.value]);break;case n._const.modifyAttribute:s.attributes[t[n._const.name]]=t[n._const.newValue];break;case n._const.removeAttribute:delete s.attributes[t[n._const.name]],0===Object.keys(s.attributes).length&&delete s.attributes,"checked"===t[n._const.name]?s.checked=!1:"selected"===t[n._const.name]?delete s.selected:"INPUT"===s.nodeName&&"value"===t[n._const.name]&&delete s.value;break;case n._const.modifyTextElement:s.data=t[n._const.newValue];break;case n._const.modifyValue:s.value=t[n._const.newValue];break;case n._const.modifyComment:s.data=t[n._const.newValue];break;case n._const.modifyChecked:s.checked=t[n._const.newValue];break;case n._const.modifySelected:s.selected=t[n._const.newValue];break;case n._const.replaceElement:c=N(t[n._const.newValue]),c.outerDone=!0,c.innerDone=!0,c.valueDone=!0,i.childNodes[r]=c;break;case n._const.relocateGroup:u=s.childNodes.splice(t[n._const.from],t.groupLength).reverse(),u.forEach(e=>s.childNodes.splice(t[n._const.to],0,e)),s.subsets&&s.subsets.forEach(e=>{if(t[n._const.from]<t[n._const.to]&&e.oldValue<=t[n._const.to]&&e.oldValue>t[n._const.from]){e.oldValue-=t.groupLength;const o=e.oldValue+e.length-t[n._const.to];o>0&&(a.push({oldValue:t[n._const.to]+t.groupLength,newValue:e.newValue+e.length-o,length:o}),e.length-=o)}else if(t[n._const.from]>t[n._const.to]&&e.oldValue>t[n._const.to]&&e.oldValue<t[n._const.from]){e.oldValue+=t.groupLength;const o=e.oldValue+e.length-t[n._const.to];o>0&&(a.push({oldValue:t[n._const.to]+t.groupLength,newValue:e.newValue+e.length-o,length:o}),e.length-=o)}else e.oldValue===t[n._const.from]&&(e.oldValue=t[n._const.to])});break;case n._const.removeElement:i.childNodes.splice(r,1),i.subsets&&i.subsets.forEach(e=>{e.oldValue>r?e.oldValue-=1:e.oldValue===r?e.delete=!0:e.oldValue<r&&e.oldValue+e.length>r&&(e.oldValue+e.length-1===r?e.length--:(a.push({newValue:e.newValue+r-e.oldValue,oldValue:r,length:e.length-r+e.oldValue-1}),e.length=r-e.oldValue))}),s=i;break;case n._const.addElement:d=t[n._const.route].slice(),h=d.splice(d.length-1,1)[0],s=x(e,d).node,c=N(t[n._const.element]),c.outerDone=!0,c.innerDone=!0,c.valueDone=!0,s.childNodes||(s.childNodes=[]),h>=s.childNodes.length?s.childNodes.push(c):s.childNodes.splice(h,0,c),s.subsets&&s.subsets.forEach(e=>{if(e.oldValue>=h)e.oldValue+=1;else if(e.oldValue<h&&e.oldValue+e.length>h){const t=e.oldValue+e.length-h;a.push({newValue:e.newValue+e.length-t,oldValue:h+1,length:t}),e.length-=t}});break;case n._const.removeTextElement:i.childNodes.splice(r,1),"TEXTAREA"===i.nodeName&&delete i.value,i.subsets&&i.subsets.forEach(e=>{e.oldValue>r?e.oldValue-=1:e.oldValue===r?e.delete=!0:e.oldValue<r&&e.oldValue+e.length>r&&(e.oldValue+e.length-1===r?e.length--:(a.push({newValue:e.newValue+r-e.oldValue,oldValue:r,length:e.length-r+e.oldValue-1}),e.length=r-e.oldValue))}),s=i;break;case n._const.addTextElement:d=t[n._const.route].slice(),h=d.splice(d.length-1,1)[0],c={},c.nodeName="#text",c.data=t[n._const.value],s=x(e,d).node,s.childNodes||(s.childNodes=[]),h>=s.childNodes.length?s.childNodes.push(c):s.childNodes.splice(h,0,c),"TEXTAREA"===s.nodeName&&(s.value=t[n._const.newValue]),s.subsets&&s.subsets.forEach(e=>{if(e.oldValue>=h&&(e.oldValue+=1),e.oldValue<h&&e.oldValue+e.length>h){const t=e.oldValue+e.length-h;a.push({newValue:e.newValue+e.length-t,oldValue:h+1,length:t}),e.length-=t}});break;default:console.log("unknown action")}s.subsets&&(s.subsets=s.subsets.filter(e=>!e.delete&&e.oldValue!==e.newValue),a.length&&(s.subsets=s.subsets.concat(a))),l.newNode=c,n.postDiffApply(l)}(e,t,n)}),!0}function D(e,t={}){const n={};if(n.nodeName=e.nodeName,"#text"===n.nodeName||"#comment"===n.nodeName)n.data=e.data;else{if(e.attributes&&e.attributes.length>0){n.attributes={},Array.prototype.slice.call(e.attributes).forEach(e=>n.attributes[e.name]=e.value)}if("TEXTAREA"===n.nodeName)n.value=e.value;else if(e.childNodes&&e.childNodes.length>0){n.childNodes=[],Array.prototype.slice.call(e.childNodes).forEach(e=>n.childNodes.push(D(e,t)))}t.valueDiffing&&(void 0!==e.checked&&e.type&&["radio","checkbox"].includes(e.type.toLowerCase())?n.checked=e.checked:void 0!==e.value&&(n.value=e.value),void 0!==e.selected&&(n.selected=e.selected))}return n}const T=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,C=Object.create?Object.create(null):{},O=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function S(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}const L={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuItem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function M(e,t={components:C}){const n=[];let o,s=-1;const i=[],r={};let a=!1;return e.replace(T,(l,c)=>{if(a){if(l!==`</${o.nodeName}>`)return;a=!1}const u="/"!==l.charAt(1),d=c+l.length,h=e.charAt(d);let p;if(u&&(s++,o=function(e){const t={nodeName:"",attributes:{}};let n=e.match(/<\/?([^\s]+?)[/\s>]/);n&&(t.nodeName=n[1].toUpperCase(),(L[n[1].toLowerCase()]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0));let o=new RegExp(O),s=null,i=!1;for(;!i;)if(s=o.exec(e),null===s)i=!0;else if(s[0].trim())if(s[1]){let e=s[1].trim(),n=[e,""];e.indexOf("=")>-1&&(n=e.split("=")),t.attributes[n[0]]=n[1],o.lastIndex--}else s[2]&&(t.attributes[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}(l),"tag"===o.type&&t.components[o.nodeName]&&(o.type="component",a=!0),o.voidElement||a||!h||"<"===h||(o.childNodes||(o.childNodes=[]),o.childNodes.push({nodeName:"#text",data:S(e.slice(d,e.indexOf("<",d)))})),r[o.tagName]=o,0===s&&n.push(o),p=i[s-1],p&&(p.childNodes||(p.childNodes=[]),p.childNodes.push(o)),i[s]=o),(!u||o.voidElement)&&(s--,!a&&"<"!==h&&h)){p=-1===s?n:i[s].childNodes||[];const t=e.indexOf("<",d),o=S(e.slice(d,-1===t?void 0:t));p.push({nodeName:"#text",data:o})}}),n[0]}function j(e){return function e(t){return delete t.voidElement,t.childNodes&&t.childNodes.forEach(t=>e(t)),t}(M(e))}class U{constructor(e,t,n){this.options=n,this.t1=e instanceof HTMLElement?D(e,this.options):"string"==typeof e?j(e,this.options):JSON.parse(JSON.stringify(e)),this.t2=t instanceof HTMLElement?D(t,this.options):"string"==typeof t?j(t,this.options):JSON.parse(JSON.stringify(t)),this.diffcount=0,this.foundAll=!1,this.debug&&(this.t1Orig=D(e,this.options),this.t2Orig=D(t,this.options)),this.tracker=new k}init(){return this.findDiffs(this.t1,this.t2)}findDiffs(e,t){let n;do{if(this.options.debug&&(this.diffcount+=1,this.diffcount>this.options.diffcap))throw window.diffError=[this.t1Orig,this.t2Orig],new Error(`surpassed diffcap:${JSON.stringify(this.t1Orig)} -> ${JSON.stringify(this.t2Orig)}`);n=this.findNextDiff(e,t,[]),0===n.length&&(v(e,t)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0,b(e),n=this.findNextDiff(e,t,[])))),n.length>0&&(this.foundAll=!1,this.tracker.add(n),A(e,n,this.options))}while(n.length>0);return this.tracker.list}findNextDiff(e,t,n){let o,s;if(this.options.maxDepth&&n.length>this.options.maxDepth)return[];if(!e.outerDone){if(o=this.findOuterDiff(e,t,n),this.options.filterOuterDiff&&(s=this.options.filterOuterDiff(e,t,o),s&&(o=s)),o.length>0)return e.outerDone=!0,o;e.outerDone=!0}if(!e.innerDone){if(o=this.findInnerDiff(e,t,n),o.length>0)return o;e.innerDone=!0}if(this.options.valueDiffing&&!e.valueDone){if(o=this.findValueDiff(e,t,n),o.length>0)return e.valueDone=!0,o;e.valueDone=!0}return[]}findOuterDiff(e,t,n){const o=[];let s,i,r,a,l,c;if(e.nodeName!==t.nodeName){if(!n.length)throw new Error("Top level nodes have to be of the same kind.");return[(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(e)).setValue(this.options._const.newValue,N(t)).setValue(this.options._const.route,n)]}if(n.length&&this.options.maxNodeDiffCount<Math.abs((e.childNodes||[]).length-(t.childNodes||[]).length))return[(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(e)).setValue(this.options._const.newValue,N(t)).setValue(this.options._const.route,n)];if(e.data!==t.data)return"#text"===e.nodeName?[(new m).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,e.data).setValue(this.options._const.newValue,t.data)]:[(new m).setValue(this.options._const.action,this.options._const.modifyComment).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,e.data).setValue(this.options._const.newValue,t.data)];for(i=e.attributes?Object.keys(e.attributes).sort():[],r=t.attributes?Object.keys(t.attributes).sort():[],a=i.length,c=0;c<a;c++)s=i[c],l=r.indexOf(s),-1===l?o.push((new m).setValue(this.options._const.action,this.options._const.removeAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,s).setValue(this.options._const.value,e.attributes[s])):(r.splice(l,1),e.attributes[s]!==t.attributes[s]&&o.push((new m).setValue(this.options._const.action,this.options._const.modifyAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,s).setValue(this.options._const.oldValue,e.attributes[s]).setValue(this.options._const.newValue,t.attributes[s])));for(a=r.length,c=0;c<a;c++)s=r[c],o.push((new m).setValue(this.options._const.action,this.options._const.addAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,s).setValue(this.options._const.value,t.attributes[s]));return o}findInnerDiff(e,t,n){const o=e.childNodes?e.childNodes.slice():[],s=t.childNodes?t.childNodes.slice():[],i=Math.max(o.length,s.length);let r=Math.abs(o.length-s.length),a=[],l=0;if(!this.options.maxChildCount||i<this.options.maxChildCount){const o=e.subsets&&e.subsetsAge--?e.subsets:e.childNodes&&t.childNodes?function(e,t){const n=e.childNodes?e.childNodes:[],o=t.childNodes?t.childNodes:[],s=E(n.length,!1),i=E(o.length,!1),r=[];let a=!0;const l=function(){return arguments[1]};for(;a;)if(a=y(n,o,s,i),a){r.push(a),Array(...new Array(a.length)).map(l).forEach(e=>{return t=e,s[a.oldValue+t]=!0,void(i[a.newValue+t]=!0);var t})}return e.subsets=r,e.subsetsAge=100,r}(e,t):[];if(o.length>0&&(a=this.attemptGroupRelocation(e,t,o,n),a.length>0))return a}for(let e=0;e<i;e+=1){const t=o[e],c=s[e];r&&(t&&!c?"#text"===t.nodeName?(a.push((new m).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.value,t.data)),l-=1):(a.push((new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.element,N(t))),l-=1):c&&!t&&("#text"===c.nodeName?a.push((new m).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.value,c.data)):a.push((new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.element,N(c))))),t&&c&&(!this.options.maxChildCount||i<this.options.maxChildCount?a=a.concat(this.findNextDiff(t,c,n.concat(l))):v(t,c)||(o.length>s.length?(a=a.concat([(new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.element,N(t)).setValue(this.options._const.route,n.concat(l))]),o.splice(e,1),l-=1,r-=1):o.length<s.length?(a=a.concat([(new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.element,N(c)).setValue(this.options._const.route,n.concat(l))]),o.splice(e,0,{}),r-=1):a=a.concat([(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,N(t)).setValue(this.options._const.newValue,N(c)).setValue(this.options._const.route,n.concat(l))]))),l+=1}return e.innerDone=!0,a}attemptGroupRelocation(e,t,n,o){const s=function(e,t,n){const o=e.childNodes?E(e.childNodes.length,!0):[],s=t.childNodes?E(t.childNodes.length,!0):[];let i=0;return n.forEach(e=>{const t=e.oldValue+e.length,n=e.newValue+e.length;for(let n=e.oldValue;n<t;n+=1)o[n]=i;for(let t=e.newValue;t<n;t+=1)s[t]=i;i+=1}),{gaps1:o,gaps2:s}}(e,t,n),i=s.gaps1,r=s.gaps2;let a,l,c,u,d,h,p=Math.min(i.length,r.length);const f=[];for(let s=0,g=0;s<p;g+=1,s+=1)if(!0===i[s])if(u=e.childNodes[g],"#text"===u.nodeName){if("#text"===t.childNodes[s].nodeName&&u.data!==t.childNodes[s].data){for(h=g;e.childNodes.length>h+1&&"#text"===e.childNodes[h+1].nodeName;)if(h+=1,t.childNodes[s].data===e.childNodes[h].data){d=!0;break}if(!d)return f.push((new m).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,o.concat(s)).setValue(this.options._const.oldValue,u.data).setValue(this.options._const.newValue,t.childNodes[s].data)),f}f.push((new m).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,o.concat(s)).setValue(this.options._const.value,u.data)),i.splice(s,1),p=Math.min(i.length,r.length),s-=1}else f.push((new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,o.concat(s)).setValue(this.options._const.element,N(u))),i.splice(s,1),p=Math.min(i.length,r.length),s-=1;else if(!0===r[s])u=t.childNodes[s],"#text"===u.nodeName?(f.push((new m).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,o.concat(s)).setValue(this.options._const.value,u.data)),i.splice(s,0,!0),p=Math.min(i.length,r.length),g-=1):(f.push((new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,o.concat(s)).setValue(this.options._const.element,N(u))),i.splice(s,0,!0),p=Math.min(i.length,r.length),g-=1);else if(i[s]!==r[s]){if(f.length>0)return f;if(c=n[i[s]],l=Math.min(c.newValue,e.childNodes.length-c.length),l!==c.oldValue){a=!1;for(let t=0;t<c.length;t+=1)w(e.childNodes[l+t],e.childNodes[c.oldValue+t],[],!1,!0)||(a=!0);if(a)return[(new m).setValue(this.options._const.action,this.options._const.relocateGroup).setValue("groupLength",c.length).setValue(this.options._const.from,c.oldValue).setValue(this.options._const.to,l).setValue(this.options._const.route,o)]}}return f}findValueDiff(e,t,n){const o=[];return e.selected!==t.selected&&o.push((new m).setValue(this.options._const.action,this.options._const.modifySelected).setValue(this.options._const.oldValue,e.selected).setValue(this.options._const.newValue,t.selected).setValue(this.options._const.route,n)),(e.value||t.value)&&e.value!==t.value&&"OPTION"!==e.nodeName&&o.push((new m).setValue(this.options._const.action,this.options._const.modifyValue).setValue(this.options._const.oldValue,e.value||"").setValue(this.options._const.newValue,t.value||"").setValue(this.options._const.route,n)),e.checked!==t.checked&&o.push((new m).setValue(this.options._const.action,this.options._const.modifyChecked).setValue(this.options._const.oldValue,e.checked).setValue(this.options._const.newValue,t.checked).setValue(this.options._const.route,n)),o}}const B={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,valueDiffing:!0,textDiff(e,t,n,o){e.data=o},preVirtualDiffApply(){},postVirtualDiffApply(){},preDiffApply(){},postDiffApply(){},filterOuterDiff:null,compress:!1,_const:!1,document:!(!window||!window.document)&&window.document};class I{constructor(e={}){if(this.options=e,Object.entries(B).forEach(([e,t])=>{Object.prototype.hasOwnProperty.call(this.options,e)||(this.options[e]=t)}),!this.options._const){const e=["addAttribute","modifyAttribute","removeAttribute","modifyTextElement","relocateGroup","removeElement","addElement","removeTextElement","addTextElement","replaceElement","modifyValue","modifyChecked","modifySelected","modifyComment","action","route","oldValue","newValue","element","group","from","to","name","value","data","attributes","nodeName","childNodes","checked","selected"];this.options._const={},this.options.compress?e.forEach((e,t)=>this.options._const[e]=t):e.forEach(e=>this.options._const[e]=e)}this.DiffFinder=U}apply(e,t){return function(e,t,n){return t.every(t=>h(e,t,n))}(e,t,this.options)}undo(e,t){return f(e,t,this.options)}diff(e,t){return new this.DiffFinder(e,t,this.options).init()}}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var P=Object.prototype.toString,$=Array.isArray||function(e){return"[object Array]"===P.call(e)};function J(e){return"function"==typeof e}function R(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function F(e,t){return null!=e&&"object"==typeof e&&t in e}var H=RegExp.prototype.test;var G=/\S/;function q(e){return!function(e,t){return H.call(e,t)}(G,e)}var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var W=/\s*/,z=/\s+/,K=/\s*=/,Q=/\s*\}/,Y=/#|\^|\/|>|\{|&|=|!/;function Z(e){this.string=e,this.tail=e,this.pos=0}function ee(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function te(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}Z.prototype.eos=function(){return""===this.tail},Z.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},Z.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},ee.prototype.push=function(e){return new ee(e,this)},ee.prototype.lookup=function(e){var t,n,o,s=this.cache;if(s.hasOwnProperty(e))t=s[e];else{for(var i,r,a,l=this,c=!1;l;){if(e.indexOf(".")>0)for(i=l.view,r=e.split("."),a=0;null!=i&&a<r.length;)a===r.length-1&&(c=F(i,r[a])||(n=i,o=r[a],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(o))),i=i[r[a++]];else i=l.view[e],c=F(l.view,e);if(c){t=i;break}l=l.parent}s[e]=t}return J(t)&&(t=t.call(this.view)),t},te.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},te.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||ne.tags).join(":"),s=void 0!==n,i=s?n.get(o):void 0;return null==i&&(i=function(e,t){if(!e)return[];var n,o,s,i=!1,r=[],a=[],l=[],c=!1,u=!1,d="",h=0;function p(){if(c&&!u)for(;l.length;)delete a[l.pop()];else l=[];c=!1,u=!1}function f(e){if("string"==typeof e&&(e=e.split(z,2)),!$(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(R(e[0])+"\\s*"),o=new RegExp("\\s*"+R(e[1])),s=new RegExp("\\s*"+R("}"+e[1]))}f(t||ne.tags);for(var m,g,_,V,b,v,w=new Z(e);!w.eos();){if(m=w.pos,_=w.scanUntil(n))for(var N=0,y=_.length;N<y;++N)q(V=_.charAt(N))?(l.push(a.length),d+=V):(u=!0,i=!0,d+=" "),a.push(["text",V,m,m+1]),m+=1,"\n"===V&&(p(),d="",h=0,i=!1);if(!w.scan(n))break;if(c=!0,g=w.scan(Y)||"name",w.scan(W),"="===g?(_=w.scanUntil(K),w.scan(K),w.scanUntil(o)):"{"===g?(_=w.scanUntil(s),w.scan(Q),w.scanUntil(o),g="&"):_=w.scanUntil(o),!w.scan(o))throw new Error("Unclosed tag at "+w.pos);if(b=">"==g?[g,_,m,w.pos,d,h,i]:[g,_,m,w.pos],h++,a.push(b),"#"===g||"^"===g)r.push(b);else if("/"===g){if(!(v=r.pop()))throw new Error('Unopened section "'+_+'" at '+m);if(v[1]!==_)throw new Error('Unclosed section "'+v[1]+'" at '+m)}else"name"===g||"{"===g||"&"===g?u=!0:"="===g&&f(_)}if(p(),v=r.pop())throw new Error('Unclosed section "'+v[1]+'" at '+w.pos);return function(e){for(var t,n=[],o=n,s=[],i=0,r=e.length;i<r;++i)switch((t=e[i])[0]){case"#":case"^":o.push(t),s.push(t),o=t[4]=[];break;case"/":s.pop()[5]=t[2],o=s.length>0?s[s.length-1][4]:n;break;default:o.push(t)}return n}(function(e){for(var t,n,o=[],s=0,i=e.length;s<i;++s)(t=e[s])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(o.push(t),n=t));return o}(a))}(e,t),s&&n.set(o,i)),i},te.prototype.render=function(e,t,n,o){var s=this.parse(e,o),i=t instanceof ee?t:new ee(t,void 0);return this.renderTokens(s,i,n,e,o)},te.prototype.renderTokens=function(e,t,n,o,s){for(var i,r,a,l="",c=0,u=e.length;c<u;++c)a=void 0,"#"===(r=(i=e[c])[0])?a=this.renderSection(i,t,n,o):"^"===r?a=this.renderInverted(i,t,n,o):">"===r?a=this.renderPartial(i,t,n,s):"&"===r?a=this.unescapedValue(i,t):"name"===r?a=this.escapedValue(i,t):"text"===r&&(a=this.rawValue(i)),void 0!==a&&(l+=a);return l},te.prototype.renderSection=function(e,t,n,o){var s=this,i="",r=t.lookup(e[1]);if(r){if($(r))for(var a=0,l=r.length;a<l;++a)i+=this.renderTokens(e[4],t.push(r[a]),n,o);else if("object"==typeof r||"string"==typeof r||"number"==typeof r)i+=this.renderTokens(e[4],t.push(r),n,o);else if(J(r)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(r=r.call(t.view,o.slice(e[3],e[5]),(function(e){return s.render(e,t,n)})))&&(i+=r)}else i+=this.renderTokens(e[4],t,n,o);return i}},te.prototype.renderInverted=function(e,t,n,o){var s=t.lookup(e[1]);if(!s||$(s)&&0===s.length)return this.renderTokens(e[4],t,n,o)},te.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),s=e.split("\n"),i=0;i<s.length;i++)s[i].length&&(i>0||!n)&&(s[i]=o+s[i]);return s.join("\n")},te.prototype.renderPartial=function(e,t,n,o){if(n){var s=J(n)?n(e[1]):n[e[1]];if(null!=s){var i=e[6],r=e[5],a=e[4],l=s;return 0==r&&a&&(l=this.indentPartial(s,a,i)),this.renderTokens(this.parse(l,o),t,n,l)}}},te.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},te.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return ne.escape(n)},te.prototype.rawValue=function(e){return e[1]};var ne={name:"mustache.js",version:"4.0.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){oe.templateCache=e},get templateCache(){return oe.templateCache}},oe=new te;ne.clearCache=function(){return oe.clearCache()},ne.parse=function(e,t){return oe.parse(e,t)},ne.render=function(e,t,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+($(s=e)?"array":typeof s)+'" was given as the first argument for mustache#render(template, view, partials)');var s;return oe.render(e,t,n,o)},ne.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return X[e]}))},ne.Scanner=Z,ne.Context=ee,ne.Writer=te;var se=ne;let ie={};function re(e,t={},n,o){let s=ie&&ie[e];const i=document.getElementById(e);!o&&i&&(s=i.innerHTML,se.parse(s),ie[e]=s);const r=o||se.render(s,t);if(n&&n.parentNode){const e=document.implementation.createHTMLDocument("diffDOM").createElement("div");e.innerHTML=r,function(e,t){const n=new I({maxChildCount:!1,filterOuterDiff(e){e.attributes&&e.attributes["data-skip-render"]&&(e.innerDone=!0)}}),o=n.diff(e,t.firstElementChild);o&&o.length&&n.apply(e,o)}(n,e)}else console.error(`Missing el to render ${n}`,this);return Promise.resolve()}t.default=[["ProductListingManager",class{constructor(e,t){this.pageComponents=t,this.content=e.querySelector("[data-elem-plp-content]"),this.grid=e.querySelector("[data-elem-plp-grid]"),this.filterButton="data-elem-plp-filter",this.sortingSelect="data-elem-plp-sort",this.loadMoreButton="data-elem-load-more"}init(){this.addEventListeners()}addEventListeners(){this.loadMore=this.loadMore.bind(this),this.applySorting=this.applySorting.bind(this),this.applyFiltering=this.applyFiltering.bind(this),this.content.addEventListener("click",this.loadMore),this.content.addEventListener("click",this.applyFiltering),this.content.addEventListener("change",this.applySorting)}updateByUrl(e,t){this.toggleBusy(!0),c(e).then(e=>{re(void 0,void 0,this.content,e),this.content.dispatchEvent(new CustomEvent("notifier:notify",{bubbles:!0,detail:{message:t}}))}).finally(()=>{this.toggleBusy(!1)})}applyFiltering(e){if(!this.isEventDelegatedFrom(this.filterButton,e))return;const t=e.target;this.updateByUrl(t.getAttribute("data-href"),t.textContent+" filter applied")}applySorting(e){if(!this.isEventDelegatedFrom(this.sortingSelect,e))return;const t=e.target;this.updateByUrl(t.value,t.options[t.selectedIndex].text+" sorting applied")}loadMore(e){if(!this.isEventDelegatedFrom(this.loadMoreButton,e))return;const t=e.target,n=t.getAttribute("data-url");t.classList.add("m-loading"),this.toggleBusy(!0),c(r(n,"selectedUrl",n)).then(e=>{t.remove();const n=document.createElement("div");n.innerHTML=e,this.grid.appendChild(n),this.grid.dispatchEvent(new CustomEvent("notifier:notify",{bubbles:!0,detail:{message:"Loaded more products"}}))}).finally(()=>{this.toggleBusy(!1)})}toggleBusy(e){this.content.setAttribute("aria-busy",e)}isEventDelegatedFrom(e,t){return null!==t.target.getAttribute(e)}destroy(){this.content.removeEventListener("click",this.loadMore),this.content.removeEventListener("click",this.applyFiltering),this.content.removeEventListener("change",this.applySorting)}}]]}}]);