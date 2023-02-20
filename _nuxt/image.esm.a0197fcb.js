import{F as w}from"./focustrap.esm.ff601bdd.js";import{s as y}from"./portal.esm.295e816d.js";import{Z as m,D as p,y as C,j as L,o,b as c,k as n,v as d,q as _,l as u,e as f,w as v,m as z,n as h,T as B,p as g}from"./entry.769ec967.js";var A={name:"Image",inheritAttrs:!1,emits:["show","hide","error"],props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null}},mask:null,data(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount(){this.mask&&m.clear(this.container)},methods:{maskRef(t){this.mask=t},toolbarRef(t){this.toolbarRef=t},onImageClick(){this.preview&&(this.maskVisible=!0,setTimeout(()=>{this.previewVisible=!0},25))},onPreviewImageClick(){this.previewClick=!0},onMaskClick(){this.previewClick||(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown(t){switch(t.code){case"Escape":this.onMaskClick(),setTimeout(()=>{p.focus(this.$refs.previewButton)},25),t.preventDefault();break}},onError(){this.$emit("error")},rotateRight(){this.rotate+=90,this.previewClick=!0},rotateLeft(){this.rotate-=90,this.previewClick=!0},zoomIn(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter(){m.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter(){this.focus(),this.$emit("show")},onBeforeLeave(){p.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(t){m.clear(t),this.maskVisible=!1},focus(){let t=this.mask.querySelector("[autofocus]");t&&t.focus()}},computed:{containerClass(){return["p-image p-component",this.class,{"p-image-preview-container":this.preview}]},maskClass(){return["p-image-mask p-component-overlay p-component-overlay-enter"]},rotateClass(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},zoomDisabled(){return this.scale<=.5||this.scale>=1.5},rightAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:y},directives:{focustrap:w}};const E=n("i",{class:"p-image-preview-icon pi pi-eye"},null,-1),I=["aria-modal"],P={class:"p-image-toolbar"},V=["aria-label"],x=n("i",{class:"pi pi-refresh"},null,-1),S=[x],T=["aria-label"],D=n("i",{class:"pi pi-undo"},null,-1),R=[D],M=["disabled","aria-label"],O=n("i",{class:"pi pi-search-minus"},null,-1),j=[O],N=["disabled","aria-label"],K=n("i",{class:"pi pi-search-plus"},null,-1),q=[K],F=["aria-label"],U=n("i",{class:"pi pi-times"},null,-1),Z=[U],H={key:0},G=["src"];function J(t,i,s,l,r,e){const k=C("Portal"),b=L("focustrap");return o(),c("span",{class:h(e.containerClass),style:g(s.style)},[n("img",d(t.$attrs,{style:s.imageStyle,class:s.imageClass,onError:i[0]||(i[0]=(...a)=>e.onError&&e.onError(...a))}),null,16),s.preview?(o(),c("button",d({key:0,ref:"previewButton",class:"p-image-preview-indicator",onClick:i[1]||(i[1]=(...a)=>e.onImageClick&&e.onImageClick(...a))},s.previewButtonProps),[_(t.$slots,"indicator",{},()=>[E])],16)):u("",!0),f(k,null,{default:v(()=>[r.maskVisible?z((o(),c("div",{key:0,ref:e.maskRef,role:"dialog",class:h(e.maskClass),"aria-modal":r.maskVisible,onClick:i[8]||(i[8]=(...a)=>e.onMaskClick&&e.onMaskClick(...a)),onKeydown:i[9]||(i[9]=(...a)=>e.onMaskKeydown&&e.onMaskKeydown(...a))},[n("div",P,[n("button",{class:"p-image-action p-link",onClick:i[2]||(i[2]=(...a)=>e.rotateRight&&e.rotateRight(...a)),type:"button","aria-label":e.rightAriaLabel},S,8,V),n("button",{class:"p-image-action p-link",onClick:i[3]||(i[3]=(...a)=>e.rotateLeft&&e.rotateLeft(...a)),type:"button","aria-label":e.leftAriaLabel},R,8,T),n("button",{class:"p-image-action p-link",onClick:i[4]||(i[4]=(...a)=>e.zoomOut&&e.zoomOut(...a)),type:"button",disabled:e.zoomDisabled,"aria-label":e.zoomOutAriaLabel},j,8,M),n("button",{class:"p-image-action p-link",onClick:i[5]||(i[5]=(...a)=>e.zoomIn&&e.zoomIn(...a)),type:"button",disabled:e.zoomDisabled,"aria-label":e.zoomInAriaLabel},q,8,N),n("button",{class:"p-image-action p-link",type:"button",onClick:i[6]||(i[6]=(...a)=>t.hidePreview&&t.hidePreview(...a)),"aria-label":e.closeAriaLabel,autofocus:""},Z,8,F)]),f(B,{name:"p-image-preview",onBeforeEnter:e.onBeforeEnter,onEnter:e.onEnter,onLeave:e.onLeave,onBeforeLeave:e.onBeforeLeave,onAfterLeave:e.onAfterLeave},{default:v(()=>[r.previewVisible?(o(),c("div",H,[n("img",{src:t.$attrs.src,class:"p-image-preview",style:g(e.imagePreviewStyle),onClick:i[7]||(i[7]=(...a)=>e.onPreviewImageClick&&e.onPreviewImageClick(...a))},null,12,G)])):u("",!0)]),_:1},8,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],42,I)),[[b]]):u("",!0)]),_:1})],6)}function Q(t,i){i===void 0&&(i={});var s=i.insertAt;if(!(!t||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var W=`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-image-preview-container {
    position: relative;
    display: inline-block;
}
.p-image-preview-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}
.p-image-preview-icon {
    font-size: 1.5rem;
}
.p-image-preview-container:hover > .p-image-preview-indicator {
    opacity: 1;
    cursor: pointer;
}
.p-image-preview-container > img {
    cursor: pointer;
}
.p-image-toolbar {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
}
.p-image-action.p-link {
    display: flex;
    justify-content: center;
    align-items: center;
}
.p-image-preview {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}
.p-image-preview-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-image-preview-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-image-preview-enter-from,
.p-image-preview-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`;Q(W);A.render=J;export{A as default};
