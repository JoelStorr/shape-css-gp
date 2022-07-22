(function(){"use strict";var e={6178:function(e,n,t){var o=t(9242),r=t(3396);const a={class:"main-content"};function i(e,n,t,i,s,c){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(u,null,{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})])}var s={mounted(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.$router.push("/mobile")}},c=t(89);const u=(0,c.Z)(s,[["render",i]]);var d=u,l=t(2483);const f=e=>((0,r.dD)("data-v-c92e9c30"),e=e(),(0,r.Cn)(),e),h={id:"content"},p=(0,r.Uk)(" START "),m=f((()=>(0,r._)("i",{class:"fa-solid fa-angle-right"},null,-1))),v=[p,m],g=f((()=>(0,r._)("h1",{class:"headLabel"},[(0,r.Uk)("Shape "),(0,r._)("br"),(0,r.Uk)("CSS")],-1))),b=f((()=>(0,r._)("div",{class:"blocker",if:"!show"},null,-1))),y=f((()=>(0,r._)("canvas",{id:"canvas"},null,-1)));function w(e,n,t,a,i,s){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("button",{class:"startbtn",onClick:n[0]||(n[0]=(...e)=>s.changeToMenue&&s.changeToMenue(...e))},v),g,(0,r.Wm)(o.uT,null,{default:(0,r.w5)((()=>[b])),_:1}),y])}var _=t(5017),k={data(){return{runner:null,engine:null,render:null,show:!0}},mounted(){const e=window.innerHeight,n=window.innerWidth,t=e/100,o=n/100,r=document.getElementById("canvas");r.width=n,r.height=e;const a=_.Engine.create({render:{element:document.body,canvas:r,options:{width:n,height:e}}});this.engine=a;const i=_.Render.create({element:document.body,canvas:r,options:{width:n,height:e},engine:a});this.render=i;const s={friction:.7};for(let l=0;l<=100;l+=1){let e;const t=Math.floor(3*Math.random());e=0===t?_.Bodies.rectangle(Math.random()*n,-20,4*o,4*o,s):1===t?_.Bodies.circle(Math.random()*n,-20,3*o,3*o,50,s):_.Bodies.polygon(Math.random()*n,-20,3,3*o,s),_.Composite.add(a.world,[e])}const c=_.Bodies.circle(n/2,e/2,41.6*t,{isStatic:!0},100),u=_.Bodies.rectangle(n/2,e,n,1,{isStatic:!0});_.Composite.add(a.world,[c,u]),_.Render.run(i);const d=_.Runner.create();this.runner=d,_.Runner.run(d,a)},methods:{changeToMenue(){this.show=!1,this.$router.push("/main-menu"),_.Render.stop(this.render),this.render.canvas.remove(),_.Engine.clear(this.engine),this.render.canvas=null,this.render.context=null,this.render.textures={}}}};const C=(0,c.Z)(k,[["render",w],["__scopeId","data-v-c92e9c30"]]);var P=C;const S=e=>((0,r.dD)("data-v-136218f3"),e=e(),(0,r.Cn)(),e),T={class:"full-view"},M=S((()=>(0,r._)("h1",null,"Find the right Tool",-1))),O={class:"menue-container"},D=S((()=>(0,r._)("h2",null,"More Tools are on the way ...",-1)));function E(e,n,t,o,a,i){const s=(0,r.up)("base-card-component");return(0,r.wg)(),(0,r.iD)("div",T,[M,(0,r._)("div",O,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.examples,(e=>((0,r.wg)(),(0,r.j4)(s,{setIcon:e.icon,name:e.name,desc:e.desc,toolPath:e.toolPath,key:e.toolPath,setPadding:["50px","10px"]},null,8,["setIcon","name","desc","toolPath"])))),128))]),D])}var j=t(7139);const x=e=>((0,r.dD)("data-v-4a91b4fc"),e=e(),(0,r.Cn)(),e),A=x((()=>(0,r._)("i",{class:"fa-solid fa-chevron-right"},null,-1)));function B(e,n,t,o,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:"base-card",style:(0,j.j5)(i.cssVars)},[(0,r._)("i",{class:(0,j.C_)(["main-icon",t.setIcon])},null,2),(0,r._)("h2",null,(0,j.zw)(t.name),1),(0,r._)("p",null,(0,j.zw)(t.desc),1),(0,r.Wm)(s,{to:t.toolPath,class:"outline-btn"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,j.zw)(t.name)+" ",1),A])),_:1},8,["to"])],4)}var I={props:{setIcon:String,name:String,desc:String,toolPath:String,setPadding:Array},computed:{cssVars(){return{"--padding-tb":this.setPadding[0],"--padding-lr":this.setPadding[1]}}}};const L=(0,c.Z)(I,[["render",B],["__scopeId","data-v-4a91b4fc"]]);var U=L,W={components:{BaseCardComponent:U},data(){return{examples:[{icon:" fa-solid fa-cube",name:"3D Transform",desc:"An easy way to provide 3D transforms to your elements.",toolPath:"/tools/threed-transform"}]}}};const N=(0,c.Z)(W,[["render",E],["__scopeId","data-v-136218f3"]]);var R=N;const Z=e=>((0,r.dD)("data-v-728d466d"),e=e(),(0,r.Cn)(),e),F={id:"content"},z=Z((()=>(0,r._)("h1",null,"Looks like you are on Mobile",-1))),H=Z((()=>(0,r._)("p",null,[(0,r.Uk)(" We currently don't support Mobile devices :( "),(0,r._)("br"),(0,r.Uk)(" You can copy the Link to this site below to send it to a Pc ")],-1))),V=(0,r.Uk)(" Copy URL "),q=Z((()=>(0,r._)("i",{class:"fa-solid fa-clipboard space"},null,-1))),K=[V,q];function Y(e,n,t,o,a,i){const s=(0,r.Q2)("copy");return(0,r.wg)(),(0,r.iD)("div",F,[z,H,(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",null,K)),[[s,a.url]])])}var $={data(){return{url:"https://joelstorr.github.io/shape-css-gp/"}}};const Q=(0,c.Z)($,[["render",Y],["__scopeId","data-v-728d466d"]]);var G=Q;const J=e=>((0,r.dD)("data-v-66d7f4b2"),e=e(),(0,r.Cn)(),e),X={class:"contentWrapper"},ee=J((()=>(0,r._)("i",{class:"fa-solid fa-arrow-left"},null,-1)));function ne(e,n,t,o,a,i){const s=(0,r.up)("router-link"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("nav",null,[(0,r.Wm)(s,{to:"/main-menu"},{default:(0,r.w5)((()=>[ee])),_:1})]),(0,r.Wm)(c)])}var te={name:"toolsView"};const oe=(0,c.Z)(te,[["render",ne],["__scopeId","data-v-66d7f4b2"]]);var re=oe;const ae=[{path:"/",name:"intro",component:P},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))},{path:"/main-menu",name:"mainMenu",component:R},{path:"/mobile",name:"mobile",component:G},{path:"/tools",name:"tools",component:re,children:[{path:"threed-transform",name:"3d-transform",component:()=>t.e(389).then(t.bind(t,6389))}]}],ie=(0,l.p7)({history:(0,l.PO)("/shape-css-gp/"),routes:ae});var se=ie,ce=t(65),ue=(0,ce.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),de={beforeUpdate(e,n){e.addEventListener("click",(()=>{const e=document.createElement("textarea");e.value=n.value,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}))}};const le=(0,o.ri)(d);le.directive("copy",de),le.use(ue),le.use(se),le.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{389:"d5a7820e",443:"e4b0a482"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".81dd2192.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="shape-css:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/shape-css-gp/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),s=t.p+i;if(n(i,s))return r();e(o,s,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={389:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var d=c(t)}for(n&&n(o);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkshape_css"]=self["webpackChunkshape_css"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6178)}));o=t.O(o)})();
//# sourceMappingURL=app.64fc98b2.js.map