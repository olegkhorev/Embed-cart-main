/*! jQuery v1.12.4 | (c) jQuery Foundation | jq_eb.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jq_eb:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jq_eb?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jq_eb?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jq_eb)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jq_eb&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jq_eb",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.core.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jq_eb||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.widget.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:u.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jq_eb?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){var r,i=this;n?(t=r=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element,r=this.widget()),e.each(n,function(n,s){function o(){if(i.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof s=="string"?i[s]:s).apply(i,arguments)}typeof s!="string"&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var u=n.match(/^(\w+)\s*(.*)$/),a=u[1]+i.eventNamespace,f=u[2];f?r.delegate(f,a,o):t.bind(a,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.mouse.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.position.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.draggable.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jq_ebui.com
* Includes: jq_eb.ui.droppable.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){e.widget("ui.droppable",{version:"1.9.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);var $ec = jQuery,
	ec_auto_click = false,
	$window = $ec(window),
	original_content,
	original_pageid,
	original_title,
	original_page,
	original_bread_crumbs,
	$animation_elements = $ec('.ec_page-container-2, .ec_page-container-news, .ec_page-container-blog'),
	are_you_sure = "Are you sure?",
	mobile_screen = 700,
	instant_search_ajax,
	yes = "Yes",
	no = "No",
	ok = "ok",
	chat_w = 0,
	alerts = Math.floor(Math.random() * 10000),
	at,
	bc = true,
	confirmed = false,
	ajaxed = false,
	hp = false,
	ie = (window.navigator.appName == "Microsoft Internet Explorer"),
	ff = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
	wid,rtm,
	cursor = [],
	pushed = false,
	original_content, original_title, original_bread_crumbs,
	body_ec_loading_t,
	body_id,
	pushed_history_ok = false,
	mobile_design = false,
	dontloadfilter = false;

if (typeof window.janrain !== 'object') window.janrain = {};
if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

$ec(window).scroll(function() {
	on_scroll_ec_header();
	scrolltop();
});

$ec(document).on('keyup', function(e) {
	if (e.keyCode == 27) {
		removePopups();
	}
});

$ec(window).resize(function() {
	on_scroll_ec_header();
});

function on_scroll_ec_header() {
	if ($ec('body').hasClass('admin-area') || !$ec('.embed-cart-area').size())
		return;

	$ec('#ec_head').css('max-width', $ec('.embed-cart-area').outerWidth()+'px');
	if ($ec(window).width() < 850 && $ec(this).scrollTop() > ($ec('.embed-cart-area').offset().top)) {
		$ec('body').addClass('embed_cart_scrolled');
	} else if ($ec(this).scrollTop() > ($ec('.embed-cart-area').offset().top + 50)) {
		$ec('body').addClass('embed_cart_scrolled');
	} else {
		$ec('body').removeClass('embed_cart_scrolled');
	}
}

$ec.ajaxSetup({
      xhrFields: {
           withCredentials: true
      },
      crossDomain: true,
});

(function($) {
"use strict";
  $ec(document).ready(function() {
/*
		$('.login_table input').keyup(function(e) {
			if (e.key == 'Enter') {
				$('.login_table form').submit();
			}
		});
*/
//		$('.embed-cart-area').bind('click', function(event, ui) {
//			$(event.target).click();
//		});

		let url = window.location.href.split('?');

		if (strstr(window.location.href, '?') && !strstr(window.location.href, '#'))
			window.history.pushState({'page': 'home'},"", url[0]);

		$ec('#embed_cart_loader').remove();
		setTimeout(function() {
			$ec('.embed-cart-area').css('opacity', '1')
			$ec('.embed-cart-area').addClass('loaded');
//			$ec('html, body').animate({
//				scrollTop: 0
//			}, 10);
		}, 200)
  	on_scroll_ec_header();
	body_id = ec_this_page;
	$ec('body').attr('embed_cart_rel', 'body-'+ec_this_page);
	proceed_clicks(ec_this_page);//embed_cart_rel
	mobile_design = $ec('body').data('mobile');
	$ec('#subsform').on('submit', function() {
		var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if ($ec('#sub-email').val() && r.test($ec('#sub-email').val())) {
			$ec.ajax({
				url: current_location+'/subscribe?email='+$ec('#sub-email').val()+'&its_ajax_page=1'
			}).done(function(r) {
				ec_alert(r);
				$ec('.alert_message').css('top', '150px');
				unfade();
			});
		} else {
			func_highlight($ec('#ec_subscribe'));
		}

		return false;
	});

	$ec(document).mousemove(function(e) {
		cursor = [e.pageX, e.pageY];
	});

	$ec('.alerts').on('click', function() {
		bc = false;
	});

	$ec(document).on('click', function() {
		if (bc != false) {
			$ec('.popup, .alert_message, .alerts').not('.login_alert').remove();
			$ec('.login_alert').hide();
			unfade();
		}

		bc = true;
	});

	$ec('.search input').on('focus', function() {
		if ($ec(this).val() == 'Search')
			$ec(this).val('');
	});

	original_content = $ec('.ec_ajax_container').html();
	original_title = $ec('title').html();
	original_page = ec_page;
	original_bread_crumbs = $ec('#bread_crumbs_container').html();

	if (ec_page == 'home' || ec_page == 'category' || (ec_page == 'brands' && ec_pageid))
		is_ajax_page = true;

	if (is_ajax_page)
		ec_ajax_clicks();

	$ec('.currency_select a').on('click', function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_currency/'+$ec(this).data('id')+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});

		return false;
	});

	$ec('.language_select a').on('click', function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_language/'+$ec(this).data('id')+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});

		return false;
	});
                              1
	$ec('.currency_select select').change(function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_currency/'+$ec(this).val()+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});
	});

	$ec('.language_select select').change(function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_language/'+$ec(this).val()+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});
	});

	cart_clicks();
	original_pageid = ec_pageid;
	instant_search();
	responsive_init();
	scrolltop();
  });
})($);

function ec_ajax_clicks() {
//	console.log('123');
	left_filter_max_height();
	init_translate();
	wl_actions();
	$animation_elements = $ec('.ec_page-container-2, .ec_page-container-news, .ec_page-container-blog')
	$window.trigger('scroll');
	mobile_ec_menu_clicked = true;
	mobile_ec_menu_open();
	$ec('.filter_switcher').unbind('click').on('click', function() {
		$ec('body').toggleClass('filteropen');
	});

	$ec('body').removeClass('filteropen');
	try {
		ga('set', 'page', window.location.pathname);
		ga('send', 'pageview');
	} catch (err) {
	}

	$ec('.searchform').unbind('submit').on('submit', function() {
		var substring = $ec(this).find('input[type="text"]').val();
		if (!substring)
			return false;

		$ec('.embed_cart_search_link').remove();
		$ec('body').append('<a href="'+parnet_site_page+'#!/search?q='+substring+'" class="embed_cart_search_link ec_ajax_link"></a>');
		window.history.pushState({}, "", parnet_site_page+'#!/search?q='+substring);
		ec_ajax_clicks();
		$ec('.embed_cart_search_link').click();
		return false;
	});
//console.log('123');
	$ec('#ec_menu a, button.ec_ajax_link, a.ec_ajax_link, .ajax_mobile_link, .logo-link, .bread_crumbs a, #ec_subcategories a, .brands a, .test-links a, .ec_foot a').unbind('click').on('click', function(e) {
//		alert('1');
		if ($ec(this).hasClass('no-ajax'))
			return true;

//		ec_ajax_clicked = true;
		if ($ec(this).closest('button').size()) {
       ec_auto_click = true;
    }

		$ec('.popup.cart_popup .close').click();
		no_pop_state = true;
		if ($ec(this).closest('.product_popup').size())
			$ec('.fade').click();

			$ec('html, body').animate({
				scrollTop: $ec('.embed-cart-area').offset().top - 70
			}, 500);
			mobile_ec_menu_clicked = false;
			$ec('.mobile-left_ec_menu').animate({left: -500}, 500);
	var add_href = '';
	if ($ec(this).attr('href').indexOf('#') > -1) {
		var tmp = $ec(this).attr('href').split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href;
		if (!pushed) {
			pushed = true;
		}

		removePopups();
//ec_alert(create_ec_ajax_link(h)+'|'+add_href);
//return false;

//console.trace();
		$ec('#ec_content-ec_loading').remove();
		var site_loader_to = setTimeout(function() {
			$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
			$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
			$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
		}, 1000);

		$ec.ajax({
			dataType: 'json',
			url: create_ec_ajax_link(h),
			error: function() {
				self.location = h;
			},
			success: function(r) {
				clearTimeout(site_loader_to);
				$ec('body').attr('embed_cart_rel', 'body-'+r[3]);
				$ec('.ec_ajax_container').html(r[0]);

				$ec('#bread_crumbs_container').html(r[2]);
				ec_ajax_clicks();
				ec_page = r[3];
//				no_pop_state = true;
				if (ec_auto_click) {
					ec_auto_click = false;
//					ec_alert(parnet_site_page+'#!'+add_href);
					window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", parnet_site_page+'#!'+add_href);
        }

				document.title = r[1];
				$ec('meta[name="keywords"]').attr('content', r[7]);
				$ec('meta[name="description"]').attr('content', r[8]);

				ec_pageid = r[5];
				recalc_ec_menus(r[3], r[4]);
				proceed_clicks(r[3]);
				tabs_clicks();
				checkout_changes();
			}
		});

		return true;
	});

	try {
		login_clicks();
		register_actions();
	} catch (err) {
	}

	try {
		profile_clicks();
	} catch (err) {
	}

	contact_form();
}

function contact_form() {
	$ec('#help_form .submit_help').unbind('click').on('click', function() {
		var allgood = true;
		$ec('#help_form input[required]').each(function() {
			if (!$ec(this).val()) {
				$ec(this).addClass('error');
				allgood = false;
			}
		});

		$ec('#help_form textarea[required]').each(function() {
			if (!$ec(this).val()) {
				$ec(this).addClass('error');
				allgood = false;
			}
		});
//alert('1');
		if (allgood) {
			aload();
//			alert(current_location+'/help?its_ajax_page=1');
	    $ec.ajax({
           type: "POST",
           url: current_location+'/help?its_ajax_page=1',
           data: $ec("#help_form").serialize(),
           success: function(data) {
						unload();
						recaptchaOnload();
						if (data == 'C') {
							ec_alert("Captcha is incorrect.");
						} else {
							ec_alert("Your letter has been sent. We will contact you as soon as possible.");
						}
//						location.reload();
           }
         });

//			document.help_form.submit();
		}
	});
}

var no_pop_state = false;
window.onpopstate = function(e) {
	if (current_area == 'A') {
		self.location = window.location.href;
		return false;
	}
//	ec_alert('5');
//console.trace();
	if (no_pop_state) {
		no_pop_state = false;
		return true;
	}

	if (!(window.location.href.indexOf(parnet_site_page) > -1))
		return true;

//	no_pop_state = true;
//console.log('------');
	if (true || is_ajax_page) {
//		ec_alert(window.location.href);
		$ec('.ec_page-container-2, #ec_home-tabs').remove();
	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href;
		if (!pushed) {
			pushed = true;
		}

//ec_alert(create_ec_ajax_link(h)+'|'+add_href);
//return false;
		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
		$ec.ajax({
			dataType: 'json',
			url: create_ec_ajax_link(h),
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('body').attr('embed_cart_rel', 'body-'+r[3]);
				$ec('.ec_ajax_container').html(r[0]);

				$ec('#bread_crumbs_container').html(r[2]);
				ec_ajax_clicks();
				ec_page = r[3];
				no_pop_state = true;
//				window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", '/'+parnet_site_page+'#!'+add_href);
				document.title = r[1];
				$ec('meta[name="keywords"]').attr('content', r[7]);
				$ec('meta[name="description"]').attr('content', r[8]);
				ec_pageid = r[5];
				recalc_ec_menus(r[3], r[4]);
				proceed_clicks(r[3]);
				tabs_clicks();
				no_pop_state = false;
			}
		});
		ec_ajax_clicks();
		proceed_clicks(ec_this_page);
		tabs_clicks();
	}
};

function proceed_clicks(whats_page) {
//	ec_alert(whats_page);
	if (whats_page == 'category' || whats_page == 'search' || (whats_page == 'brands' && ec_pageid)) {
		$ec('body').addClass('withfilter');
		if (dontloadfilter)
			dontloadfilter = false;
		else
			load_filter();
	} else {
		$ec('body').removeClass('withfilter');
	}

	products_clicks();
	banners();
	product_clicks();
	filter_clicks();
	cart_actions();
	coupon_actions();
	cart_clicks();
	checkout_actions();
}

$ec(window).resize(function() {
	if ($ec('.fade').size() > 0)
		fade();
});

function aload() {
	$ec('.ec_loading').show();
}

function unload() {
	$ec('.ec_loading').hide();
}

