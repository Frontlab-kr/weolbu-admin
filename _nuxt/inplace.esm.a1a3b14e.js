import u from"./button.esm.fc39141c.js";import{y as f,o as s,b as c,v as p,G as m,q as d,g as y,l as h,n as v}from"./entry.769ec967.js";var b={name:"Inplace",emits:["open","close","update:active"],props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closeIcon:{type:String,default:"pi pi-times"},displayProps:{type:null,default:null},closeButtonProps:{type:null,default:null}},data(){return{d_active:this.active}},watch:{active(e){this.d_active=e}},methods:{open(e){this.disabled||(this.$emit("open",e),this.d_active=!0,this.$emit("update:active",!0))},close(e){this.$emit("close",e),this.d_active=!1,this.$emit("update:active",!1),setTimeout(()=>{this.$refs.display.focus()},0)}},computed:{containerClass(){return["p-inplace p-component",{"p-inplace-closable":this.closable}]},displayClass(){return["p-inplace-display",{"p-disabled":this.disabled}]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{IPButton:u}};const C=["tabindex"],B={key:1,class:"p-inplace-content"};function k(e,l,n,i,t,a){const r=f("IPButton");return s(),c("div",{class:v(a.containerClass),"aria-live":"polite"},[t.d_active?(s(),c("div",B,[d(e.$slots,"content"),n.closable?(s(),y(r,p({key:0,icon:n.closeIcon,"aria-label":a.closeAriaLabel,onClick:a.close},n.closeButtonProps),null,16,["icon","aria-label","onClick"])):h("",!0)])):(s(),c("div",p({key:0,ref:"display",class:a.displayClass,tabindex:e.$attrs.tabindex||"0",role:"button",onClick:l[0]||(l[0]=(...o)=>a.open&&a.open(...o)),onKeydown:l[1]||(l[1]=m((...o)=>a.open&&a.open(...o),["enter"]))},n.displayProps),[d(e.$slots,"display")],16,C))],2)}function x(e,l){l===void 0&&(l={});var n=l.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var P=`
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}
.p-inplace .p-inplace-content {
    display: inline;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}
.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}
`;x(P);b.render=k;export{b as default};
