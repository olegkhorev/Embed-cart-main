/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*//*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.core.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:u.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){var r,i=this;n?(t=r=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element,r=this.widget()),e.each(n,function(n,s){function o(){if(i.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof s=="string"?i[s]:s).apply(i,arguments)}typeof s!="string"&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var u=n.match(/^(\w+)\s*(.*)$/),a=u[1]+i.eventNamespace,f=u[2];f?r.delegate(f,a,o):t.bind(a,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.mouse.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.position.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.draggable.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);/*! jQuery UI - v1.9.1 - 2012-10-25
* http://jqueryui.com
* Includes: jquery.ui.droppable.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){e.widget("ui.droppable",{version:"1.9.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);/*!
 * jQuery UI Tooltip 1.9.1
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function( $ ) {

var increments = 0;

function addDescribedBy( elem, id ) {
	var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
	describedby.push( id );
	elem
		.data( "ui-tooltip-id", id )
		.attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
}

function removeDescribedBy( elem ) {
	var id = elem.data( "ui-tooltip-id" ),
		describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
		index = $.inArray( id, describedby );
	if ( index !== -1 ) {
		describedby.splice( index, 1 );
	}

	elem.removeData( "ui-tooltip-id" );
	describedby = $.trim( describedby.join( " " ) );
	if ( describedby ) {
		elem.attr( "aria-describedby", describedby );
	} else {
		elem.removeAttr( "aria-describedby" );
	}
}

$.widget( "ui.tooltip", {
	version: "1.9.1",
	options: {
		content: function() {
			return $( this ).attr( "title" );
		},
		hide: true,
		// Disabled elements have inconsistent behavior across browsers (#8661)
		items: "[title]:not([disabled])",
		position: {
			my: "left top+15",
			at: "left bottom",
			collision: "flipfit flipfit"
		},
		show: true,
		tooltipClass: null,
		track: false,

		// callbacks
		close: null,
		open: null
	},

	_create: function() {
		this._on({
			mouseover: "open",
			focusin: "open"
		});

		// IDs of generated tooltips, needed for destroy
		this.tooltips = {};
		// IDs of parent tooltips where we removed the title attribute
		this.parents = {};

		if ( this.options.disabled ) {
			this._disable();
		}
	},

	_setOption: function( key, value ) {
		var that = this;

		if ( key === "disabled" ) {
			this[ value ? "_disable" : "_enable" ]();
			this.options[ key ] = value;
			// disable element style changes
			return;
		}

		this._super( key, value );

		if ( key === "content" ) {
			$.each( this.tooltips, function( id, element ) {
				that._updateContent( element );
			});
		}
	},

	_disable: function() {
		var that = this;

		// close open tooltips
		$.each( this.tooltips, function( id, element ) {
			var event = $.Event( "blur" );
			event.target = event.currentTarget = element[0];
			that.close( event, true );
		});

		// remove title attributes to prevent native tooltips
		this.element.find( this.options.items ).andSelf().each(function() {
			var element = $( this );
			if ( element.is( "[title]" ) ) {
				element
					.data( "ui-tooltip-title", element.attr( "title" ) )
					.attr( "title", "" );
			}
		});
	},

	_enable: function() {
		// restore title attributes
		this.element.find( this.options.items ).andSelf().each(function() {
			var element = $( this );
			if ( element.data( "ui-tooltip-title" ) ) {
				element.attr( "title", element.data( "ui-tooltip-title" ) );
			}
		});
	},

	open: function( event ) {
		var that = this,
			target = $( event ? event.target : this.element )
				// we need closest here due to mouseover bubbling,
				// but always pointing at the same event target
				.closest( this.options.items );

		// No element to show a tooltip for
		if ( !target.length ) {
			return;
		}

		// If the tooltip is open and we're tracking then reposition the tooltip.
		// This makes sure that a tracking tooltip doesn't obscure a focused element
		// if the user was hovering when the element gained focused.
		if ( this.options.track && target.data( "ui-tooltip-id" ) ) {
			this._find( target ).position( $.extend({
				of: target
			}, this.options.position ) );
			// Stop tracking (#8622)
			this._off( this.document, "mousemove" );
			return;
		}

		if ( target.attr( "title" ) ) {
			target.data( "ui-tooltip-title", target.attr( "title" ) );
		}

		target.data( "tooltip-open", true );

		// kill parent tooltips, custom or native, for hover
		if ( event && event.type === "mouseover" ) {
			target.parents().each(function() {
				var blurEvent;
				if ( $( this ).data( "tooltip-open" ) ) {
					blurEvent = $.Event( "blur" );
					blurEvent.target = blurEvent.currentTarget = this;
					that.close( blurEvent, true );
				}
				if ( this.title ) {
					$( this ).uniqueId();
					that.parents[ this.id ] = {
						element: this,
						title: this.title
					};
					this.title = "";
				}
			});
		}

		this._updateContent( target, event );
	},

	_updateContent: function( target, event ) {
		var content,
			contentOption = this.options.content,
			that = this;

		if ( typeof contentOption === "string" ) {
			return this._open( event, target, contentOption );
		}

		content = contentOption.call( target[0], function( response ) {
			// ignore async response if tooltip was closed already
			if ( !target.data( "tooltip-open" ) ) {
				return;
			}
			// IE may instantly serve a cached response for ajax requests
			// delay this call to _open so the other call to _open runs first
			that._delay(function() {
				this._open( event, target, response );
			});
		});
		if ( content ) {
			this._open( event, target, content );
		}
	},

	_open: function( event, target, content ) {
		var tooltip, events, delayedShow,
			positionOption = $.extend( {}, this.options.position );

		if ( !content ) {
			return;
		}

		// Content can be updated multiple times. If the tooltip already
		// exists, then just update the content and bail.
		tooltip = this._find( target );
		if ( tooltip.length ) {
			tooltip.find( ".ui-tooltip-content" ).html( content );
			return;
		}

		// if we have a title, clear it to prevent the native tooltip
		// we have to check first to avoid defining a title if none exists
		// (we don't want to cause an element to start matching [title])
		//
		// We use removeAttr only for key events, to allow IE to export the correct
		// accessible attributes. For mouse events, set to empty string to avoid
		// native tooltip showing up (happens only when removing inside mouseover).
		if ( target.is( "[title]" ) ) {
			if ( event && event.type === "mouseover" ) {
				target.attr( "title", "" );
			} else {
				target.removeAttr( "title" );
			}
		}

		tooltip = this._tooltip( target );
		addDescribedBy( target, tooltip.attr( "id" ) );
		tooltip.find( ".ui-tooltip-content" ).html( content );

		function position( event ) {
			positionOption.of = event;
			if ( tooltip.is( ":hidden" ) ) {
				return;
			}
			tooltip.position( positionOption );
		}
		if ( this.options.track && event && /^mouse/.test( event.originalEvent.type ) ) {
			this._on( this.document, {
				mousemove: position
			});
			// trigger once to override element-relative positioning
			position( event );
		} else {
			tooltip.position( $.extend({
				of: target
			}, this.options.position ) );
		}

		tooltip.hide();

		this._show( tooltip, this.options.show );
		// Handle tracking tooltips that are shown with a delay (#8644). As soon
		// as the tooltip is visible, position the tooltip using the most recent
		// event.
		if ( this.options.show && this.options.show.delay ) {
			delayedShow = setInterval(function() {
				if ( tooltip.is( ":visible" ) ) {
					position( positionOption.of );
					clearInterval( delayedShow );
				}
			}, $.fx.interval );
		}

		this._trigger( "open", event, { tooltip: tooltip } );

		events = {
			keyup: function( event ) {
				if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
					var fakeEvent = $.Event(event);
					fakeEvent.currentTarget = target[0];
					this.close( fakeEvent, true );
				}
			},
			remove: function() {
				this._removeTooltip( tooltip );
			}
		};
		if ( !event || event.type === "mouseover" ) {
			events.mouseleave = "close";
		}
		if ( !event || event.type === "focusin" ) {
			events.focusout = "close";
		}
		this._on( target, events );
	},

	close: function( event ) {
		var that = this,
			target = $( event ? event.currentTarget : this.element ),
			tooltip = this._find( target );

		// disabling closes the tooltip, so we need to track when we're closing
		// to avoid an infinite loop in case the tooltip becomes disabled on close
		if ( this.closing ) {
			return;
		}

		// only set title if we had one before (see comment in _open())
		if ( target.data( "ui-tooltip-title" ) ) {
			target.attr( "title", target.data( "ui-tooltip-title" ) );
		}

		removeDescribedBy( target );

		tooltip.stop( true );
		this._hide( tooltip, this.options.hide, function() {
			that._removeTooltip( $( this ) );
		});

		target.removeData( "tooltip-open" );
		this._off( target, "mouseleave focusout keyup" );
		// Remove 'remove' binding only on delegated targets
		if ( target[0] !== this.element[0] ) {
			this._off( target, "remove" );
		}
		this._off( this.document, "mousemove" );

		if ( event && event.type === "mouseleave" ) {
			$.each( this.parents, function( id, parent ) {
				parent.element.title = parent.title;
				delete that.parents[ id ];
			});
		}

		this.closing = true;
		this._trigger( "close", event, { tooltip: tooltip } );
		this.closing = false;
	},

	_tooltip: function( element ) {
		var id = "ui-tooltip-" + increments++,
			tooltip = $( "<div>" )
				.attr({
					id: id,
					role: "tooltip"
				})
				.addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
					( this.options.tooltipClass || "" ) );
		$( "<div>" )
			.addClass( "ui-tooltip-content" )
			.appendTo( tooltip );
		tooltip.appendTo( this.document[0].body );
		if ( $.fn.bgiframe ) {
			tooltip.bgiframe();
		}
		this.tooltips[ id ] = element;
		return tooltip;
	},

	_find: function( target ) {
		var id = target.data( "ui-tooltip-id" );
		return id ? $( "#" + id ) : $();
	},

	_removeTooltip: function( tooltip ) {
		tooltip.remove();
		delete this.tooltips[ tooltip.attr( "id" ) ];
	},

	_destroy: function() {
		var that = this;

		// close open tooltips
		$.each( this.tooltips, function( id, element ) {
			// Delegate to close method to handle common cleanup
			var event = $.Event( "blur" );
			event.target = event.currentTarget = element[0];
			that.close( event, true );

			// Remove immediately; destroying an open tooltip doesn't use the
			// hide animation
			$( "#" + id ).remove();

			// Restore the title
			if ( element.data( "ui-tooltip-title" ) ) {
				element.attr( "title", element.data( "ui-tooltip-title" ) );
				element.removeData( "ui-tooltip-title" );
			}
		});
	}
});

}( jQuery ) );
var $window = $(window),
	$animation_elements = $('.page-container-2, .page-container-news, .page-container-blog'),
	are_you_sure = "Êtes-vous sûr?",
	mobile_screen = 700,
	instant_search_ajax,
	yes = "Oui",
	no = "Pas de",
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
	$ = jQuery,
	pushed = false,
	original_content, original_title, original_bread_crumbs,
	body_loading_t,
	body_id,
	pushed_history_ok = false,
	mobile_design = false,
	dontloadfilter = false;

if (typeof window.janrain !== 'object') window.janrain = {};
if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

$(window).scroll(function() {
	on_scroll_header();
	scrolltop();
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		removePopups();
	}
});

//$('img').lazy();
$(document).ready(function() {
	body_id = $('body').attr('id');
	on_scroll_header();
	mobile_design = $('body').data('mobile');
/*
	$('#menu li ul').mouseleave(function() {
		$(this).closest('li').find('.submenu-fade').hide();
	});

	$('#menu li ul').mouseover(function() {
		$(this).closest('li').find('.submenu-fade').show();
	});

	function handler(ev) {
		var target = $(ev.target);
		var elId = target.attr('id');
		if (target.is("li")) {
			target.find('ul').trigger('mouseover');
//		   alert(target.html());
		}
	}

	$('#menu li ul').mouseleave(handler);
*/
//	body_loading(0);
	$('#subsform').submit(function() {
		var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if ($('#sub-email').val() && r.test($('#sub-email').val())) {
			$.ajax({
				url:'/subscribe?email='+$('#sub-email').val()
			}).done(function(r) {
				alert(r);
				$('.alert_message').css('top', '150px');
				unfade();
			});
		} else {
			func_highlight($('#subscribe'));
		}

		return false;
	});

	$(document).mousemove(function(e) {
		cursor = [e.pageX, e.pageY];
	});

	$('.alerts').click(function() {
		bc = false;
	});

	$(document).click(function() {
		if (bc != false) {
			$('.popup, .alert_message, .alerts').not('.login_alert').remove();
			$('.login_alert').hide();
			unfade();
		}

		bc = true;
	});

	$('.search input').focus(function() {
		if ($(this).val() == 'Search')
			$(this).val('');
	});

    $(document).tooltip();

//alert(page);
	original_content = $('.ajax_container').html();
/*
	if ($('.page-container-2').size()) {
		var html = '<div class="page-container page-container-2">'+$('.page-container-2').html()+'</div>',
			home_tabs = '<div id="home-tabs">'+$('#home-tabs').html()+'</div>';

		original_content += home_tabs + html;
	}
*/
	original_title = $('title').html();
	original_page = page;
	original_bread_crumbs = $('#bread_crumbs_container').html();

	if (page == 'home' || page == 'category' || (page == 'brands' && pageid))
		is_ajax_page = true;

	if (is_ajax_page)
		ajax_clicks();

	$('.currency_select a').click(function() {
		aload();
		$.ajax({
			url: '/set_currency/'+$(this).data('id')
		}).done(function() {
			location.reload();
		});

		return false;
	});

	$('.language_select a').click(function() {
		aload();
		$.ajax({
			url: '/set_language/'+$(this).data('id')
		}).done(function() {
			location.reload();
		});

		return false;
	});
                              1
	$('.currency_select select').change(function() {
		aload();
		$.ajax({
			url: '/set_currency/'+$(this).val()
		}).done(function() {
			location.reload();
		});
	});

	$('.language_select select').change(function() {
		aload();
		$.ajax({
			url: '/set_language/'+$(this).val()
		}).done(function() {
			location.reload();
		});
	});

	cart_clicks();
//	$('.checkout-link').click();
	original_pageid = pageid;
	instant_search();
	responsive_init();
	scrolltop();
});