function ec_alert(message, nook, h, classes, noshake, alert2, nofade) {
	clearTimeout(at);
	var id = alerts;
	if (alert2)
	    $ec('body').append('<div class="embed-cart-area alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><div class="background"></div><div class="alert_content"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	else {
		if (!nofade)
			fade();

		bc = false;
	    $ec('body').append('<div class="embed-cart-area alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	}

	if (noshake == 2) {
		$ec('#a'+id).hide();
		$ec('#a'+id).show();
	}

	$ec('#a'+id+' .close_alert').on('click', function() {
		var othis = $ec(this);
		bc = false;
		if (alert2)
	    	var e = $ec(this).parent().parent();
		else
	    	var e = $ec(this).parent();

		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			if (othis.closest('.login_alert').size() || othis.closest('.register_alert').size())
		    	unfade();

	    	if (!$ec('.popup').size() && !$ec('.register_alert').size() && !$ec('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$ec('#a'+id+' .close-alert button').on('click', function() {
		bc = false;
		bb = true;
    	var e = $ec('#a'+id);
		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$ec('.popup').size() && !$ec('.register_alert').size() && !$ec('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$ec('.alert_message').on('click', function() {
		bc = false;
		bb = true;
	});

	if (h)
		at = setTimeout(function(){$ec('#a'+id).fadeOut();unfade();}, 5000);

	$ec('#a'+id).focus();
	$ec('#a'+id).on('keyup', function(e) {
		if (e.which == 27) {
			$ec('#a'+id).hide();
    		if (!$ec('.popup').size())
				unfade();
		}
	});

	alerts += 1;

	return id;
}

function confirm(text, o, goto) {
	if (!text)
		text = are_you_sure;

	$ec('.confirm').remove();
	bc = false;
	ec_alert(text+'<br /><br /><button class="yes">'+yes+'</button> <button onclick="javascript: $ec(\'.confirm\').remove(); unfade();" class="no">'+no+'</button>', 1, '', 'confirm', 2);
	$ec('.confirm').focus();
	$ec('.confirm .yes').on('click', function() {
		bc = false;
		confirmed = true;
		if (goto)
			self.location = goto;
		else
			o.trigger('click');

		unfade();
		$ec('.confirm').remove();
		confirmed = false;
	});

	$ec('.confirm').keydown(function(e) {
		if (e.which == 13)
			$ec('.confirm .yes').trigger('click');
		else if (e.which == 27)
			$ec('.confirm .no').trigger('click');
	});
}

function fade() {
	if ($ec('.fade').size() == 0) {
		$ec('html').prepend('<div class="fade"></div>');
		$ec('.fade').height($ec(document).height());
		$ec('.fade').show();
	} else
		$ec('.fade').height($ec(document).height());

	$ec('.fade').unbind('click').on('click', function() {
		bc = false;
		removePopups();
return;
		bc = true;
	});
}


function removePopups(no_unfade) {
	if (current_area == 'C')
		setTimeout(function() {
			ec_oid = 0;
			product_clicks();
		}, 500);
//console.log('12');
	if (no_unfade) {
//console.log('123');
		$ec('.popup, .alert, .alert_message:not(.not_remove)').remove();
		return;
	}

	$ec('.popup, .alert, .alert_message').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
	setTimeout(function() {
		$ec('.popup, .alert, .alert_message').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    	unfade();

		setTimeout(function() {
			$ec('.popup, .alert, .alert_message:not(.not_remove)').remove();
		}, 200);
	}, 200);
}

function unfade() {
	clearTimeout(at);
	$ec('.prev').remove();
	$ec('.fade').remove();
}

function price_format(price, thousand_delim, decimal_delim, precision) {
	var thousand_delim = (arguments.length > 1 && thousand_delim !== false) ? thousand_delim : '';
	var decimal_delim = (arguments.length > 2 && decimal_delim !== false) ? decimal_delim : '.';
	var precision = (arguments.length > 3 && precision !== false) ? precision : '2';

	if (precision > 0) {
		precision = Math.pow(10, precision);
		price = Math.round(price*precision)/precision;
		var top = Math.floor(price);
		var bottom = Math.round((price-top)*precision)+precision;

	} else {
		var top = Math.round(price);
		var bottom = 0;
	}

	top = top+"";
	bottom = bottom+"";
	var cnt = 0;
	for (var x = top.length; x >= 0; x--) {
		if (cnt % 3 == 0 && cnt > 0 && x > 0)
			top = top.substr(0, x)+thousand_delim+top.substr(x, top.length);

		cnt++;
	}

	return (bottom > 0) ? (top+decimal_delim+bottom.substr(1, bottom.length)) : top;
}

function IsNumeric(num) {
     return (num >=0 || num < 0);
}

function cart_clicks() {
}

function cart_actions() {
	$ec('.cart-quantity').on('keyup', function() {
		var max = $ec(this).data('max');
		if ($ec(this).val() > max)
			$ec(this).val(max);
	});

	$ec('.ec_clear-cart').on('click', function() {
		$ec.ajax({url: current_location+'/cart/clear'+'?its_ajax_page=1'}).done(function(r) {
			reload_mc();
			ec_auto_click = true;
			$ec('#ec_menu-home a').click();
			return;
		});

		return false;
	});

	$ec('.update-cart').on('click', function(e) {
		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
	    $ec.ajax({
           type: "POST",
           url: current_location+'/cart'+'?its_ajax_page=1',
           data: $ec("#cartform").serialize(),
           success: function(data) {
						$ec('#ec_content-ec_loading').remove();
						$ec('.cart-link-force').first().click();
//						location.reload();
           }
         });

	    e.preventDefault();
		return false;
	});

	$ec('.remove-link').on('click', function() {
		var url = $ec(this).attr('href');
		$ec.ajax({url: url}).done(function(r) {
			$ec('#ec_minicart').html(r);
			$ec('#ec_head_mobile #ec_minicart').html(r);
			ec_auto_click = true;
			if ($ec('#ec_minicart .cart-link-force').size()) {
				ec_ajax_clicks();
				$ec('.cart-link-force').click();
			} else {
				$ec('#ec_menu-home a').click();
			}
		});

		return false;
	});
}

function wl_actions() {
	$ec('.ec_clear-wl').on('click', function() {
		$ec.ajax({url: current_location+'/wishlist/clear'+'?its_ajax_page=1'}).done(function(r) {});
			ec_auto_click = true;
		$ec('#ec_menu-home a').click();
		return false;
	});

	$ec('.remove-wl-link').on('click', function() {
		var url = $ec(this).attr('href');
		$ec.ajax({url: url}).done(function(r) {
			$ec('.wishlist-link-force').click();
		});

		return false;
	});
}

function recalculate_shipping(shippingid) {
	$ec('#place_order').animate({opacity: .6 }, 50);
	$ec('#place_order *').attr('disabled', true);
    $ec.ajax({
		type: "POST",
		url: current_location+'/checkout?shippingid='+shippingid+'&its_ajax_page=1',
		success: function(data) {
			$ec('#place_order').animate({opacity: 1 }, 200);
			$ec('#place_order *').attr('disabled', false);
			$ec('#place_order').html(data);
			checkout_actions();
			$ec('#paymentid').trigger('change');
		}
	});
}


var handler,
	stripe_loaded = false,
	stripe_lib;

function checkout_actions() {
	if (!stripe_loaded) {
		$ec.ajax({
		  url: "https://js.stripe.com/v3/",
		  dataType: "script",
		  success: function() {
				stripe_loaded = true;
//				alert(Stripe);
		  }
		});
	}

	if (stripe_key && $ec('#ex_date_stripe').size() && stripe_loaded) {
		var stripe = Stripe(stripe_key);
		// Create an instance of Elements.
		var elements = stripe.elements();
		var elementStyles = {
			base: {
				fontSize: '16px',
				color: '#000',
				fontFamily: 'sans-serif',
			}
		};
	    var elementClasses = {
		    focus: 'focused',
	    	empty: 'empty',
		    invalid: 'invalid',
		};
	    var cardNumber = elements.create('cardNumber', {
		    style: elementStyles,
	    	classes: elementClasses,
	    });
		var cardExpiry = elements.create('cardExpiry', {
			style: elementStyles,
			classes: elementClasses,
		});

		cardExpiry.mount('#ex_date_stripe');
		var cardCvc = elements.create('cardCvc', {
			style: elementStyles,
			classes: elementClasses,
		});
		cardCvc.mount('#cv_code_stripe');
    	cardNumber.mount('#card_number_stripe');

	    var elements = [cardNumber, cardExpiry, cardCvc];
	}

	ec_states_actions();
	if ($ec('#same_address').is(':checked')) {
		$ec('.billing_address input').removeProp('required');
	} else {
		$ec('.billing_address input').prop('required', true);
	}

	$ec('#same_address').unbind('change').change(function() {
		if ($ec(this).is(':checked')) {
			$ec('.billing_address input').removeProp('required');
		} else {
			$ec('.billing_address input').prop('required', true);
		}

		$ec('.billing_address').toggle();
	});

	$ec('#paymentid').change(function() {
        	$ec("#cc-info-stripe").hide()
        	$ec("#cc-info").hide()
	        if ($ec('#paymentid').val() == '2') {
	        	$ec("#cc-info").show()
	        	$ec("#place-order").hide()
	        } else if ($ec('#paymentid').val() == '7') {
	        	$ec("#cc-info-stripe").show()
	        } else {
	        	$ec("#cc-info").hide()
	        	$ec("#place-order").show()
	        }
	});

	$ec('#checkout_user_form').unbind('submit').on('submit', function(e) {
	    e.preventDefault();
		var allgood = true;
		$ec('#checkout_user_form input').each(function() {
			var o = $ec(this);
			if (!o.val()) {
			}
		});

		if (!allgood)
			return false;

	    $ec.ajax({
           type: "POST",
           url: current_location+'/checkout/user_form'+'?its_ajax_page=1',
           data: $ec('#checkout_user_form').serialize(),
           success: function(data) {
				if (data == 'Email') {
	                ec_alert('Enterd email already registered for another user');
				} else {
					$ec('#place_order').animate({opacity: 1 }, 200);
					$ec('#place_order *').attr('disabled', false);
					$ec('#place_order').html(data);
					 init_translate();
					checkout_actions();
					$ec('html, body').animate({
						scrollTop: $ec('#checkoutform').offset().top - 200
					}, 500);
					if ($ec('#paymentid').val() == '2')
						$ec('#cc-info').show();
				}
           }
         });

		return false;
	});

	$ec('#place_order button').unbind('click').on('click', function(e) {
		aload();
		if ($ec('#paymentid').val() == 7) {
			aload();
/*
 *		    $ec.ajax({
    	    	type: "POST",
				url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
				data: $ec('#checkoutform').serialize(),
				success: function(data)
				{
						ec_alert('Please, wait we are connecting you to Stripe');
				}
			});
*/
			var clientSecret = $ec('#cc-info-stripe').attr('secret');
//			console.log(clientSecret);
			  stripe.confirmCardPayment(clientSecret, {
			    payment_method: {
			      card: elements[0]
			    }
			  }).then(function(result) {
			    if (result.error) {
			    	unload();
						ec_alert('<b>Payment validation failed: '+result.error.message+'</b><br />Try to enter again or try another card.');
			    } else {
//			      		$ec('#stripe_token_new').val(result.token.id);
			      // The payment has been processed!
			      if (result.paymentIntent.status === 'succeeded') {
					stripe.retrievePaymentIntent(clientSecret).then(function(result) {
//console.log(result.paymentIntent);
//						return;
			      		$ec('#stripe_token').val(result.paymentIntent.id);
					    $ec.ajax({
    				    	type: "POST",
							url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
							data: $ec('#checkoutform').serialize(), // serializes the form's elements.
							success: function(data)
							{
								unload();
								var tmp = data.split('|');
								if (tmp[0] == 'E') {
									ec_alert(tmp[1]);
									return false;
								}

								$ec('.invoice_quick_link').remove();
								$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
								ec_ajax_clicks();
								ec_auto_click = true;
								$ec('.invoice_quick_link').click();
								reload_mc();
							}
						});
					});
				  }
				}
			});

	    	e.preventDefault();

			return false;
	    	e.preventDefault();
		} else if ($ec('#paymentid').val() == '2') {
			aload();
			hostedFieldsInstance_obj.tokenize(function (err, payload) {
				if (err) {
					unload();
					ec_alert(err.message);
					console.error(err);
					return;
				}

    braintree.threeDSecure.create({
      authorization: client_token,
      version: 2
	}, function (createError, threeDSecure) {
  threeDSecure.on('lookup-complete', function (data, next) {
    // check lookup data

    next();
  });

threeDSecure.verifyCard({
  amount: $ec('#order_total').val(),
  nonce: payload.nonce,
  bin: payload.details.bin
  // other fields such as billing address
}, function (verifyError, payload) {
							unload();
  if (verifyError) {
  	ec_alert(verifyError.message);
    if (verifyError.code === 'THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT ') {
      // flow was cancelled by merchant, 3ds info can be found in the payload
      // for cancelVerifyCard
    }

    return;
  }

        if ('undefined' != typeof payload.verificationDetails && payload.verificationDetails.liabilityShiftPossible == false && payload.verificationDetails.liabilityShifted == false && this.isAcceptNo3dSecure == false) {
        }


        		$ec('#payment-method-nonce').val(payload.nonce);
			    $ec.ajax({
	    	       type: "POST",
        		   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	    	       data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    		       success: function(data)
	        	   {
							unload();
						if (data == 'Error') {
		            	    ec_alert('Please, contact site administrator');
						} else if (data == 'StripeError') {
							$ec('#stripe_token').val('');
							$ec('#payment-method-nonce').val('');
							$ec('.checkout_popup').css('opacity', 1);
	            		    ec_alert('There was error processing your credit card');
						} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();3
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
						}
		        	}
	    		});

});
    });

return;

        		$ec('#payment-method-nonce').val(payload.nonce);
			    $ec.ajax({
	    	       type: "POST",
        		   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	    	       data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    		       success: function(data)
	        	   {
							unload();
						if (data == 'Error') {
		            	    ec_alert('Please, contact site administrator');
						} else if (data == 'StripeError') {
							$ec('#stripe_token').val('');
							$ec('#payment-method-nonce').val('');
							$ec('.checkout_popup').css('opacity', 1);
	            		    ec_alert('There was error processing your credit card');
						} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
						}
		        	}
	    		});
        	});
		} else {
		    $ec.ajax({
    	       type: "POST",
        	   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	           data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    	       success: function(data)
        	   {
							unload();
					if (data == 'Error') {
	            	    ec_alert('Please, contact site administrator');
					} else if (data == 'StripeError') {
						$ec('#stripe_token').val('');
						$ec('.checkout_popup').css('opacity', 1);
	            	    ec_alert('There was error processing your credit card');
					} else if (strstr(data, 'int_payment_form')) {
						$ec('body').append(data);
						$ec('#int_payment_form form').submit();
						ec_alert('Пожалуйста подождите');
					} else if (strstr(data, 'paypal.com')) {
						$ec('body').append(data);
						document.paypalform.submit();
						ec_alert('Please, wait we are connecting you to PayPal');
					} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
					}
	           }
	         });
		}
	});

	$ec('.apply_gc').on('click', function() {
		bc = false;
		var id = ec_alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$ec('.coupon_screen').html('<br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Enter code here</label></div><div class="coupon-error"></div><button>Apply</button><br/><br/>');
		$ec('.coupon_screen input').on('keyup', function() {
			$ec('.coupon-error').hide();
		});

		$ec('.coupon_screen button').on('click', function() {
			if (!$ec('.coupon_screen input').val()) {
				func_highlight($ec('.coupon_screen input'));
				return false;
			}

			$ec.ajax({url: current_location+'/checkout?gc='+$ec('.coupon_screen input').val()+'&its_ajax_page=1'}).done(function(r) {
				if (r == 'S') {
					$ec('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$ec('.coupon-error').html(r);
					$ec('.coupon-error').show();
				}
			});
		});
	});

	$ec('.apply_coupon').on('click', function() {
		bc = false;
		var id = ec_alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$ec('.coupon_screen').html('<br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Enter your coupon code here</label></div><div class="coupon-error"></div><button>Apply</button><br/><br/>');
		$ec('.coupon_screen input').on('keyup', function() {
			$ec('.coupon-error').hide();
		});

		$ec('.coupon_screen button').on('click', function() {
			if (!$ec('.coupon_screen input').val()) {
				func_highlight($ec('.coupon_screen input'));
				return false;
			}

			$ec.ajax({url: current_location+'/checkout?coupon='+$ec('.coupon_screen input').val()+'&its_ajax_page=1'}).done(function(r) {
				if (r == 'S') {
					$ec('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$ec('.coupon-error').html(r);
					$ec('.coupon-error').show();
				}
			});
		});
	});

	$ec('#local_pickup').change(function() {
		if ($ec(this).is(':checked')) {
			recalculate_shipping('L');
		} else {
			recalculate_shipping($ec('[name="shippingid"]').val());
		}

	});
}

function checkout_changes() {
	$ec('#checkout_user_form input').on('paste change keyup click', function() {
		$ec('#place_order *').attr('disabled', true);
		$ec('#place_order').css('opacity', .3);
	});

	$ec('#checkout_user_form select').change(function() {
		$ec('#place_order *').attr('disabled', true);
		$ec('#place_order').css('opacity', .3);
	});
}

function coupon_actions() {
	$ec('.remove_coupon').on('click', function() {
		$ec.ajax({url:current_location+'/checkout/remove_coupon'+'?its_ajax_page=1'}).done(function() {
			refresh_coupon();
		});
	});

	$ec('.remove_gc').on('click', function() {
		$ec.ajax({url:current_location+'/checkout/remove_gc'+'?its_ajax_page=1'}).done(function() {
			refresh_coupon();
		});
	});
}

function refresh_coupon() {
	if ($ec('.checkout_popup').is(':visible'))
		$ec('.checkout-link-force').click();
	else if ($ec('.cart_popup').is(':visible'))
		$ec('.cart-link-force').click();
	else
		window.location.reload();
}

function setCookie(cn,v,ed,seconds) {
	if (seconds) {
		var date = new Date(new Date().getTime() + ed * 1000);
		document.cookie=cn + "=" + v + ((ed==null) ? "" : "; expires="+date.toUTCString())+'; path=/;';//
	} else {
		var e = new Date();
		e.setDate(e.getDate() + ed);
		document.cookie=cn + "=" + v + ((ed==null) ? "" : "; expires="+e.toUTCString())+'; path=/;';
	}
}

function getCookie(cn) {
	var i, x, y, a = document.cookie.split(";");
	for (i = 0; i < a.length; i++) {
		x = a[i].substr(0, a[i].indexOf("="));
		y = a[i].substr(a[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g,"");
		if (x == cn)
			return y;
	}
}

function func_highlight(el) {
	if ($ec('html.area-c').size()) {
		el.addClass('error');
		return;
	}

	el.css('background', '#ff3000');
	setTimeout(function() {
		el.css('background', '#fff');
		setTimeout(function() {
			el.css('background', '#ff3000');
			setTimeout(function() {
				el.css('background', '#fff');
			}, 200);
		}, 200);
	}, 100);
}

function print_invoice(el) {
	$ec('#iframe-invoice').remove();
	$ec("<iframe id='iframe-invoice' name='invoice' style='height: 0px; width: 0px;' src='" + el.attr('href') + "' />").appendTo('body');
	$ec('#iframe-invoice').load(function() {
		window.frames['invoice'].focus();
		window.frames['invoice'].print();
	});

	return false;
}

function strstr(haystack, needle, bool) {
	var pos = 0;

	pos = haystack.indexOf(needle);
	if (pos == -1)
		return false;
	else {
		if (bool)
			return haystack.substr( 0, pos );
		else
			return haystack.slice( pos );
	}
}

function recalc_ec_menus(pg, pi) {
	$ec('.ec_menu-container li').removeClass('active');
	if (pi) {
		$ec('li#ec_menu-'+pi).addClass('active');
	} else {
		$ec('li#ec_menu-'+pg).addClass('active');
	}
}

function instant_search() {
	$ec('.search input').unbind('focus').on('focus', function() {
		var val = $ec(this).val();
		if (val.length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Enter 2 characters</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});

	$ec('.search').unbind('mouseleave').mouseleave(function() {
		$ec('.instant-search').fadeOut();
	});

	$ec('.search').unbind('mouseover').mouseover(function() {
		return false;
		$ec('.instant-search').fadeIn();
		var val = $ec(this).find('input').val();
		if (val.length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Enter 2 characters</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});

	$ec('.search input').on('keyup', function() {
		if ($ec(this).val().length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Enter 2 characters</div>");
			return;
        }

		search_instant($ec(this).val());
	});
}

function search_instant(val) {
		try {
			instant_search_ajax.abort();
		} catch (err) {
		}

		instant_search_ajax = $ec.ajax({
			url: current_location+'/instant_search?q='+encodeURIComponent(val)+'&its_ajax_page=1'
		}).done(function(r) {
			$ec('.instant-search').html(r);
			ec_ajax_clicks();
			$('.submitsearch').click(function() {
				$('.searchform').submit();
			});
		});
}

function responsive_init() {
	$ec('.navigation-toggle').on('click', function() {
		mobile_ec_menu_open();
	});
}

var mobile_ec_menu_clicked = false;
$ec('.mobile-ec_menu-fade').on('click', function() {
	mobile_ec_menu_open();
});

function mobile_ec_menu_open() {
		if (mobile_ec_menu_clicked) {
			mobile_ec_menu_clicked = false;
			$ec('.mobile-left_ec_menu').animate({left: -500}, 500);
			$ec('.navigation-toggle').removeClass('is-active');
			$ec('.mobile-ec_menu-fade').fadeOut();
		} else {
			if ($('.embed_cart_scrolled').size())
				var top = $ec(window).scrollTop() + 80 - $('.embed-cart-area').offset().top;
			else
				var top = 80;

			$ec('.mobile-left_ec_menu').css('top', top+'px');
			mobile_ec_menu_clicked = true;
			$ec('.mobile-left_ec_menu').animate({left: 0}, 500);
			$ec('.navigation-toggle').addClass('is-active');
			$ec('.mobile-ec_menu-fade').fadeIn();
		}
}

function create_ec_ajax_link(href) {
	try {
		if (href.indexOf('?') == -1) {
			href = href+'?its_ajax_page=1';
		} else {
			href = href+'&its_ajax_page=1';
		}
	} catch (err) {
	}

	return href;
}

function scrolltop() {
	if ($ec(window).scrollTop() > 100)
		$ec('#scrolltop').show();
	else
		$ec('#scrolltop').hide();

	$ec('#scrolltop').unbind('click').on('click', function() {
		$ec('html, body').animate({
			scrollTop: $('.embed-cart-area').offset().top
		}, 500);
	});
}

function check_if_in_view() {
	return false;
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $ec.each($animation_elements, function() {
    var $element = $ec(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
    }
  });
}

$ec('body').on('keyup focus', function(event) {
	if ($ec(event.target).prop('nodeName').toLowerCase() == 'input' || $ec(event.target).prop('nodeName').toLowerCase() == 'textarea') {
		$ec(event.target).removeClass('error');
	}
});

$ec(window).resize(function() {
	var top = $(window).scrollTop()+100;
	$ec('.product_popup').css('top', top + 'px');
	$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
	$ec('.cart_popup').css('top', top + 'px');
	$ec('.cart_popup').css('left', ($ec(window).width() / 2 - $ec('.cart_popup').width() / 2 - 20) + 'px');
});

$ec(window).on('load', function() {
//	$('#embed_cart_unwrap').ec_contents().unwrap();
});

function reload_mc() {
		$ec.ajax({url: current_location+'/cart?reload_mc=1'+'&its_ajax_page=1'}).done(function(r) {
			$ec('#ec_minicart').html(r);
			$ec('#ec_head_mobile #ec_minicart').html(r);
		});
}

function init_translate() {
//	console.log('1');
    $ec('.translate').unbind('click').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			var lbl = $(this).find('.hidden.translate-phrase').html(),
					word = $(this).find('.hidden.word').html();
			translate_alert('<textarea id="translate_me">'+lbl+'</textarea><div class="close-alert"><button>Save</button></div>', '1', '', 'translate-alert');
			$('.translate-alert').click(function() {
				$.ajax({
					url: current_location+'/translate?lbl='+encodeURIComponent(word)+'&translate='+encodeURIComponent($('.translate-alert textarea').val())+'&its_ajax_page=1'
				});
			});
    });
}

function str_replace(search, replace, subject) {
	return subject.split(search).join(replace);
}

function translate_alert(message, nook, h, classes, noshake, alert2, nofade) {
	clearTimeout(at);
	var id = alerts;
	if (alert2)
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><div class="background"></div><div class="alert_content"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	else {
		if (!nofade)
			fade();

		bc = false;
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	}

	if (noshake == 2) {
		$('#a'+id).hide();
		$('#a'+id).show();
	}

	$('#a'+id+' .close_alert').on('click', function() {
		var othis = $(this);
		bc = false;
		if (alert2)
	    	var e = $(this).parent().parent();
		else
	    	var e = $(this).parent();

		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			if (othis.closest('.login_alert').size() || othis.closest('.register_alert').size())
		    	unfade();

	    	if (!$('.popup').size() && !$('.register_alert').size() && !$('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$('#a'+id+' .close-alert button').on('click', function() {
		bc = false;
		bb = true;
    	var e = $('#a'+id);
		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$('.popup').size() && !$('.register_alert').size() && !$('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$('.alert_message').on('click', function() {
		bc = false;
		bb = true;
	});

	if (h)
		at = setTimeout(function(){$('#a'+id).fadeOut();unfade();}, 5000);

	$('#a'+id).focus();
	$('#a'+id).on('keyup', function(e) {
		if (e.which == 27) {
			$('#a'+id).hide();
    		if (!$('.popup').size())
				unfade();
		}
	});

	alerts += 1;

	return id;
}var current_banner = 1,	banners_count, banners_delay = 5000, banners_interval;



/*

 * We trigger the factory() function is different

 * ways to support modular JavaScript libraries. See

 * the 'Wrapping Up' section of the tutorial for

 * more information

 *

 */

  /*

	 * We define Zippy as a variable of type �function�.

   * Here, we use an anonymous function to ensure

   * that the logic inside the function is executed immediately.

	 *

	 */

  var Zippy = (function(element, settings){

    if ($('.ec_indicators').size()) {

      return;

        //code

    }



    var instanceUid = 0;



    /*

     * The constructor function for Zippy

     *

     */

    function _Zippy(element, settings){

      this.defaults = {

        slideDuration: '3000',

        speed: 500,

        arrowRight: '.arrow-right',

        arrowLeft: '.arrow-left'

      };



      if ($('.ec-one-banner').size())

        return;



      // We create a new property to hold our default settings after they

      // have been merged with user supplied settings

      this.settings = $ec.extend({},this,this.defaults,settings);



      // This object holds values that will change as the plugin operates

      this.initials = {

        currSlide : 0,

        $currSlide: null,

        totalSlides : false,

        csstransitions: false

      };



      // Attaches the properties of this.initials as direct properties of Zippy

      $ec.extend(this,this.initials);



      // Here we'll hold a reference to the DOM element passed in

      // by the $ec.each function when this plugin was instantiated

      this.$el = $ec(element);



      // Ensure that the value of 'this' always references Zippy

      this.changeSlide = $ec.proxy(this.changeSlide,this);



      // We'll call our initiator function to get things rolling!

      this.init();



      // A little bit of metadata about the instantiated object

      // This property will be incremented everytime a new Zippy carousel is created

		 // It provides each carousel with a unique ID

      this.instanceUid = instanceUid++;

    }



    return _Zippy;



  })();



  /**

	 * Called once per instance

	 * Calls starter methods and associate the '.zippy-carousel' class

	 * @params void

	 * @returns void

	 *

	 */

   Zippy.prototype.init = function(){

    if ($('.ec_indicators').size()) {

      return;

        //code

    }

    //Test to see if cssanimations are available

    this.csstransitionsTest();

    // Add a class so we can style our carousel

    this.$el.addClass('zippy-carousel');

    // Build out any DOM elements needed for the plugin to run

    // Eg, we'll create an indicator dot for every slide in the carousel

    this.build();

    // Eg. Let the user click next/prev arrows or indicator dots

    this.events();

    // Bind any events we'll need for the carousel to function

    this.activate();

    // Start the timer loop to control progression to the next slide

    this.initTimer();

  };



	/**

	 * Appropriated out of Modernizr v2.8.3

	 * Creates a new DOM element and tests existence of properties on it's

	 * Style object to see if CSSTransitions are available

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.csstransitionsTest = function(){

		var elem = document.createElement('modernizr');

		//A list of properties to test for

		var props = ["transition","WebkitTransition","MozTransition","OTransition","msTransition"];

		//Iterate through our new element's Style property to see if these properties exist

		for ( var i in props ) {

			var prop = props[i];

			var result = elem.style[prop] !== undefined ? prop : false;

			if (result){

				this.csstransitions = result;

				break;

			}

		}

	};



	/**

	 * Add the CSSTransition duration to the DOM Object's Style property

	 * We trigger this function just before we want the slides to animate

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.addCSSDuration = function(){

		var _ = this;

		this.$el.find('.slide').each(function(){

			this.style[_.csstransitions+'Duration'] = _.settings.speed+'ms';

		});

	}



	/**

   * Remove the CSSTransition duration from the DOM Object's style property

   * We trigger this function just after the slides have animated

   * @params void

   * @returns void

   *

   */

	Zippy.prototype.removeCSSDuration = function(){

		var _ = this;

		this.$el.find('.slide').each(function(){

			this.style[_.csstransitions+'Duration'] = '';

		});

	}



	/**

	 * Creates a list of ec_indicators based on the amount of slides

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.build = function(){

    if ($('.ec_indicators').size()) {

      return;

        //code

    }



		var $ec_indicators = this.$el.append('<ul class="ec_indicators" >').find('.ec_indicators');

		this.totalSlides = this.$el.find('.slide').length;

		for(var i = 0; i < this.totalSlides; i++) $ec_indicators.append('<li data-index='+i+'>');

	};



	/**

	 * Activates the first slide

	 * Activates the first indicator

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.activate = function(){

		this.$currSlide = this.$el.find('.slide').eq(0);

		this.$el.find('.ec_indicators li').eq(0).addClass('active');

	};



	/**

   * Associate event handlers to events

   * For arrow events, we send the placement of the next slide to the handler

   * @params void

   * @returns void

   *

   */

	Zippy.prototype.events = function(){

		$ec('body')

			.on('click',this.settings.arrowRight,{direction:'right'},this.changeSlide)

			.on('click',this.settings.arrowLeft,{direction:'left'},this.changeSlide)

			.on('click','.ec_indicators li',this.changeSlide);

	};



	/**

	 * TIMER

	 * Resets the timer

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.ec_clearTimer = function(){

		if (this.timer) clearInterval(this.timer);

	};



	/**

	 * TIMER

	 * Initialise the timer

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.initTimer = function(){

		this.timer = setInterval(this.changeSlide, this.settings.slideDuration);

	};



	/**

	 * TIMER

	 * Start the timer

	 * Reset the throttle to allow changeSlide to be executable

	 * @params void

	 * @returns void

	 *

	 */

	Zippy.prototype.startTimer = function(){

		this.initTimer();

		this.throttle = false;

	};



	/**

	 * MAIN LOGIC HANDLER

	 * Triggers a set of subfunctions to carry out the animation

	 * @params	object	event

	 * @returns void

	 *

	 */

	Zippy.prototype.changeSlide = function(e){

		//Ensure that animations are triggered one at a time

		if (this.throttle) return;

		this.throttle = true;



		//Stop the timer as the animation is getting carried out

		this.ec_clearTimer();



		// Returns the animation direction (left or right)

		var direction = this._direction(e);



		// Selects the next slide

		var animate = this._next(e,direction);

		if (!animate) return;



		//Active the next slide to scroll into view

		var $nextSlide = this.$el.find('.slide').eq(this.currSlide).addClass(direction + ' active');



    if (!this.csstransitions){

			this._jsAnimation($nextSlide,direction);

		} else {

			this._cssAnimation($nextSlide,direction);

		}

	};



	/**

	 * Returns the animation direction, right or left

	 * @params	object	event

	 * @returns strong	animation direction

	 *

	 */

	Zippy.prototype._direction = function(e){

		var direction;



		// Default to forward movement

		if (typeof e !== 'undefined'){

			direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);

		} else {

			direction = 'right';

		}

		return direction;

	};



	/**

	 * Updates our plugin with the next slide number

	 * @params	object	event

	 * @params	string	animation direction

	 * @returns boolean continue to animate?

	 *

	 */

	Zippy.prototype._next = function(e,direction){



    // If the event was triggered by a slide indicator, we store the data-index value of that indicator

		var index = (typeof e !== 'undefined' ? $ec(e.currentTarget).data('index') : undefined);



		//Logic for determining the next slide

		switch(true){

			//If the event was triggered by an indicator, we set the next slide based on index

       case( typeof index !== 'undefined'):

				if (this.currSlide == index){

					this.startTimer();

					return false;

				}

				this.currSlide = index;

			break;

			case(direction == 'right' && this.currSlide < (this.totalSlides - 1)):

				this.currSlide++;

			break;

			case(direction == 'right'):

				this.currSlide = 0;

			break;

			case(direction == 'left' && this.currSlide === 0):

				this.currSlide = (this.totalSlides - 1);

			break;

			case(direction == 'left'):

				this.currSlide--;

			break;

		}

		return true;

	};



	Zippy.prototype._cssAnimation = function($nextSlide,direction){

    //Init CSS transitions

		setTimeout(function(){

			this.$el.addClass('transition');

			this.addCSSDuration();

			this.$currSlide.addClass('shift-'+direction);

		}.bind(this),100);



		//CSS Animation Callback

		//After the animation has played out, remove CSS transitions

		//Remove unnecessary classes

		//Start timer

		setTimeout(function(){

			this.$el.removeClass('transition');

			this.removeCSSDuration();

			this.$currSlide.removeClass('active shift-left shift-right');

			this.$currSlide = $nextSlide.removeClass(direction);

			this._updateIndicators();

			this.startTimer();

		}.bind(this),100 + this.settings.speed);

	};



	Zippy.prototype._jsAnimation = function($nextSlide,direction){

		//Cache this reference for use inside animate functions

		var _ = this;



     // See CSS for explanation of .js-reset-left

		if(direction == 'right') _.$currSlide.addClass('js-reset-left');



     var animation = {};

		animation[direction] = '0%';



		var animationPrev = {};

		animationPrev[direction] = '100%';



		//Animation: Current slide

		this.$currSlide.animate(animationPrev,this.settings.speed);



		//Animation: Next slide

		$nextSlide.animate(animation,this.settings.speed,'swing',function(){

			//Get rid of any JS animation residue

			_.$currSlide.removeClass('active js-reset-left').attr('style','');

			//Cache the next slide after classes and inline styles have been removed

			_.$currSlide = $nextSlide.removeClass(direction).attr('style','');

			_._updateIndicators();

			_.startTimer();

		});

	};



  /**

	 * Ensures the slide ec_indicators are pointing to the currently active slide

	 * @params	void

	 * @returns	void

	 *

	 */

	Zippy.prototype._updateIndicators = function(){

		this.$el.find('.ec_indicators li').removeClass('active').eq(this.currSlide).addClass('active');

	};



	$ec.fn.Zippy = function(options){



    return this.each(function(index,el){



      el.Zippy = new Zippy(el,options);



    });



  };





/*});*/



function banners() {

	if (!$ec('.banners-homepage').size())

		return;



// Custom options for the carousel

	var args = {

		arrowRight : '.arrow-right', //A

		arrowLeft : '.arrow-left', //A

		speed : 1000, //The speed of the animation (milliseconds)

		slideDuration : banners_delay //The amount of time between animations (milliseconds)

	};



	$ec('.banners-homepage').Zippy(args);



	current_banner = 1;

	banners_count = $ec("#banners_nav img").size();

	if (banners_count < 2)

		return;



	clearInterval(banners_interval);

	banners_interval = setInterval("rotate_banners()", banners_delay);

	$ec('#banners_nav img').on('click', function() {

		clearInterval(banners_interval);

		banners_interval = setInterval("rotate_banners()", banners_delay);

		var i = $ec(this).attr('id').replace('g2b_', '');

		current_banner = i;

		$ec('#banners_nav img').removeClass('active');

		$ec(this).addClass('active');

		$ec(".banners-slider div").hide();

		$ec("#banner_"+i).fadeIn();

		$ec(".hp_banner").hide();

		$ec("#hp_banner_"+i).fadeIn();

	});

}



function rotate_banners() {
				current_banner++;

				$ec('#banners_nav img').removeClass('active');

				$ec('#g2b_'+(current_banner-1)).addClass('active');



				$ec(".banners-slider div").hide();

				$ec("#banner_"+(current_banner-1)).fadeIn();

				$ec(".hp_banner").hide();

				$ec("#hp_banner_"+(current_banner-1)).fadeIn();



				if (current_banner == banners_count)

					current_banner = 0;

}



$ec(document).ready(function() {

	banners();

});(function($) {

"use strict";

	$ec(document).ready(function() {

		tabs_clicks();

	});

})($);



var containerWidths = [],
	scrollWidth0,
	scroll_size = 276,
	duration = 600,
	defaultContainerWidth = 1600,
	scrollWidthToContainerWidthRatio = 1;


function initCarousels() {
	for (var i = 0; i < 6; i++) {
		containerWidths[containerWidths.length] = 0;
		if ($ec('#carousel-'+i).size()) {
			containerWidths[i] = $ec('#carousel-'+i+' .ec_res-item').size() * scroll_size;
			var width_2 = $ec('#carousel-'+i+' .ec_res-item').size() * scroll_size;
			$ec('#carousel-'+i+' .responsive-columns').width(width_2).css('min-width', width_2+'px');
			var width = $ec('#carousel-'+i+' .ec_content-pr').outerWidth() + 20;
			if (width <= containerWidths[i]) {
				$ec('#carousel-'+i).find('.controls > .ec_button-right').css('display', 'block').css('left', (containerWidths[i]-52)+'px');
			} else {
				if (parseInt($ec('#carousel-'+i+' .ec_content-pr').css('left')) < 0) {
					$ec('#carousel-'+i+' .ec_content-pr').animate({
						left: 0
					}, 100);
				}

				$ec('#carousel-'+i).find('.controls > .ec_button-left').css('display', 'none');
				$ec('#carousel-'+i).find('.controls > .ec_button-right').css('display', 'none');
			}

			$ec('#carousel-'+i+' .controls > .ec_button-right').unbind('click').on('click', function() {
				var that = $ec(this);
				var button_cLeft = that.siblings();
				var scrollContent = that.closest('.carousel-pr').find('.ec_content-pr');
				var width = 0;

				scrollContent.find('.ec_res-item').each(function(){
				  width += $ec(this).outerWidth();
				  width += parseInt($ec(this).css('margin-left'));
				  width += parseInt($ec(this).css('margin-right'));
				  width += parseInt($ec(this).css('padding-left'));
				  width += parseInt($ec(this).css('padding-right'));
				})

				width = scrollContent.find('.ec_res-item').size() * scroll_size;
				var width_2 = $ec('.ec_carousel-wrapper').outerWidth();
				if ($ec(window).width() < 600)
					var width_2 = scroll_size;
				else
					var width_2 = $ec('.ec_carousel-wrapper').outerWidth();

				var maxScrollWidth = Math.floor(width - width_2);

				var left = parseInt(scrollContent.css('left'));

				var isEnd = false;

				scrollWidth0 = Math.floor(width_2 * scrollWidthToContainerWidthRatio);
				if (Math.abs(left - scrollWidth0) >= maxScrollWidth) {
					scrollWidth0 = maxScrollWidth + left;
					isEnd = true;
				}

				scrollContent.animate({
					left: left - scrollWidth0
				}, duration, function() {
					button_cLeft.fadeIn(duration);

					if (isEnd) {
						that.fadeOut(duration);
					}
				});
			});

  			$ec('#carousel-'+i+' .controls > .ec_button-left').unbind('click').on('click', function() {
				var that = $ec(this);
				var button_cRight = that.siblings();
				var scrollContent = that.closest('.carousel-pr').find('.ec_content-pr');

				// Get current scroll position
				var left = parseInt(scrollContent.css('left'));

				var isEnd = false;

				// Determine scrollWidth
				if ($ec(window).width() < 600)
					var width_2 = scroll_size;
				else
					var width_2 = $ec('.ec_carousel-wrapper').outerWidth();

				scrollWidth0 = Math.floor(width_2 * scrollWidthToContainerWidthRatio);
				if (left + scrollWidth0 >= 0) {
					isEnd = true;
				}

				scrollContent.animate({
					left: isEnd ? 0 : left + scrollWidth0
				}, duration, function() {
					// Display left button_c
					button_cRight.fadeIn(duration);

					// Determine if we've reached the end
					if (isEnd) {
						// Hide right button_c
						that.fadeOut(duration);
					}
				});
			});
		}
	}
}

$ec(window).resize(function() {
	initCarousels();
});

function tabs_clicks() {
	initCarousels();
	$ec('.ec_home-tabs li').on('click', function() {
		return false;
		$ec('.ec_home-tabs li').removeClass('active');
		$ec(this).addClass('active');
		$ec('.tab-content').addClass('hidden');
		$ec('#tab-'+$ec(this).data('tab')).removeClass('hidden');
	});

	$ec('.ec_product-tabs li').on('click', function() {
		$ec('.ec_product-tabs li').removeClass('active');
		$ec(this).addClass('active');
		$ec('.tab-content').addClass('hidden');
		$ec('#tab-'+$ec(this).data('tab')).removeClass('hidden');
	});
}var put_filter_push = '';
(function($) {
"use strict";
  $ec(document).ready(function() {
	if (ec_page == 'search' || ec_page == 'category' || (ec_page == 'brands' && ec_pageid))
		load_filter();

	products_clicks();
  });
})($);

function products_clicks() {
	if ($ec('body').hasClass('admin-area'))
		return false;

	$ec('.navigation a, .sort-by a').unbind('click').on('click', function(e) {
		no_pop_state = true;
		var h = $ec(this).attr('href');
		if (!pushed) {
			pushed = true;
		}

		if ($ec(this).closest('.bottom-pagination').size()) {
			$ec('html, body').animate({
				scrollTop: $ec('.products-results').offset().top - 120
			}, 300);
		}

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);

	var add_href = '';
	if ($ec(this).attr('href').indexOf('#') > -1) {
		var tmp = $ec(this).attr('href').split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href+'&its_ajax_page=1';
		$ec.ajax({
			url: h,
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('#ec_content-ec_loading').remove();
				$ec('.products-results').html(r);
//				window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$ec('.ec_ajax_container').html(),"pageTitle":$ec('title').html(), 'bread_crumbs': $ec('#bread_crumbs_container').html()},"", h);
				ec_ajax_clicks();
				dontloadfilter = true;
				proceed_clicks('search');
			}
		});

		return true;
//		return false;
	});

	$ec('.products .ec_photo').unbind('mouseenter').mouseenter(function() {
		$ec(this).append('<div class="view-quicklook"><img src="'+current_location+'/images/quicklook.png" alt="" /></div>');
		var q = $ec(this).find('.view-quicklook'),
			i = $ec(this).closest('.ec_photo'),
			product_id = i.find('.product-image').attr('id').replace('pid-', '');

		q.css('left', (i.width() / 2 - 35) + 'px');
		q.css('top', (i.height() / 2 - 20)+'px');
		q.css('z-index', 3);
		q.on('click', function() {
			load_quick_look(product_id);
		});
	});

	$ec('.products .quick-look').unbind('click').on('click', function() {
		var product_id = $ec(this).data('productid');
		load_quick_look(product_id);
	});

	$ec('.products .ec_photo').unbind('mouseleave').mouseleave(function() {
		$ec(this).find('.view-quicklook').remove();
	});
	$ec('.products button').unbind('click').on('click', function() {
		bc = false;
		add_to_cart($ec(this).attr('id').replace('pid',''), 'Y');
	});
}

function load_quick_look(product_id) {
			aload();
			$ec('body').append('<div class="load load_product_ql hidden"><span class="close close-popup">x</span></div>');
			$ec('.popup-wrap').css('top', $ec(window).scrollTop()+'px');
//ec_alert(parnet_site_page+'#!/product/'+product_id+'?popup=1');
			$ec.ajax({
				url: current_location+'/product/'+product_id+'?popup=1'+'&its_ajax_page=1'
			}).done(function(r) {
				$ec('.popup-wrap').height($ec(window).height());
				unload();
				fade();
				$ec('.load_product_ql').html('<span class="close close-popup">x</span>'+r);
				$ec('.load').addClass('embed-cart-area popup product_popup');
				var top = $(window).scrollTop()+100;
				$ec('.product_popup').css('top', top + 'px');

				$ec(".product_popup img").on('load', function() {
					var top = $(window).scrollTop()+100;
					$ec('.product_popup').css('top', top + 'px');
					$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
				});

				$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
				$ec('.product_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$ec('.product_popup').show();
				$ec('.product_popup .close, .product_popup .close_popup').on('click', function() {
					removePopups();
					return;
					$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
				    	unfade();
					}, 200);

					return;
    				var e = $ec('.product_popup');
	    			e.slideUp();
					setTimeout(function(){$ec('body').css('overflow-y', 'auto');e.remove()}, 500);
				});

				$ec('.product_popup').on('click', function() {
					bc = false;
					bb = true;
				});

				product_clicks()
			});
}

var filter_box,
  filter_box_html;

function load_filter(url_params, url_replace) {
	$ec('#left_filter').html('<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>');
	if (url_replace)
		var url = url_replace;
	else
		var url = window.location.href;

	if (!strstr(url, '?'))
		url += '?'

	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

  if (url_replace) {
  	var h = current_location+'/'+url_replace;
  } else
  	var h = current_location+'/'+add_href;

	if (!(h.indexOf('?') > -1)) {
		h = h + '?';
	}
//alert(url+'|'+h+'|'+url_params);
	$ec.ajax({
		url: h+'&its_ajax_page=1&load_filter=1'+(url_params ? url_params : '')
	}).done(function(r) {
		$ec('#left_filter').html(r);
    if (filter_box) {
      $('.filter-box-'+filter_box).html(filter_box_html);
      $('.withfilter .left_filter').animate({
        scrollTop: $('.filter-box-'+filter_box).position().top - 30 + $('.withfilter .left_filter').scrollTop()
      }, 500);
      filter_box = '';
    }

		if (put_filter_push) {
			window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$ec('.ec_ajax_container').html(),"pageTitle":$ec('title').html(), 'bread_crumbs': $ec('#bread_crumbs_container').html()},"", put_filter_push);
			put_filter_push = '';
		}

		filter_clicks();
	});
}

function filter_clicks() {
	var filter_url = $ec('.filter-url').html(),
		min_value = parseInt($ec("#min_price").val()),
		max_value = parseInt($ec("#max_price").val());

  $ec('.reset_filter').unbind('click').on('click', function() {
    $ec('.reset_filter_url').click();
  });

	$ec('.selected-filter').unbind('click').on('click', function() {
		var what_uncheck = $ec(this).data('what'),
			url = filter_url,
			id = $(this).data('id'),
			url_params = '';

		$ec('.selected-filter').each(function() {
			var what = $(this).data('what');
			if (what_uncheck != what) {
				if (what == 'brand') {
					url_params += '&filter[brandid]='+$(this).data('id');
				}

				if (what == 'price') {
					url_params += '&filter[price]='+$(this).data('id');
				}
			}

			if (what == 'attr') {
				if (id != $(this).data('id'))
					url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+'][]='+encodeURIComponent($ec(this).data('oid'));
			}
		});

		load_filter_process(url, url_params);
	});

  $ec('#left_filter h4.pointer').unbind('click').on('click', function() {
    $ec(this).next().toggleClass('opened');
    $ec(this).toggleClass('opened');
  });

	$ec('#left_filter li').unbind('click').on('click', function() {
    var input = $ec(this).find('input');
    if (input.is(':checked')) {
      input.prop('checked', false);
      input.attr('checked', false);
  } else {
      input.prop('checked', true);
      input.attr('checked', true);
  }

		var what = $ec(this).closest('ul').data('what'),
			url = filter_url,
			url_params = '';

		if (what == 'brand') {
			url_params += '&filter[brandid]='+$ec(this).data('id');
		}

		if (what == 'price') {
			url_params += '&filter[price]='+$ec(this).data('id');
		}

		if (what == 'attr') {
//			url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+']='+encodeURIComponent($ec(this).data('oid'));
		}

		$ec('.selected-filter').each(function() {
			var what = $ec(this).data('what');
			if (what == 'brand') {
				url_params += '&filter[brandid]='+$ec(this).data('id');
			}

			if (what == 'price') {
				url_params += '&filter[price]='+$ec(this).data('id');
			}
/*
			if (what == 'attr') {
				url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+']='+encodeURIComponent($ec(this).data('oid'));
			}
*/
    });

    $ec('.filter-attr input:checked').each(function() {
			url_params += '&filter[attr]['+encodeURIComponent($ec(this).closest('li').data('id'))+'][]='+encodeURIComponent($ec(this).closest('li').data('oid'));
    });
    filter_box = $(this).closest('ul').attr('groupid');
    filter_box_html = $(this).closest('ul').html();

//    alert(url_params);
//return;
		load_filter_process(url, url_params);
	});
}

function load_filter_process(url, url_params) {
		var h = url+url_params;
	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

	var filter_url = $ec('.filter-url').html();
	if (!(filter_url.indexOf('?') > -1)) {
		filter_url = filter_url+'?';
	}

	var h = current_location+'/'+filter_url+url_params+'&its_ajax_page=1';

		$ec('html, body').animate({
			scrollTop: $ec('.products-results').offset().top - 120
		}, 300);

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading" style="margin-top: '+($ec('.products-results').offset().top - 200)+'px"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width());
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height());
		$ec.ajax({
			url: h,
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('#ec_content-ec_loading').remove();
				$ec('.products-results').html(r);
				h = h.replace('filtered=1&amp;', '') ;
//        alert(h+'|'+r);
				ec_ajax_clicks();
				put_filter_push = parnet_site_page+'#!'+filter_url+url_params;
				load_filter(url_params, url);
				dontloadfilter = true;
				proceed_clicks('search');
			}
		});
}

$(window).resize(function() {
  left_filter_max_height();
});

$(window).scroll(function() {
  left_filter_max_height();
});

function left_filter_max_height() {
  if ($('.withleftec_menu .left_filter').size()) {
    var max_height = ($(window).height() - 80);
    if ($(window).scrollTop() < 230) {
//      max_height += $(window).scrollTop();
      max_height = 2000;
    }

    $('.withleftec_menu .left_filter').css('max-height', max_height+'px');
  }
}/*!Zoom v1.7.11 - 2013-11-12	Enlarge images on click or mouseover.	(c) 2013 Jack Moore - http://www.jacklmoore.com/zoom	license: http://www.opensource.org/licenses/mit-license.php*//*!
	Zoom v1.7.11 - 2013-11-12
	Enlarge images on click or mouseover.
	(c) 2013 Jack Moore - http://www.jacklmoore.com/ec_zoom
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.ec_zoom=function(t,n,e,i){var u,c,a,m,r,l,s,f=o(t).css("position");return o(t).css({position:/(absolute|fixed)/.test(f)?f:"relative",overflow:"hidden"}),e.style.width=e.style.height="",o(e).addClass("ec_zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none"}).appendTo(t),{init:function(){c=o(t).outerWidth(),u=o(t).outerHeight(),n===t?(m=c,a=u):(m=o(n).outerWidth(),a=o(n).outerHeight()),r=(e.width-c)/m,l=(e.height-u)/a,s=o(n).offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,m),0),e.style.left=t*-r+"px",e.style.top=n*-l+"px"}}},o.fn.ec_zoom=function(n){return this.each(function(){var e,i=o.extend({},t,n||{}),u=i.target||this,c=this,a=document.createElement("img"),m=o(a),r="mousemove.ec_zoom",l=!1,s=!1;(i.url||(e=o(c).find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(a.onload=function(){function t(t){e.init(),e.move(t),m.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(a):!1)}function n(){m.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(a):!1)}var e=o.ec_zoom(u,c,a,i.magnify);"grab"===i.on?o(c).on("mousedown.ec_zoom",function(i){1===i.which&&(o(document).one("mouseup.ec_zoom",function(){n(),o(document).off(r,e.move)}),t(i),o(document).on(r,e.move),i.preventDefault())}):"click"===i.on?o(c).on("click.ec_zoom",function(i){return l?void 0:(l=!0,t(i),o(document).on(r,e.move),o(document).one("click.ec_zoom",function(){n(),l=!1,o(document).off(r,e.move)}),!1)}):"toggle"===i.on?o(c).on("click.ec_zoom",function(o){l?n():t(o),l=!l}):"mouseover"===i.on&&(e.init(),o(c).on("mouseenter.ec_zoom",t).on("mouseleave.ec_zoom",n).on(r,e.move)),i.touch&&o(c).on("touchstart.ec_zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.ec_zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(a)},a.src=i.url,o(c).one("ec_zoom.destroy",function(){o(c).off(".ec_zoom"),m.remove()}))})},o.fn.ec_zoom.defaults=t})(window.jQuery);var rate_clicked = 0,
	gst_applied = false,
	qty_clicked = false,
	clear_clicked = false,
	image_popup_clicked = false,
	lbl_buy1click = "Enter your phone number";

(function($) {
"use strict";
  $ec(document).ready(function() {
	if (!$ec('body').hasClass('admin-area'))
		product_clicks();
  });
})($);

function product_clicks() {
	ec_ajax_clicks();
	$ec('.gift_cards button').unbind('click').on('click', function() {
		var val = $ec('#gift_card').val();
		if (val) {
			$ec.ajax({
				type: 'POST',
				url: current_location+'/cart/add_gc/'+val+'?its_ajax_page=1'
			}).done(function(r) {
				if (r) {
					ec_alert('Gift Card added to cart');
					$ec('#ec_minicart').html(r);
					$ec('#ec_head_mobile #ec_minicart').html(r);
					cart_clicks();
				} else {
					ec_alert('Please, enter numeric value');
				}
			});
		}
	});

	if ($ec(window).width() > 700)
		$ec('#ec_zoom').ec_zoom();

	if (ec_oid == 0) {
		ec_qadd = '';
		product_base = $ec('.product');
	} else {
		ec_qadd = '.product_popup ';
		product_base = $ec('.product_popup');
	}

	if (ec_oid == 0)
		default_images = $ec(ec_qadd+'.product .ec_photo table').html();
	else
		default_images_ql = $ec(ec_qadd+'.product .ec_photo table').html();

	postprocess();
	var rating_clicked = false;
	$ec('.rating').unbind('mouseleave').mouseleave(function() {
		if (rating_clicked) {
			$ec('.rating span.r'+$ec('#review_rating').val()).click();
		} else
			$ec('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');
	});

	$ec('.rating span').on('click', function() {
		rating_clicked = true;
		recalc_rating($ec(this));
		$ec('#review_rating').val($ec(this).attr('class').replace('r', ''));
	});

	$ec('.rating span').unbind('mouseover').mouseover(function() {
		recalc_rating($ec(this));
	});

	recaptchaOnload();
}

function recalc_rating(span) {
		$ec('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');
		if (span.hasClass('r1')) {
			$ec('.rating').addClass('r1');
		} else if (span.hasClass('r2')) {
			$ec('.rating').addClass('r1').addClass('r2');
		} else if (span.hasClass('r3')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3');
		} else if (span.hasClass('r4')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4');
		} else if (span.hasClass('r5')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4').addClass('r5');
		}
}

function postprocess(ql) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		$ec('[name=pricematch] input').on('keyup', function() {
			if ($ec(this).parent().parent().find('.star').size() > 0) {
				if ($ec(this).val() != '' && $ec(this).parent().find('img.mark-green').size() == 0 && ($ec(this).attr('name') != 'email' || emailReg.test($ec(this).val()))) {
					$ec(this).parent().find('img.mark-red').remove();
					$ec(this).removeClass('input-incorrect');
					$ec(this).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');
					$ec(this).addClass('input-correct');
				} else if ($ec(this).val() == '' || ($ec(this).attr('name') == 'email' && !emailReg.test($ec(this).val()))) {
					$ec(this).parent().find('img.mark-green').remove();
					$ec(this).removeClass('input-correct');
				}
			}
		});

		$ec('[name=crform] input, [name=crform] textarea').on('keyup', function() {
			if ($ec(this).parent().parent().find('.star').size() > 0) {
				if ($ec(this).val() != '' && $ec(this).parent().find('img.mark-green').size() == 0) {
					$ec(this).parent().find('img.mark-red').remove();
					$ec(this).removeClass('input-incorrect');
					$ec(this).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');
					$ec(this).addClass('input-correct');
				} else if ($ec(this).val() == '') {
					$ec(this).parent().find('img.mark-green').remove();
					$ec(this).removeClass('input-correct');
				}
			}
		});

		rate_clicked = 0;
		$ec('div.gst-tab').unbind('click').on('click', function() {
			$ec('div.gst-tab').removeClass('active');
			$ec(this).addClass('active');
			if ($ec(this).attr('id') == 'inc_gst') {
				gst_applied = true;
			} else {
				gst_applied = false;
			}

			recalculate_gst();
		});

		// Save gallery list items
		var o = this;
		if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		}

		$ec(ec_qadd+'.price-breaks').mouseover(function() {
			$ec(ec_qadd+'.price-breaks div').show();
		});

		$ec(ec_qadd+'.price-breaks').mouseout(function() {
			$ec(ec_qadd+'.price-breaks div').hide();
		});

		$ec(ec_qadd+'[name=amount]').change(function() {
			if ($ec(this).val() < 1)
				$ec(this).val('1');

			product_options(o);
		}).on('keyup', function() {
			product_options(o);
		});

		$ec('.ec_clear_option').unbind('click').on('click', function() {
			var groupid = $ec(this).attr('id').replace('poa-', '');
			$ec('#pot-'+groupid).html('');
			$ec('#pot-'+groupid).hide();
			$ec('#poa-'+groupid).hide();
			$ec('#pog-'+groupid+' img.checked').remove();
			$ec('#po-'+groupid).val('');
			map_variants(o);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		$ec(ec_qadd+'.options_container div').unbind('click').on('click', function() {
			if ($ec(this).hasClass('unavailable') || !($ec(this).hasClass('option-image') || $ec(this).hasClass('option-name')) || clear_clicked) {
				clear_clicked = false;
				return false;
			}

			$ec(this).parent().find('div img.checked').remove();
			var val = '';
			if ($ec(this).find('img').size() > 0)
				val = $ec(this).find('img').attr('alt');
			else
				val = $ec(this).html();

			var groupid = $ec(this).parent().attr('id').replace('pog-', '');
			$ec('#pot-'+groupid).html(': '+val);
			$ec('#pot-'+groupid).show();
			$ec('#poa-'+groupid).show();
			$ec(this).append("<img src='"+current_location+"/images/check-mark.png' class='checked'>");
			var optionid = $ec(this).attr('id').replace('poi-', '');
			$ec('#po-'+groupid).val(optionid);
			map_variants(o, groupid);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		$ec(ec_qadd+'.product_options').unbind('change').change(function() {
			var id = $ec(this).attr('id').replace('po-', '');
			if ($ec(this).val()) {
				$ec('#pot-'+id).html(': '+$ec(this).find('option:selected').text());
				$ec('#pot-'+id).show();
				$ec('#poa-'+id).show();
			} else {
				$ec('#pot-'+id).hide();
				$ec('#poa-'+id).hide();
			}

			map_variants(o, id);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		product_options(o);
		map_variants(o);

		$ec('.add2cart').unbind('click').on('click', function() {
			if (!option_selected())
				return false;
		});
		// Form AJAX-based submit
		$ec('form.product-details', product_base).eq(0).unbind('submit').on('submit',
			function(event)
			{
				return o.addProductToCart(event, this);
			}
		);
		// Cloud ec_zoom
		var cloud = $ec('.cloud-ec_zoom', product_base);
		if (cloud.length) {
			this.ec_zoomWidget = true;
			if (core.getCommentedData(cloud, 'kZoom')) {
				this.kZoom = core.getCommentedData(cloud, 'kZoom');
			}
			var imageWrapper = $ec(document.createElement('div')).addClass('wrapper');
			cloud.wrap(imageWrapper);
		}

		if ($ec(ec_qadd+'.product-image-gallery li a').length) {
			// TODO: improve to skip additional JS manipulations
			// like resizing etc when it is not needed
			this.selectImage(0);
		} else if (this.ec_zoomWidget && !cloud.data('ec_zoom')) {
			cloud.CloudZoom();
		}
		// Change Continue shopping button for QuickLook mode
		make_gallery_click_on_quick_look();
		$ec('.ql-ec_zoom', product_base).zIndex(10999);
		// Gallery
		if (typeof(window.lightBoxImagesDir) != 'undefined') {
			$ec('.loupe', product_base).on('click',
				function(event) {
					o.showLightbox();
					setTimeout(
						function() {
							$ec('.product-image-gallery li.selected a').eq(0).trigger('click');
						},
						500
					);
					return false;
				}
			);
		}

		// Tabs
		$ec('.product-details-tabs .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).find('a').attr('id').substr(5);
					$ec('.product-details-tabs .tabs div.active').removeClass('active');
					$ec(this).addClass('active');
					var box = $ec(this).parents('.product-details-tabs');
					if (box.find('#' + id).hasClass('scroll-pane')) {
						destroy_custom_scrolls_bars(box.find('#' + id));
					}

					destroy_custom_scrolls_bars(box.find('.variants-list'));
					box.find('.tab-container').hide();
					box.find('#' + id).show();
					box.find('.faq-answer').eq(0).show();
					if (box.find('#' + id).hasClass('scroll-pane')) {
						if (box.find('#' + id).hasClass('Reviews-tab')) {
							scroll_apis[scroll_apis.length] = [box.find('#' + id), box.find('#' + id).jScrollPane().data().jsp];
						} else {
							custom_scrolls_bars(box.find('#' + id));
						}
					}

					custom_scrolls_bars(box.find('.variants-list'));
					if ($ec('.cp_message .progress-bar').size() > 0) {
						$ec('.cp_message div').html('');
						$ec('.cp_message_fade').hide();
						$ec('.cp_message').hide();
						$ec('.cp_message button').show();
					}

					if ($ec('.cr_message .progress-bar').size() > 0) {
						$ec('.cr_message div').html('');
						$ec('.cr_message_fade').hide();
						$ec('.cr_message').hide();
						$ec('.cr_message button').show();
					}
				}

				return true;
			}
		);
	$ec('.add-review', product_base).on('click', function() {
		if ($ec('.norelated').size() > 0)
			$ec('html, body').animate({scrollTop: $ec(".customerReviews h3").offset().top}, 2000);
		else {
			$ec('.Reviews-tab').data('jsp').scrollTo(0, $ec('.Reviews-tab .jspPane').height());
			$ec(this).hide();
		}
	});
	$ec('.Reviews-tab').bind(
		'jsp-scroll-y',
		function(event, scrollPositionY) {
			$ec('.add-review').show();
			$ec('.add-review').css('top', scrollPositionY);
		}
	);
	$ec('.faq-question', product_base).on('click',
		function() {
			var o = $ec(this);
			$ec('.faq-answer').each(
				function() {
					if (o[0] != $ec(this).parents()[0])
						$ec(this).slideUp();
				}
			);
			$ec(this).find('.faq-answer').slideDown(
				'',
				function() {
					custom_scrolls_bars($ec('.FAQ-tab'));
				}
			);
		}
	);
		// Related Tabs
		$ec('.related-items .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).attr('id').substr(5);
					$ec('.related-items .tabs div.active').removeClass('active');
					$ec(this).addClass('active');

					var box = $ec(this).parents('.related-items');
					box.find('.tab-container').hide();
					box.find('#' + id).show();
				}

				return true;
			}
		);
		// Bottom tabs
		$ec('.product-details-bottom-tabs .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).find('a').attr('id').replace('link-bt-', '');
					$ec('.product-details-bottom-tabs .tabs div.active').removeClass('active');
					$ec(this).addClass('active');
					var box = $ec(this).parents('.product-details-bottom-tabs');
					if (box.find('.FAQ-tab').size() > 0) {
						destroy_custom_scrolls_bars($ec('.FAQ-tab'));
						box.find('.tab-container').hide();
						$ec('.FAQ-tab').show();
						custom_scrolls_bars($ec('.FAQ-tab'));
					} else {
						destroy_custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));
						box.find('.tab-container').hide();
						box.find('#tab-content-'+id).show();
						custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));
					}
				}

				return true;
			}
		);

		// Custom quantity
		custom_quantity();

		if (!product_base.hasClass('product-quicklook') && !(0 < product_base.parents('.blockUI').length)) {
			$ec('#relatedItems .img img').on('click', function() {
				popup.postprocessRequestCallback = function()
				{
					popup.postprocessRequest.apply(popup, arguments);
					$ec(ec_qadd+'.product-image-gallery a').eq(0).trigger('click');
				};

				return !popup.load(
					URLHandler.buildURL({
						target:			'quick_look',
						action:			'',
						productid:		$ec(this).parent().attr('id').replace('ip', ''),
						only_center:	1
					}),
					'product-quicklook',
					function () {
						ec_oid = 0;
						ec_qadd = '';
						$ec('.formError').hide();
					},
					50000
				);
			});
			$ec('.related-to-cart').on('click',
				function()
				{
					if ($ec(this).hasClass('no-options')) {
						var pid = $ec(this).attr('id').replace('p', '');
						var data = 'target=cart&action=add&productid='+pid+'&amount='+$ec(this).parent().find('.value').html()+'&returnURL='+$ec(ec_qadd+'[name=returnURL]').val();
						var o2 = this;
						$ec.ajax({
							type: 'POST',
							url: '/store/cart',
							data: data,
							beforeSend: function ( xhr ) {
								$ec(o2).parent().find('.cquantity').hide();
								$ec(o2).parent().find('img').hide();
								if ($ec(o2).parent().find('.progress-bar').size() > 0) {
									$ec(o2).parent().find('.progress-bar').show();
								} else {
									$ec(o2).parent().append('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');
								}
							}
						}).done(function(data) {
							$ec('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');
							$ec('#status-messages').slideDown(50);
							setTimeout(function() {$ec('#status-messages').slideUp(500);$ec('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);
							$ec.ajax({
								type: 'GET',
								url: '?productid='+pid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',
								data: data
							}).done(function(data) {
								core.trigger('updatecart', eval('({"items":[]})'));
								if (data != 'N') {
									var qty = data.split('|')[0];
									if (qty == 0) {
										$ec(o2).parent().find('.cquantity').remove();
										$ec(o2).parent().append('<div class="ofs">Out of stock</div>');
									} else
										$ec(o2).parent().find('.values').html(qty);
								}
								custom_quantity();
								$ec(o2).parent().find('.progress-bar').hide();
								$ec(o2).parent().find('.cquantity').show();
								if (!(data != 'N' && qty == 0))
									$ec(o2).parent().find('img').show();
							});
						});
					} else {
						popup.postprocessRequestCallback = function()
						{
							popup.postprocessRequest.apply(popup, arguments);
							$ec(ec_qadd+'.product-image-gallery a').eq(0).trigger('click');
						};

						return !popup.load(
							URLHandler.buildURL({
								target:			'quick_look',
								action:			'',
								amount:		 $ec(this).parent().find('.value').html(),
								productid:	$ec(this).attr('id').replace('p', ''),
								only_center: 1
							}),
							'product-quicklook',
							function () {
								ec_oid = 0;
								ec_qadd = '';
								$ec('.formError').hide();
							},
							50000
						);
					}
				}
			)
		}

		$ec('.customerReviews .rate img', product_base).unbind('mouseover').mouseover(function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
			var id = $ec(this).attr('id').replace('star-', '');
			for (var i = 0; i < 5; i++) {
				if (i <= id) {
					$ec('#star-'+i).addClass('hover');
				}
  			}
		}).unbind('click').on('click', function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
  			var id = parseInt($ec(this).attr('id').replace('star-', ''));
  			rate_clicked = id+1;
  			for (var i = 0; i < 5; i++) {
	  			if (i <= id) {
	  				$ec('#star-'+i).addClass('hover');
	  			}
  			}
		});

		$ec('.customerReviews .rate', product_base).unbind('mouseout').mouseout(function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
			if (rate_clicked > 0) {
	  			for (var i = 0; i < 5; i++) {
	  				if (i <= rate_clicked-1) {
	  					$ec('#star-'+i).addClass('hover');
		  			}
	  			}
			}
		});
/*
Check here
*/
		$ec('.r-show-more').mouseover(function() {
			$ec('.r-over').show();
		});
		$ec('.r-show-more').mouseout(function() {
			$ec('.r-over').hide();
		});
		$ec('.otfilter select').unbind('change').change(function() {
			var found = false;
			$ec('.otfilter select').each(function() {
				if ($ec(this).val()) {
					found = true;
				}
			});
			if (found) {
				$ec('.otfilter .submit').addClass('active');
			}
		});
		$ec(ec_qadd+'.otfilter .submit').on('click', function() {
			filter_variants(1);
			$ec('.otfilter .submit').removeClass('active');
		});
		$ec('.otfilter .reset').unbind('click').on('click', function() {
			if ($ec(this).hasClass('active')) {
				for (var i = 0; i < document.otfilter.elements.length; i++)
					document.otfilter.elements[i].value='';
				filter_variants(2);
				$ec(this).removeClass('active');
				$ec('.otfilter .submit').removeClass('active');
			}
		});
		$ec('.sorting li').unbind('click').on('click', function() {
			if ($ec(this).attr('id') && !$ec(this).hasClass('active')) {
				$ec(ec_qadd+'.sorting li').removeClass('active');
				$ec(this).addClass('active');
				filter_variants(0,$ec(this).attr('id'));
			}
		});

        variantsClicks();

		$ec('.getquote').on('click', function(){
			if (!option_selected())
				return false;

			var options = '';
			$ec(ec_qadd+'.product-option textarea').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			$ec(ec_qadd+'.product-option input').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			$ec(ec_qadd+'.product-option select').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			popup.load(
				URLHandler.buildURL({
					target:			'get_quote',
					action:			'',
					productid:		$ec(this).attr('id').replace('gq', ''),
					only_center:	1,
					product_options:options,
					amount:			$ec(ec_qadd+'[name=amount]').val()
				}),
				'get-quote',
				function () {
					ec_oid = 0;
					ec_qadd = '';
					$ec('.formError').hide();
				},
				50000
			);
		});

		if (self.location.hash) {
//			$ec('.product-details-tabs .tabs li a#link-' + self.location.hash.substr(1), product_base).click();
		}
}

