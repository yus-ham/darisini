var r=function(){return(r=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}).apply(this,arguments)};function t(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;var n=Array(r),o=0;for(t=0;t<e;t++)for(var i=arguments[t],s=0,u=i.length;s<u;s++,o++)n[o]=i[s];return n}var e=function(n,o,i){if(void 0===i&&(i=!1),!n||!o||"object"!=typeof n||"object"!=typeof o)return n;var s=r({},n);for(var u in o)o.hasOwnProperty(u)&&(o[u]instanceof Array&&n[u]instanceof Array?s[u]=i?t(n[u],o[u]):o[u]:"object"==typeof o[u]&&"object"==typeof n[u]?s[u]=e(n[u],o[u],i):s[u]=o[u]);return s},n={defaults:{},errorType:null,polyfills:{fetch:null,FormData:null,URLSearchParams:null,performance:null,PerformanceObserver:null,AbortController:null},polyfill:function(r,e){for(var n=void 0===e?{}:e,o=n.doThrow,i=void 0===o||o,s=n.instance,u=void 0!==s&&s,a=[],c=2;c<arguments.length;c++)a[c-2]=arguments[c];var f=this.polyfills[r]||("undefined"!=typeof self?self[r]:null)||("undefined"!=typeof global?global[r]:null);if(i&&!f)throw new Error(r+" is not defined");return u&&f?new(f.bind.apply(f,t([void 0],a))):f}},o=function(r,t,e,n){if(!r.getEntriesByName)return!1;var o=r.getEntriesByName(t);return!!(o&&o.length>0)&&(e(o.reverse()[0]),n.clearMeasures&&n.clearMeasures(t),i.callbacks.delete(t),i.callbacks.size<1&&(i.observer.disconnect(),n.clearResourceTimings&&n.clearResourceTimings()),!0)},i={callbacks:new Map,observer:null,observe:function(r,t){if(r&&t){var e=n.polyfill("performance",{doThrow:!1});(function(r,t){return!i.observer&&r&&t&&(i.observer=new t((function(t){i.callbacks.forEach((function(e,n){o(t,n,e,r)}))})),r.clearResourceTimings&&r.clearResourceTimings()),i.observer})(e,n.polyfill("PerformanceObserver",{doThrow:!1}))&&(o(e,r,t,e)||(i.callbacks.size<1&&i.observer.observe({entryTypes:["resource","measure"]}),i.callbacks.set(r,t)))}}},s=function(r){this.error=r},u=function(){function o(r,t,e,n,o,i){void 0===e&&(e=new Map),void 0===n&&(n=[]),void 0===o&&(o=[]),void 0===i&&(i=[]),this._url=r,this._options=t,this._catchers=e,this._resolvers=n,this._middlewares=o,this._deferredChain=i}return o.factory=function(r,t){return void 0===r&&(r=""),void 0===t&&(t={}),new o(r,t)},o.prototype.selfFactory=function(e){var n=void 0===e?{}:e,i=n.url,s=void 0===i?this._url:i,u=n.options,a=void 0===u?this._options:u,c=n.catchers,f=void 0===c?this._catchers:c,l=n.resolvers,p=void 0===l?this._resolvers:l,h=n.middlewares,d=void 0===h?this._middlewares:h,y=n.deferredChain,v=void 0===y?this._deferredChain:y;return new o(s,r({},a),new Map(f),t(p),t(d),t(v))},o.prototype.defaults=function(r,t){return void 0===t&&(t=!1),n.defaults=t?e(n.defaults,r):r,this},o.prototype.errorType=function(r){return n.errorType=r,this},o.prototype.polyfills=function(t){return n.polyfills=r(r({},n.polyfills),t),this},o.prototype.url=function(r,t){if(void 0===t&&(t=!1),t)return this.selfFactory({url:r});var e=this._url.split("?");return this.selfFactory({url:e.length>1?e[0]+r+"?"+e[1]:this._url+r})},o.prototype.options=function(r,t){return void 0===t&&(t=!0),this.selfFactory({options:t?e(this._options,r):r})},o.prototype.query=function(r,t){return void 0===t&&(t=!1),this.selfFactory({url:a(this._url,r,t)})},o.prototype.headers=function(r){return this.selfFactory({options:e(this._options,{headers:r||{}})})},o.prototype.accept=function(r){return this.headers({Accept:r})},o.prototype.content=function(r){var t;return this.headers(((t={})["Content-Type"]=r,t))},o.prototype.auth=function(r){return this.headers({Authorization:r})},o.prototype.catcher=function(r,t){var e=new Map(this._catchers);return e.set(r,t),this.selfFactory({catchers:e})},o.prototype.signal=function(t){return this.selfFactory({options:r(r({},this._options),{signal:t.signal})})},o.prototype.resolve=function(r,e){return void 0===e&&(e=!1),this.selfFactory({resolvers:e?[r]:t(this._resolvers,[r])})},o.prototype.defer=function(r,e){return void 0===e&&(e=!1),this.selfFactory({deferredChain:e?[r]:t(this._deferredChain,[r])})},o.prototype.middlewares=function(r,e){return void 0===e&&(e=!1),this.selfFactory({middlewares:e?r:t(this._middlewares,r)})},o.prototype.method=function(t,o,u){void 0===o&&(o={}),void 0===u&&(u=null);var a=this._options.headers,c=u?"object"!=typeof u||a&&!Object.entries(a).every((function(r){var t=r[0],e=r[1];return t.toLowerCase()!=="Content-Type".toLowerCase()||e.startsWith("application/json")}))?this.body(u):this.json(u):this;return function(r){var t=r._url,o=r._catchers,u=r._resolvers,a=r._middlewares,c=r._options,f=new Map(o),l=e(n.defaults,c),p=n.polyfill("AbortController",{doThrow:!1,instance:!0});!l.signal&&p&&(l.signal=p.signal);var h={ref:null,clear:function(){h.ref&&(clearTimeout(h.ref),h.ref=null)}},d=function(r){return function(t){return 0===r.length?t:1===r.length?r[0](t):r.reduceRight((function(e,n,o){return o===r.length-2?n(e(t)):n(e)}))}}(a)(n.polyfill("fetch"))(t,l),y=d.catch((function(r){throw new s(r)})).then((function(r){return h.clear(),r.ok?r:r[n.errorType||"text"]().then((function(t){var e=new Error(t);throw e[n.errorType||"text"]=t,e.status=r.status,e.response=r,e}))})),v=function(t){return t.catch((function(t){h.clear();var e=t instanceof s?t.error:t;if(t instanceof s&&f.has("__fromFetch"))return f.get("__fromFetch")(e,r);if(f.has(e.status))return f.get(e.status)(e,r);if(f.has(e.name))return f.get(e.name)(e,r);throw e}))},m=function(r){return function(t){return v(r?y.then((function(t){return t&&t[r]()})).then((function(r){return t?t(r):r})):y.then((function(r){return t?t(r):r})))}},b={res:m(null),json:m("json"),blob:m("blob"),formData:m("formData"),arrayBuffer:m("arrayBuffer"),text:m("text"),perfs:function(r){return d.then((function(t){return i.observe(t.url,r)})),b},setTimeout:function(r,t){return void 0===t&&(t=p),h.clear(),h.ref=setTimeout((function(){return t.abort()}),r),b},controller:function(){return[p,b]},error:function(r,t){return f.set(r,t),b},badRequest:function(r){return b.error(400,r)},unauthorized:function(r){return b.error(401,r)},forbidden:function(r){return b.error(403,r)},notFound:function(r){return b.error(404,r)},timeout:function(r){return b.error(408,r)},internalError:function(r){return b.error(500,r)},fetchError:function(r){return b.error("__fromFetch",r)},onAbort:function(r){return b.error("AbortError",r)}};return u.reduce((function(t,e){return e(t,r)}),b)}((c=c.options(r(r({},o),{method:t})))._deferredChain.reduce((function(r,t){return t(r,r._url,r._options)}),c))},o.prototype.get=function(r){return this.method("GET",r)},o.prototype.delete=function(r){return this.method("DELETE",r)},o.prototype.put=function(r,t){return this.method("PUT",t,r)},o.prototype.post=function(r,t){return this.method("POST",t,r)},o.prototype.patch=function(r,t){return this.method("PATCH",t,r)},o.prototype.head=function(r){return this.method("HEAD",r)},o.prototype.opts=function(r){return this.method("OPTIONS",r)},o.prototype.replay=function(r){return this.method(this._options.method,r)},o.prototype.body=function(t){return this.selfFactory({options:r(r({},this._options),{body:t})})},o.prototype.json=function(r){var t,e=null===(t=Object.entries(this._options.headers||{}).find((function(r){var t=r[0],e=r[1];return t.toLowerCase()==="Content-Type".toLowerCase()&&e.startsWith("application/json")})))||void 0===t?void 0:t[1];return this.content(e||"application/json").body(JSON.stringify(r))},o.prototype.formData=function(r,t){return void 0===t&&(t=!1),this.body(c(r,t))},o.prototype.formUrl=function(r){return this.body("string"==typeof r?r:(t=r,Object.keys(t).map((function(r){var e=t[r];return e instanceof Array?e.map((function(t){return f(r,t)})).join("&"):f(r,e)})).join("&"))).content("application/x-www-form-urlencoded");var t},o}(),a=function(r,t,e){var o;if("string"==typeof t)o=t;else{var i=n.polyfill("URLSearchParams",{instance:!0});for(var s in t)if(t[s]instanceof Array)for(var u=0,a=t[s];u<a.length;u++){var c=a[u];i.append(s,c)}else i.append(s,t[s]);o=i.toString()}var f=r.split("?");return e||f.length<2?f[0]+"?"+o:r+"&"+o};function c(r,e,o,i){return void 0===e&&(e=!1),void 0===o&&(o=n.polyfill("FormData",{instance:!0})),void 0===i&&(i=[]),Object.entries(r).forEach((function(r){var n=r[0],s=r[1],u=i.reduce((function(r,t){return r?r+"["+t+"]":t}),null);if(u=u?u+"["+n+"]":n,s instanceof Array)for(var a=0,f=s;a<f.length;a++){var l=f[a];o.append(u+"[]",l)}else!e||"object"!=typeof s||e instanceof Array&&e.includes(n)?o.append(u,s):null!==s&&c(s,e,o,t(i,[n]))})),o}function f(r,t){return encodeURIComponent(r)+"="+encodeURIComponent("object"==typeof t?JSON.stringify(t):""+t)}var l=u.factory;l.default=u.factory;export default l;
!(w=>{let F={};w.addEventListener=(t,f)=>{if(!F[t])F[t]=[];F[t].push(f)};w.dispatchEvent=(t,d)=>{if(!F[t])return;let e=new CustomEvent(t,{detail:d});F[t].forEach(f=>f(e))}})(l)
