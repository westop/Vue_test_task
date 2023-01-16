(function(){"use strict";var t={4470:function(t,e,o){var s=o(9242),n=o(3396);const a={class:"app"};function i(t,e,o,s,i,r){const l=(0,n.up)("navbar"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n._)("div",a,[(0,n.Wm)(u)])],64)}o(7658);const r={class:"navbar"},l={class:"navbar__btns"};function u(t,e,o,s,a,i){const u=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Vue 3"),(0,n._)("div",l,[(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[1]||(e[1]=e=>t.$router.push("/map"))},{default:(0,n.w5)((()=>[(0,n.Uk)("Карта")])),_:1}),(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[2]||(e[2]=e=>t.$router.push("/posts"))},{default:(0,n.w5)((()=>[(0,n.Uk)("Посты")])),_:1}),(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[3]||(e[3]=e=>t.$router.push("/about"))},{default:(0,n.w5)((()=>[(0,n.Uk)("О сайте")])),_:1})])])}var d={},c=o(89);const p=(0,c.Z)(d,[["render",u],["__scopeId","data-v-05fb7f60"]]);var m=p,h={components:{Navbar:m}};const v=(0,c.Z)(h,[["render",i]]);var g=v;const f={class:"btn"};function y(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("button",f,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var w={name:"my-button"};const _=(0,c.Z)(w,[["render",y],["__scopeId","data-v-4a35233b"]]);var b=_;const k=["value"];function P(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t)),class:"input",type:"text"},null,40,k)}var D={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const C=(0,c.Z)(D,[["render",P],["__scopeId","data-v-0c401ab1"]]);var I=C;function V(t,e,o,a,i,r){return t.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,n._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var x={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){console.log("mixin mounted")}},L={name:"my-dialog",mixins:[x],mounted(){console.log("dialog mounted")}};const O=(0,c.Z)(L,[["render",V],["__scopeId","data-v-3f4386d6"]]);var S=O,Z=[b,I,S];const W=(0,n._)("h1",null,"Добро пожаловать на курс по Vue 3",-1),$=[W];function U(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",null,$)}var M={};const j=(0,c.Z)(M,[["render",U]]);var A=j,Q=o(2483),z=o(7139);const T=(0,n._)("h1",null,"Страница с постами",-1),E={key:1},H={class:"app__btns"},B={key:3},R={class:"page__wrapper"},Y=["onClick"];function q(t,e,o,s,a,i){const r=(0,n.up)("Bar"),l=(0,n.up)("my-input"),u=(0,n.up)("my-button"),d=(0,n.up)("my-select"),c=(0,n.up)("post-form"),p=(0,n.up)("my-dialog"),m=(0,n.up)("post-list"),h=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("div",null,[T,a.isChartLoading?((0,n.wg)(),(0,n.iD)("div",E,"Идет загрузка...")):((0,n.wg)(),(0,n.j4)(r,{key:0,data:t.$data,options:t.$options},null,8,["data","options"])),(0,n.wy)((0,n.Wm)(l,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchQuery=t),placeholder:"Поиск...."},null,8,["modelValue"]),[[h]]),(0,n._)("div",H,[(0,n.Wm)(u,{onClick:i.showDialog},{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,n.Wm)(d,{modelValue:a.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>a.selectedSort=t),options:a.sortOptions},null,8,["modelValue","options"])]),(0,n.Wm)(p,{show:a.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>a.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onCreate:i.createPost},null,8,["onCreate"])])),_:1},8,["show"]),a.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",B,"Идет загрузка...")):((0,n.wg)(),(0,n.j4)(m,{key:2,posts:i.sortedAndSearchedPosts,onRemove:i.removePost},null,8,["posts","onRemove"])),(0,n._)("div",R,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.totalPages,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,z.C_)(["page",{"current-page":a.page===t}]),onClick:e=>i.changePage(t)},(0,z.zw)(t),11,Y)))),128))])])}const K=t=>((0,n.dD)("data-v-381b695e"),t=t(),(0,n.Cn)(),t),F=K((()=>(0,n._)("h4",null,"Создание поста",-1)));function N(t,e,o,a,i,r){const l=(0,n.up)("my-input"),u=(0,n.up)("my-button"),d=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[F,(0,n.wy)((0,n.Wm)(l,{modelValue:i.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),[[d]]),(0,n.Wm)(l,{modelValue:i.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>i.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,n.Wm)(u,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:r.createPost},{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать ")])),_:1},8,["onClick"])],32)}var G={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const J=(0,c.Z)(G,[["render",N],["__scopeId","data-v-381b695e"]]);var X=J;const tt=t=>((0,n.dD)("data-v-e1996b82"),t=t(),(0,n.Cn)(),t),et={key:0},ot=tt((()=>(0,n._)("h3",null,"Список пользователей",-1))),st={key:1,style:{color:"red"}};function nt(t,e,o,a,i,r){const l=(0,n.up)("post-item");return o.posts.length>0?((0,n.wg)(),(0,n.iD)("div",et,[ot,(0,n.Wm)(s.W3,{name:"user-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.posts,(e=>((0,n.wg)(),(0,n.j4)(l,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,n.wg)(),(0,n.iD)("h2",st," Список пользователей пуст "))}const at=t=>((0,n.dD)("data-v-7554e367"),t=t(),(0,n.Cn)(),t),it={class:"post"},rt=at((()=>(0,n._)("strong",null,"Номер поста:",-1))),lt=at((()=>(0,n._)("strong",null,"Нейм користувача:",-1))),ut=at((()=>(0,n._)("strong",null,"Кількість коментарів:",-1))),dt=at((()=>(0,n._)("strong",null,"Заголовок:",-1))),ct=at((()=>(0,n._)("strong",null,"Текст:",-1))),pt={class:"post__btns"};function mt(t,e,o,s,a,i){const r=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",it,[(0,n._)("div",null,[(0,n._)("div",null,[rt,(0,n.Uk)((0,z.zw)(o.post.id),1)]),(0,n._)("div",null,[lt,(0,n.Uk)((0,z.zw)(o.post.userId),1)]),(0,n._)("div",null,[ut,(0,n.Uk)((0,z.zw)(o.post.totalComment),1)]),(0,n._)("div",null,[dt,(0,n.Uk)(" "+(0,z.zw)(o.post.title),1)]),(0,n._)("div",null,[ct,(0,n.Uk)(" "+(0,z.zw)(o.post.body),1)])]),(0,n._)("div",pt,[(0,n.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Открыть ")])),_:1}),(0,n.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Удалить ")])),_:1})])])}var ht={props:{post:{type:Object,required:!0}}};const vt=(0,c.Z)(ht,[["render",mt],["__scopeId","data-v-7554e367"]]);var gt=vt,ft={components:{PostItem:gt},props:{posts:{type:Array,required:!0}}};const yt=(0,c.Z)(ft,[["render",nt],["__scopeId","data-v-e1996b82"]]);var wt=yt,_t=o(6943);const bt=["value"],kt=(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1),Pt=["value"];function Dt(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("select",{value:o.modelValue,onChange:e[0]||(e[0]=(...t)=>i.changeOption&&i.changeOption(...t))},[kt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.options,(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.value,value:t.value},(0,z.zw)(t.name),9,Pt)))),128))],40,bt)}var Ct={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const It=(0,c.Z)(Ct,[["render",Dt]]);var Vt=It,xt=o(9646),Lt=o(5866);xt.kL.register(xt.uw,xt.f$,xt.ZL,xt.Dx,xt.u,xt.De);var Ot={name:"App",components:{MyInput:I,MySelect:Vt,MyButton:b,PostList:wt,PostForm:X,Bar:Lt.$Q},data(){return{posts:[],comments:[],userAll:[],dialogVisible:!1,isChartLoading:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"At title"},{value:"body",name:"At body"}],labels:[],datasets:[],symvolInMail:[]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},changePage(t){this.page=t},async fetchData(){try{this.posts=[],this.isChartLoading=!0,this.isPostsLoading=!0;const t=await _t.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}}),e=await _t.Z.get("http://jsonplaceholder.typicode.com/comments");this.comments=e.data,this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.userAll=t.data}catch(t){alert("error")}finally{this.userAll.forEach((t=>{let e=0;for(const s of this.comments)t.userId==s.postId&&e++;const o={id:t.id,userId:t.userId,totalComment:e,title:t.title,body:t.body};this.posts.push(o)})),this.comments.forEach((t=>{this.labels.push(t.id);let e=t.email.length;this.symvolInMail.push(e)}));const t={data:this.symvolInMail};this.datasets.push(t),this.isChartLoading=!1,this.isPostsLoading=!1}}},mounted(){this.fetchData()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{page(){this.fetchData()}},options:{responsive:!0}};const St=(0,c.Z)(Ot,[["render",q]]);var Zt=St;const Wt=(0,n._)("h1",null,"Данное приложение было создано в результате обучения на канале Ulbi TV",-1),$t=[Wt];function Ut(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",null,$t)}var Mt={};const jt=(0,c.Z)(Mt,[["render",Ut]]);var At=jt;function Qt(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",null,"Это страница поста с ID = "+(0,z.zw)(t.$route.params.id),1)])}var zt={};const Tt=(0,c.Z)(zt,[["render",Qt]]);var Et=Tt;const Ht=t=>((0,n.dD)("data-v-5bcfd7c0"),t=t(),(0,n.Cn)(),t),Bt=Ht((()=>(0,n._)("div",{id:"map"},null,-1))),Rt=[Bt];function Yt(t,e,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",null,Rt)}var qt=o(3153),Kt=o.n(qt),Ft={name:"Home",setup(){let t;(0,n.bv)((()=>{t=Kt().map("map").setView([48,31],6),Kt().tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t)}))}};const Nt=(0,c.Z)(Ft,[["render",Yt],["__scopeId","data-v-5bcfd7c0"]]);var Gt=Nt;const Jt=[{path:"/",component:A},{path:"/map",component:Gt},{path:"/posts",component:Zt},{path:"/about",component:At},{path:"/posts/:id",component:Et}],Xt=(0,Q.p7)({routes:Jt,history:(0,Q.PO)("/")});var te=Xt,ee={mounted(t){t.focus()},name:"focus"},oe={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},n=new IntersectionObserver(s,o);n.observe(t)},name:"intersection"},se=[ee,oe],ne=o(65);const ae={state:()=>({posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},sortedAndSearchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setLoading(t,e){t.isPostsLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e}},actions:{async fetchPosts({state:t,commit:e}){try{e("setLoading",!0);const o=await _t.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",o.data)}catch(o){console.log(o)}finally{e("setLoading",!1)}},async loadMorePosts({state:t,commit:e}){try{e("setPage",t.page+1);const o=await _t.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",[...t.posts,...o.data])}catch(o){console.log(o)}}},namespaced:!0};var ie=(0,ne.MT)({state:{isAuth:!1},modules:{post:ae}});const re=(0,s.ri)(g);Z.forEach((t=>{re.component(t.name,t)})),se.forEach((t=>{re.directive(t.name,t)})),re.use(te).use(ie).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,i=s[0],r=s[1],l=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var d=l(o)}for(e&&e(s);u<i.length;u++)a=i[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},s=self["webpackChunkventure_3_visual_almanah"]=self["webpackChunkventure_3_visual_almanah"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(4470)}));s=o.O(s)})();
//# sourceMappingURL=app.4c00cb6b.js.map