$ec('body').on('click',
	function() {
		if (!qty_clicked)
			$ec('.cquantity .values').hide();

		qty_clicked = false;

		if (!image_popup_clicked)
			$ec('.image_popup').hide();

		image_popup_clicked = false;
	}
);

$ec(function() {
	if ($ec('.related-delim .related-items').size() == 1 && $ec('.related-delim .related-exist .product-details-bottom-tabs').size() == 0) {
		$ec('.product-details-tabs .tab-container').height(427);
	}
});

function make_gallery_click_on_quick_look() {
	$ec('.product-quicklook .gallery_left, .product-quicklook .vgallery_left').unbind('click').on('click', function() {
		var visible_id = 0;
		var previous_id = 0;
		var prev_id = 0;
		if ($ec(this).hasClass('vgallery_left')) {
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
					previous_id = prev_id;
				}

				prev_id = id;
			});

			$ec('.product-quicklook .variants-gallery ul').addClass('inactive');
			if (previous_id == 0 && visible_id == 0)
				$ec('#vgallery_'+prev_id+'_quick_look').removeClass('inactive');
			else
				$ec('#vgallery_'+previous_id+'_quick_look').removeClass('inactive');
		} else {
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
					previous_id = prev_id;
				}

				prev_id = id;
			});

			$ec('.product-quicklook .product-image-gallery ul').addClass('inactive');
			if (previous_id == 0 && visible_id == 0)
				$ec('#gallery_'+prev_id+'_quick_look').removeClass('inactive');
			else
				$ec('#gallery_'+previous_id+'_quick_look').removeClass('inactive');
		}
	});

	$ec('.product-quicklook .gallery_right, .product-quicklook .vgallery_right').unbind('click').on('click', function() {
		var visible_id = 0;
		if ($ec(this).hasClass('vgallery_right')) {
			var visible_id = 0;
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
				}
			});

			$ec('.product-quicklook .variants-gallery ul').addClass('inactive');
			var defined = false;
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (id > visible_id && !defined) {
					$ec(this).removeClass('inactive');
					defined = true;
				}
			});

			if (!defined) {
				$ec('#vgallery_0_quick_look').removeClass('inactive');
			}
		} else {
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
				}
			});

			$ec('.product-quicklook .product-image-gallery ul').addClass('inactive');

			var defined = false;
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (id > visible_id && !defined) {
					$ec(this).removeClass('inactive');
					defined = true;
				}
			});

			if (!defined) {
				$ec('#gallery_0_quick_look').removeClass('inactive');
			}
		}
	});
}

