import{t as D,a as r,r as d}from"./index.0514104b.js";import{y as I,t as A,ae as j,Q as B,H as a,C as v,F as M,Z as G,_ as O,L,I as Q,o as V,p as F,A as T,D as Z,S as N,q as p,G as E,V as z}from"./index.55deba57.js";const i="stay",h="hs-on",f="hs-off",_="hs-range",g="both-left-sides",S="both-right-sides";let H="right",b=[],l=[];const J={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}};var w=I({name:"Selector",props:J,emits:["selectedVal"],setup(s,{emit:m}){const o=G(),y=s.value,q=A(()=>s.disabled),x=A(()=>{const e=[];let t=0,c=y;for(y!==Math.floor(y)&&c--;t<c;t++)e.push(h);for(;t<s.max.length;t++)e.push(f);return e}),K=e=>{if(!s.disabled){if(l.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(H="right",D(!1,S,document.querySelector(".hs-select__item"+l[0].index));e>=t;)r(document.querySelector(".hs-select__item"+t),_),t++;else for(H="left",D(!0,S,document.querySelector(".hs-select__item"+l[0].index));e<=t;)r(document.querySelector(".hs-select__item"+t),_),t--}r(document.querySelector("."+f+e),h)}},u=e=>{if(s.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),l.length===1){const c=b[0].index;if(e>=c)for(let n=0;n<=e;n++)d(document.querySelector(".hs-select__item"+n),_);else for(;e<=c;)d(document.querySelector(".hs-select__item"+e),_),e++}},C=(e,t)=>{if(s.disabled)return;const c=l.length;c<2?(l.push({item:t,index:e}),r(document.querySelector("."+f+e),i),r(document.querySelector(".hs-select__item"+l[0].index),g),l[1]&&(H==="right"?r(document.querySelector(".hs-select__item"+l[1].index),S):r(document.querySelector(".hs-select__item"+l[1].index),g)),c===1&&(H==="right"?m("selectedVal",{left:l[0].item,right:l[1].item,whole:l}):m("selectedVal",{left:l[1].item,right:l[0].item,whole:l}))):B(()=>{l.forEach(n=>{d(document.querySelector("."+f+n.index),h,i),d(document.querySelector(".hs-select__item"+n.index),g,S)}),l=[],b=[];for(let n=0;n<=s.max.length;n++){const $=document.querySelector(".hs-select__item"+n);$&&d($,_)}l.push({item:t,index:e}),r(document.querySelector("."+f+e),i),r(document.querySelector(".hs-select__item"+l[0].index),g)})},R=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"\u4F20\u5165\u7684\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u662F2";for(e.sort((t,c)=>t-c),r(o.refs["hsdiv"+s.HsKey+e[0]],h,i),r(o.refs["hstd"+s.HsKey+e[0]],g),r(o.refs["hsdiv"+s.HsKey+e[1]],h,i),r(o.refs["hstd"+s.HsKey+e[1]],S);e[1]>=e[0];)r(o.refs["hstd"+s.HsKey+e[0]],_),e[0]++}};return j(()=>{B(()=>{R(s.echo)})}),()=>a(M,null,[a("table",{cellspacing:"0",cellpadding:"0"},[a("tbody",null,[a("tr",null,[s.max.map((e,t)=>a("td",{"data-index":s.HsKey,ref:`hstd${s.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>K(t),onMouseleave:()=>u(t),onClick:()=>C(t,e),style:{cursor:v(q)?"auto":"pointer",textAlign:"center"},key:t},[a("div",{ref:`hsdiv${s.HsKey}${t}`,class:`hs-item ${[v(x)[t]+t]}`},[a("span",null,[e])])]))])])])])}});const P=Object.assign(w,{install(s){s.component(w.name,w)}});const U={class:"card-header"},W={key:0},X=I({setup(s){let m=L(""),o=L([{title:"\u57FA\u672C\u4F7F\u7528",echo:[],disabled:!1},{title:"\u56DE\u663E\u6A21\u5F0F",echo:[2,7],disabled:!0}]);const y=({left:q,right:x})=>{m.value=`${q}-${x}`};return(q,x)=>{const K=Q("el-card");return V(),F("div",null,[(V(!0),F(M,null,T(v(o),(u,C)=>(V(),Z(K,{class:"box-card",key:C},{header:N(()=>[p("div",U,[p("span",null,E(u.title),1)])]),default:N(()=>[a(v(P),{HsKey:C,echo:u.echo,onSelectedVal:y,disabled:u.disabled},null,8,["HsKey","echo","disabled"]),u.disabled?z("",!0):(V(),F("h4",W,"\u9009\u4E2D\u8303\u56F4\uFF1A"+E(v(m)),1))]),_:2},1024))),128))])}}});var ee=O(X,[["__scopeId","data-v-dadce60c"]]);export{ee as default};
