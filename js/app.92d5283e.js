(function(){"use strict";var e={9025:function(e,o,n){var t=n(9242),r=n(3396);const a={class:"main-content"};function i(e,o,n,i,c,s){const d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(d,null,{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(t.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})])}var c={mounted(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.$router.push("/mobile")}},s=n(89);const d=(0,s.Z)(c,[["render",i]]);var u=d,l=n(2483);const f=e=>((0,r.dD)("data-v-2e7efa83"),e=e(),(0,r.Cn)(),e),p={id:"content"},h=(0,r.Uk)(" START "),m=f((()=>(0,r._)("i",{class:"fa-solid fa-angle-right"},null,-1))),v=[h,m],g=f((()=>(0,r._)("h1",{class:"headLabel"},[(0,r.Uk)("Shape "),(0,r._)("br"),(0,r.Uk)("CSS")],-1))),y=f((()=>(0,r._)("div",{class:"blocker",if:"!show"},null,-1))),b=f((()=>(0,r._)("canvas",{id:"canvas"},null,-1)));function w(e,o,n,a,i,c){return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("button",{class:"startbtn",onClick:o[0]||(o[0]=(...e)=>c.changeToMenue&&c.changeToMenue(...e))},v),g,(0,r.Wm)(t.uT,null,{default:(0,r.w5)((()=>[y])),_:1}),b])}var P=n(5017),k={data(){return{runner:null,engine:null,render:null,show:!0}},mounted(){const e=window.innerHeight,o=window.innerWidth,n=e/100,t=o/100,r=document.getElementById("canvas");r.width=o,r.height=e;const a=P.Engine.create({render:{element:document.body,canvas:r,options:{width:o,height:e}}});this.engine=a;const i=P.Render.create({element:document.body,canvas:r,options:{width:o,height:e},engine:a});this.render=i;const c={friction:.7};for(let l=0;l<=100;l+=1){let e;const n=Math.floor(3*Math.random());e=0===n?P.Bodies.rectangle(Math.random()*o,-20,4*t,4*t,c):1===n?P.Bodies.circle(Math.random()*o,-20,3*t,3*t,50,c):P.Bodies.polygon(Math.random()*o,-20,3,3*t,c),P.Composite.add(a.world,[e])}const s=P.Bodies.circle(o/2,e/2,40*n,{isStatic:!0},100),d=P.Bodies.rectangle(o/2,e,o,1,{isStatic:!0});P.Composite.add(a.world,[s,d]),P.Render.run(i);const u=P.Runner.create();this.runner=u,P.Runner.run(u,a)},methods:{changeToMenue(){this.show=!1,this.$router.push("/main-menue"),P.Render.stop(this.render),this.render.canvas.remove(),P.Engine.clear(this.engine),this.render.canvas=null,this.render.context=null,this.render.textures={}}}};const C=(0,s.Z)(k,[["render",w],["__scopeId","data-v-2e7efa83"]]);var _=C;const j={class:"full-view"},S=(0,r._)("h1",null,"Main Menu (Work in Progress)",-1),M={class:"menue-container"};function T(e,o,n,t,a,i){const c=(0,r.up)("base-card-component");return(0,r.wg)(),(0,r.iD)("div",j,[S,(0,r._)("div",M,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.examples,(e=>((0,r.wg)(),(0,r.j4)(c,{setIcon:e.icon,name:e.name,desc:e.desc,toolPath:e.toolPath,key:e.toolPath,setPadding:["10px","5px"]},null,8,["setIcon","name","desc","toolPath"])))),128))])])}var O=n(7139);const D=(0,r._)("i",{class:"fa-solid fa-chevron-right"},null,-1);function x(e,o,n,t,a,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:"base-card",style:(0,O.j5)(i.cssVars)},[(0,r._)("i",{class:(0,O.C_)(["fa-solid",n.setIcon])},null,2),(0,r._)("h3",null,(0,O.zw)(n.name),1),(0,r._)("p",null,(0,O.zw)(n.desc),1),(0,r.Wm)(c,{to:n.toolPath},{default:(0,r.w5)((()=>[(0,r.Uk)((0,O.zw)(n.name)+" ",1),D])),_:1},8,["to"])],4)}var F={props:{setIcon:String,name:String,desc:String,toolPath:String,setPadding:Array},computed:{cssVars(){return{"--padding-tb":this.setPadding[0],"--padding-lr":this.setPadding[1]}}}};const E=(0,s.Z)(F,[["render",x]]);var L=E,U={components:{BaseCardComponent:L},data(){return{examples:[{icon:"fa-eye-dropper",name:"Color Picker",desc:"Find the Perfect Color for your project",toolPath:"/color-picker"},{icon:"fa-eye-dropper",name:"3D Transform",desc:"Find the Perfect Color for your project",toolPath:"/3d-transform"},{icon:"fa-eye-dropper",name:"Drop Shadow",desc:"Find the Perfect Color for your project",toolPath:"/drop-sahdow"},{icon:"fa-eye-dropper",name:"Color Picker",desc:"Find the Perfect Color for your project",toolPath:"/color-picker"},{icon:"fa-eye-dropper",name:"3D Transform",desc:"Find the Perfect Color for your project",toolPath:"/3d-transform"},{icon:"fa-eye-dropper",name:"Drop Shadow",desc:"Find the Perfect Color for your project",toolPath:"/drop-sahdow"},{icon:"fa-eye-dropper",name:"Color Picker",desc:"Find the Perfect Color for your project",toolPath:"/color-picker"},{icon:"fa-eye-dropper",name:"3D Transform",desc:"Find the Perfect Color for your project",toolPath:"/3d-transform"},{icon:"fa-eye-dropper",name:"Drop Shadow",desc:"Find the Perfect Color for your project",toolPath:"/drop-sahdow"},{icon:"fa-eye-dropper",name:"Color Picker",desc:"Find the Perfect Color for your project",toolPath:"/color-picker"},{icon:"fa-eye-dropper",name:"3D Transform",desc:"Find the Perfect Color for your project",toolPath:"/3d-transform"},{icon:"fa-eye-dropper",name:"Drop Shadow",desc:"Find the Perfect Color for your project",toolPath:"/drop-sahdow"}]}}};const B=(0,s.Z)(U,[["render",T]]);var R=B;const A=e=>((0,r.dD)("data-v-1bfe6b78"),e=e(),(0,r.Cn)(),e),I={id:"content"},W=A((()=>(0,r._)("h1",null,"Looks like you are on Mobile",-1))),Z=A((()=>(0,r._)("p",null,[(0,r.Uk)(" We currently don't support Mobile devices :( "),(0,r._)("br"),(0,r.Uk)(" You can copy the Link to this site below to send it to a Pc ")],-1))),z=(0,r.Uk)(" Copy URL "),N=A((()=>(0,r._)("i",{class:"fa-solid fa-clipboard space"},null,-1))),H=[z,N];function V(e,o,n,t,a,i){return(0,r.wg)(),(0,r.iD)("div",I,[W,Z,(0,r._)("button",{onClick:o[0]||(o[0]=(...e)=>i.copyURL&&i.copyURL(...e))},H)])}var Y={methods:{copyURL(){const e=document.createElement("textarea");e.value="https://joelstorr.github.io/shape-css-gp/",e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}};const $=(0,s.Z)(Y,[["render",V],["__scopeId","data-v-1bfe6b78"]]);var q=$;const K=[{path:"/",name:"intro",component:_},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))},{path:"/main-menue",name:"mainMenue",component:R},{path:"/mobile",name:"mobile",component:q}],G=(0,l.p7)({history:(0,l.PO)("/shape-css-gp/"),routes:K});var J=G,Q=n(65),X=(0,Q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,t.ri)(u).use(X).use(J).mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,a){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],a=e[u][2];for(var c=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var d=r();void 0!==d&&(o=d)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,r,a]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(o,t){return n.f[t](e,o),o}),[]))}}(),function(){n.u=function(e){return"js/about.b1f4fa21.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="shape-css:";n.l=function(t,r,a,i){if(e[t])e[t].push(r);else{var c,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==o+a){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",o+a),c.src=t),e[t]=[r];var f=function(o,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),o)return o(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/shape-css-gp/"}(),function(){var e={143:0};n.f.j=function(o,t){var r=n.o(e,o)?e[o]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(n,t){r=e[o]=[n,t]}));t.push(r[2]=a);var i=n.p+n.u(o),c=new Error,s=function(t){if(n.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+o+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+o,o)}},n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,a,i=t[0],c=t[1],s=t[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var u=s(n)}for(o&&o(t);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self["webpackChunkshape_css"]=self["webpackChunkshape_css"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(9025)}));t=n.O(t)})();
//# sourceMappingURL=app.92d5283e.js.map