function product_options(o) {
	if (ec_oid == 1) {
		var price = product_price_ql,
			weight = product_weight_ql;
	} else {
		var price = product_price,
			weight = product_weight;
	}

	var variantid = 0;
	if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		$ec(ec_qadd+'.add2cart').addClass('add2cartN');
		var tmp = getVariantId(),
			idx = tmp[1];

		variantid = tmp[0];
			if (variantid > 0 && variants[ec_oid][idx][5].length > 0) {
				var html = '';
				for (var x in variants[ec_oid][idx][5]) {
					if (x == 0 || x == 4 || x == 9)
						html += '<tr>';

					html += '<td>'+variants[ec_oid][idx][5][x]+'</td>';

					if (x == 3 || x == 7)
						html += '</tr>';
				}

				html += '</tr>';
				$ec(ec_qadd+'.product .ec_photo table').html(html);
				switch_photo($ec(ec_qadd+'.product .ec_photo table a:first'));
			} else if ($ec(ec_qadd+'.variants-gallery').hasClass('isvisible')) {
				$ec(ec_qadd+'.product-image-gallery').show();
				$ec(ec_qadd+'.variants-gallery').hide();
				if ($ec(ec_qadd+'.ql-ec_zoom').size() == 0) {
					var next = $ec('#gallery_0');
				} else {
					var next = $ec('#gallery_0_quick_look');
				}
			} else {
				if (ec_oid == 0)
					$ec(ec_qadd+'.product .ec_photo table').html(default_images);
				else
					$ec(ec_qadd+'.product .ec_photo table').html(default_images_ql);
			}

		if (variantid > 0) {
			$ec(ec_qadd+'.add2cart').removeClass('add2cartN');
			if (variants[ec_oid][idx][8])
				$ec(ec_qadd+'.fn.title').html(variants[ec_oid][idx][8]);
			else
				$ec(ec_qadd+'.fn.title').html($ec(ec_qadd+'.fntitle').html());

			$ec(ec_qadd+'.product-sku').html(variants[ec_oid][idx][0]);
			if (variants[ec_oid][idx][2]) {
				$ec(ec_qadd+'.product-weight').html(price_format(variants[ec_oid][idx][2])+' <span class="weight-symbol">'+weight_symbol+'</span>');
				$ec(ec_qadd+'.product-weight').closest('tr').removeClass('hidden');
			}

			$ec(ec_qadd+'.variants-data').show();
			var html = '';
			for (var x in groups[ec_oid]) {
				if (groups[ec_oid][x][1]) {
					if (options[ec_oid][$ec('#po-'+groups[ec_oid][x][0]).val()]) {
						html += '<td nowrap><a href="javascript: void(0);" class="ec_clearOption" id="co-'+groups[ec_oid][x][0]+'">(x)</a> '+options[ec_oid][$ec('#po-'+groups[ec_oid][x][0]).val()]+'</td>';
					}
				}
			}

			html += '<td nowrap><a href="javascript: void(0);" class="ec_clearAll">Clear all</a></td>';
			$ec(ec_qadd+'.variants-data table').html(html);
			$ec('.ec_clearOption').unbind('click').on('click', function() {
				var groupid = $ec(this).attr('id').replace('co-', '');
				$ec('#pot-'+groupid).html('');
				$ec('#pot-'+groupid).hide();
				$ec('#poa-'+groupid).hide();
				$ec('#pog-'+groupid+' img.checked').remove();
				$ec('#po-'+groupid).val('');
				map_variants(o);
				product_options(o);
			});

			$ec('.ec_clearAll').unbind('click').on('click', function() {
				for (var x in groups[ec_oid]) {
					var groupid = groups[ec_oid][x][0];
					$ec('#pot-'+groupid).html('');
					$ec('#pot-'+groupid).hide();
					$ec('#poa-'+groupid).hide();
					$ec('#pog-'+groupid+' img.checked').remove();
					$ec('#po-'+groupid).val('');
				}
				map_variants(o);
				product_options(o);
			});

			price = variants[ec_oid][idx][1];
			var old_price = price;
			if (variants[ec_oid][idx][7].length > 0) {
				var item_amount = $ec(ec_qadd+'[name=amount]').val();
				var hv = [];
				var i = 0;
				for (var x in variants[ec_oid][idx][7]) {
					if (variants[ec_oid][idx][7][x][0] <= item_amount) {
						price = variants[ec_oid][idx][7][x][1];
					}

					hv[i] = variants[ec_oid][idx][7][x];
					i++;
				}

				var html = "<tr><th class='left'>Quantity</th><th>Price Per Unit</th></tr>";
				html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">'+currency_symbol+price_format(old_price)+'</th></tr>';
				for (var x in hv) {
					if (x == hv.length-1) {
						html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
					} else {
						html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
					}
				}

				$ec(ec_qadd+'.price-breaks div table').html(html);
				$ec(ec_qadd+'table.product-qty').addClass('with-p-b');
				$ec(ec_qadd+'.price-breaks').show();
				$('table.product').addClass('ec_with_ws');
				$ec(ec_qadd+'.price-breaks div').show();
				$ec(ec_qadd+'.price-breaks div').height($ec(ec_qadd+'.price-breaks div table').height());
				$ec(ec_qadd+'.price-breaks div').hide();
			} else {
				$('table.product').removeClass('ec_with_ws');
				$ec(ec_qadd+'.price-breaks').hide();
				$ec(ec_qadd+'table.product-qty').removeClass('with-p-b');
			}

			var tmp = $ec(ec_qadd+'.quantity-box-container input').attr('class').split(" ");
			var classes = '';
			for (var x in tmp) {
				if (tmp[x].indexOf('validate[') > -1) {
					classes += "min[1],max["+variants[ec_oid][idx][3].toString()+"]] ";
				} else {
					classes += tmp[x]+' ';
				}
			}

			if ($ec(ec_qadd+'.quantity-box-container input').val() > variants[ec_oid][idx][3]) {
				$ec(ec_qadd+'.quantity-box-container input').val(variants[ec_oid][idx][3]);
			}

			$ec(ec_qadd+'.quantity-box-container input').attr('class', classes);
			if (variants[ec_oid][idx][3].toString() == '0') {
				console.log(idx);
				$ec(ec_qadd+'.add2cart').addClass('add2cartN');
				$ec(ec_qadd+'#quantity').hide();
				$ec(ec_qadd+'.price-breaks').hide();
				$('table.product').removeClass('ec_with_ws');
				$ec(ec_qadd+'#out_of_stock').show();
			} else {
				$ec(ec_qadd+'#out_of_stock').hide();
				$('table.product').addClass('ec_with_ws');
				$ec(ec_qadd+'#quantity').show();
				if ($ec(ec_qadd+'#quantity input').val() < 1)
					$ec(ec_qadd+'#quantity input').val('1');
			}

			$ec(ec_qadd+'.options_container').each(function() {
				if ($ec(this).find('img.checked').size() == 0) {
					var gid = $ec(this).attr('id').replace('pog-', '');
					$ec(ec_qadd+'#pot-'+gid).html(' <b class="optional">(Optional)</b>');
					$ec(ec_qadd+'#pot-'+gid).show();
				}
			});
		} else {
			if ($ec(ec_qadd+'.fntitle').size() > 0)
				$ec(ec_qadd+'.fn.title').html($ec(ec_qadd+'.fntitle').html());

			var cnt = 0,
				cnt2 = 0;

			$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
				if (!$ec(this).hasClass('novar')) {
					cnt2++;
					if ($ec(this).get(0).tagName == 'DIV') {
						if ($ec('#po-'+$ec(this).attr('id').replace('pog-', '')).val())
							cnt++;
					} else if ($ec(this).val())
						cnt++;
				}
			});

			if (cnt == cnt2) {
				$ec('[name="options_ex"]').val(1);
				bc = false;
				ec_alert("This options combination is not available");
			} else {
				$ec('[name="options_ex"]').val(0);
			}

			$ec(ec_qadd+'.variants-data').hide();
			$ec(ec_qadd+'.price-breaks').hide();
			$('table.product').removeClass('ec_with_ws');
			$ec(ec_qadd+'table.product-qty').removeClass('with-p-b');
		}
	} else if (w_prices[ec_oid] && w_prices[ec_oid].length > 0) {
		var item_amount = $ec(ec_qadd+'[name=amount]').val();
		var hv = [];
		var i = 0;
		var old_price = price;
		for (var x in w_prices[ec_oid]) {
			if (w_prices[ec_oid][x][0] <= item_amount) {
				price = w_prices[ec_oid][x][1];
			}

			hv[i] = w_prices[ec_oid][x];
			i++;
		}

		var html = "<tr><th class='left'>Quantity</th><th>Price Per Unit</th></tr>";
		html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">'+currency_symbol+price_format(old_price)+'</th></tr>';
		for (var x in hv) {
			if (x == hv.length-1) {
				html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
			} else {
				html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
			}
		}

		$ec(ec_qadd+'.price-breaks div table').html(html);
		$ec(ec_qadd+'table.product-qty').addClass('with-p-b');
		$ec(ec_qadd+'.price-breaks').show();
		$('table.product').addClass('ec_with_ws');
		$ec(ec_qadd+'.price-breaks div').show();
		$ec(ec_qadd+'.price-breaks div').height($ec(ec_qadd+'.price-breaks div table').height());
		$ec(ec_qadd+'.price-breaks div').hide();
	}

	if (exceptions[ec_oid] && exceptions[ec_oid].length > 0) {
		var ex = exceptions[ec_oid],
			ex_ok = true;

		for (var x in ex) {
			var found = true;
			for (var c in ex[x]) {
				var value = $ec('#po-'+c).val();
				if (!value) {
					ex_ok = true;
					found = false;
					break;
				}

				if (value != ex[x][c]) {
					found = false;
					break;
				}
			}

			if (found) {
				ex_ok = false;
				break;
			}
		}

    	if (!ex_ok) {
			$ec('[name="options_ex"]').val(1);
			bc = false;
			ec_alert("This options combination is not available");
		} else
			$ec('[name="options_ex"]').val(0);
	}

	if ($ec(ec_qadd+'.quantity-box-container input').val() > product_avail[ec_oid]) {
		$ec(ec_qadd+'.quantity-box-container input').val(product_avail[ec_oid]);
	}

	if (!variantid && $ec(ec_qadd+'.product-options').size() > 0) {
		var price_modifier = 0,
			weight_modifier = 0;

		for (var x in groups[ec_oid]) {
			for (var y in groups[ec_oid][x][3]) {
				if ($ec(ec_qadd+'#po-'+x).val() == y) {
					if (groups[ec_oid][x][3][y]) {
						var modifier = groups[ec_oid][x][3][y];
						if (modifier[1] == '%') {
							price_modifier += parseFloat(price) * parseFloat(modifier[0]) / 100;
						} else {
							price_modifier += parseFloat(modifier[0]);
						}

						if (modifier[3] == '%') {
							weight_modifier += parseFloat(weight) * parseFloat(modifier[2]) / 100;
						} else {
							weight_modifier += parseFloat(modifier[2]);
						}
					}
				}
			}
		}

		$ec(ec_qadd+'[name=nongstprice]').val(parseFloat(price)+parseFloat(price_modifier));
		$ec('.price-breaks table th').each(function() {
			if ($ec(this).hasClass('right')) {
				var pr = parseFloat($ec(this).attr('id').replace('whpr-', ''));
				if (pr > 0) {
					if ($ec(this).hasClass('default')) {
						$ec(this).html(''+currency_symbol+price_format(old_price+parseFloat(price_modifier)));
						$ec(this).attr('id', 'whpr-'+price_format(old_price+parseFloat(price_modifier)));
					} else {
						$ec(this).html(''+currency_symbol+price_format(pr+parseFloat(price_modifier)));
						$ec(this).attr('id', 'whpr-'+price_format(pr+parseFloat(price_modifier)));
					}
				}
			}
		});

		$ec(ec_qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)+parseFloat(price_modifier)));
		weight = parseFloat(weight)+parseFloat(weight_modifier);
		$ec(ec_qadd+'.product-weight').html(price_format(weight)+' <span class="weight-symbol">'+weight_symbol+'</span>');
	} else {
		$ec(ec_qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)));
	}

	if (ec_oid == 0) {
		recalculate_gst();
	}
}

