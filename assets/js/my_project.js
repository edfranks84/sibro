(function(f,k,l,e,m){function g(a,c){if(c){var b=c.getAttribute("viewBox"),d=f.createDocumentFragment(),e=c.cloneNode(!0);for(b&&a.setAttribute("viewBox",b);e.childNodes.length;)d.appendChild(e.childNodes[0]);a.appendChild(d)}}function n(){var a=f.createElement("x"),c=this.s;a.innerHTML=this.responseText;this.onload=function(){c.splice(0).map(function(b){g(b[0],a.querySelector("#"+b[1].replace(/(\W)/g,"\\$1")))})};this.onload()}function h(){for(var a;a=k[0];){var c=a.parentNode,b=a.getAttribute("xlink:href").split("#"),
d=b[0],b=b[1];c.removeChild(a);if(d.length){if(a=e[d]=e[d]||new XMLHttpRequest,a.s||(a.s=[],a.open("GET",d),a.onload=n,a.send()),a.s.push([c,b]),4===a.readyState)a.onload()}else g(c,f.getElementById(b))}l(h)}m&&h()})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent)||537>(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]);

console.log("Hello world!");