import b from"./button.esm.fc39141c.js";import c from"./tieredmenu.esm.f9d4a6b2.js";import{U as m,y as i,o as f,b as y,q as h,e as u,v as r,n as v,p as x}from"./entry.769ec967.js";import"./overlayeventbus.esm.2cb0342e.js";import"./portal.esm.295e816d.js";var s={name:"SplitButton",emits:["click"],props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:"pi pi-chevron-down"}},data(){return{isExpanded:!1}},methods:{onDropdownButtonClick(){this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=!this.$refs.menu.visible},onDropdownKeydown(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick(e){this.$refs.menu.hide(e),this.$emit("click")}},computed:{ariaId(){return m()},containerClass(){return["p-splitbutton p-component",this.class]}},components:{PVSButton:b,PVSMenu:c}};function B(e,a,t,o,n,l){const d=i("PVSButton"),p=i("PVSMenu");return f(),y("div",{class:v(l.containerClass),style:x(t.style)},[h(e.$slots,"default",{},()=>[u(d,r({type:"button",class:"p-splitbutton-defaultbutton",icon:t.icon,label:t.label,disabled:t.disabled,"aria-label":t.label,onClick:l.onDefaultButtonClick},t.buttonProps),null,16,["icon","label","disabled","aria-label","onClick"])]),u(d,r({ref:"button",type:"button",class:"p-splitbutton-menubutton",icon:t.menuButtonIcon,disabled:t.disabled,"aria-haspopup":"true","aria-expanded":n.isExpanded,"aria-controls":l.ariaId+"_overlay",onClick:l.onDropdownButtonClick,onKeydown:l.onDropdownKeydown},t.menuButtonProps),null,16,["icon","disabled","aria-expanded","aria-controls","onClick","onKeydown"]),u(p,{ref:"menu",id:l.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo},null,8,["id","model","autoZIndex","baseZIndex","appendTo"])],6)}function C(e,a){a===void 0&&(a={});var t=a.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var I=`
.p-splitbutton[data-v-15738044] {
    display: inline-flex;
    position: relative;
}
.p-splitbutton .p-splitbutton-defaultbutton[data-v-15738044],
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button[data-v-15738044],
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button[data-v-15738044] {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}
.p-splitbutton-menubutton[data-v-15738044],
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button[data-v-15738044],
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button[data-v-15738044] {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-splitbutton .p-menu[data-v-15738044] {
    min-width: 100%;
}
.p-fluid .p-splitbutton[data-v-15738044] {
    display: flex;
}
`;C(I);s.render=B;s.__scopeId="data-v-15738044";export{s as default};