function getVariantId(r) {
	var variantid = 0;
	var idx = 0;
	for (var x in variants[ec_oid]) {
		var c = 0;
		for (var y in variants[ec_oid][x][4])
			c++;

		var c2 = $ec(ec_qadd+'.options_container div img.checked').size();
		$ec(ec_qadd+'.product_options').each(function(){
			if ($ec(this).val() > 0 && !$ec(this).hasClass('novar'))
				c2++;
		});

		if (c == c2) {
			variantid = variants[ec_oid][x][6];
			idx = x;
			for (var y in variants[ec_oid][x][4])
				if ($ec(ec_qadd+'#po-'+y).val() != variants[ec_oid][x][4][y]) {
					variantid = false;
					break;
				}

			if (variantid)
				break;
		}
	}

	return [variantid, idx];
}

function map_variants(o, groupid) {
	var ids = [],
		vids = [],
		cnt = 0;

	$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
		if (!$ec(this).hasClass('novar'))
			cnt++;
	});

	if (cnt > 1) {
		var ids = [];
		$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
			if (!$ec(this).hasClass('novar')) {
				var gid = $ec(this).attr('id').replace('pog-', '');
				if ($ec(this).get(0).tagName == 'DIV') {
					ids[gid] = $ec('#po-'+gid).val();
				} else {
					ids[$ec(this).attr('id').replace('po-', '')] = $ec(this).val();
				}
			}
		});

		var vids = [];
		for (var x in variants[ec_oid]) {
			var found = true;
			for (var y in variants[ec_oid][x][4]) {
				if (ids[y] > 0) {
					var found2 = false;
					for (var z in ids) {
						if (z == y && ids[z] == variants[ec_oid][x][4][y]) {
							found2 = true;
							break;
						}
					}

					if (!found2) {
						found = false;
						break;
					}
				}
			}

			if (found) {
				vids[x] = 1;
			}
		}

		var ids = [];
		for (var x in vids) {
			for (var y in variants[ec_oid][x][4]) {
				if (!ids[y]) {
					ids[y] = [];
				}

				ids[y][variants[ec_oid][x][4][y]] = 1;
			}
		}

		var ids2 = [];
		for (var x in ids) {
			for (var y in ids[x]) {
				ids2[y] = 1;
			}
		}

		remove_options(groupid, ids2);
	}

	$ec('.help-option').remove();
	$ec(ec_qadd+'.unavailable').each(function() {
		if (!$ec(this).parent().hasClass('novar')) {
			var html = '<table>',
				id = $ec(this).parent().attr('id'),
				found = false;

			$ec(ec_qadd+'.options_container img.checked').each(function() {
				if (id != $ec(this).parent().parent().attr('id')) {
					html += '<tr><td>'+$ec(this).parent().attr('data-title')+'</td><td class="ec_clear"><a href="javascript: void(0);" class="ec_clear-option" id="co-'+$ec(this).parent().parent().attr('id').replace('pog-', '')+'">Clear</a></td></tr>';
					found = true;
				}
			});

			$ec(ec_qadd+'.product_options').each(function() {
				if (id != $ec(this).attr('id').replace('po-', '')) {
					html += '<tr><td>'+$ec(this).find('option:selected').text()+'</td><td class="ec_clear"><a href="javascript: void(0);" class="ec_clear-option" id="co-'+$ec(this).attr('id').replace('po-', '')+'">Clear</a></td></tr>';
					found = true;
				}
			});
		}

		html += '</table>';
		if (found)
			$ec(this).append("<div class='help-option'>Option Not Available in Combination with"+html+'<img src="'+current_location+'/images/spacer.gif" alt="" /></div>');
		else
			$ec(this).append("<div class='help-option'>Option Not Available<img src='"+current_location+"/images/spacer.gif' alt='' /></div>");
	});

	$ec('.ec_clear-option').unbind('click').on('click', function() {
		$ec(this).parent().parent().parent().parent().parent().parent().find('.help-option').remove();
		var groupid = $ec(this).attr('id').split('-')[1];
		$ec('#pot-'+groupid).html('');
		$ec('#pot-'+groupid).hide();
		$ec('#poa-'+groupid).hide();
		$ec('#pog-'+groupid+' img.checked').remove();
		$ec('#po-'+groupid).val('');
		map_variants(o, groupid);
		product_options(o);
		clear_clicked = true;
	});
}

