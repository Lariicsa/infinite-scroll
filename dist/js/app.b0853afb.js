(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("bc3a"),i=r.n(a),o=(r("a7fe"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"app"}},[r("router-view")],1)}),s=[],c=(r("5c0b"),r("2877")),u={},l=Object(c["a"])(u,o,s,!1,null,null,null),p=l.exports,d=r("2f62"),f=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row center"},[r("h1",[t._v("Futurama "),r("span",[t._v(t._s(t.cards.length)+" from "+t._s(t.gtrCharacters.length))])])]),r("div",{staticClass:"row center"},[r("InfiniteScroll",{attrs:{showLoading:t.loading},on:{loadMore:function(e){return t.loadMore()}}},[r("div",{staticClass:"row between"},t._l(t.cards,(function(t,e){return r("CardItem",{key:e,attrs:{character:t,index:parseInt(e+1)}})})),1)])],1)])},h=[],b=(r("d81d"),r("fb6a"),r("5530")),v=(r("96cf"),r("1da1")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carditem"},[r("div",{staticClass:"carditem__image"},[r("img",{attrs:{src:t.pathBase+"futurama"+t.character.id+".jpg"}})]),r("div",{staticClass:"carditem__info"},[r("strong",{staticClass:"carditem__title"},[t._v(t._s(t.character.name.first)+" "+t._s(t.character.name.last))]),r("span",[t._v(t._s(t.character.occupation))]),r("span",[t._v(t._s(t.character.species))])])])},_=[],w=(r("a9e3"),{name:"CardItem",props:{character:{type:Object},index:Number,showPage:{type:Boolean,default:!1}},data:function(){return{pathBase:"https://res.cloudinary.com/lariicsa/image/upload/v1602727260/futurama/",charImages:[{name:"Philip",url:""},{name:"Turanga",url:""},{name:"Bender",url:"futurama4_pxj04y.jpg"},{name:"Hubert",url:""},{name:"Amy",url:""},{name:"Hermes",url:""},{name:"Carol",url:""},{name:"John",url:""},{name:"Zapp",url:""},{name:"Scruffy",url:""},{name:"Cubert",url:""},{name:"Kif",url:""},{name:"Dwight",url:""},{name:"LaBarbara",url:""}]}},mounted:function(){this.index}}),y=w,C=Object(c["a"])(y,g,_,!1,null,null,null),O=C.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"infscroll__container"},[r("div",{staticClass:"infscroll__items",attrs:{id:"infinite-list"}},[r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"infscroll__loader-bg"},[r("div",{staticClass:"infscroll__loader"},[t._v(t._s(t.textLoading))])])]),t._t("default"),r("ButtonFan",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],attrs:{text:"Load more ...",ui:"primary infscroll"},on:{btnClick:function(e){return t.loadMore()}}})],2)])},j=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return"submit"!==t.ui?r("button",{class:t.ui?"btn__"+t.ui:"btn__primary",attrs:{type:t.type},on:{click:t.btnClick}},[t._v(" "+t._s(t.text)+" ")]):r("button",{class:t.ui?"btn__"+t.ui:"btn__primary",attrs:{"formData.action":"/submit",type:t.type},on:{click:t.btnClick}},[t._v(" "+t._s(t.text)+" ")])},M=[],k={name:"btn-fc",props:["text","type","disabled","ui"],methods:{btnClick:function(){this.$emit("btnClick")}}},S=k,I=Object(c["a"])(S,L,M,!1,null,null,null),P=I.exports,B={name:"InfiniteScroll",components:{ButtonFan:P},props:{showLoading:{type:Boolean,default:!1},textLoading:{type:String,default:"Loading ..."}},data:function(){return{isMobile:!1}},mounted:function(){var t=this,e=document.querySelector("#infinite-list");e.addEventListener("scroll",(function(r){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.scrollTop+e.clientHeight>=e.scrollHeight&&(t.isMobile=!0):e.scrollTop+e.clientHeight>=e.scrollHeight&&t.loadMore()}))},methods:{loadMore:function(){this.$emit("loadMore")}}},T=B,$=Object(c["a"])(T,x,j,!1,null,null,null),E=$.exports,H={name:"Home",components:{CardItem:O,InfiniteScroll:E},data:function(){return{loading:!1,items:[],upto:6,pages:[],pageArea:"",isMobile:!1}},static:{limitScrollItems:6},created:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getCharactersList();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.cards},methods:Object(b["a"])(Object(b["a"])({},Object(d["b"])(["getCharactersList"])),{},{loadMore:function(){var t=this,e=document.querySelector("#infinite-list"),r=e.scrollTop;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&setTimeout((function(t){e.scrollTo(0,r)}),1e3),this.loading=!0,setTimeout((function(e){t.cards.map((function(e){t.cards.push(e)}));t.upto+=t.$options.static.limitScrollItems,t.loading=!1}),800)}}),computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(d["d"])(["charactersList"])),Object(d["c"])(["gtrCharacters"])),{},{cards:function(){var t=this.gtrCharacters.slice(0,this.upto).map((function(t){return t}));return t}})},R=H,A=Object(c["a"])(R,m,h,!1,null,null,null),D=A.exports;n["a"].use(f["a"]);var F=[{path:"/",name:"Home",component:D}],J=new f["a"]({mode:"history",base:"/",routes:F}),N=J,q=function(){i.a.defaults.baseURL="https://sampleapis.com/futurama/api"},K=i.a.create(q()),U="/characters",Z=function(t){return K.get(U+t)},z=function(){return K.get(U)};n["a"].use(d["a"]);var G=new d["a"].Store({state:{characterInfo:{},charactersList:[]},mutations:{setCharactersList:function(t,e){return t.charactersList=e},setCharacterInfo:function(t,e){return t.characterInfo=e}},actions:{getCharactersList:function(t){return Object(v["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,z();case 4:n=e.sent,a=n.data,r("setCharactersList",a),console.log("all",a),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getCharactersDimension:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,Z(e);case 4:n=r.sent,console.log("response",n),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0.response);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},getters:{gtrCharacters:function(t){return t.charactersList}}});r("a41b");n["a"].use(i.a),n["a"].use(d["a"]),n["a"].config.productionTip=!1,new n["a"]({router:N,store:G,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){},a41b:function(t,e,r){}});
//# sourceMappingURL=app.b0853afb.js.map