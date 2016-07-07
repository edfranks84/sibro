/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-cssanimations-csscalc-csstransforms-csstransitions-cssvhunit-cssvwunit-flexbox-inlinesvg-objectfit-svgasimg-svgclippaths-touchevents-mq-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var u in C)if(C.hasOwnProperty(u)){if(e=[],t=C[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),w.push((i?"":"no-")+a.join("-"))}}function o(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?_.className.baseVal=t:_.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){if("object"==typeof e)for(var n in e)z(e,n)&&u(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function f(e,n,r,i){var o,a,u,f,d="modernizr",c=s("div"),p=l();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=i?i[r]:d+(r+1),c.appendChild(u);return o=s("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):c.parentNode.removeChild(c),!!a}function d(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?c(i,n||t):i);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(h(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+h(t[i])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,i,o){function u(){f&&(delete R.style,delete R.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=m(e,i);if(!r(l,"undefined"))return l}for(var f,c,p,h,v,g=["modernizr","tspan","samp"];!R.style&&g.length;)f=!0,R.modElem=s(g.shift()),R.style=R.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=R.style[h],d(h,"-")&&(h=a(h)),R.style[h]!==n){if(o||r(i,"undefined"))return u(),"pfx"==t?h:!0;try{R.style[h]=i}catch(y){}if(R.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function g(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,i,o):(a=(e+" "+L.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var w=[],C=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=t.documentElement,T="svg"===_.nodeName.toLowerCase(),x=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=x,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+x.join(t+e),!!n.style.length}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var z;!function(){var e={}.hasOwnProperty;z=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=u}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();S.mq=j;var P=S.testStyles=f;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(r,function(e){n=9===e.offsetTop})}return n}),P("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),P("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var E="Moz O ms Webkit",N=S._config.usePrefixes?E.split(" "):[];S._cssomPrefixes=N;var k=function(t){var r,i=x.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=x[s],u=a.toUpperCase()+"_"+r;if(u in o)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=k;var L=S._config.usePrefixes?E.toLowerCase().split(" "):[];S._domPrefixes=L;var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var R={style:O.elem.style};Modernizr._q.unshift(function(){delete R.style}),S.testAllProps=g,S.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0));var A=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=a(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("objectfit",!!A("objectFit"),{aliases:["object-fit"]}),i(),o(w),delete S.addTest,delete S.addAsyncTest;for(var I=0;I<Modernizr._q.length;I++)Modernizr._q[I]();e.Modernizr=Modernizr}(window,document);