function remove_options(groupid, ids) {
	$ec(ec_qadd+'.options_container div').each(function() {
		if (!$ec(this).parent().hasClass('novar') && !$ec(this).hasClass('clear') && !$ec(this).hasClass('help-option')) {
			var gid = $ec(this).parent().attr('id').replace('pog-', '');
			if (gid != groupid) {
				var optid = $ec(this).attr('id').replace('poi-', '');
				if (ids[optid] == 1) {
					$ec(this).removeClass('unavailable');
				} else {
					$ec(this).addClass('unavailable');
					if ($ec(this).find('img.checked').size > 0) {
						$ec(this).find('img.checked').remove();
						$ec(ec_qadd+'#pot-'+groupid).html('');
						$ec(ec_qadd+'#pot-'+groupid).hide();
						$ec(ec_qadd+'#poa-'+groupid).hide();
						$ec(ec_qadd+'#po-'+groupid).val('');
					}
				}
			}
		}
	});

	$ec(ec_qadd+'.product-option select').each(function() {
		var gid = $ec(this).attr('id').replace('po-', '');
		if (!$ec(this).hasClass('novar') && gid != groupid) {
			for (var x = 0; x < $ec(this).find('option').length; x++) {
				var opt = $ec(this).find('option:eq('+x+')');
				var optid = opt.val();
				if (!optid || ids[optid] == 1) {
					opt.removeClass('unallowed');
					opt.attr('disabled', false);
				} else {
					opt.addClass('unallowed');
					opt.attr('disabled', true);
				}
			}
		}
	});
}

