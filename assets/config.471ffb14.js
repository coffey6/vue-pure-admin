import{_ as z,y as A,z as D,W as I,ac as T,I as n,o as F,p as R,H as t,S as s,q as _,C as a,G as g,J as p}from"./index.55deba57.js";const N={class:"config"},S={class:"list"},V=p("\u7F16\u8F91"),E=p("\u5220\u9664"),B={class:"page-left"},J={class:"select-count"},$=A({props:{drawer:{type:Boolean,default:!1},drawTitle:{default:""},direction:{default:"rtl"}},emits:["handleClose"],setup(r,{emit:m}){const{t:x}=D(),i=I("xTable",null),e=T({tableData:[{name:"\u7981\u7528",dataval:"0"},{name:"\u542F\u7528",dataval:"1"}],isAllChecked:!1,isIndeterminate:!1,selectRecords:[],tablePage:{total:0,currentPage:1,pageSize:10}});function v(){e.isAllChecked=!1,e.isIndeterminate=!1,m("handleClose")}function U(l){}function q(l){}const b=()=>{setTimeout(()=>{console.log(i)},1e3);const l=i.value;l.setAllCheckboxRow(e.isAllChecked),e.selectRecords=l.getCheckboxRecords()},f=({records:l})=>{const o=i.value;e.isAllChecked=o.isAllCheckboxChecked(),e.isIndeterminate=o.isCheckboxIndeterminate(),e.selectRecords=l};return(l,o)=>{const C=n("el-divider"),d=n("vxe-table-column"),u=n("vxe-button"),h=n("vxe-table"),k=n("vxe-checkbox"),P=n("vxe-pager"),w=n("el-drawer");return F(),R("div",N,[t(w,{"model-value":r.drawer,title:r.drawTitle,direction:r.direction,"before-close":v,"destroy-on-close":"",size:"640px"},{default:s(()=>[t(C),_("div",S,[t(h,{ref_key:"xTable",ref:i,border:"",data:a(e).tableData,onCheckboxChange:f,onCheckboxAll:f},{default:s(()=>[t(d,{type:"checkbox",width:"60"}),t(d,{field:"name",title:"\u540D\u79F0"}),t(d,{field:"dataval",title:"\u6570\u636E\u503C"}),t(d,{title:"\u64CD\u4F5C",fixed:"right"},{default:s(({row:c})=>[t(u,{type:"text",icon:"fa fa-pencil-square-o",onClick:y=>void 0},{default:s(()=>[V]),_:2},1032,["onClick"]),t(u,{type:"text",icon:"fa fa-trash-o",onClick:y=>void 0},{default:s(()=>[E]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(P,{perfect:"","current-page":a(e).tablePage.currentPage,"onUpdate:current-page":o[1]||(o[1]=c=>a(e).tablePage.currentPage=c),"page-size":a(e).tablePage.pageSize,"onUpdate:page-size":o[2]||(o[2]=c=>a(e).tablePage.pageSize=c),total:a(e).tablePage.total,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},{left:s(()=>[_("span",B,[t(k,{modelValue:a(e).isAllChecked,"onUpdate:modelValue":o[0]||(o[0]=c=>a(e).isAllChecked=c),indeterminate:a(e).isIndeterminate,onChange:b},null,8,["modelValue","indeterminate"]),_("span",J,"\u5DF2\u9009\u4E2D"+g(a(e).selectRecords.length)+"\u6761",1),t(u,{size:"small"},{default:s(()=>[p(g(a(x)("buttons.hsdelete")),1)]),_:1})])]),_:1},8,["current-page","page-size","total"])])]),_:1},8,["model-value","title","direction"])])}}});var H=z($,[["__scopeId","data-v-12c3a6c2"]]);export{H as default};
