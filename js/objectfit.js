!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?w[a[0]]=o:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=w._config.classPrefix||"";if(b&&(n=n.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}w._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=f(b?"svg":"body"),e.fake=!0),e}function d(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),d=c();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),s=t(p,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=l,x.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete P.style,delete P.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,c,d,v,h,y=["modernizr","tspan","samp"];!P.style&&y.length;)p=!0,P.modElem=f(y.shift()),P.style=P.modElem.style;for(d=e.length,c=0;d>c;c++)if(v=e[c],h=P.style[v],a(v,"-")&&(v=s(v)),P.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"!=n||v;try{P.style[v]=o}catch(e){}if(P.style[v]!=h)return l(),"pfx"!=n||v}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}var y=[],g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=C,w=new w;var x=n.documentElement,b="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",_=C._config.usePrefixes?S.split(" "):[];C._cssomPrefixes=_;var j=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=j;var E=C._config.usePrefixes?S.toLowerCase().split(" "):[];C._domPrefixes=E;var z={elem:f("modernizr")};w._q.push(function(){delete z.elem});var P={style:z.elem.style};w._q.unshift(function(){delete P.style}),C.testAllProps=h;var N=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};w.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var T=0;T<w._q.length;T++)w._q[T]();e.Modernizr=w}(window,document),Modernizr.objectfit||$(".project-image-container").each(function(){var e=$(this),n=e.find("img").prop("src");n&&e.css("backgroundImage","url("+n+")").addClass("project-object-fit")});