function recalculate_gst() {
	var price = $ec('[name=nongstprice]').val();
	if (price) {
		if (gst_applied) {
			$ec('.product-to-cart h3').html('' + currency_symbol+price_format(price * 1.1));
			$ec('.price-breaks table th').each(function() {
				if ($ec(this).hasClass('td')) {
					var pr = parseFloat($ec(this).attr('id').replace('whpr-', ''));
					if (pr > 0) {
						$ec(this).html(''+currency_symbol+price_format(pr * 1.1));
					}
				}
			});

		} else {
			$ec('.product-to-cart h3').html('' + currency_symbol+price_format(price));
		}
	}
}

function custom_quantity() {
	var cq_zindexes = parseInt($ec(ec_qadd+'.cquantity').size()) + 5;

	$ec(ec_qadd+'.cquantity').each(
		function() {
			var max = parseInt($ec(this).find('.values').html());
			if (!IsNumeric(max))
				return true;

			if (max == 0) {
				$ec(this).find('.value').html('0');
				$ec(this).parent().find('.related-to-cart').hide();
			} else {
				var current = parseInt($ec(this).find('.value').html());
				if (max > 50)
					max = 50;
				var html = '<ul>';
				for (var i = 1; i <= max; i++) {
					html += '<li'+(i == current?' class="selected"':'')+'>'+i+'</li>';
				}
				html += '</ul>';
				$ec(this).find('.values').html(html);
				$ec(this).zIndex(cq_zindexes);
				cq_zindexes--;
			}
		}
	).unbind('click').on('click',
		function() {
			if ($ec(this).hasClass('sbclicked')) {
				$ec(this).removeClass('sbclicked');
			} else {
				qty_clicked = true;
				var was_visible = false;
	 			if ($ec(this).find('.values').is(':visible')) {
	 				$ec(this).find('.values').hide();
	 				was_visible = true;
		 		}
				$ec('.cquantity .values').hide();
				if (!was_visible && !$ec(this).hasClass('clicked')) {
					destroy_custom_scrolls_bars($ec(this).find('.values'));
					$ec('.cquantity .values').hide();
					$ec(this).find('.values').show();
					custom_scrolls_bars($ec(this).find('.values'));
					$ec(this).find('.jspVerticalBar').on('click', function() {
						qty_clicked = true;
						$ec(this).parent().parent().parent().addClass('sbclicked');
					});
					$ec(this).find('.values li').unbind('click').on('click',
						function() {
							$ec('.values li').removeClass('selected');
							$ec(this).addClass('selected');
							$ec(this).parent().parent().parent().parent().parent().find('.value').html($ec(this).html());
							$ec(this).parent().parent().parent().parent().hide();
							$ec('.cquantity').removeClass('clicked');
							$ec(this).parent().parent().parent().parent().parent().addClass('clicked');
						}
					);
				}
				$ec('.cquantity').removeClass('clicked');
   			}
		}
	);
}

function filter_variants(f,sort) {
	var data = '';
	for (var i = 0; i < document.otfilter.elements.length; i++)
		if (document.otfilter.elements[i].name != '' && document.otfilter.elements[i].value != '')
			data += document.otfilter.elements[i].name+'='+cp_escape(document.otfilter.elements[i].value)+'&';

	if (f == 1) {
		if (data && $ec('.otfilter .submit').hasClass('active'))
			$ec('.otfilter .reset').addClass('active');
		else
			return false;
	}

	$ec.ajax({
		type: 'GET',
		url: '?productid='+$ec('form.product-details', product_base).get(0).elements.namedItem('productid').value+'&'+data+'sort='+sort+'&q=store/main/?/widget-XLite\\Module\\XCDev\\Medshop\\View\\OptionsTableFilter',
		beforeSend: function ( xhr ) {
			if ($ec('.variants-list').width() < 800)
				$ec('.Table-tab .progress-bar').css('left', '241px');
			else
				$ec('.Table-tab .progress-bar').css('left', '500px');
			$ec('.Table-tab .progress-bar').show();
			$ec('.variants-list').addClass('variants-ec_loading');
		}
	}).done(function(data) {
		$ec('.variants-list').hide();
		$ec('.Table-tab .progress-bar').hide();
		$ec('.variants-list').removeClass('variants-ec_loading');
		destroy_custom_scrolls_bars($ec('.variants-list'));
		$ec('.variants-list').html(data);
		$ec('.variants-list').html($ec('.variants-list .ajax-container-loadable').html());
		$ec('.variants-list').show();
		custom_scrolls_bars($ec('.variants-list'));
		variantsClicks();
		custom_quantity();
	});
}