function ajax_clicks() {
	$animation_elements = $('.page-container-2, .page-container-news, .page-container-blog')
	$window.trigger('scroll');
	mobile_menu_clicked = true;
	mobile_menu_open();

	try {
		ga('set', 'page', window.location.pathname);
		ga('send', 'pageview');
	} catch (err) {
	}

	$('#searchform').unbind('submit').submit(function() {
		var substring = $(this).find('input[type="text"]').val();
		if (!substring)
			return false;

		if (mobile_design) {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		}

		var h = '/search?q='+substring;
		if (!pushed) {
//			window.history.pushState({"html": $('#center').html(),"pageTitle": $('title').html()},"", window.location);
			pushed = true;
		}

//		$('.ajax_container').append('<div id="content-loading"><img src="/images/content-loading.gif" alt="" /></div>');
		$('.ajax_container').append('<div id="content-loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$('#content-loading').width($('.ajax_container').width()+1);
		$('#content-loading').height($('.ajax_container').height()-100);
//		return false;
		$.ajax({
			dataType: 'json',
			url: h,
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$('body').attr('id', 'body-search');
//				$('.page-container-2, #home-tabs').remove();
				$('.ajax_container').html(r[0]);
				$('#bread_crumbs_container').html(r[2]);
				ajax_clicks();
//				window.history.replaceState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);
				window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);
				document.title = r[1];
				proceed_clicks(r[3]);
				tabs_clicks();
			}
		});

		return false;
	});

	$('#menu a, a.ajax_link, .ajax_mobile_link, .logo-link, .bread_crumbs a, #subcategories a, .brands a, .test-links a, .foot a').unbind('click').click(function(e) {
		if ($(this).hasClass('no-ajax'))
			return true;

//        if ($(this).closest('.menu-container')
		if (mobile_design) {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			mobile_menu_clicked = false;
			$('.mobile-left_menu').animate({left: -500}, 500);
//console.log('Mobile click');
    	} else {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
    	}

		var h = $(this).attr('href');
		if (!pushed) {
//			window.history.pushState({"html": $('#center').html(),"pageTitle": $('title').html()},"", window.location);
			pushed = true;
		}

//		$('.ajax_container').append('<div id="content-loading"><img src="/images/content-loading.gif" alt="" /></div>');
		$('.ajax_container').append('<div id="content-loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$('#content-loading').width($('.ajax_container').width()+1);
		$('#content-loading').height($('.ajax_container').height()-100);
//		body_loading(0);
//		return false;
//		$('.loading-header').show();
		$.ajax({
			dataType: 'json',
			url: create_ajax_link(h),
			error: function() {
//				body_loading(1, 1);
				self.location = h;
			},
			success: function(r) {
//				$('.loading-header').hide();
				$('body').attr('id', 'body-'+r[3]);
//				body_loading(1, 1);
//				$('.page-container-2, #home-tabs').remove();
				$('.ajax_container').html(r[0]);
//				regen_homepage();

				$('#bread_crumbs_container').html(r[2]);
				ajax_clicks();
//				console.log(h);
//				if (!pushed_history_ok) {
//					window.history.replaceState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);
				page = r[3];
					window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);
//					history.go(0);
/*					pushed_history_ok = true;
					setTimeout(function() {
						pushed_history_ok = false;
					}, 100);
				}
*/
				document.title = r[1];
//				console.log(h);
//				window.history.replaceState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", h);
				pageid = r[5];
//				alert(r[5]);
				recalc_menus(r[3], r[4]);
				proceed_clicks(r[3]);
				tabs_clicks();
			}
		});

		return false;
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
}

//window.history.pushState({},"", null);

//var gohb = false;
window.onpopstate = function(e) {
	if (current_area == 'A') {
		self.location = window.location.href;
		return false;
	}

	if (is_ajax_page) {
		$('.page-container-2, #home-tabs').remove();
//console.log(e.state.page+'|'+location.href);
		if (e.state) {
//			self.location = location.href;
/*			if (gohb) {
				gohb = false;
			} else {
				history.go(+1);
				gohb = true;
			}
*/
//alert(e.state.html);
			$('.ajax_container').html(e.state.html);
			$('body').attr('id', 'body-'+e.state.page);
			document.title = e.state.pageTitle;
			$('#bread_crumbs_container').html(e.state.bread_crumbs);
//			regen_homepage();
//alert(e.state.parentid+' || '+e.state.page);
			if (e.state.parentid || (e.state.page != 'category' && e.state.page != 'search'))
				recalc_menus(e.state.page, e.state.parentid);

			var this_page = e.state.page;
			if (e.state.dontrealodfilter)
				dontloadfilter = true;

			pageid = e.state.pageid;
		} else {
			$('.ajax_container').html(original_content);
			document.title = original_title;
			$('#bread_crumbs_container').html(original_bread_crumbs);
//			regen_homepage();
			recalc_menus(page, parentid);
			var this_page = original_page;
			pageid = original_pageid;
			$('body').attr('id', body_id);
		}

		ajax_clicks();
		proceed_clicks(this_page);
		tabs_clicks();
	}
};

function proceed_clicks(whats_page) {
	$('.instant-search').hide();
//		alert(pageid);
	if (whats_page == 'category' || whats_page == 'search' || (whats_page == 'brands' && pageid)) {
		$('body').addClass('withfilter');
		if (dontloadfilter)
			dontloadfilter = false;
		else
			load_filter();
	} else {
		$('body').removeClass('withfilter');
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

$(window).resize(function() {
	if ($('.fade').size() > 0)
		fade();
});

function aload() {
	$('.loading').show();
}

function unload() {
	$('.loading').hide();
}

function alert(message, nook, h, classes, noshake, alert2, nofade) {
	clearTimeout(at);
	var id = alerts;
	if (alert2)
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><div class="background"></div><div class="alert_content"><span class="close_alert"><img src="/images/del.png"></span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	else {
		if (!nofade)
			fade();

		bc = false;
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><span class="close_alert"><img src="/images/del.png"></span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	}

	if (noshake == 2) {
		$('#a'+id).hide();
		$('#a'+id).show();
	}

	$('#a'+id+' .close_alert').click(function() {
		bc = false;
		if (alert2)
	    	var e = $(this).parent().parent();
		else
	    	var e = $(this).parent();

		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$('.popup').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

//    	e.remove();
//    	unfade();
	});

	$('#a'+id+' .close-alert button').click(function() {
		bc = false;
		bb = true;
    	var e = $('#a'+id);
		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$('.popup').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$('.alert_message').click(function() {
		bc = false;
		bb = true;
	});

	if (h)
		at = setTimeout(function(){$('#a'+id).fadeOut();unfade();}, 5000);

	$('#a'+id).focus();
	$('#a'+id).keyup(function(e) {
		if (e.which == 27) {
			$('#a'+id).hide();
    		if (!$('.popup').size())
				unfade();
		}
	});

	alerts += 1;

	return id;
}

function confirm(text, o, goto) {
	if (!text)
		text = are_you_sure;

	$('.confirm').remove();
	bc = false;
	alert(text+'<br /><br /><button class="yes">'+yes+'</button> <button onclick="javascript: $(\'.confirm\').remove(); unfade();" class="no">'+no+'</button>', 1, '', 'confirm', 2);
	$('.confirm').focus();
	$('.confirm .yes').click(function() {
		bc = false;
		confirmed = true;
		if (goto)
			self.location = goto;
		else
			o.trigger('click');

		unfade();
		$('.confirm').remove();
		confirmed = false;
	});

	$('.confirm').keydown(function(e) {
		if (e.which == 13)
			$('.confirm .yes').trigger('click');
		else if (e.which == 27)
			$('.confirm .no').trigger('click');
	});
}

function fade() {
	if ($('.fade').size() == 0) {
		$('html').prepend('<div class="fade"></div>');
		$('.fade').height($(document).height());
		$('.fade').show();
	} else
		$('.fade').height($(document).height());

	$('.fade').unbind('click').click(function() {
		bc = false;
		removePopups();
return;
		bc = true;
	});
}


function removePopups(no_unfade) {
	if (current_area == 'C')
		setTimeout(function() {
			oid = 0;
			product_clicks();
		}, 500);

	if (no_unfade) {
		$('.popup, .alert, .alert_message:not(.not_remove)').remove();
//		$('.popup, .alert, .alert_message:not(.not_remove)').fadeOut(200, function() {$(this).remove();});
		return;
	}

	$('.popup, .alert, .alert_message').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
	setTimeout(function() {
		$('.popup, .alert, .alert_message').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    	unfade();

		setTimeout(function() {
			$('.popup, .alert, .alert_message:not(.not_remove)').remove();
		}, 200);
	}, 200);
}

function unfade() {
	clearTimeout(at);
	$('.prev').remove();
	$('.fade').remove();
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
	$('.cart-link').unbind('click').click(function() {
		if (mobile_screen > $(window).width())
			return true;

//		removePopups(1);

		$('.cart_popup').remove();
		if (!$('.checkout_popup').size())
			aload();

		$('.checkout_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, -70)');
		setTimeout(function() {
			$('.checkout_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			setTimeout(function() {
				$('.checkout_popup').remove();
			}, 200);
		}, 200);

		$('body').append('<div class="load hidden"><img src="'+current_location+'/images/close.png" class="close"/></div>');
		$.ajax({
			dataType: 'json',
			url: '/cart',
			error: function() {
				alert('We cannot process this request. Please, contact site administrator.');
//				self.location = '/cart';
			},
			success: function(r) {
				$('.load').html('<img src="/images/close.png" class="close"/>'+r[0]);
				unload();
				fade();
				$('.load').addClass('popup cart_popup').removeClass('load');
				var top = ($(window).scrollTop() + $(window).height() / 2 - $('.cart_popup').height() / 2) - 50;
				if (top < $(window).scrollTop())
					top = $(window).scrollTop() + 30;

				$('.cart_popup').css('top', top + 'px');
				$('.cart_popup').css('left', ($(window).width() / 2 - $('.cart_popup').width() / 2 - 10) + 'px');
				$('.cart_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$('.cart_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$('.cart_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$('.cart_popup').show();
				$(window).resize(function() {
					var top = ($(window).scrollTop() + $(window).height() / 2 - $('.cart_popup').height() / 2) - 50;
					if (top < $(window).scrollTop())
						top = $(window).scrollTop() + 30;

					$('.cart_popup').css('top', top + 'px');
					$('.cart_popup').css('left', ($(window).width() / 2 - $('.cart_popup').width() / 2 - 10) + 'px');
				});

				$('.cart_popup .close, .cart_popup .close_popup').click(function() {
					removePopups();
				});

				$('.cart_popup').click(function() {
					bc = false;
					bb = true;
				});

				cart_actions();
				coupon_actions();
				cart_clicks();
			}
		});

		return false;
	});

	$('.wishlist-link').unbind('click').click(function() {
//		removePopups(1);
		$('.wl_popup').remove();
		$('body').append('<div class="load hidden"><img src="'+current_location+'/images/close.png" class="close"/></div>');
		$.ajax({
			dataType: 'json',
			url: '/wishlist',
			error: function() {
				alert('We cannot process this request. Please, contact site administrator.');
//				self.location = '/cart';
			},
			success: function(r) {
				$('.load').html('<img src="/images/close.png" class="close"/>'+r[0]);
				unload();
				fade();
				$('.load').addClass('popup wl_popup').removeClass('load');
				var top = ($(window).scrollTop() + $(window).height() / 2 - $('.wl_popup').height() / 2) - 50;
				if (top < $(window).scrollTop())
					top = $(window).scrollTop() + 30;

				$('.wl_popup').css('top', top + 'px');
				$('.wl_popup').css('left', ($(window).width() / 2 - $('.wl_popup').width() / 2 - 10) + 'px');
				$('.wl_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$('.wl_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$('.wl_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$('.wl_popup').show();
				$(window).resize(function() {
					var top = ($(window).scrollTop() + $(window).height() / 2 - $('.cart_popup').height() / 2) - 50;
					if (top < $(window).scrollTop())
						top = $(window).scrollTop() + 30;

					$('.wl_popup').css('top', top + 'px');
					$('.wl_popup').css('left', ($(window).width() / 2 - $('.cart_popup').width() / 2 - 10) + 'px');
				});

				$('.wl_popup .close, .wl_popup .close_popup').click(function() {
					removePopups();
				});

				$('.wl_popup').click(function() {
					bc = false;
					bb = true;
				});

				wl_actions();
			}
		});

		return false;
	});

	$('.checkout-link').unbind('click').click(function() {
		if (mobile_screen > $(window).width())
			return true;

//		removePopups(1);
		if ($('.checkout_popup').size()) {
			$('.checkout_popup').remove();
			aload();
		} else if (!$('.cart_popup').size())
			aload();

		$('.cart_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, -70)');
		setTimeout(function() {
			$('.cart_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			setTimeout(function() {
				$('.cart_popup').remove();
			}, 200);
		}, 200);

		$('body').append('<div class="load hidden"><img src="'+current_location+'/images/close.png" class="close"/></div>');
		$.ajax({
			dataType: 'json',
			url: '/checkout',
			error: function() {
				alert('We cannot process this request. Please, contact site administrator.');
//				self.location = '/checkout';
			},
			success: function(r) {
				$('.load').html('<img src="/images/close.png" class="close"/>'+r[0]);
				unload();
				fade();
				$('.load').addClass('popup checkout_popup').removeClass('load');
				var top = ($(window).scrollTop() + $(window).height() / 2 - $('.checkout_popup').height() / 2) - 50;
				if (top < $(window).scrollTop())
					top = $(window).scrollTop() + 30;

				$('.checkout_popup').css('top', top + 'px');
				$('.checkout_popup').css('left', ($(window).width() / 2 - $('.checkout_popup').width() / 2 - 10) + 'px');
				$('.checkout_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$('.checkout_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$('.checkout_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$('.checkout_popup').show();
				$(window).resize(function() {
					var top = ($(window).scrollTop() + $(window).height() / 2 - $('.checkout_popup').height() / 2) - 50;
					if (top < $(window).scrollTop())
						top = $(window).scrollTop() + 30;

					$('.checkout_popup').css('top', top + 'px');
					$('.checkout_popup').css('left', ($(window).width() / 2 - $('.checkout_popup').width() / 2 - 10) + 'px');
				});

				$('.checkout_popup .close, .checkout_popup .close_popup').click(function() {
					removePopups();
				});

				$('.checkout_popup').click(function() {
					bc = false;
					bb = true;
				});

				checkout_actions();
				checkout_changes();
				$('#place_order *').attr('disabled', true);
				coupon_actions();
				cart_clicks();
			}
		});

		return false;
	});
}

function cart_actions() {
	$('.cart-quantity').keyup(function() {
		var max = $(this).data('max');
		if ($(this).val() > max)
			$(this).val(max);
	});

	$('.clear-cart').click(function() {
		$.ajax({url: 'cart/clear'}).done(function(r) {
			$('#minicart').html(r);
			$('#head_mobile #minicart').html(r);
			cart_clicks();
		});
		removePopups();
		return false;
	});

	$('.update-cart').click(function(e) {
	    $.ajax({
           type: "POST",
           url: '/cart',
           data: $("#cartform").serialize(), // serializes the form's elements.
           success: function(data) {
				$('.cart-link').click();
           }
         });

	    e.preventDefault();
		return false;
	});

	$('.remove-link').click(function() {
		var url = $(this).attr('href');
		$.ajax({url: url}).done(function(r) {
			$('#minicart').html(r);
			$('#head_mobile #minicart').html(r);
			if ($('#minicart .cart-link').size()) {
				cart_clicks();
				$('.cart-link').click();
			} else
				removePopups();
		});

		return false;
	});
}

function wl_actions() {
	$('.clear-wl').click(function() {
		$.ajax({url: 'wishlist/clear'}).done(function(r) {});
		removePopups();
		return false;
	});

	$('.remove-wl-link').click(function() {
		var url = $(this).attr('href');
		$.ajax({url: url}).done(function(r) {
			$('.wishlist-link').click();
		});

		return false;
	});
}

function recalculate_shipping(shippingid) {
	$('#place_order').animate({opacity: .6 }, 50);
	$('#place_order *').attr('disabled', true);
    $.ajax({
		type: "POST",
		url: '/checkout?shippingid='+shippingid,
		success: function(data) {
			$('#place_order').animate({opacity: 1 }, 200);
			$('#place_order *').attr('disabled', false);
			$('#place_order').html(data);
			checkout_actions();
		}
	});
}

function checkout_actions() {
	configure_stripe();
	states_actions();
	$('#checkout_user_form').unbind('submit').submit(function(e) {
	    e.preventDefault();
		var allgood = true;
		$('#checkout_user_form input').each(function() {
			var o = $(this);
			if (!o.val()) {
				func_highlight(o);
				allgood = false;
			}
		});

		if (!allgood)
			return false;

	    $.ajax({
           type: "POST",
           url: '/checkout/user_form',
           data: $('#checkout_user_form').serialize(), // serializes the form's elements.
           success: function(data) {
				if (data == 'Email') {
	                alert('Enterd email already registered for another user');
				} else {
					$('#place_order').animate({opacity: 1 }, 200);
					$('#place_order *').attr('disabled', false);
					$('#place_order').html(data);
					checkout_actions();
				}
           }
         });

		return false;
	});

	$('#place_order button').unbind('click').click(function(e) {
		if ($('#paymentid').val() == 7 && !$('#stripe_token').val()) {
		    handler.open({
	    	  name: 'Pay for your order',
		      description: 'Test credit card - 4111 1111 1111 1111.',
	   		  currency: payment_currency.toLowerCase(),
    		  amount: parseFloat($('#order_total').val()) * 100
    		});

	    	e.preventDefault();
		} else {
		    $.ajax({
    	       type: "POST",
        	   url: '/checkout/place_order',
	           data: $('#checkoutform').serialize(), // serializes the form's elements.
    	       success: function(data)
        	   {
//alert(data);
//return;
					if (data == 'Error') {
	            	    alert('Please, contact site administrator');
					} else if (data == 'StripeError') {
						$('#stripe_token').val('');
						$('.checkout_popup').css('opacity', 1);
	            	    alert('There was error processing your credit card');
					} else if (strstr(data, 'paypal.com')) {
						$('body').append(data);
//						return false;
						document.paypalform.submit();
						alert('Veuillez patienter, nous connectez-vous à PayPal');
					} else {
						self.location = '/invoice/'+data+'/success';
					}
	           }
	         });
		}
	});

	$('.apply_gc').click(function() {
		bc = false;
		var id = alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$('.coupon_screen').html('<br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Entrez votre code de Carte Cadeau ici</label></div><div class="coupon-error"></div><button>Appliquer</button><br/><br/>');
		$('.coupon_screen input').keyup(function() {
			$('.coupon-error').hide();
		});

		$('.coupon_screen button').click(function() {
			if (!$('.coupon_screen input').val()) {
				func_highlight($('.coupon_screen input'));
				return false;
			}

			$.ajax({url: '/checkout?gc='+$('.coupon_screen input').val()}).done(function(r) {
				if (r == 'S') {
					$('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$('.coupon-error').html(r);
					$('.coupon-error').show();
				}
			});
		});
	});

	$('.apply_coupon').click(function() {
		bc = false;
		var id = alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$('.coupon_screen').html('<br/>10% coupon: test<br/><br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Entrez le code de votre coupon ici</label></div><div class="coupon-error"></div><button>Appliquer</button><br/><br/>');
    /*
    <input type="text" size="30" placeholder="Enter your coupon code here" /><br />
    */
		$('.coupon_screen input').keyup(function() {
			$('.coupon-error').hide();
		});

		$('.coupon_screen button').click(function() {
			if (!$('.coupon_screen input').val()) {
				func_highlight($('.coupon_screen input'));
				return false;
			}

			$.ajax({url: '/checkout?coupon='+$('.coupon_screen input').val()}).done(function(r) {
				if (r == 'S') {
					$('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$('.coupon-error').html(r);
					$('.coupon-error').show();
				}
			});
		});
	});
/*
	setTimeout(function() {
		$('#checkout_user_form').submit();
	}, 200);
*/

	$('#local_pickup').change(function() {
//		var ship_select = $('[name="shippingid"]');
		if ($(this).is(':checked')) {
			recalculate_shipping('L');
//			ship_select.fadeOut();
//			$('.choose-warehouse').fadeIn();
		} else {
			recalculate_shipping($('[name="shippingid"]').val());
//			ship_select.fadeIn();
//			$('.choose-warehouse').fadeOut();
		}

	});
}

var handler,
	stripe_loaded = false;
//if (current_area == 'C') {
function configure_stripe() {
	if (stripe_loaded)
		return;

  	stripe_loaded = true;
$.ajax({
  url: "https://checkout.stripe.com/checkout.js",
  dataType: "script",
  success: function() {
	  handler = StripeCheckout.configure({
	    key: stripe_key,
    	locale: 'auto',
	    token: function(token) {
//    	alert('/pricing?mode=order&plan='+price_id+'&token='+token.id+'&email='+token.email+'&charged_amount='+amount+'&is_annual='+is_annual+'&is_recurring='+is_recurring);
			$('#stripe_token').val(token.id);
			$('#place_order button').click();
			$('.checkout_popup').css('opacity', 0.6);
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    	}
	  });
//console.log(stripe_key);
  // Close Checkout on page navigation
	  $(window).on('popstate', function() {
    	handler.close();
	  });
  }
});
}
//}

function checkout_changes() {
	$('#checkout_user_form input').keyup(function() {
		$('#place_order *').attr('disabled', true);
		$('#place_order').css('opacity', .3);
	});

	$('#checkout_user_form select').change(function() {
		$('#place_order *').attr('disabled', true);
		$('#place_order').css('opacity', .3);
	});
}

function coupon_actions() {
	$('.remove_coupon').click(function() {
		$.ajax({url:'/checkout/remove_coupon'}).done(function() {
			refresh_coupon();
		});
	});

	$('.remove_gc').click(function() {
		$.ajax({url:'/checkout/remove_gc'}).done(function() {
			refresh_coupon();
		});
	});
}

function refresh_coupon() {
	if ($('.checkout_popup').is(':visible'))
		$('.checkout-link').click();
	else if ($('.cart_popup').is(':visible'))
		$('.cart-link').click();
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
	$('#iframe-invoice').remove();
	$("<iframe id='iframe-invoice' name='invoice' style='height: 0px; width: 0px;' src='" + el.attr('href') + "' />").appendTo('body');
	$('#iframe-invoice').load(function() {
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

function recalc_menus(pg, pi) {
	$('.menu-container li').removeClass('active');
	if (pi) {
		$('li#menu-'+pi).addClass('active');
	} else {
		$('li#menu-'+pg).addClass('active');
	}
}
/*
function body_loading(width, stop) {
	if (width == 0) {
		clearTimeout(body_loading_t);
		$('.body-loading div').css('width', '0%');
	} else if (stop == 1) {
//		clearTimeout(body_loading_t);
//		$('.body-loading div').css('width', '100%');
//		$('.body-loading').fadeOut(200);
//		return;
	}

	console.log(width+'|2');
	$('.body-loading').fadeIn(200);
	width += 3;
	$('.body-loading div').css('width', width+'%');
	if (width < 100)
		body_loading_t = setTimeout(function() {body_loading(width);}, 15);
	else
		$('.body-loading').fadeOut(200);
}
*/
/*
function regen_homepage() {
				if ($('.page-container-2').size()) {
					var html = '<div class="page-container page-container-2">'+$('.page-container-2').html()+'</div>';
					$('.page-container-2').remove();
					$('.page-container').after(html);
					var home_tabs = '<div id="home-tabs">'+$('#home-tabs').html()+'</div>';
					$('#home-tabs').remove();
					$('.page-container:first').after(home_tabs);
				}
}
*/

function on_scroll_header() {
	if ($('body').data('mobile') || $('body').hasClass('admin-area'))
		return;

	if ($(this).scrollTop() > 190) {
		$('body').addClass('scrolled');
	} else {
		$('body').removeClass('scrolled');
	}
}

function instant_search() {
	$('.search input').unbind('focus').focus(function() {
		var val = $(this).val();
		if (val.length < 2) {
			$('.instant-search').html("<div class='enter-3-chars'>Entrez 2 caractères</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});

	$('.search').unbind('mouseleave').mouseleave(function() {
		$('.instant-search').fadeOut();
	});

	$('.search').unbind('mouseover').mouseover(function() {
		$('.instant-search').fadeIn();
		var val = $(this).find('input').val();
		if (val.length < 2) {
			$('.instant-search').html("<div class='enter-3-chars'>Entrez 2 caractères</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});
/*
	$('.search input').blur(function() {
		setTimeout(function() {
			$('.instant-search').fadeOut();
			$('.instant-search').html("");
		}, 300);
	});
*/
	$('.search input').keyup(function() {
		if ($(this).val().length < 2) {
			$('.instant-search').html("<div class='enter-3-chars'>Entrez 2 caractères</div>");
			return;
        }

		search_instant($(this).val());
	});
}

function search_instant(val) {
		try {
			instant_search_ajax.abort();
		} catch (err) {
		}

		instant_search_ajax = $.ajax({
			url: '/instant_search?q='+encodeURIComponent(val)
		}).done(function(r) {
			$('.instant-search').html(r);
			ajax_clicks();
		});
}

function responsive_init() {
	$('.navigation-toggle').click(function() {
		mobile_menu_open();
	});
}

var mobile_menu_clicked = false;
$('.mobile-menu-fade').click(function() {
	mobile_menu_open();
});

function mobile_menu_open() {
		if (mobile_menu_clicked) {
			mobile_menu_clicked = false;
			$('.mobile-left_menu').animate({left: -500}, 500);
			$('.navigation-toggle').removeClass('is-active');
			$('.mobile-menu-fade').fadeOut();
		} else {
			var top = $(window).scrollTop() + 80;
			$('.mobile-left_menu').css('top', top+'px');
			mobile_menu_clicked = true;
			$('.mobile-left_menu').animate({left: 0}, 500);
			$('.navigation-toggle').addClass('is-active');
			$('.mobile-menu-fade').fadeIn();
		}
}

function create_ajax_link(href) {
	try {
		if (href.indexOf('?') == -1) {
			href = href+'?its_ajax_page=1';
		} else {
			href = href+'&its_ajax_page=1';//&widget=\\XLite\\View\\Controller
		}
	} catch (err) {
	}

	return href;
}

function scrolltop() {
	if ($(window).scrollTop() > 100)
		$('#scrolltop').show();
	else
		$('#scrolltop').hide();

	$('#scrolltop').unbind('click').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
}

//$window.on('scroll resize', check_if_in_view);

function check_if_in_view() {
	return false;
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
//      $element.removeClass('in-view');
    }
  });
}var helptext = [];
helptext['b'] = "blog_bbcode_b";
helptext['i'] = "blog_bbcode_i";
helptext['u'] = "blog_bbcode_u";
helptext['s'] = "blog_bbcode_s";
helptext['url'] = "blog_bbcode_url";
helptext['email'] = "blog_bbcode_email";
helptext['img'] = "blog_bbcode_img";
helptext['list'] = "blog_bbcode_list";
helptext['li'] = "blog_bbcode_li";
helptext['quote'] = "blog_bbcode_quote";
helptext['code'] = "blog_bbcode_code";

function bbcode(open, end) {
	var tArea = document.blogform.comment;
	var isIE = (document.all)? true : false;
	var open = (open)? open : "";
	var end = (end)? end : "";
	if (isIE) {
		tArea.focus();
		var curSelect = document.selection.createRange();
		if (arguments[2])
			curSelect.text = open + arguments[2] + "]" + curSelect.text + end;
		else
			curSelect.text = open + curSelect.text + end;
	} else if(!isIE && typeof tArea.selectionStart != "undefined") {
		var selStart = tArea.value.substr(0, tArea.selectionStart);
		var selEnd = tArea.value.substr(tArea.selectionEnd, tArea.value.length);
		var curSelection = tArea.value.replace(selStart, '').replace(selEnd, '');

		if (arguments[2])
			tArea.value = selStart + open + arguments[2] + "]" + curSelection + end + selEnd;
		else
			tArea.value = selStart + open + curSelection + end + selEnd;
	} else
		tArea.value += (arguments[2])? open + arguments[2] + "]" + end : open + end;
}

function bbhelp(text) {
	if (text)
		document.getElementById('helptext').value = helptext[text];
	else
		document.getElementById('helptext').value = '';
}var current_banner = 1,	banners_count, banners_delay = 5000, banners_interval;

//alert('1');
/*
 * We trigger the factory() function is different
 * ways to support modular JavaScript libraries. See
 * the 'Wrapping Up' section of the tutorial for
 * more information
 *
 */
/*
(function(factory){

  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

})(function($){
*/
  /*
	 * We define Zippy as a variable of type �function�.
   * Here, we use an anonymous function to ensure
   * that the logic inside the function is executed immediately.
	 *
	 */
  var Zippy = (function(element, settings){

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

      // We create a new property to hold our default settings after they
      // have been merged with user supplied settings
      this.settings = $.extend({},this,this.defaults,settings);

      // This object holds values that will change as the plugin operates
      this.initials = {
        currSlide : 0,
        $currSlide: null,
        totalSlides : false,
        csstransitions: false
      };

      // Attaches the properties of this.initials as direct properties of Zippy
      $.extend(this,this.initials);

      // Here we'll hold a reference to the DOM element passed in
      // by the $.each function when this plugin was instantiated
      this.$el = $(element);

      // Ensure that the value of 'this' always references Zippy
      this.changeSlide = $.proxy(this.changeSlide,this);

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
	 * Creates a list of indicators based on the amount of slides
	 * @params void
	 * @returns void
	 *
	 */
	Zippy.prototype.build = function(){
		var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
		this.totalSlides = this.$el.find('.slide').length;
		for(var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index='+i+'>');
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
		this.$el.find('.indicators li').eq(0).addClass('active');
	};

	/**
   * Associate event handlers to events
   * For arrow events, we send the placement of the next slide to the handler
   * @params void
   * @returns void
   *
   */
	Zippy.prototype.events = function(){
		$('body')
			.on('click',this.settings.arrowRight,{direction:'right'},this.changeSlide)
			.on('click',this.settings.arrowLeft,{direction:'left'},this.changeSlide)
			.on('click','.indicators li',this.changeSlide);
	};

	/**
	 * TIMER
	 * Resets the timer
	 * @params void
	 * @returns void
	 *
	 */
	Zippy.prototype.clearTimer = function(){
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
		this.clearTimer();

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
		var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);

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

	/**
	 * Executes the animation via CSS transitions
	 * @params	object	Jquery object the next slide to slide into view
	 * @params	string	animation direction
	 * @returns void
	 *
	 */
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

	/**
	 * Executes the animation via JS transitions
	 * @params	object	Jquery object the next slide to slide into view
	 * @params	string	animation direction
	 * @returns void
	 *
	 */
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
	 * Ensures the slide indicators are pointing to the currently active slide
	 * @params	void
	 * @returns	void
	 *
	 */
	Zippy.prototype._updateIndicators = function(){
		this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
	};

	/**
	 * Initialize the plugin once for each DOM object passed to jQuery
	 * @params	object	options object
	 * @returns void
	 *
	 */
	$.fn.Zippy = function(options){

    return this.each(function(index,el){

      el.Zippy = new Zippy(el,options);

    });

  };


/*});*/

function banners() {
	if (!$('.banners-homepage').size())
		return;

// Custom options for the carousel
	var args = {
		arrowRight : '.arrow-right', //A jQuery reference to the right arrow
		arrowLeft : '.arrow-left', //A jQuery reference to the left arrow
		speed : 1000, //The speed of the animation (milliseconds)
		slideDuration : banners_delay //The amount of time between animations (milliseconds)
	};

	$('.banners-homepage').Zippy(args);

	current_banner = 1;
	banners_count = $("#banners_nav img").size();
	if (banners_count < 2)
		return;

	clearInterval(banners_interval);
	banners_interval = setInterval("rotate_banners()", banners_delay);
/*
    $('#banners').mouseenter(function() {
    	clearInterval(banners_interval);
    });

    $('#banners').mouseleave(function() {
    	banners_interval = setInterval("rotate_banners()", banners_delay);
    });

	$('.banners-homepage').mouseenter(function() {
    	clearInterval(banners_interval);
    });

	$('.banners-homepage').mouseleave(function() {
    	banners_interval = setInterval("rotate_banners()", banners_delay);
    });
*/
	$('#banners_nav img').click(function() {
		clearInterval(banners_interval);
		banners_interval = setInterval("rotate_banners()", banners_delay);
		var i = $(this).attr('id').replace('g2b_', '');
		current_banner = i;
		$('#banners_nav img').removeClass('active');
		$(this).addClass('active');
		$(".banners-slider div").hide();
		$("#banner_"+i).fadeIn();
		$(".hp_banner").hide();
		$("#hp_banner_"+i).fadeIn();
	});
}

function rotate_banners() {//alert('1');
				current_banner++;
				$('#banners_nav img').removeClass('active');
				$('#g2b_'+(current_banner-1)).addClass('active');

				$(".banners-slider div").hide();
				$("#banner_"+(current_banner-1)).fadeIn();
				$(".hp_banner").hide();
				$("#hp_banner_"+(current_banner-1)).fadeIn();

				if (current_banner == banners_count)
					current_banner = 0;
}

$(document).ready(function() {
	banners();
});$(document).ready(function() {	tabs_clicks();});var containerWidths = [],	scrollWidth0,	scroll_size = 276,	duration = 600,	defaultContainerWidth = 1600,	scrollWidthToContainerWidthRatio = 1;function initCarousels() {	for (var i = 0; i < 6; i++) {		containerWidths[containerWidths.length] = 0;		if ($('#carousel-'+i).size()) {			containerWidths[i] = $('#carousel-'+i+' .res-item').size() * scroll_size;			var width_2 = $('#carousel-'+i+' .res-item').size() * scroll_size;			$('#carousel-'+i+' .responsive-columns').width(width_2).css('min-width', width_2+'px');			var width = $('#carousel-'+i+' .content-pr').outerWidth() + 20;//			alert(width+' >= '+containerWidths[i]);			if (width <= containerWidths[i]) {				$('#carousel-'+i).find('.controls > .button-right').css('display', 'block').css('left', (containerWidths[i]-52)+'px');			} else {				if (parseInt($('#carousel-'+i+' .content-pr').css('left')) < 0) {					$('#carousel-'+i+' .content-pr').animate({						left: 0					}, 100);				}				$('#carousel-'+i).find('.controls > .button-left').css('display', 'none');				$('#carousel-'+i).find('.controls > .button-right').css('display', 'none');			}//			console.log('123-'+i);			$('#carousel-'+i+' .controls > .button-right').unbind('click').click(function() {				var that = $(this);				var button_cLeft = that.siblings();				var scrollContent = that.closest('.carousel-pr').find('.content-pr');//alert(scrollContent.size()+'|'+i);				// Get width of scroll content				// NB: We can't simply do scrollContent.width() because it's buggy				var width = 0;				scrollContent.find('.res-item').each(function(){				  width += $(this).outerWidth();				  width += parseInt($(this).css('margin-left'));				  width += parseInt($(this).css('margin-right'));				  width += parseInt($(this).css('padding-left'));				  width += parseInt($(this).css('padding-right'));				})				width = scrollContent.find('.res-item').size() * scroll_size;				var width_2 = $('.carousel-wrapper').outerWidth();				if ($(window).width() < 600)					var width_2 = scroll_size;//				else					var width_2 = $('.carousel-wrapper').outerWidth();//scroll_size;////alert(width+'|'+(scrollContent.find('.res-item').size() * scroll_size));				// We want to leave containerWidth's amount				var maxScrollWidth = Math.floor(width - width_2);				// Get current scroll position				var left = parseInt(scrollContent.css('left'));				var isEnd = false;				// Determine scrollWidth				scrollWidth0 = Math.floor(width_2 * scrollWidthToContainerWidthRatio);//console.log(width_2+'|'+scrollWidth0);				if (Math.abs(left - scrollWidth0) >= maxScrollWidth) {					// Update scrollWidth					scrollWidth0 = maxScrollWidth + left;					isEnd = true;				}				scrollContent.animate({					left: left - scrollWidth0				}, duration, function() {					// Display left button_c					button_cLeft.fadeIn(duration);					// Determine if we've reached the end					if (isEnd) {						// Hide right button_c						that.fadeOut(duration);					}				});			});  			$('#carousel-'+i+' .controls > .button-left').unbind('click').click(function() {				var that = $(this);				var button_cRight = that.siblings();				var scrollContent = that.closest('.carousel-pr').find('.content-pr');				// Get current scroll position				var left = parseInt(scrollContent.css('left'));				var isEnd = false;				// Determine scrollWidth//				var width_2 = Math.min(defaultContainerWidth, scrollContent.find('.res-item').size() * scroll_size);				if ($(window).width() < 600)					var width_2 = scroll_size;//				else					var width_2 = $('.carousel-wrapper').outerWidth();//scroll_size;//				scrollWidth0 = Math.floor(width_2 * scrollWidthToContainerWidthRatio);				if (left + scrollWidth0 >= 0) {					isEnd = true;				}				scrollContent.animate({					left: isEnd ? 0 : left + scrollWidth0				}, duration, function() {					// Display left button_c					button_cRight.fadeIn(duration);					// Determine if we've reached the end					if (isEnd) {						// Hide right button_c						that.fadeOut(duration);					}				});			});		}	}}$(window).resize(function() {	initCarousels();});function tabs_clicks() {	initCarousels();	$('.home-tabs li').click(function() {		return false;		$('.home-tabs li').removeClass('active');		$(this).addClass('active');		$('.tab-content').addClass('hidden');		$('#tab-'+$(this).data('tab')).removeClass('hidden');	});	$('.product-tabs li').click(function() {		$('.product-tabs li').removeClass('active');		$(this).addClass('active');		$('.tab-content').addClass('hidden');		$('#tab-'+$(this).data('tab')).removeClass('hidden');	});/*var mySiema = new Siema({  selector: '#featured_products',  duration: 200,  easing: 'ease-out',  perPage: 5,  startIndex: 0,  draggable: true,  multipleDrag: true,  threshold: 20,  loop: false,  rtl: false,  onInit: () => {},  onChange: () => {},});document.querySelector('.prev-siema').addEventListener('click', () => mySiema.prev(5));document.querySelector('.next-siema').addEventListener('click', () => mySiema.next(5));*//*	$('.page-container-afterbanner').animate({		opacity: 1,		bottom: 0	}, 1000, function() {		$('.page-container-testimonials').animate({			opacity: 1,			bottom: 0		}, 1000);	});	$(window).trigger('scroll');*/}/*$(window).scroll(function() {	if (!$('#body-home').size())		return;	if (($(window).scrollTop() + $(window).height()) > ($('.page-container-2').offset().top - 200)) {		$('.page-container-2').animate({			opacity: 1,			bottom: 0		}, 1000);	}	if (($(window).scrollTop() + $(window).height()) > ($('.page-container-news').offset().top - 200)) {		$('.page-container-news').animate({			opacity: 1,			bottom: 0		}, 1000);	}	if (($(window).scrollTop() + $(window).height()) > ($('.page-container-blog').offset().top - 200)) {		$('.page-container-blog').animate({			opacity: 1,			bottom: 0		}, 1000);	}});*/var put_filter_push = '';$(document).ready(function() {	if (page == 'search' || page == 'category' || (page == 'brands' && pageid))		load_filter();	products_clicks();});function products_clicks() {	if ($('body').hasClass('admin-area'))		return false;	$('.navigation a, .sort-by a').unbind('click').click(function() {		var h = $(this).attr('href');		if (!pushed) {//			window.history.pushState({"html": $('#center').html(),"pageTitle": $('title').html()},"", window.location);			pushed = true;		}		if ($(this).closest('.bottom-pagination').size()) {			$('html, body').animate({				scrollTop: $('.products-results').offset().top - 100			}, 300);		}//		$('#center').append('<div id="content-loading"><img src="/images/content-loading.gif" alt="" /></div>');		$('.ajax_container').append('<div id="content-loading" style="margin-top: '+($('.products-results').offset().top - 200)+'px"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');		$('#content-loading').width($('.ajax_container').width());		$('#content-loading').height($('.ajax_container').height());//		return false;		$.ajax({			url: h,			error: function() {				self.location = h;			},			success: function(r) {				$('#content-loading').remove();				$('.products-results').html(r);				window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$('.ajax_container').html(),"pageTitle":$('title').html(), 'bread_crumbs': $('#bread_crumbs_container').html()},"", h);				ajax_clicks();				dontloadfilter = true;				proceed_clicks('search');			}		});		return false;	});	$('.products .photo').unbind('mouseenter').mouseenter(function() {		$(this).append('<img src="'+current_location+'/images/ql.png" alt="" class="view-quicklook" />');		var q = $(this).find('.view-quicklook'),			i = $(this).closest('.photo'),			product_id = i.find('.product-image').attr('id').replace('pid-', '');		q.css('left', (i.width() / 2 - 35) + 'px');		q.css('top', (i.height() / 2 - 20)+'px');		q.css('z-index', 3);		q.click(function() {			load_quick_look(product_id);		});	});	$('.products .quick-look').unbind('click').click(function() {		var product_id = $(this).data('productid');		load_quick_look(product_id);	});	$('.products .photo').unbind('mouseleave').mouseleave(function() {		$(this).find('.view-quicklook').remove();	});	$('.products img').draggable({		revert: true,		start: function(e,ui) {			$('#dcart').removeClass('highlighted');			$('#dcart').fadeIn(300).css('z-index', 190);			$('.res-item').css('z-index', 20);			$(this).closest('.res-item').css('z-index', 200);		},		stop: function() {			$('#dcart').fadeOut(300);			$(this).css('z-index', 1);		}	});	$('#dcart').droppable({		hoverClass: 'highlighted',		drop: function(event, ui) {			add_to_cart(ui.draggable.attr('id').replace('pid-',''), 'Y');		}	});	$('.products button').unbind('click').click(function() {		bc = false;		add_to_cart($(this).attr('id').replace('pid',''), 'Y');	});}function load_quick_look(product_id) {			aload();			$('body').append('<div class="load hidden"><img src="'+current_location+'/images/close.png" class="close"/></div>');			$('.popup-wrap').css('top', $(window).scrollTop()+'px');//			$('body').css('overflow-y', 'hidden');			$('.load').load('/product/'+product_id+'?popup=1', function(r) {				$('.popup-wrap').height($(window).height());//				$('.popup-wrap').show();				unload();				fade();				$('.load').html('<img src="/images/close.png" class="close"/>'+r);				$('.load').addClass('popup product_popup');				var top = ($(window).scrollTop() + $(window).height() / 2 - $('.product_popup').height() / 2) - 50;				if (top < $(window).scrollTop())					top = $(window).scrollTop() + 30;				$('.product_popup').css('top', top + 'px');				$(".product_popup img").on('load', function() {					var top = ($(window).scrollTop() + $(window).height() / 2 - $('.product_popup').height() / 2) - 50;					if (top < $(window).scrollTop())						top = $(window).scrollTop() + 30;					$('.product_popup').css('top', top + 'px');					$('.product_popup').css('left', ($(window).width() / 2 - $('.product_popup').width() / 2 - 10) + 'px');				});				$('.product_popup').css('left', ($(window).width() / 2 - $('.product_popup').width() / 2 - 10) + 'px');//				$('.product_popup').css('margin-top', '150px').css('opacity', 0);//				$('.product_popup').show();//				$('.product_popup').animate({ 'marginTop': '-10px', opacity: 1 }, 200).animate({ 'marginTop': '0px'}, 250);				$('.product_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');				setTimeout(function() {					$('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');					setTimeout(function() {						$('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');					}, 200);				}, 200);				$('.product_popup').show();//				setTimeout(function(){},100);				$(window).resize(function() {//					$('.popup-wrap').height($('.product_popup').height());//					return;					var top = ($(window).scrollTop() + $(window).height() / 2 - $('.product_popup').height() / 2) - 50;					if (top < $(window).scrollTop())						top = $(window).scrollTop() + 30;//console.log(top);					$('.product_popup').css('top', top + 'px');					$('.product_popup').css('left', ($(window).width() / 2 - $('.product_popup').width() / 2 - 10) + 'px');				});				$('.product_popup .close, .product_popup .close_popup').click(function() {					removePopups();					return;					$('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');					setTimeout(function() {						$('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');				    	unfade();					}, 200);return;    				var e = $('.product_popup');	    			e.slideUp();					setTimeout(function(){$('body').css('overflow-y', 'auto');e.remove()}, 500);				});				$('.product_popup').click(function() {					bc = false;					bb = true;				});				product_clicks()			});}function load_filter(url_params, url_replace) {	$('#left_filter').html('<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>');	if (url_replace)		var url = url_replace;	else		var url = window.location.href;	if (!strstr(url, '?'))		url += '?'	$.ajax({		url: url+'&load_filter=1'+(url_params ? url_params : '')	}).done(function(r) {		$('#left_filter').html(r);		if (put_filter_push) {//			alert(put_filter_push);			window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$('.ajax_container').html(),"pageTitle":$('title').html(), 'bread_crumbs': $('#bread_crumbs_container').html()},"", put_filter_push);			put_filter_push = '';		}		filter_clicks();	});}function filter_clicks() {	var filter_url = $('.filter-url').html(),		min_value = parseInt($("#min_price").val()),		max_value = parseInt($("#max_price").val());/*	$( "#slider-range" ).slider({		range: true,		min: min_value,		max: max_value,		step: 1.00,		values: [min_value, max_value],		slide: function( event, ui ) {        	$("#min_price").val(ui.values[0]);	        $("#max_price").val(ui.values[1]);		},		stop: function(event, ui) {			var url_params = '';			url_params += '&filter[min_price]='+$('#min_price').val();			url_params += '&filter[max_price]='+$('#max_price').val();			load_filter_process(filter_url, url_params);		}	});*/	$('.selected-filter').click(function() {		var what_uncheck = $(this).data('what'),			url = filter_url,			id = $(this).data('id'),			url_params = '';		$('.selected-filter').each(function() {			var what = $(this).data('what');			if (what_uncheck != what) {				if (what == 'brand') {					url_params += '&filter[brandid]='+$(this).data('id');				}				if (what == 'price') {					url_params += '&filter[price]='+$(this).data('id');				}			}			if (what == 'attr') {				if (id != $(this).data('id'))					url_params += '&filter[attr]['+encodeURIComponent($(this).data('id'))+']='+encodeURIComponent($(this).data('oid'));			}		});		load_filter_process(url, url_params);	});	$('#left_filter li').click(function() {		var what = $(this).closest('ul').data('what'),			url = filter_url,			url_params = '';		if (what == 'brand') {			url_params += '&filter[brandid]='+$(this).data('id');		}		if (what == 'price') {			url_params += '&filter[price]='+$(this).data('id');		}		if (what == 'attr') {			url_params += '&filter[attr]['+encodeURIComponent($(this).data('id'))+']='+encodeURIComponent($(this).data('oid'));		}		$('.selected-filter').each(function() {			var what = $(this).data('what');			if (what == 'brand') {				url_params += '&filter[brandid]='+$(this).data('id');			}			if (what == 'price') {				url_params += '&filter[price]='+$(this).data('id');			}			if (what == 'attr') {				url_params += '&filter[attr]['+encodeURIComponent($(this).data('id'))+']='+encodeURIComponent($(this).data('oid'));			}		});//alert(url_params);//return;		load_filter_process(url, url_params);	});}function load_filter_process(url, url_params) {//		alert(url);		var h = url+url_params;		$('html, body').animate({			scrollTop: $('.products-results').offset().top - 100		}, 300);		$('.ajax_container').append('<div id="content-loading" style="margin-top: '+($('.products-results').offset().top - 200)+'px"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');		$('#content-loading').width($('.ajax_container').width());		$('#content-loading').height($('.ajax_container').height());		$.ajax({			url: h,			error: function() {				self.location = h;			},			success: function(r) {				$('#content-loading').remove();				$('.products-results').html(r);				h = h.replace('filtered=1&amp;', '');				ajax_clicks();				put_filter_push = h;				load_filter(url_params, url);				dontloadfilter = true;				proceed_clicks('search');			}		});}/*!Zoom v1.7.11 - 2013-11-12	Enlarge images on click or mouseover.	(c) 2013 Jack Moore - http://www.jacklmoore.com/zoom	license: http://www.opensource.org/licenses/mit-license.php*//*!
	Zoom v1.7.11 - 2013-11-12
	Enlarge images on click or mouseover.
	(c) 2013 Jack Moore - http://www.jacklmoore.com/zoom
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,m,r,l,s,f=o(t).css("position");return o(t).css({position:/(absolute|fixed)/.test(f)?f:"relative",overflow:"hidden"}),e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none"}).appendTo(t),{init:function(){c=o(t).outerWidth(),u=o(t).outerHeight(),n===t?(m=c,a=u):(m=o(n).outerWidth(),a=o(n).outerHeight()),r=(e.width-c)/m,l=(e.height-u)/a,s=o(n).offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,m),0),e.style.left=t*-r+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e,i=o.extend({},t,n||{}),u=i.target||this,c=this,a=document.createElement("img"),m=o(a),r="mousemove.zoom",l=!1,s=!1;(i.url||(e=o(c).find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(a.onload=function(){function t(t){e.init(),e.move(t),m.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(a):!1)}function n(){m.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(a):!1)}var e=o.zoom(u,c,a,i.magnify);"grab"===i.on?o(c).on("mousedown.zoom",function(i){1===i.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(r,e.move)}),t(i),o(document).on(r,e.move),i.preventDefault())}):"click"===i.on?o(c).on("click.zoom",function(i){return l?void 0:(l=!0,t(i),o(document).on(r,e.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(r,e.move)}),!1)}):"toggle"===i.on?o(c).on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===i.on&&(e.init(),o(c).on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(r,e.move)),i.touch&&o(c).on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(a)},a.src=i.url,o(c).one("zoom.destroy",function(){o(c).off(".zoom"),m.remove()}))})},o.fn.zoom.defaults=t})(window.jQuery);var rate_clicked = 0,	gst_applied = false,	qty_clicked = false,	clear_clicked = false,	image_popup_clicked = false,	lbl_buy1click = "Entrez votre numéro de téléphone";$(document).ready(function() {/*	$('.add-to-cart').click(function() {		add_to_cart($(this).attr('id').replace('productid-',''));		postprocess();	});*///	if (page == 'product')	if (!$('body').hasClass('admin-area'))		product_clicks();});var social_loaded = false;function load_social() {//	return;	if (social_loaded) {		FB.init({            status: true,            cookie: true,			xfbml: true		});		FB.XFBML.parse();		twttr.widgets.load();		return;	}console.log(facebook_api);	$.ajax({	  url: facebook_api,	  dataType: "script",	  success: function() {		FB.init({			xfbml: true		});		FB.XFBML.parse();	  	social_loaded = true;	  }	});	$.ajax({	  url: twitter_api,	  dataType: "script",	  success: function() {		twttr.widgets.load();	  	social_loaded = true;	  }	});}function product_clicks() {	$('.gift_cards button').unbind('click').click(function() {		var val = $('#gift_card').val();//		alert(val);		if (val) {			$.ajax({				type: 'POST',				url: current_location+'/cart/add_gc/'+val			}).done(function(r) {				if (r) {					alert('Gift Card added to cart');					$('#minicart').html(r);					$('#head_mobile #minicart').html(r);					cart_clicks();				} else {					alert('Please, enter numeric value');				}			});		}	});	$('#zoom').zoom();	load_social();	if (oid == 0) {		qadd = '';		product_base = $('.product');	} else {		qadd = '.product_popup ';		product_base = $('.product_popup');	}	postprocess();	if (oid == 0)		default_images = $(qadd+'.product .photo table').html();	else		default_images_ql = $(qadd+'.product .photo table').html();	var rating_clicked = false;	$('.rating').unbind('mouseleave').mouseleave(function() {		if (rating_clicked) {			$('.rating span.r'+$('#review_rating').val()).click();		} else			$('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');	});	$('.rating span').click(function() {		rating_clicked = true;		recalc_rating($(this));		$('#review_rating').val($(this).attr('class').replace('r', ''));//		alert($('#review_rating').val());	});	$('.rating span').unbind('mouseover').mouseover(function() {		recalc_rating($(this));	});	recaptchaOnload();}function recalc_rating(span) {		$('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');		if (span.hasClass('r1')) {			$('.rating').addClass('r1');		} else if (span.hasClass('r2')) {			$('.rating').addClass('r1').addClass('r2');		} else if (span.hasClass('r3')) {			$('.rating').addClass('r1').addClass('r2').addClass('r3');		} else if (span.hasClass('r4')) {			$('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4');		} else if (span.hasClass('r5')) {			$('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4').addClass('r5');		}}function postprocess(ql) {/*		if ($(qadd+'.norelated').size() == 0) {			destroy_custom_scrolls_bars($(qadd+'.product-details-tabs .tab-container.scroll-pane'));			custom_scrolls_bars($(qadd+'.product-details-tabs .tab-container.scroll-pane'));		}		destroy_custom_scrolls_bars($(qadd+'.product-tab-brand-descr.scroll-pane'));		custom_scrolls_bars($(qadd+'.product-tab-brand-descr.scroll-pane'));*/		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;		$('[name=pricematch] input').keyup(function() {			if ($(this).parent().parent().find('.star').size() > 0) {				if ($(this).val() != '' && $(this).parent().find('img.mark-green').size() == 0 && ($(this).attr('name') != 'email' || emailReg.test($(this).val()))) {					$(this).parent().find('img.mark-red').remove();					$(this).removeClass('input-incorrect');					$(this).parent().append('<img src="'+$('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');					$(this).addClass('input-correct');				} else if ($(this).val() == '' || ($(this).attr('name') == 'email' && !emailReg.test($(this).val()))) {					$(this).parent().find('img.mark-green').remove();					$(this).removeClass('input-correct');				}			}		});		$('[name=crform] input, [name=crform] textarea').keyup(function() {			if ($(this).parent().parent().find('.star').size() > 0) {				if ($(this).val() != '' && $(this).parent().find('img.mark-green').size() == 0) {					$(this).parent().find('img.mark-red').remove();					$(this).removeClass('input-incorrect');					$(this).parent().append('<img src="'+$('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');					$(this).addClass('input-correct');				} else if ($(this).val() == '') {					$(this).parent().find('img.mark-green').remove();					$(this).removeClass('input-correct');				}			}		});		rate_clicked = 0;/*		if (product_base.hasClass('product-quicklook')) {			oid = 1;			qadd = '.product-quicklook ';		} else {*///		}		$('div.gst-tab').unbind('click').click(function() {			$('div.gst-tab').removeClass('active');			$(this).addClass('active');			if ($(this).attr('id') == 'inc_gst') {				gst_applied = true;			} else {				gst_applied = false;			}			recalculate_gst();		});		// Save gallery list items//		this.gallery = $('.image .product-image-gallery li', product_base);		var o = this;//		alert(qadd);		if ($(qadd+'#hasVariants').size() > 0) {/*			var ids = [];			for (var x in variants[oid]) {				for (var z in variants[oid][x][4]) {					if (!ids[$('#po-'+z).val()] && $('#po-'+z).val() > 0) {						ids[$('#po-'+z).val()] = 1;//						console.log($('#po-'+z).html()+'|'+z+'|'+oid+'|'+qadd);						if ($('#po-'+z).get(0).tagName == 'SELECT')							$('#pot-'+z).html(': '+$('#po-'+z).find('option:selected').text());						else {							var optionid = $('#po-'+z).val();							var val = '';							if ($('#poi-'+optionid).find('img').size() > 0)								val = $('#poi-'+optionid).find('img').attr('alt');							else								val = $('#poi-'+optionid).html();							$('#poi-'+optionid).append("<img src='"+current_location+"/images/check-mark.png' class='checked' />");							$('#pot-'+z).html(': '+val);						}						$('#pot-'+z).show();						$('#poa-'+z).show();					}				}			}			if (ids.length > 0) {				map_variants(o);			}*/		}		$(qadd+'.price-breaks').mouseover(function() {			$(qadd+'.price-breaks div').show();		});		$(qadd+'.price-breaks').mouseout(function() {			$(qadd+'.price-breaks div').hide();		});		$(qadd+'[name=amount]').change(function() {			if ($(this).val() < 1)				$(this).val('1');			product_options(o);		}).keyup(function() {			product_options(o);		});		$('.clear_option').unbind('click').click(function() {			var groupid = $(this).attr('id').replace('poa-', '');			$('#pot-'+groupid).html('');			$('#pot-'+groupid).hide();			$('#poa-'+groupid).hide();			$('#pog-'+groupid+' img.checked').remove();			$('#po-'+groupid).val('');			map_variants(o);			product_options(o);			$(qadd+'.options-error').hide();		});		$(qadd+'.options_container div').unbind('click').click(function() {			if ($(this).hasClass('unavailable') || !($(this).hasClass('option-image') || $(this).hasClass('option-name')) || clear_clicked) {				clear_clicked = false;				return false;			}			$(this).parent().find('div img.checked').remove();			var val = '';			if ($(this).find('img').size() > 0)				val = $(this).find('img').attr('alt');			else				val = $(this).html();			var groupid = $(this).parent().attr('id').replace('pog-', '');			$('#pot-'+groupid).html(': '+val);			$('#pot-'+groupid).show();			$('#poa-'+groupid).show();			$(this).append("<img src='"+current_location+"/images/check-mark.png' class='checked'>");			var optionid = $(this).attr('id').replace('poi-', '');			$('#po-'+groupid).val(optionid);			map_variants(o, groupid);			product_options(o);			$(qadd+'.options-error').hide();		});		$(qadd+'.product_options').unbind('change').change(function() {			var id = $(this).attr('id').replace('po-', '');			if ($(this).val()) {				$('#pot-'+id).html(': '+$(this).find('option:selected').text());				$('#pot-'+id).show();				$('#poa-'+id).show();			} else {				$('#pot-'+id).hide();				$('#poa-'+id).hide();			}			map_variants(o, id);			product_options(o);			$(qadd+'.options-error').hide();		});		product_options(o);		map_variants(o);		$('.add2cart').unbind('click').click(function() {			if (!option_selected())				return false;		});		// Form AJAX-based submit		$('form.product-details', product_base).eq(0).unbind('submit').submit(			function(event)			{				return o.addProductToCart(event, this);			}		);		// Cloud zoom		var cloud = $('.cloud-zoom', product_base);		if (cloud.length) {			this.zoomWidget = true;			if (core.getCommentedData(cloud, 'kZoom')) {				this.kZoom = core.getCommentedData(cloud, 'kZoom');			}			var imageWrapper = $(document.createElement('div')).addClass('wrapper');			cloud.wrap(imageWrapper);		}		if ($(qadd+'.product-image-gallery li a').length) {			// TODO: improve to skip additional JS manipulations			// like resizing etc when it is not needed			this.selectImage(0);		} else if (this.zoomWidget && !cloud.data('zoom')) {			cloud.CloudZoom();		}		// Change Continue shopping button for QuickLook mode/*		if (product_base.hasClass('product-quicklook') && 0 < product_base.parents('.blockUI').length) {			$('button.continue', product_base).unbind('click').removeAttr('onclick');			$('button.continue', product_base).click(				function() {					popup.close();					return false;				}			);		}*/		make_gallery_click_on_quick_look();		$('.ql-zoom', product_base).zIndex(10999);		// Gallery		if (typeof(window.lightBoxImagesDir) != 'undefined') {			$('.loupe', product_base).click(				function(event) {					o.showLightbox();					setTimeout(						function() {							$('.product-image-gallery li.selected a').eq(0).trigger('click');						},						500					);					return false;				}			);		}//		this.hideLightbox();		// Tabs		$('.product-details-tabs .tabs div', product_base).click(			function () {				if (!$(this).hasClass('active')) {					var id = $(this).find('a').attr('id').substr(5);					$('.product-details-tabs .tabs div.active').removeClass('active');					$(this).addClass('active');					var box = $(this).parents('.product-details-tabs');					if (box.find('#' + id).hasClass('scroll-pane')) {						destroy_custom_scrolls_bars(box.find('#' + id));					}					destroy_custom_scrolls_bars(box.find('.variants-list'));					box.find('.tab-container').hide();					box.find('#' + id).show();					box.find('.faq-answer').eq(0).show();					if (box.find('#' + id).hasClass('scroll-pane')) {						if (box.find('#' + id).hasClass('Reviews-tab')) {							scroll_apis[scroll_apis.length] = [box.find('#' + id), box.find('#' + id).jScrollPane().data().jsp];						} else {							custom_scrolls_bars(box.find('#' + id));						}					}					custom_scrolls_bars(box.find('.variants-list'));					if ($('.cp_message .progress-bar').size() > 0) {						$('.cp_message div').html('');						$('.cp_message_fade').hide();						$('.cp_message').hide();						$('.cp_message button').show();					}					if ($('.cr_message .progress-bar').size() > 0) {						$('.cr_message div').html('');						$('.cr_message_fade').hide();						$('.cr_message').hide();						$('.cr_message button').show();					}				}				return true;			}		);	$('.add-review', product_base).click(function() {		if ($('.norelated').size() > 0)			$('html, body').animate({scrollTop: $(".customerReviews h3").offset().top}, 2000);		else {			$('.Reviews-tab').data('jsp').scrollTo(0, $('.Reviews-tab .jspPane').height());			$(this).hide();		}	});	$('.Reviews-tab').bind(		'jsp-scroll-y',		function(event, scrollPositionY) {			$('.add-review').show();			$('.add-review').css('top', scrollPositionY);		}	);	$('.faq-question', product_base).click(		function() {			var o = $(this);			$('.faq-answer').each(				function() {					if (o[0] != $(this).parents()[0])						$(this).slideUp();				}			);			$(this).find('.faq-answer').slideDown(				'',				function() {					custom_scrolls_bars($('.FAQ-tab'));				}			);		}	);		// Related Tabs		$('.related-items .tabs div', product_base).click(			function () {				if (!$(this).hasClass('active')) {					var id = $(this).attr('id').substr(5);					$('.related-items .tabs div.active').removeClass('active');					$(this).addClass('active');					var box = $(this).parents('.related-items');					box.find('.tab-container').hide();					box.find('#' + id).show();				}				return true;			}		);		// Bottom tabs		$('.product-details-bottom-tabs .tabs div', product_base).click(			function () {				if (!$(this).hasClass('active')) {					var id = $(this).find('a').attr('id').replace('link-bt-', '');					$('.product-details-bottom-tabs .tabs div.active').removeClass('active');					$(this).addClass('active');					var box = $(this).parents('.product-details-bottom-tabs');					if (box.find('.FAQ-tab').size() > 0) {						destroy_custom_scrolls_bars($('.FAQ-tab'));						box.find('.tab-container').hide();						$('.FAQ-tab').show();						custom_scrolls_bars($('.FAQ-tab'));					} else {						destroy_custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));						box.find('.tab-container').hide();						box.find('#tab-content-'+id).show();						custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));					}				}				return true;			}		);		// Custom quantity		custom_quantity();		if (!product_base.hasClass('product-quicklook') && !(0 < product_base.parents('.blockUI').length)) {			$('#relatedItems .img img').click(function() {				popup.postprocessRequestCallback = function()				{					popup.postprocessRequest.apply(popup, arguments);					$(qadd+'.product-image-gallery a').eq(0).trigger('click');				};				return !popup.load(					URLHandler.buildURL({						target:			'quick_look',						action:			'',						productid:		$(this).parent().attr('id').replace('ip', ''),						only_center:	1					}),					'product-quicklook',					function () {						oid = 0;						qadd = '';						$('.formError').hide();					},					50000				);			});			$('.related-to-cart').click(				function()				{					if ($(this).hasClass('no-options')) {						var pid = $(this).attr('id').replace('p', '');						var data = 'target=cart&action=add&productid='+pid+'&amount='+$(this).parent().find('.value').html()+'&returnURL='+$(qadd+'[name=returnURL]').val();						var o2 = this;						$.ajax({							type: 'POST',							url: '/store/cart',							data: data,							beforeSend: function ( xhr ) {								$(o2).parent().find('.cquantity').hide();								$(o2).parent().find('img').hide();								if ($(o2).parent().find('.progress-bar').size() > 0) {									$(o2).parent().find('.progress-bar').show();								} else {									$(o2).parent().append('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');								}							}						}).done(function(data) {							$('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');							$('#status-messages').slideDown(50);							setTimeout(function() {$('#status-messages').slideUp(500);$('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);							$.ajax({								type: 'GET',								url: '?productid='+pid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',								data: data							}).done(function(data) {								core.trigger('updatecart', eval('({"items":[]})'));								if (data != 'N') {									var qty = data.split('|')[0];									if (qty == 0) {										$(o2).parent().find('.cquantity').remove();										$(o2).parent().append('<div class="ofs">Out of stock</div>');									} else										$(o2).parent().find('.values').html(qty);								}								custom_quantity();								$(o2).parent().find('.progress-bar').hide();								$(o2).parent().find('.cquantity').show();								if (!(data != 'N' && qty == 0))									$(o2).parent().find('img').show();							});						});					} else {						popup.postprocessRequestCallback = function()						{							popup.postprocessRequest.apply(popup, arguments);							$(qadd+'.product-image-gallery a').eq(0).trigger('click');						};						return !popup.load(							URLHandler.buildURL({								target:			'quick_look',								action:			'',								amount:		 $(this).parent().find('.value').html(),								productid:	$(this).attr('id').replace('p', ''),								only_center: 1							}),							'product-quicklook',							function () {								oid = 0;								qadd = '';								$('.formError').hide();							},							50000						);					}				}			)		}		$('.customerReviews .rate img', product_base).unbind('mouseover').mouseover(function() {			$('.customerReviews .rate img', product_base).removeClass('hover');			var id = $(this).attr('id').replace('star-', '');			for (var i = 0; i < 5; i++) {				if (i <= id) {					$('#star-'+i).addClass('hover');				}  			}		}).unbind('click').click(function() {			$('.customerReviews .rate img', product_base).removeClass('hover');  			var id = parseInt($(this).attr('id').replace('star-', ''));  			rate_clicked = id+1;  			for (var i = 0; i < 5; i++) {	  			if (i <= id) {	  				$('#star-'+i).addClass('hover');	  			}  			}		});		$('.customerReviews .rate', product_base).unbind('mouseout').mouseout(function() {			$('.customerReviews .rate img', product_base).removeClass('hover');			if (rate_clicked > 0) {	  			for (var i = 0; i < 5; i++) {	  				if (i <= rate_clicked-1) {	  					$('#star-'+i).addClass('hover');		  			}	  			}			}		});		$('.r-show-more').mouseover(function() {			$('.r-over').show();		});		$('.r-show-more').mouseout(function() {			$('.r-over').hide();		});		$('.otfilter select').unbind('change').change(function() {			var found = false;			$('.otfilter select').each(function() {				if ($(this).val()) {					found = true;				}			});			if (found) {				$('.otfilter .submit').addClass('active');			}		});		$(qadd+'.otfilter .submit').click(function() {			filter_variants(1);			$('.otfilter .submit').removeClass('active');		});		$('.otfilter .reset').unbind('click').click(function() {			if ($(this).hasClass('active')) {				for (var i = 0; i < document.otfilter.elements.length; i++)					document.otfilter.elements[i].value='';				filter_variants(2);				$(this).removeClass('active');				$('.otfilter .submit').removeClass('active');			}		});		$('.sorting li').unbind('click').click(function() {			if ($(this).attr('id') && !$(this).hasClass('active')) {				$(qadd+'.sorting li').removeClass('active');				$(this).addClass('active');				filter_variants(0,$(this).attr('id'));			}		});        variantsClicks();		$('.getquote').click(function(){/*				popup.postprocessRequestCallback = function()				{					popup.postprocessRequest.apply(popup, arguments);					$(qadd+'.product-image-gallery a').eq(0).trigger('click');				}*/			if (!option_selected())				return false;			var options = '';			$(qadd+'.product-option textarea').each(function(){				var name = $(this).attr('name').replace('product_options[', '');				name = name.replace(']', '');				options += name+'(|,|)'+encodeURIComponent($(this).val())+'(|;|)';			});			$(qadd+'.product-option input').each(function(){				var name = $(this).attr('name').replace('product_options[', '');				name = name.replace(']', '');				options += name+'(|,|)'+encodeURIComponent($(this).val())+'(|;|)';			});			$(qadd+'.product-option select').each(function(){				var name = $(this).attr('name').replace('product_options[', '');				name = name.replace(']', '');				options += name+'(|,|)'+encodeURIComponent($(this).val())+'(|;|)';			});			popup.load(				URLHandler.buildURL({					target:			'get_quote',					action:			'',					productid:		$(this).attr('id').replace('gq', ''),					only_center:	1,					product_options:options,					amount:			$(qadd+'[name=amount]').val()				}),				'get-quote',				function () {					oid = 0;					qadd = '';					$('.formError').hide();				},				50000			);		});		if (self.location.hash) {			$('.product-details-tabs .tabs li a#link-' + self.location.hash.substr(1), product_base).click();		}}$('body').click(	function() {		if (!qty_clicked)			$('.cquantity .values').hide();		qty_clicked = false;		if (!image_popup_clicked)			$('.image_popup').hide();		image_popup_clicked = false;	});$(function() {	if ($('.related-delim .related-items').size() == 1 && $('.related-delim .related-exist .product-details-bottom-tabs').size() == 0) {		$('.product-details-tabs .tab-container').height(427);	}});function make_gallery_click_on_quick_look() {	$('.product-quicklook .gallery_left, .product-quicklook .vgallery_left').unbind('click').click(function() {		var visible_id = 0;		var previous_id = 0;		var prev_id = 0;		if ($(this).hasClass('vgallery_left')) {			$('.product-quicklook .variants-gallery ul').each(function() {				var id = $(this).attr('id').substring(9, 10);				if (!$(this).hasClass('inactive')) {					visible_id = id;					previous_id = prev_id;				}				prev_id = id;			});			$('.product-quicklook .variants-gallery ul').addClass('inactive');			if (previous_id == 0 && visible_id == 0)				$('#vgallery_'+prev_id+'_quick_look').removeClass('inactive');			else				$('#vgallery_'+previous_id+'_quick_look').removeClass('inactive');		} else {			$('.product-quicklook .product-image-gallery ul.dgallery').each(function() {				var id = $(this).attr('id').substring(8, 9);				if (!$(this).hasClass('inactive')) {					visible_id = id;					previous_id = prev_id;				}				prev_id = id;			});			$('.product-quicklook .product-image-gallery ul').addClass('inactive');			if (previous_id == 0 && visible_id == 0)				$('#gallery_'+prev_id+'_quick_look').removeClass('inactive');			else				$('#gallery_'+previous_id+'_quick_look').removeClass('inactive');		}	});	$('.product-quicklook .gallery_right, .product-quicklook .vgallery_right').unbind('click').click(function() {		var visible_id = 0;		if ($(this).hasClass('vgallery_right')) {			var visible_id = 0;			$('.product-quicklook .variants-gallery ul').each(function() {				var id = $(this).attr('id').substring(9, 10);				if (!$(this).hasClass('inactive')) {					visible_id = id;				}			});			$('.product-quicklook .variants-gallery ul').addClass('inactive');			var defined = false;			$('.product-quicklook .variants-gallery ul').each(function() {				var id = $(this).attr('id').substring(9, 10);				if (id > visible_id && !defined) {					$(this).removeClass('inactive');					defined = true;				}			});			if (!defined) {				$('#vgallery_0_quick_look').removeClass('inactive');			}		} else {			$('.product-quicklook .product-image-gallery ul.dgallery').each(function() {				var id = $(this).attr('id').substring(8, 9);				if (!$(this).hasClass('inactive')) {					visible_id = id;				}			});			$('.product-quicklook .product-image-gallery ul').addClass('inactive');			var defined = false;			$('.product-quicklook .product-image-gallery ul.dgallery').each(function() {				var id = $(this).attr('id').substring(8, 9);				if (id > visible_id && !defined) {					$(this).removeClass('inactive');					defined = true;				}			});			if (!defined) {				$('#gallery_0_quick_look').removeClass('inactive');			}		}	});}function product_options(o) {	if (oid == 1) {		var price = product_price_ql,			weight = product_weight_ql;	} else {		var price = product_price,			weight = product_weight;	}	var variantid = 0;	if ($(qadd+'#hasVariants').size() > 0) {		$(qadd+'.add2cart').addClass('add2cartN');		var tmp = getVariantId(),			idx = tmp[1];		variantid = tmp[0];//		if ($(qadd+'.product-image-gallery').size() > 0) {			if (variantid > 0 && variants[oid][idx][5].length > 0) {				var html = '';				for (var x in variants[oid][idx][5]) {					if (x == 0 || x == 4 || x == 9)						html += '<tr>';					html += '<td>'+variants[oid][idx][5][x]+'</td>';					if (x == 3 || x == 7)						html += '</tr>';				}				html += '</tr>';//bc = false;//alert(html);//console.log('1');				$(qadd+'.product .photo table').html(html);				switch_photo($(qadd+'.product .photo table a:first'));/*				var idir = $('#images_dir').attr('src').replace('gallery_left.gif', '');				if ($(qadd+'.ql-zoom').size() == 0) {					var addid = '';				} else {					var addid = '_quick_look';				}				var html = '<ul id="vgallery_0'+addid+'" class="vgallery">';				var i = 0;				for (var x in variants[oid][idx][5]) {					if (i != 0 && i % 3 == 0) {						html += '</ul><ul id="vgallery_'+i+addid+'" class="vgallery inactive">';					}					html += '<li>'+variants[oid][idx][5][x]+'</li>';					i++;				}				html += '</ul>';				if (i > 2) {					html += '<img src="'+idir+'/gallery_left.gif" class="vgallery_left" alt="" />';					html += '<img src="'+idir+'/gallery_right.gif" class="vgallery_right" alt="" />';				}				$(qadd+'.product-image-gallery').hide();				$(qadd+'.variants-gallery').html(html); 				$(qadd+'.variants-gallery').show(); 				$(qadd+'.variants-gallery').addClass('isvisible');				if ($(qadd+'.ql-zoom').size() == 0) {					var next = $('#vgallery_0');				} else {					var next = $('#vgallery_0_quick_look');				}*/			} else if ($(qadd+'.variants-gallery').hasClass('isvisible')) {				$(qadd+'.product-image-gallery').show();				$(qadd+'.variants-gallery').hide();				if ($(qadd+'.ql-zoom').size() == 0) {					var next = $('#gallery_0');				} else {					var next = $('#gallery_0_quick_look');				}			} else {				if (oid == 0)					$(qadd+'.product .photo table').html(default_images);				else					$(qadd+'.product .photo table').html(default_images_ql);			}/*			if ((variantid > 0 && variants[oid][idx][5].length > 0) || $(qadd+'.variants-gallery').hasClass('isvisible')) {				var middle = $('img.middle', next).eq(0);				if (middle && middle.attr('src')) {					$('.image .product-photo img')							.hide()							.attr('src',		middle.attr('src'))							.attr('width',	middle.attr('width'))							.attr('height', middle.attr('height'))							.show();					var shiftX = Math.max(0, parseInt($('.image .product-photo', product_base).css('width')) - middle.attr('width'));					var shiftY = Math.max(0, parseInt($('.image .product-photo', product_base).css('height')) - middle.attr('height'));					$('.image .product-photo img').css('padding', shiftY/2 + 'px ' + shiftX/2 + 'px');				}				if ($('a', next).attr('rev')) {					eval('var tmp = {' + $('a', next).attr('rev') + '}');				}				if ($(qadd+'.ql-zoom').size() == 0) {					$(qadd+'.product-image-gallery a')						.unbind('click')						.colorbox(							{								onComplete: function() {									$(qadd+'#cboxCurrent').css('display', 'none');								},								onClosed: function() {//									o.hideLightbox();								}							}						);//					o.hideLightbox();					make_gallery_click();					if (!(variantid > 0) || variants[oid][idx][5].length == 0) {						$(qadd+'.dgl').eq(0).trigger('click');						$(qadd+'.dgr').eq(0).trigger('click');						$(qadd+'.pigc a').eq(0).trigger('click');					} else {						$(qadd+'.variants-gallery a').eq(0).trigger('click');					}				} else {//					o.hideLightbox();					make_gallery_click_on_quick_look();					if (!(variantid > 0) || variants[oid][idx][5].length == 0) {						$(qadd+'.dgl').eq(0).trigger('click');						$(qadd+'.dgr').eq(0).trigger('click');						$('.product-quicklook .pigc a').eq(0).trigger('click');					} else {						$('.product-quicklook .variants-gallery a').eq(0).trigger('click');					}				}				if (!(variantid > 0 && variants[oid][idx][5].length > 0) && $(qadd+'.variants-gallery').hasClass('isvisible')) {					$(qadd+'.variants-gallery').removeClass('isvisible');				}			}*///		}		if (variantid > 0) {			$(qadd+'.add2cart').removeClass('add2cartN');			if (variants[oid][idx][8])				$(qadd+'.fn.title').html(variants[oid][idx][8]);			else				$(qadd+'.fn.title').html($(qadd+'.fntitle').html());			$(qadd+'.product-sku').html(variants[oid][idx][0]);			if (variants[oid][idx][2]) {				$(qadd+'.product-weight').html(price_format(variants[oid][idx][2])+' <span class="weight-symbol">'+weight_symbol+'</span>');				$(qadd+'.product-weight').closest('tr').removeClass('hidden');			}			$(qadd+'.variants-data').show();			var html = '';			for (var x in groups[oid]) {				if (groups[oid][x][1]) {					if (options[oid][$('#po-'+groups[oid][x][0]).val()]) {						html += '<td nowrap><a href="javascript: void(0);" class="clearOption" id="co-'+groups[oid][x][0]+'">(x)</a> '+options[oid][$('#po-'+groups[oid][x][0]).val()]+'</td>';					}				}			}			html += '<td nowrap><a href="javascript: void(0);" class="clearAll">Effacer tous les</a></td>';			$(qadd+'.variants-data table').html(html);			$('.clearOption').unbind('click').click(function() {				var groupid = $(this).attr('id').replace('co-', '');				$('#pot-'+groupid).html('');				$('#pot-'+groupid).hide();				$('#poa-'+groupid).hide();				$('#pog-'+groupid+' img.checked').remove();				$('#po-'+groupid).val('');				map_variants(o);				product_options(o);			});			$('.clearAll').unbind('click').click(function() {				for (var x in groups[oid]) {					var groupid = groups[oid][x][0];					$('#pot-'+groupid).html('');					$('#pot-'+groupid).hide();					$('#poa-'+groupid).hide();					$('#pog-'+groupid+' img.checked').remove();					$('#po-'+groupid).val('');				}				map_variants(o);				product_options(o);			});			price = variants[oid][idx][1];			var old_price = price;			if (variants[oid][idx][7].length > 0) {				var item_amount = $(qadd+'[name=amount]').val();				var hv = [];				var i = 0;				for (var x in variants[oid][idx][7]) {					if (variants[oid][idx][7][x][0] <= item_amount) {						price = variants[oid][idx][7][x][1];					}					hv[i] = variants[oid][idx][7][x];					i++;				}				var html = "<tr><th class='left'>Quantité</th><th>Prix Par Unité</th></tr>";				html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">$'+price_format(old_price)+'</th></tr>';				for (var x in hv) {					if (x == hv.length-1) {						html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">$'+price_format(hv[x][1])+'</th></tr>';					} else {						html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">$'+price_format(hv[x][1])+'</th></tr>';					}				}				$(qadd+'.price-breaks div table').html(html);				$(qadd+'table.product-qty').addClass('with-p-b');				$(qadd+'.price-breaks').show();				$(qadd+'.price-breaks div').show();				$(qadd+'.price-breaks div').height($(qadd+'.price-breaks div table').height());				$(qadd+'.price-breaks div').hide();			} else {				$(qadd+'.price-breaks').hide();				$(qadd+'table.product-qty').removeClass('with-p-b');			}			var tmp = $(qadd+'.quantity-box-container input').attr('class').split(" ");			var classes = '';			for (var x in tmp) {				if (tmp[x].indexOf('validate[') > -1) {					classes += "min[1],max["+variants[oid][idx][3].toString()+"]] ";				} else {					classes += tmp[x]+' ';				}			}			if ($(qadd+'.quantity-box-container input').val() > variants[oid][idx][3]) {				$(qadd+'.quantity-box-container input').val(variants[oid][idx][3]);			}			$(qadd+'.quantity-box-container input').attr('class', classes);			if (variants[oid][idx][3].toString() == '0') {				console.log(idx);				$(qadd+'.add2cart').addClass('add2cartN');				$(qadd+'#quantity').hide();				$(qadd+'.price-breaks').hide();				$(qadd+'#out_of_stock').show();			} else {				$(qadd+'#out_of_stock').hide();				$(qadd+'#quantity').show();				if ($(qadd+'#quantity input').val() < 1)					$(qadd+'#quantity input').val('1');			}			$(qadd+'.options_container').each(function() {				if ($(this).find('img.checked').size() == 0) {					var gid = $(this).attr('id').replace('pog-', '');					$(qadd+'#pot-'+gid).html(' <b class="optional">(Optional)</b>');					$(qadd+'#pot-'+gid).show();				}			});		} else {			if ($(qadd+'.fntitle').size() > 0)				$(qadd+'.fn.title').html($(qadd+'.fntitle').html());			var cnt = 0,				cnt2 = 0;			$(qadd+'.options_container, '+qadd+'.product-option select').each(function() {				if (!$(this).hasClass('novar')) {					cnt2++;					if ($(this).get(0).tagName == 'DIV') {						if ($('#po-'+$(this).attr('id').replace('pog-', '')).val())							cnt++;					} else if ($(this).val())						cnt++;				}			});			if (cnt == cnt2) {				$('[name="options_ex"]').val(1);				bc = false;				alert("Cette option n'est pas disponible");			} else {				$('[name="options_ex"]').val(0);			}			$(qadd+'.variants-data').hide();			$(qadd+'.price-breaks').hide();			$(qadd+'table.product-qty').removeClass('with-p-b');//			$(qadd+'.options_container').each(function() {//				var gid = $(this).attr('id').replace('pog-', '');//				$(qadd+'#pot-'+gid).html('');//				$(qadd+'#pot-'+gid).hide();//			});		}	} else if (w_prices[oid] && w_prices[oid].length > 0) {//		alert('1');		var item_amount = $(qadd+'[name=amount]').val();		var hv = [];		var i = 0;		var old_price = price;		for (var x in w_prices[oid]) {			if (w_prices[oid][x][0] <= item_amount) {				price = w_prices[oid][x][1];			}			hv[i] = w_prices[oid][x];			i++;		}//alert(price);		var html = "<tr><th class='left'>Quantité</th><th>Prix Par Unité</th></tr>";		html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">$'+price_format(old_price)+'</th></tr>';		for (var x in hv) {			if (x == hv.length-1) {				html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">$'+price_format(hv[x][1])+'</th></tr>';			} else {				html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">$'+price_format(hv[x][1])+'</th></tr>';			}		}		$(qadd+'.price-breaks div table').html(html);		$(qadd+'table.product-qty').addClass('with-p-b');		$(qadd+'.price-breaks').show();		$(qadd+'.price-breaks div').show();		$(qadd+'.price-breaks div').height($(qadd+'.price-breaks div table').height());		$(qadd+'.price-breaks div').hide();	}	if (exceptions[oid] && exceptions[oid].length > 0) {		var ex = exceptions[oid],			ex_ok = true;		for (var x in ex) {			var found = true;			for (var c in ex[x]) {				var value = $('#po-'+c).val();				if (!value) {					ex_ok = true;					found = false;					break;				}				if (value != ex[x][c]) {					found = false;					break;				}			}			if (found) {				ex_ok = false;				break;			}		}    	if (!ex_ok) {			$('[name="options_ex"]').val(1);			bc = false;			alert("Cette option n'est pas disponible");		} else			$('[name="options_ex"]').val(0);	}	if ($(qadd+'.quantity-box-container input').val() > product_avail[oid]) {		$(qadd+'.quantity-box-container input').val(product_avail[oid]);	}	if (!variantid && $(qadd+'.product-options').size() > 0) {		var price_modifier = 0,			weight_modifier = 0;		for (var x in groups[oid]) {			for (var y in groups[oid][x][3]) {				if ($(qadd+'#po-'+x).val() == y) {					if (groups[oid][x][3][y]) {						var modifier = groups[oid][x][3][y];						if (modifier[1] == '%') {							price_modifier += parseFloat(price) * parseFloat(modifier[0]) / 100;						} else {							price_modifier += parseFloat(modifier[0]);						}						if (modifier[3] == '%') {							weight_modifier += parseFloat(weight) * parseFloat(modifier[2]) / 100;						} else {							weight_modifier += parseFloat(modifier[2]);						}					}				}			}		}		$(qadd+'[name=nongstprice]').val(parseFloat(price)+parseFloat(price_modifier));		$('.price-breaks table th').each(function() {			if ($(this).hasClass('right')) {				var pr = parseFloat($(this).attr('id').replace('whpr-', ''));				if (pr > 0) {					if ($(this).hasClass('default')) {						$(this).html('$'+price_format(old_price+parseFloat(price_modifier)));						$(this).attr('id', 'whpr-'+price_format(old_price+parseFloat(price_modifier)));					} else {						$(this).html('$'+price_format(pr+parseFloat(price_modifier)));						$(this).attr('id', 'whpr-'+price_format(pr+parseFloat(price_modifier)));					}				}			}		});		$(qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)+parseFloat(price_modifier)));		weight = parseFloat(weight)+parseFloat(weight_modifier);		$(qadd+'.product-weight').html(price_format(weight)+' <span class="weight-symbol">'+weight_symbol+'</span>');	} else {		$(qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)));	}	if (oid == 0) {		recalculate_gst();	}//	map_variants(o);}function getVariantId(r) {	var variantid = 0;	var idx = 0;	for (var x in variants[oid]) {		var c = 0;		for (var y in variants[oid][x][4])			c++;		var c2 = $(qadd+'.options_container div img.checked').size();		$(qadd+'.product_options').each(function(){			if ($(this).val() > 0 && !$(this).hasClass('novar'))				c2++;		});		if (c == c2) {			variantid = variants[oid][x][6];			idx = x;			for (var y in variants[oid][x][4])				if ($(qadd+'#po-'+y).val() != variants[oid][x][4][y]) {					variantid = false;					break;				}			if (variantid)				break;		}	}	return [variantid, idx];}function map_variants(o, groupid) {	var ids = [],		vids = [],		cnt = 0;	$(qadd+'.options_container, '+qadd+'.product-option select').each(function() {		if (!$(this).hasClass('novar'))			cnt++;	});	if (cnt > 1) {		var ids = [];		$(qadd+'.options_container, '+qadd+'.product-option select').each(function() {			if (!$(this).hasClass('novar')) {				var gid = $(this).attr('id').replace('pog-', '');				if ($(this).get(0).tagName == 'DIV') {					ids[gid] = $('#po-'+gid).val();				} else {					ids[$(this).attr('id').replace('po-', '')] = $(this).val();				}			}		});		var vids = [];		for (var x in variants[oid]) {			var found = true;			for (var y in variants[oid][x][4]) {				if (ids[y] > 0) {					var found2 = false;					for (var z in ids) {						if (z == y && ids[z] == variants[oid][x][4][y]) {							found2 = true;							break;						}					}					if (!found2) {						found = false;						break;					}				}			}			if (found) {				vids[x] = 1;			}		}		var ids = [];		for (var x in vids) {			for (var y in variants[oid][x][4]) {				if (!ids[y]) {					ids[y] = [];				}				ids[y][variants[oid][x][4][y]] = 1;			}		}		var ids2 = [];		for (var x in ids) {			for (var y in ids[x]) {				ids2[y] = 1;			}		}		remove_options(groupid, ids2);	}	$('.help-option').remove();	$(qadd+'.unavailable').each(function() {		if (!$(this).parent().hasClass('novar')) {			var html = '<table>',				id = $(this).parent().attr('id'),				found = false;			$(qadd+'.options_container img.checked').each(function() {				if (id != $(this).parent().parent().attr('id')) {					html += '<tr><td>'+$(this).parent().attr('data-title')+'</td><td class="clear"><a href="javascript: void(0);" class="clear-option" id="co-'+$(this).parent().parent().attr('id').replace('pog-', '')+'">Claire</a></td></tr>';					found = true;				}			});			$(qadd+'.product_options').each(function() {				if (id != $(this).attr('id').replace('po-', '')) {					html += '<tr><td>'+$(this).find('option:selected').text()+'</td><td class="clear"><a href="javascript: void(0);" class="clear-option" id="co-'+$(this).attr('id').replace('po-', '')+'">Claire</a></td></tr>';					found = true;				}			});		}		html += '</table>';		if (found)			$(this).append("<div class='help-option'>Option Non Disponible en Combinaison avec"+html+'<img src="'+current_location+'/images/spacer.gif" alt="" /></div>');		else			$(this).append("<div class='help-option'>Option Non Disponible<img src='"+current_location+"/images/spacer.gif' alt='' /></div>");	});	$('.clear-option').unbind('click').click(function() {		$(this).parent().parent().parent().parent().parent().parent().find('.help-option').remove();		var groupid = $(this).attr('id').split('-')[1];		$('#pot-'+groupid).html('');		$('#pot-'+groupid).hide();		$('#poa-'+groupid).hide();		$('#pog-'+groupid+' img.checked').remove();		$('#po-'+groupid).val('');		map_variants(o, groupid);		product_options(o);		clear_clicked = true;	});}function remove_options(groupid, ids) {	$(qadd+'.options_container div').each(function() {		if (!$(this).parent().hasClass('novar') && !$(this).hasClass('clear') && !$(this).hasClass('help-option')) {			var gid = $(this).parent().attr('id').replace('pog-', '');			if (gid != groupid) {				var optid = $(this).attr('id').replace('poi-', '');				if (ids[optid] == 1) {					$(this).removeClass('unavailable');				} else {					$(this).addClass('unavailable');					if ($(this).find('img.checked').size > 0) {						$(this).find('img.checked').remove();						$(qadd+'#pot-'+groupid).html('');						$(qadd+'#pot-'+groupid).hide();						$(qadd+'#poa-'+groupid).hide();						$(qadd+'#po-'+groupid).val('');					}				}			}		}	});	$(qadd+'.product-option select').each(function() {		var gid = $(this).attr('id').replace('po-', '');		if (!$(this).hasClass('novar') && gid != groupid) {			for (var x = 0; x < $(this).find('option').length; x++) {				var opt = $(this).find('option:eq('+x+')');				var optid = opt.val();				if (!optid || ids[optid] == 1) {					opt.removeClass('unallowed');					opt.attr('disabled', false);				} else {					opt.addClass('unallowed');					opt.attr('disabled', true);				}			}		}	});}function recalculate_gst() {	var price = $('[name=nongstprice]').val();	if (price) {		if (gst_applied) {			$('.product-to-cart h3').html('$' + price_format(price * 1.1));			$('.price-breaks table th').each(function() {				if ($(this).hasClass('td')) {					var pr = parseFloat($(this).attr('id').replace('whpr-', ''));					if (pr > 0) {						$(this).html('$'+price_format(pr * 1.1));					}				}			});		} else {			$('.product-to-cart h3').html('$' + price_format(price));		}	}}function custom_quantity() {	var cq_zindexes = parseInt($(qadd+'.cquantity').size()) + 5;	$(qadd+'.cquantity').each(		function() {			var max = parseInt($(this).find('.values').html());			if (!IsNumeric(max))				return true;			if (max == 0) {				$(this).find('.value').html('0');				$(this).parent().find('.related-to-cart').hide();			} else {				var current = parseInt($(this).find('.value').html());				if (max > 50)					max = 50;				var html = '<ul>';				for (var i = 1; i <= max; i++) {					html += '<li'+(i == current?' class="selected"':'')+'>'+i+'</li>';				}				html += '</ul>';				$(this).find('.values').html(html);				$(this).zIndex(cq_zindexes);				cq_zindexes--;			}		}	).unbind('click').click(		function() {			if ($(this).hasClass('sbclicked')) {				$(this).removeClass('sbclicked');			} else {				qty_clicked = true;				var was_visible = false;	 			if ($(this).find('.values').is(':visible')) {	 				$(this).find('.values').hide();	 				was_visible = true;		 		}				$('.cquantity .values').hide();				if (!was_visible && !$(this).hasClass('clicked')) {					destroy_custom_scrolls_bars($(this).find('.values'));					$('.cquantity .values').hide();					$(this).find('.values').show();					custom_scrolls_bars($(this).find('.values'));					$(this).find('.jspVerticalBar').click(function() {						qty_clicked = true;						$(this).parent().parent().parent().addClass('sbclicked');					});					$(this).find('.values li').unbind('click').click(						function() {							$('.values li').removeClass('selected');							$(this).addClass('selected');							$(this).parent().parent().parent().parent().parent().find('.value').html($(this).html());							$(this).parent().parent().parent().parent().hide();							$('.cquantity').removeClass('clicked');							$(this).parent().parent().parent().parent().parent().addClass('clicked');						}					);				}				$('.cquantity').removeClass('clicked');   			}		}	);}function filter_variants(f,sort) {	var data = '';	for (var i = 0; i < document.otfilter.elements.length; i++)		if (document.otfilter.elements[i].name != '' && document.otfilter.elements[i].value != '')			data += document.otfilter.elements[i].name+'='+cp_escape(document.otfilter.elements[i].value)+'&';	if (f == 1) {		if (data && $('.otfilter .submit').hasClass('active'))			$('.otfilter .reset').addClass('active');		else			return false;	}	$.ajax({		type: 'GET',		url: '?productid='+$('form.product-details', product_base).get(0).elements.namedItem('productid').value+'&'+data+'sort='+sort+'&q=store/main/?/widget-XLite\\Module\\XCDev\\Medshop\\View\\OptionsTableFilter',		beforeSend: function ( xhr ) {			if ($('.variants-list').width() < 800)				$('.Table-tab .progress-bar').css('left', '241px');			else				$('.Table-tab .progress-bar').css('left', '500px');			$('.Table-tab .progress-bar').show();			$('.variants-list').addClass('variants-loading');		}	}).done(function(data) {		$('.variants-list').hide();		$('.Table-tab .progress-bar').hide();		$('.variants-list').removeClass('variants-loading');		destroy_custom_scrolls_bars($('.variants-list'));		$('.variants-list').html(data);		$('.variants-list').html($('.variants-list .ajax-container-loadable').html());		$('.variants-list').show();		custom_scrolls_bars($('.variants-list'));		variantsClicks();		custom_quantity();	});}function variantsClicks() {	$('.sku img').unbind('click').click(function() {		$('.otfilter .image_popup .img').remove();		$('.otfilter .image_popup').append('<div class="img">'+$(this).parent().find('.image').html()+'</div>');		$('.otfilter .image_popup').show();		image_popup_clicked = true;	});	$('.otfilter .image_popup .close').unbind('click').click(function() {		$('.otfilter .image_popup').hide();	});	$('.otfilter .image_popup').unbind('click').click(function() {		image_popup_clicked = true;	});	$('.v2cart, .wp img').unbind('click').click(function() {		if ($(this).hasClass('v2cart')) {			var amount = 1;			var vid = $(this).parent().attr('id').replace('v-', '');		} else {			var amount = $(this).parent().find('.value').html();			var vid = $(this).parent().parent().attr('id').replace('v-', '');		}		var pid = $('.product-details [name=productid]').val();		var data = 'target=cart&action=add&productid='+pid+'&variantid='+vid+'&amount='+amount+'&returnURL='+$(qadd+'[name=returnURL]').val();		var o2 = this;		$.ajax({			type: 'POST',			url: '/store/cart',			data: data,			beforeSend: function ( xhr ) {				if ($(o2).hasClass('v2cart')) {					$(o2).parent().append('<img src="'+$('.spacer-src').attr('src')+'" class="loading" alt="Please, wait." />');					$(o2).hide();					$(o2).parent().find('.wp').addClass('wphidden');				} else {					$(o2).parent().parent().append('<img src="'+$('.spacer-src').attr('src')+'" class="loading" alt="Please, wait." />');					$(o2).parent().parent().find('.v2cart').hide();					$(o2).parent().addClass('wphidden');				}			}		}).done(function(data) {			$('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');			$('#status-messages').slideDown(50);			setTimeout(function() {$('#status-messages').slideUp(500);$('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);			$.ajax({				type: 'GET',				url: '?productid='+pid+'&variantid='+vid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',				data: data			}).done(function(data) {				core.trigger('updatecart', eval('({"items":[]})'));				var qty = -1;				if (data != 'N') {					qty = data.split('|')[0];					$(o2).parent().find('.values').html(qty);				}				if (qty == 0) {					if ($(o2).hasClass('v2cart')) {						$(o2).parent().parent().addClass('ofs');						$(o2).parent().parent().html('Out Of Stock');					} else {						$(o2).parent().parent().parent().addClass('ofs');						$(o2).parent().parent().parent().html('Out Of Stock');					}				} else {					custom_quantity();					if ($(o2).hasClass('v2cart')) {						$(o2).parent().find('.loading').remove();						$(o2).parent().find('.wp').removeClass('wphidden');						$(o2).show();					} else {						$(o2).parent().parent().find('.loading').remove();						$(o2).parent().parent().find('.v2cart').show();						$(o2).parent().removeClass('wphidden');					}				}			});		});	});}function option_selected() {	if ($(qadd+'#hasVariants').size() > 0) {		if ($(qadd+' input.quantity').val() == 0)			return false;		else {			var tmp = getVariantId();			var variantid = tmp[0];			if (!(variantid > 0)) {				$(qadd+'.options-error').show();				setTimeout('hideOptionsError()', 1000);				return false;			}		}	} else {		for (var x in groups[oid]) {			if (!$(qadd+'#po-'+x).get(0)) {				continue;			}			if (!($(qadd+'#po-'+x).val() > 0)) {				$(qadd+'.options-error').show();				setTimeout('hideOptionsError()', 1000);				return false;			}		}	}	return true;}function validate_gq() {	if (!document.gqform.name.value) {		document.gqform.name.focus();		$('[name=gqform] [name=name]').addClass('input-incorrect');		return false;	}	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	if (!document.gqform.email.value || !emailReg.test(document.gqform.email.value)) {		document.gqform.email.focus();		$('[name=gqform] [name=email]').addClass('input-incorrect');		return false;	}	var data = '&';	for (var i = 0; i < document.gqform.elements.length; i++) {		if (document.gqform.elements[i].name != '')			data += document.gqform.elements[i].name+'='+cp_escape(document.gqform.elements[i].value)+'&';	}	$.ajax({		type: 'GET',		url: '?q=store/main/?'+data+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetQuote',		beforeSend: function (xhr) {			$('[name=gqform]').html('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');		}	}).done(function(data) {		$('[name=gqform]').html('<h2>Thank you. We will get back soon.</h2>');	});	return false;}function add_to_cart(productid, is_quick) {	aload();	$('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');	setTimeout(function() {		$('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');		setTimeout(function() {			$('.product_popup').remove();		}, 200);	}, 200);	if (!mobile_design)		$('body').append('<div class="popup no_animation cart_popup hidden"></div>');	$.ajax({		url: current_location+'/cart/add',		type: 'POST',		data: (is_quick == 'Y' ? "productid="+productid+"&amount=1" : $(qadd+'form[name="product-details"]').serialize())	}).done(function(r) {		unload();		if (r == "1") {			alert("S'il vous plaît, sélectionnez options");			return false;		}		if (mobile_design) {			alert("Produit a été ajouté à votre panier.<br /><br /><a href='/cart'><button>Voir le panier</button></a> &nbsp; <a href='/checkout'><button>La caisse</button></a>", 1);		}		var result = r.toString().split(ajax_delimiter);		$('.cart_popup').html('<img src="/images/close.png" class="close"/>'+result['1']);		$('#minicart').html(result['0']);		$('#head_mobile #minicart').html(result['0']);		unload();		fade();		var top = ($(window).scrollTop() + $(window).height() / 2 - $('.cart_popup').height() / 2) - 50;		if (top < $(window).scrollTop())			top = $(window).scrollTop() + 30;		$('.cart_popup').css('top', top + 'px');		$('.cart_popup').css('opacity', 0).css('left', ($(window).width() / 2 - $('.cart_popup').width() / 2 - 20) + 'px');		$('.cart_popup').removeClass('no_animation');		$('.cart_popup').css('opacity', 0).css('transform', 'matrix(1, 0, 0, 1, 0, 0)');		setTimeout(function() {			$('.cart_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');			setTimeout(function() {				$('.cart_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');			}, 200);		}, 200);		$('.cart_popup').removeClass('hidden');		$(window).resize(function() {			var top = ($(window).scrollTop() + $(window).height() / 2 - $('.cart_popup').height() / 2) - 50;			if (top < $(window).scrollTop())					top = $(window).scrollTop() + 30;			$('.cart_popup').css('top', top + 'px');			$('.cart_popup').css('left', ($(window).width() / 2 - $('.cart_popup').width() / 2 - 20) + 'px');		});		$('.cart_popup .close, .cart_popup .close_popup').click(function() {			$('.fade').click();			return;    		var e = $('.cart_popup');	    	e.slideUp();	    	unfade();			setTimeout(function(){e.remove()}, 500);		});		$('.cart_popup').click(function() {			bc = false;			bb = true;		});		cart_clicks();	});	return false;}function check_exceptions() {  for (var x in exceptions) {    if (!hasOwnProperty(exceptions, x) || isNaN(x))      continue;    var found = true;    for (var c in exceptions[x]) {      if (!hasOwnProperty(exceptions[x], c))        continue;      var value = getPOValue(c);      if (!value)        return true;      if (value != exceptions[x][c]) {        found = false;        break;      }    }    if (found)      return false;  }  return true;}function switch_photo(a) {	if (mobile_design) {		$('#zoom-mobile').html('<img src="'+a.attr('href')+'">');	} else if ($('.product_popup').is(':visible')) {		$('.product_popup #zoom').html('<img src="'+a.attr('href')+'">');		$('.product_popup #zoom').zoom();	} else {		$('#zoom').html('<img src="'+a.attr('href')+'">');		$('#zoom').zoom();	}	return false;}function send_to_friend() {	if (!$('#send_to_friend [name="name"]').val()) {		func_highlight($('#send_to_friend [name="name"]'));		return false;	}	var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	if (!$('#send_to_friend [name="email"]').val() || !r.test($('#send_to_friend [name="email"]').val())) {		func_highlight($('#send_to_friend [name="email"]'));		return false;	}	if (!$('#send_to_friend [name="friend"]').val() || !r.test($('#send_to_friend [name="friend"]').val())) {		func_highlight($('#send_to_friend [name="friend"]'));		return false;	}	$('#send_to_friend').submit();}function add_review() {	if (!$('#tab-5 [name="rating"]').val()) {		alert('Please, select your rating.');		return false;	}	if (!$('#tab-5 [name="name"]').val()) {		func_highlight($('#tab-5 [name="name"]'));		return false;	}	if (!$('#tab-5 [name="message"]').val()) {		func_highlight($('#tab-5 [name="message"]'));		return false;	}	aload();	$.ajax({		url: window.location.href,		type: 'POST',		data: $('#tab-5 form').serialize()	}).done(function(r) {		unload();		if (r == "1") {			alert("S'il vous plaît, entrez votre nom et votre message");			return false;		} else if (r == '2') {			recaptchaOnload();			alert("Captcha est incorrect");			return false;		} else if (r == '3') {			recaptchaOnload();			alert("Votre commentaire a été envoyé à la modération");			$('#tab-5 [name="name"]').val('');			$('#tab-5 [name="message"]').val('');			return false;		}	});}function add_wishlist(id) {	$.ajax({		url: current_location+'/wishlist?add='+id	}).done(function(r) {		alert("Produit a été ajouté à votre liste de Souhaits");	});}function buy_one_click(pid) {	alert("Nous vous contacterons bientôt<br /><input type='text' placeholder='"+lbl_buy1click+"' /> <a class='main-button'>Envoyer</a>", 1, '', 'buy_one_click');	$('.buy_one_click a.main-button').click(function() {		var val = $('.buy_one_click input').val();		if (!val)			return false;		$.ajax({			url: current_location+'/buy1click?productid='+pid+'&phone='+val		}).done(function(r) {			$('.buy_one_click').remove();			if (r == 'N') {				alert("Vous pouvez exiger vente rapide, pas plus d'une fois toutes les 10 secondes");			} else {				alert("S'il vous plaît, donnez-nous quelques minutes pour recevoir votre demande");			}		});		return false;	});}var recaptcha1, recaptcha2, recaptcha3, recaptcha4;function recaptchaOnload() {	if ($('#recaptcha_reviews').size()) {		try {			grecaptcha.reset(recaptcha1);		} catch (err) {		}		try {    	  var verifyCallback = function(response) {//      	  alert(response);	      };    	    recaptcha1 = grecaptcha.render(document.getElementById('recaptcha_reviews'), {        	  'sitekey' : $('#recaptcha_reviews').data('sitekey'),	          'callback' : verifyCallback    	    });		} catch (err) {		}	}	if ($('#recaptcha_s2f').size()) {		try {			grecaptcha.reset(recaptcha2);		} catch (err) {		}		try {    	  var verifyCallback = function(response) {//      	  alert(response);	      };    	    recaptcha2 = grecaptcha.render(document.getElementById('recaptcha_s2f'), {        	  'sitekey' : $('#recaptcha_s2f').data('sitekey'),	          'callback' : verifyCallback    	    });		} catch (err) {		}	}	if ($('#recaptcha_contact').size()) {		try {			grecaptcha.reset(recaptcha3);		} catch (err) {		}		try {    	  var verifyCallback = function(response) {//      	  alert(response);	      };    	    recaptcha3 = grecaptcha.render(document.getElementById('recaptcha_contact'), {        	  'sitekey' : $('#recaptcha_contact').data('sitekey'),	          'callback' : verifyCallback    	    });		} catch (err) {		}	}	if ($('#recaptcha_ticket').size()) {		try {			grecaptcha.reset(recaptcha4);		} catch (err) {		}		try {    	  var verifyCallback = function(response) {//      	  alert(response);	      };    	    recaptcha4 = grecaptcha.render(document.getElementById('recaptcha_ticket'), {        	  'sitekey' : $('#recaptcha_ticket').data('sitekey'),	          'callback' : verifyCallback    	    });		} catch (err) {		}	}}$(document).ready(function() {
	states_actions();
});

function states_actions() {
//		console.log('1');
	$('#country').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
//alert($(this).val());
		if (states[$(this).val()]) {
			var s = states[$(this).val()]['states'],
				html = '<select name="posted_data[state]" id="state">';
//alert(s);
			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			if ($('.admin-area').size())
				$('#state').closest('td').html('<div class="select-title">État</div>'+html);
			else
				$('#state').parent().html(html);

			$('#state').unbind('change').change(function() {
				user_state = $(this).val();
			});

//			alert(html);
		} else {
			if ($('.admin-area').size())
				$('#state').closest('td').html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');
			else
				$('#state').parent().html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');

			$('#state').unbind('keyup').keyup(function() {
				user_state = $(this).val();
			});

			if ($('.admin-area').size()) {
				try {
					custom_elements();
					reinitialize_mdl();
				} catch (err) {
				}
			}
		}
	});

	$('#country_checkout').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
//alert($(this).val());
		if (states[$(this).val()]) {
			var s = states[$(this).val()]['states'],
				html = '<select name="posted_data[state]" id="state_checkout">';
//alert(s);
			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			$('#state_checkout').parent().html(html);
//			alert(html);
			$('#state_checkout').unbind('change').change(function() {
				user_state = $(this).val();
			});
		} else {
			$('#state_checkout').parent().html('<input type="text" name="posted_data[state]" id="state_checkout" value="'+user_state+'" /></td>');
			$('#state_checkout').unbind('keyup').keyup(function() {
				user_state = $(this).val();
			});
		}

		try {
			checkout_changes();
		} catch (err) {
		}
	});

	setTimeout(function() {
		$('#country_checkout').trigger('change');
		$('#country').trigger('change');
	}, 100);
}var register_form = [];
register_form['firstname'] = "Prénom";
register_form['lastname'] = "Lastname";
register_form['email'] = "E-mail";
register_form['password'] = "Mot de passe";

register_form['address'] = "Adresse";
register_form['city'] = "Ville";
register_form['zipcode'] = "Zip/Postal code";
register_form['phone'] = "Téléphone";

$(document).ready(function() {	if (page == 'checkout') {		checkout_actions();
		coupon_actions();
		checkout_changes();
		$('#place_order *').attr('disabled', true);
	}
/*
	return;
	var i = $('form[name=checkout] input');
	i.focus(function() {
		var name = $(this).attr('name');
		$(this).removeClass('error_field');

		if (!$(this).val()) {
			$(this).addClass('def');
			$(this).val('');
			if (name == 'password')
				$(this).attr('type', 'password');
		}
	});

	i.blur(function() {
		var name = $(this).attr('name');
		if ($(this).val() == '') {
			$(this).removeClass('def');
			if (name == 'password')
				$(this).attr('type', 'text');

//			$(this).val(register_form[name]);
		}
	});

	i.keyup(function(e) {
		$('.register_error').hide();
		if (e.which == 13 || e.which == 10)
			$('form[name=checkout] button').trigger('click');
	});

	$('form[name=checkout] button').click(function() {
		var data = 'action=register&',
			emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		for (var x in register_form) {
			var elm = $('form[name=checkout] input[name='+x+']');
			var val = elm.val();
			if (x == 'password' && !$('#create_profile').is(':visible'))
				continue;

			if (val == register_form[x] || val == '' || (x == 'email' && !emailReg.test(val))) {
				elm.addClass('error_field');
				return false;
			}

			data += x+'='+val+'&';
		}

		aload();

		$.ajax({
			type: 'POST',
			data: data
		}).done(function(r) {
			unload();
   			if (r == '1') {
   				$('.register_error').hide();
   				document.checkout.submit();
   			} else {
   				$('.register_error').html(r);
   				$('.register_error').show();
   			}
		});
	});
*/
});var register_form = [];
register_form['firstname'] = "Prénom";
register_form['lastname'] = "Lastname";
register_form['email'] = "E-mail";
register_form['password'] = "Mot de passe";

register_form['address'] = "Adresse";
register_form['city'] = "Ville";
register_form['zipcode'] = "Zip/Postal code";
register_form['phone'] = "Téléphone";

$(document).ready(function() {	if (page == 'checkout') {		checkout_actions();
		coupon_actions();
		checkout_changes();
		$('#place_order *').attr('disabled', true);
	}
/*
	return;
	var i = $('form[name=checkout] input');
	i.focus(function() {
		var name = $(this).attr('name');
		$(this).removeClass('error_field');

		if (!$(this).val()) {
			$(this).addClass('def');
			$(this).val('');
			if (name == 'password')
				$(this).attr('type', 'password');
		}
	});

	i.blur(function() {
		var name = $(this).attr('name');
		if ($(this).val() == '') {
			$(this).removeClass('def');
			if (name == 'password')
				$(this).attr('type', 'text');

//			$(this).val(register_form[name]);
		}
	});

	i.keyup(function(e) {
		$('.register_error').hide();
		if (e.which == 13 || e.which == 10)
			$('form[name=checkout] button').trigger('click');
	});

	$('form[name=checkout] button').click(function() {
		var data = 'action=register&',
			emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		for (var x in register_form) {
			var elm = $('form[name=checkout] input[name='+x+']');
			var val = elm.val();
			if (x == 'password' && !$('#create_profile').is(':visible'))
				continue;

			if (val == register_form[x] || val == '' || (x == 'email' && !emailReg.test(val))) {
				elm.addClass('error_field');
				return false;
			}

			data += x+'='+val+'&';
		}

		aload();

		$.ajax({
			type: 'POST',
			data: data
		}).done(function(r) {
			unload();
   			if (r == '1') {
   				$('.register_error').hide();
   				document.checkout.submit();
   			} else {
   				$('.register_error').html(r);
   				$('.register_error').show();
   			}
		});
	});
*/
});function check_new_testimonial() {	var error = false;

	if (!$('#testimonial_name').val()) {
		func_highlight($('#testimonial_name'));
		error = true;
	}

	if (!$('#testimonial_message').val()) {		func_highlight($('#testimonial_message'));		error = true;
	}

	if (error)
		return false;}var ticket_cats = [],
	ticket_cat1 = '',
	ticket_cat2 = '',
	ticket_cat3 = '',
	ticket_cat4 = '',
	ticket_cat5 = '';

$(document).ready(function() {	if (page == 'ticket')
		make_ticket_form();});

function make_ticket_form() {	var html = '<select id="ticket_cat_1" name="ticket_cat_1"><option value=""></option>',
		array = [];

	for (var x in ticket_cats) {		if (in_array(ticket_cats[x][0], array))
			continue;
		array[array.length] = ticket_cats[x][0];		html += '<option value="'+ticket_cats[x][0].replace(/"/g, '&quot;')+'">'+ticket_cats[x][0]+'</option>';	}

	html += '</select><div class="ticket-tooltip" id="ticket-tooltip_1"></div><div class="mdl-tooltip" for="ticket-tooltip_1">Select version</div>';
	$('#ticket_category').html(html);
	$('#ticket_cat_1').change(function() {		$('#ticket_cat_2, #ticket_cat_3, #ticket_cat_4, #ticket_cat_5, #ticket_fields').remove();
		$('#ticket-tooltip_2, #ticket-label_2, #ticket-tooltip_3, #ticket-label_3, #ticket-tooltip_4, #ticket-label_4, #ticket-tooltip_5, #ticket-label_5').remove();
		ticket_cat1 = $(this).val();
		ticket_cat2 = '';
		ticket_cat3 = '';
		ticket_cat4 = '';
		ticket_cat5 = '';
		ticket_category_1();
	});}

function ticket_category_1() {
	var html = '<select id="ticket_cat_2" name="ticket_cat_2"><option value=""></option>',
		array = [],
		current_cat = [];

	for (var x in ticket_cats) {
		if (ticket_cats[x][0] == ticket_cat1) {			if (!ticket_cats[x][1])
				current_cat = [ticket_cats[x][6], ticket_cats[x][7]];

			if (in_array(ticket_cats[x][1], array) || !ticket_cats[x][1])
				continue;

			array[array.length] = ticket_cats[x][1];
			html += '<option value="'+ticket_cats[x][1].replace(/"/g, '&quot;')+'">'+ticket_cats[x][1]+'</option>';
		}
	}

	if (array.length) {
		html += '</select><div class="ticket-tooltip" id="ticket-tooltip_2"></div><div class="mdl-tooltip" for="ticket-tooltip_2">'+(current_cat[1] ? current_cat[1] : 'Select build for AX version selected above. If you are not sure or don’t see your version, choose "I don’t know".')+'</div>';
		$('#ticket_category').append('<div class="ticket-label" id="ticket-label_2">'+(current_cat[0] ? current_cat[0] : 'Build')+'</div>'+html);
		reinitialize_mdl();
		tooltips_clicks();
		$('#ticket_cat_2').change(function() {
			$('#ticket_cat_3, #ticket_cat_4, #ticket_cat_5, #ticket_fields').remove();
			$('#ticket-tooltip_3, #ticket-label_3, #ticket-tooltip_4, #ticket-label_4, #ticket-tooltip_5, #ticket-label_5').remove();
			ticket_cat2 = $(this).val();
			ticket_cat3 = '';
			ticket_cat4 = '';
			ticket_cat5 = '';
			ticket_category_2();
		});
	} else {
		make_tickets_fields();
	}
}

function ticket_category_2() {
	var html = '<select id="ticket_cat_3" name="ticket_cat_3"><option value=""></option>',
		array = [],
		current_cat = [];

	for (var x in ticket_cats) {
		if (ticket_cats[x][0] == ticket_cat1 && ticket_cats[x][1] == ticket_cat2) {
			if (!ticket_cats[x][2])
				current_cat = [ticket_cats[x][6], ticket_cats[x][7]];

			if (in_array(ticket_cats[x][2], array) || !ticket_cats[x][2])
				continue;

			array[array.length] = ticket_cats[x][2];
			html += '<option value="'+ticket_cats[x][2].replace(/"/g, '&quot;')+'">'+ticket_cats[x][2]+'</option>';
		}
	}

	if (array.length) {
		html += '</select>';
		html += '</select><div class="ticket-tooltip" id="ticket-tooltip_3"></div><div class="mdl-tooltip" for="ticket-tooltip_3">'+(current_cat[1] ? current_cat[1] : 'Select service type you want to request. Use guide on the right hand side to get the details on all the services AX prime offers.')+'</div>';
		$('#ticket_category').append('<div class="ticket-label" id="ticket-label_3">'+(current_cat[0] ? current_cat[0] : 'Service')+'</div>'+html);
		reinitialize_mdl();
		tooltips_clicks();
		$('#ticket_cat_3').change(function() {
			$('#ticket_cat_4, #ticket_cat_5, #ticket_fields').remove();
			$('#ticket-tooltip_4, #ticket-label_4, #ticket-tooltip_5, #ticket-label_5').remove();
			ticket_cat3 = $(this).val();
			ticket_cat4 = '';
			ticket_cat5 = '';
			ticket_category_3();
		});
	} else {
		make_tickets_fields();
	}
}

function ticket_category_3() {
	var html = '<select id="ticket_cat_4" name="ticket_cat_4"><option value=""></option>',
		array = [],
		current_cat = [];

	for (var x in ticket_cats) {
		if (ticket_cats[x][0] == ticket_cat1 && ticket_cats[x][1] == ticket_cat2 && ticket_cats[x][2] == ticket_cat3) {
			if (!ticket_cats[x][3])
				current_cat = [ticket_cats[x][6], ticket_cats[x][7]];

			if (in_array(ticket_cats[x][3], array) || !ticket_cats[x][3])
				continue;

			array[array.length] = ticket_cats[x][3];
			html += '<option value="'+ticket_cats[x][3].replace(/"/g, '&quot;')+'">'+ticket_cats[x][3]+'</option>';
		}
	}

	if (array.length) {
		html += '</select><div class="ticket-tooltip" id="ticket-tooltip_4"></div><div class="mdl-tooltip" for="ticket-tooltip_4">'+(current_cat[1] ? current_cat[1] : 'Select functional area that is relevant to your request. If you are not sure or don’t see option that fits, choose "Other".')+'</div>';
		$('#ticket_category').append('<div class="ticket-label" id="ticket-label_4">'+(current_cat[0] ? current_cat[0] : 'Area')+'</div>'+html);
		reinitialize_mdl();
		tooltips_clicks();
		$('#ticket_cat_4').change(function() {
			$('#ticket_cat_5, #ticket_fields').remove();
			$('#ticket-tooltip_5, #ticket-label_5').remove();
			ticket_cat4 = $(this).val();
			ticket_cat5 = '';
			ticket_category_4();
		});
	} else {
		make_tickets_fields();
	}
}

function ticket_category_4() {
	var html = '<select id="ticket_cat_5" name="ticket_cat_5"><option value=""></option>',
		array = [],
		current_cat = [];

	for (var x in ticket_cats) {
		if (ticket_cats[x][0] == ticket_cat1 && ticket_cats[x][1] == ticket_cat2 && ticket_cats[x][2] == ticket_cat3 && ticket_cats[x][3] == ticket_cat4) {
			if (!ticket_cats[x][4])
				current_cat = [ticket_cats[x][6], ticket_cats[x][7]];

			if (in_array(ticket_cats[x][4], array) || !ticket_cats[x][4])
				continue;

			array[array.length] = ticket_cats[x][4];
			html += '<option value="'+ticket_cats[x][4].replace(/"/g, '&quot;')+'">'+ticket_cats[x][4]+'</option>';
		}
	}

	if (array.length) {
		html += '</select><div class="ticket-tooltip" id="ticket-tooltip_5"></div><div class="mdl-tooltip" for="ticket-tooltip_5">'+current_cat[1]+'</div>';
		$('#ticket_category').append('<div class="ticket-label" id="ticket-label_5">'+current_cat[0]+'</div>'+html);
		reinitialize_mdl();
		tooltips_clicks();
		$('#ticket_cat_5').change(function() {
			$('#ticket_fields').remove();
			ticket_cat5 = $(this).val();
			make_tickets_fields();
		});
	} else {
		make_tickets_fields();
	}
}


function make_tickets_fields() {	var html = '<div id="ticket_fields">',
		array = [],
		current_cat = [];

//console.log(ticket_cat1+'|'+ticket_cat2+'|'+ticket_cat3+'|'+ticket_cat4+'|'+ticket_cat5);
	for (var x in ticket_cats) {
		if (ticket_cats[x][0] == ticket_cat1 && ticket_cats[x][1] == ticket_cat2 && ticket_cats[x][2] == ticket_cat3 && ticket_cats[x][3] == ticket_cat4 && ticket_cats[x][4] == ticket_cat5) {			for (var y in ticket_cats[x][5]) {//console.log(ticket_cats[x][5][y][0]);
				if (in_array(ticket_cats[x][5][y][0], array) || !ticket_cats[x][5][y][0])
					continue;

				array[array.length] = ticket_cats[x][5][y][0];
//				<input class="mdl-textfield__input" type="text" data-required="'+ticket_cats[x][5][y][1]+'" id="ticket-field-'+y+'" name="ticket_field['+ticket_cats[x][5][y][0]+']">
				html += '<div class="mdl-textfield mdl-js-textfield"><textarea class="mdl-textfield__input" data-required="'+ticket_cats[x][5][y][1]+'" id="ticket-field-'+y+'" name="ticket_field['+ticket_cats[x][5][y][0]+']"></textarea><label class="mdl-textfield__label" for="ticket-field-'+y+'">'+ticket_cats[x][5][y][0]+'</label>';
				if (ticket_cats[x][5][y][1])
					html += '<span class="star">*</span>';

				html += '</div><br />';
			}
		}
	}

	if (array.length) {		html += '</div>';
		$('#ticket_category').append(html);
	}

	reinitialize_mdl();
}

function submit_ticket() {	var error = false;/*
	$('#ticket_category select').each(function() {
		if (!$(this).val()) {
			error = true;
			func_highlight($(this));
		}
	});

	$('#ticket_fields textarea').each(function() {
		if ($(this).data('required') && !$(this).val()) {
			error = true;
			func_highlight($(this));
		}
	});
*/
	if ($('#ticket_email').size() && !$('#ticket_email').val()) {
		error = true;
		func_highlight($('#ticket_email'));
	}

	if (!$('#ticket_subject').val()) {
		error = true;
		func_highlight($('#ticket_subject'));
	}

	if (!$('#ticket_message').val()) {
		error = true;
		func_highlight($('#ticket_message'));
	}

	if (!error) {		document.ticketform.submit();	}
}