function variantsClicks() {
	$ec('.sku img').unbind('click').on('click', function() {
		$ec('.otfilter .image_popup .img').remove();
		$ec('.otfilter .image_popup').append('<div class="img">'+$ec(this).parent().find('.image').html()+'</div>');
		$ec('.otfilter .image_popup').show();
		image_popup_clicked = true;
	});

	$ec('.otfilter .image_popup .close').unbind('click').on('click', function() {
		$ec('.otfilter .image_popup').hide();
	});

	$ec('.otfilter .image_popup').unbind('click').on('click', function() {
		image_popup_clicked = true;
	});

	$ec('.v2cart, .wp img').unbind('click').on('click', function() {
		if ($ec(this).hasClass('v2cart')) {
			var amount = 1;
			var vid = $ec(this).parent().attr('id').replace('v-', '');
		} else {
			var amount = $ec(this).parent().find('.value').html();
			var vid = $ec(this).parent().parent().attr('id').replace('v-', '');
		}

		var pid = $ec('.product-details [name=productid]').val();
		var data = 'target=cart&action=add&productid='+pid+'&variantid='+vid+'&amount='+amount+'&returnURL='+$ec(ec_qadd+'[name=returnURL]').val();
		var o2 = this;
		$ec.ajax({
			type: 'POST',
			url: '/store/cart',
			data: data,
			beforeSend: function ( xhr ) {
				if ($ec(o2).hasClass('v2cart')) {
					$ec(o2).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="ec_loading" alt="Please, wait." />');
					$ec(o2).hide();
					$ec(o2).parent().find('.wp').addClass('wphidden');
				} else {
					$ec(o2).parent().parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="ec_loading" alt="Please, wait." />');
					$ec(o2).parent().parent().find('.v2cart').hide();
					$ec(o2).parent().addClass('wphidden');
				}
			}
		}).done(function(data) {
			$ec('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');
			$ec('#status-messages').slideDown(50);
			setTimeout(function() {$ec('#status-messages').slideUp(500);$ec('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);
			$ec.ajax({
				type: 'GET',
				url: '?productid='+pid+'&variantid='+vid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',
				data: data
			}).done(function(data) {
				core.trigger('updatecart', eval('({"items":[]})'));
				var qty = -1;
				if (data != 'N') {
					qty = data.split('|')[0];
					$ec(o2).parent().find('.values').html(qty);
				}

				if (qty == 0) {
					if ($ec(o2).hasClass('v2cart')) {
						$ec(o2).parent().parent().addClass('ofs');
						$ec(o2).parent().parent().html('Out Of Stock');
					} else {
						$ec(o2).parent().parent().parent().addClass('ofs');
						$ec(o2).parent().parent().parent().html('Out Of Stock');
					}
				} else {
					custom_quantity();
					if ($ec(o2).hasClass('v2cart')) {
						$ec(o2).parent().find('.ec_loading').remove();
						$ec(o2).parent().find('.wp').removeClass('wphidden');
						$ec(o2).show();
					} else {
						$ec(o2).parent().parent().find('.ec_loading').remove();
						$ec(o2).parent().parent().find('.v2cart').show();
						$ec(o2).parent().removeClass('wphidden');
					}
				}
			});
		});
	});
}

function option_selected() {
	if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		if ($ec(ec_qadd+' input.quantity').val() == 0)
			return false;
		else {
			var tmp = getVariantId();
			var variantid = tmp[0];
			if (!(variantid > 0)) {
				$ec(ec_qadd+'.options-error').show();
				setTimeout('hideOptionsError()', 1000);
				return false;
			}
		}
	} else {
		for (var x in groups[ec_oid]) {
			if (!$ec(ec_qadd+'#po-'+x).get(0)) {
				continue;
			}

			if (!($ec(ec_qadd+'#po-'+x).val() > 0)) {
				$ec(ec_qadd+'.options-error').show();
				setTimeout('hideOptionsError()', 1000);
				return false;
			}
		}
	}

	return true;
}

function validate_gq() {
	if (!document.gqform.name.value) {
		document.gqform.name.focus();
		$ec('[name=gqform] [name=name]').addClass('input-incorrect');
		return false;
	}

	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!document.gqform.email.value || !emailReg.test(document.gqform.email.value)) {
		document.gqform.email.focus();
		$ec('[name=gqform] [name=email]').addClass('input-incorrect');
		return false;
	}

	var data = '&';
	for (var i = 0; i < document.gqform.elements.length; i++) {
		if (document.gqform.elements[i].name != '')
			data += document.gqform.elements[i].name+'='+cp_escape(document.gqform.elements[i].value)+'&';
	}

	$ec.ajax({
		type: 'GET',
		url: '?q=store/main/?'+data+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetQuote',
		beforeSend: function (xhr) {
			$ec('[name=gqform]').html('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');
		}
	}).done(function(data) {
		$ec('[name=gqform]').html('<h2>Thank you. We will get back soon.</h2>');
	});

	return false;
}

function add_to_cart(productid, is_quick) {
//	ec_alert('1');
	aload();
	$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
	setTimeout(function() {
		$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
		setTimeout(function() {
			$ec('.product_popup').remove();
		}, 200);
	}, 200);

	if (!mobile_design)
		$ec('body').append('<div class="embed-cart-area popup no_animation cart_popup hidden"></div>');

	if (!is_quick) {
    is_quick = '';
	}
//alert($ec(ec_qadd+'form[name="product-details"]').serialize());
	$ec.ajax({
		url: current_location+'/cart/add'+'?its_ajax_page=1',
		type: 'POST',
		data: (is_quick == 'Y' ? "productid="+productid+"&amount=1" : $ec(ec_qadd+'form[name="product-details"]').serialize())
	}).done(function(r) {
//		alert(is_quick+'|'+ec_qadd);
		unload();
		if (r == "1") {
			ec_alert("Please, select options");
			return false;
		}

		if (mobile_design) {
			ec_alert("Product has been added to your cart.<br /><br /><a href='/cart'><button>View cart</button></a> &nbsp; <a href='/checkout'><button>Checkout</button></a>", 1);
		}

		var result = r.toString().split(ajax_delimiter);
		$ec('.cart_popup').html('<span class="close close-popup">x</span>'+result['1']);
		$ec('#ec_minicart').html(result['0']);
		$ec('#ec_head_mobile #ec_minicart').html(result['0']);
		unload();
		fade();
		var top = $(window).scrollTop()+100;
//console.log($ec(window).scrollTop() + '|' + $ec(window).height() + '|' + $ec('.cart_popup').height());
		$ec('.cart_popup').css('top', top + 'px');
		$ec('.cart_popup').css('opacity', 0).css('left', ($ec(window).width() / 2 - $ec('.cart_popup').width() / 2 - 20) + 'px');
		$ec('.cart_popup').removeClass('no_animation');
		$ec('.cart_popup').css('opacity', 0).css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
		setTimeout(function() {
			$ec('.cart_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
			setTimeout(function() {
				$ec('.cart_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			}, 200);
		}, 200);

		$ec('.cart_popup').removeClass('hidden');
		$ec('.cart_popup .close, .cart_popup .close_popup').on('click', function() {
			$ec('.fade').click();
			return;
    		var e = $ec('.cart_popup');
	    	e.slideUp();
	    	unfade();
			setTimeout(function(){e.remove()}, 500);
		});

		$ec('.cart_popup').on('click', function() {
			bc = false;
			bb = true;
		});

		cart_clicks();
		ec_ajax_clicks();
	});

	return false;
}

function check_exceptions() {
  for (var x in exceptions) {
    if (!hasOwnProperty(exceptions, x) || isNaN(x))
      continue;

    var found = true;
    for (var c in exceptions[x]) {
      if (!hasOwnProperty(exceptions[x], c))
        continue;

      var value = getPOValue(c);
      if (!value)
        return true;

      if (value != exceptions[x][c]) {
        found = false;
        break;
      }
    }

    if (found)
      return false;
  }

  return true;
}

function switch_photo(a) {
	if (mobile_design) {
		$ec('#ec_zoom-mobile').html('<img src="'+a.attr('href')+'">');
	} else if ($ec('.product_popup').is(':visible')) {
		$ec('.product_popup #ec_zoom').html('<img src="'+a.attr('href')+'">');
		if ($ec(window).width() > 700)
			$ec('.product_popup #ec_zoom').ec_zoom();
	} else {
		$ec('#ec_zoom').html('<img src="'+a.attr('href')+'">');
		if ($ec(window).width() > 700)
			$ec('#ec_zoom').ec_zoom();
	}

	return false;
}

function send_to_friend() {
	if (!$ec('#send_to_friend [name="name"]').val()) {
		func_highlight($ec('#send_to_friend [name="name"]'));

		return false;
	}

	var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!$ec('#send_to_friend [name="email"]').val() || !r.test($ec('#send_to_friend [name="email"]').val())) {
		func_highlight($ec('#send_to_friend [name="email"]'));
		return false;
	}

	if (!$ec('#send_to_friend [name="friend"]').val() || !r.test($ec('#send_to_friend [name="friend"]').val())) {
		func_highlight($ec('#send_to_friend [name="friend"]'));
		return false;
	}

	$ec('#send_to_friend').submit();
}

function add_review() {
	if (!$ec('#tab-5 [name="rating"]').val()) {
		ec_alert('Please, select your rating.');
		return false;
	}

	if (!$ec('#tab-5 [name="name"]').val()) {
		func_highlight($ec('#tab-5 [name="name"]'));
		return false;
	}

	if (!$ec('#tab-5 [name="message"]').val()) {
		func_highlight($ec('#tab-5 [name="message"]'));
		return false;
	}

	aload();
	$ec.ajax({
		url: window.location.href,
		type: 'POST',
		data: $ec('#tab-5 form').serialize()
	}).done(function(r) {
		unload();
		if (r == "1") {
			ec_alert("Please, enter your name and message");
			return false;
		} else if (r == '2') {
			recaptchaOnload();
			ec_alert("Captcha is incorrect");
			return false;
		} else if (r == '3') {
			recaptchaOnload();
			ec_alert("Your review has been sent to moderation");
			$ec('#tab-5 [name="name"]').val('');
			$ec('#tab-5 [name="message"]').val('');
			return false;
		}
	});
}

function add_wishlist(id) {
	$ec.ajax({
		url: current_location+'/wishlist?add='+id+'&its_ajax_page=1'
	}).done(function(r) {
		ec_alert("Product has been added to your Wishlist");
	});
}

function buy_one_click(pid) {
	ec_alert("We will contact you soon<br /><input type='text' placeholder='"+lbl_buy1click+"' /> <a class='main-button'>Send</a>", 1, '', 'buy_one_click');
	$ec('.buy_one_click a.main-button').on('click', function() {
		var val = $ec('.buy_one_click input').val();
		if (!val)
			return false;
		$ec.ajax({
			url: current_location+'/buy1click?productid='+pid+'&phone='+val+'&its_ajax_page=1'
		}).done(function(r) {
			$ec('.buy_one_click').remove();
			if (r == 'N') {
				ec_alert("You can require quick sale not more than once per 10 seconds");
			} else {
				ec_alert("Please, allow us a few minutes to receive your request");
			}
		});

		return false;
	});
}

var recaptcha1, recaptcha2, recaptcha3, recaptcha4;
function recaptchaOnload() {
	if ($ec('#recaptcha_reviews').size()) {
		try {
			grecaptcha.reset(recaptcha1);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha1 = grecaptcha.render(document.getElementById('recaptcha_reviews'), {
        	  'sitekey' : $ec('#recaptcha_reviews').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}

	if ($ec('#recaptcha_s2f').size()) {
		try {
			grecaptcha.reset(recaptcha2);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha2 = grecaptcha.render(document.getElementById('recaptcha_s2f'), {
        	  'sitekey' : $ec('#recaptcha_s2f').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}

	if ($ec('#recaptcha_contact').size()) {
		try {
			grecaptcha.reset(recaptcha3);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha3 = grecaptcha.render(document.getElementById('recaptcha_contact'), {
        	  'sitekey' : $ec('#recaptcha_contact').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}
}var register_form = [];

register_form['firstname'] = "Firstname";

register_form['lastname'] = "Lastname";

register_form['email'] = "E-mail";

register_form['password'] = "Password";



register_form['address'] = "Address";

register_form['city'] = "City";

register_form['zipcode'] = "Zip/Postal code";

register_form['phone'] = "Phone";



(function($) {

"use strict";

  $ec(document).ready(function() {

	if (ec_page == 'checkout') {
		checkout_actions();

		coupon_actions();

		checkout_changes();

		$ec('#place_order *').attr('disabled', true);

	}

  });

})($);(function($) {
"use strict";
  $ec(document).ready(function() {
    ec_states_actions();
  });
})($);

function ec_states_actions() {
//  alert('1');
  let states = ec_states;
//  console.log(states);
	$ec('#country').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['ec_states'],
				html = '<select name="posted_data[state]" id="state">';
			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
//console.log(states[$ec(this).val()]);
			if ($ec('.admin-area').size())
				$ec('#state').closest('td').html('<div class="select-title">State</div>'+html);
			else
				$ec('#state').parent().html(html);

			$ec('#state').unbind('change').change(function() {
				user_state = $ec(this).val();
			});
		} else {
			if ($ec('.admin-area').size())
				$ec('#state').closest('td').html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');
			else
				$ec('#state').parent().html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');

			$ec('#state').unbind('keyup').on('keyup', function() {
				user_state = $ec(this).val();
			});

			if ($ec('.admin-area').size()) {
				try {
					custom_elements();
					reinitialize_mdl();
				} catch (err) {
				}
			}
		}
	});

	$ec('#b_country').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['ec_states'],
				html = '<select name="posted_data[b_state]" id="b_state">';

			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state_b ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			$ec('#b_state').parent().html(html);

			$ec('#b_state').unbind('change').change(function() {
				user_state_b = $ec(this).val();
			});
		} else {
			$ec('#b_state').parent().html('<input type="text" name="posted_data[b_state]" id="b_state" required value="'+user_state+'" /></td>');

			$ec('#b_state').unbind('keyup').on('keyup', function() {
				user_state_b = $ec(this).val();
			});
		}
	});

	$ec('#country_checkout').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['ec_states'],
				html = '<select name="posted_data[state]" id="state_checkout">';

			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			$ec('#state_checkout').parent().html(html);
			$ec('#state_checkout').unbind('change').change(function() {
				user_state = $ec(this).val();
			});
		} else {
			$ec('#state_checkout').parent().html('<input type="text" name="posted_data[state]" id="state_checkout" value="'+user_state+'" /></td>');
			$ec('#state_checkout').unbind('keyup').on('keyup', function() {
				user_state = $ec(this).val();
			});
		}

		try {
			checkout_changes();
		} catch (err) {
		}
	});

	setTimeout(function() {
		$ec('#country_checkout').trigger('change');
		$ec('#country').trigger('change');
		$ec('#b_country').trigger('change');
	}, 100);
}