import{F as D}from"./focustrap.esm.13cbe4d4.js";import{s as C}from"./portal.esm.812dc1ee.js";import{c as z,Z as f,D as o,U as x,R as E,y as B,q as L,o as s,g as S,w,b as m,n as h,e as I,T as P,l as b,v as y,p as v,t as k,k as p,j as c,f as R}from"./entry.7f5874b1.js";var T={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:z(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&f.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&f.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&o.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&f.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=n=>n.querySelector("[autofocus]");let i=this.$slots.footer&&e(this.footerContainer);i||(i=this.$slots.header&&e(this.headerContainer),i||(i=this.$slots.default&&e(this.content),i||(i=e(this.container)))),i&&(this.focusable=!0,i.focus())},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?o.addClass(document.body,"p-overflow-hidden"):o.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&o.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&o.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return i?`p-dialog-${i}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){o.hasClass(e.target,"p-dialog-header-icon")||o.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",o.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let i=o.getOuterWidth(this.container),n=o.getOuterHeight(this.container),l=e.pageX-this.lastPageX,a=e.pageY-this.lastPageY,t=this.container.getBoundingClientRect(),u=t.left+l,d=t.top+a,g=o.getViewport();this.container.style.position="fixed",this.keepInViewport?(u>=this.minX&&u+i<g.width&&(this.lastPageX=e.pageX,this.container.style.left=u+"px"),d>=this.minY&&d+n<g.height&&(this.lastPageY=e.pageY,this.container.style.top=d+"px")):(this.lastPageX=e.pageX,this.container.style.left=u+"px",this.lastPageY=e.pageY,this.container.style.top=d+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,o.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return x()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return x()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:E,focustrap:D},components:{Portal:C}};const K=["aria-labelledby","aria-modal"],j=["id"],X={class:"p-dialog-header-icons"},Y=["autofocus","tabindex"],A=["autofocus","aria-label"];function V(e,i,n,l,a,t){const u=B("Portal"),d=L("ripple"),g=L("focustrap");return s(),S(u,{appendTo:n.appendTo},{default:w(()=>[a.containerVisible?(s(),m("div",{key:0,ref:t.maskRef,class:h(t.maskClass),onClick:i[3]||(i[3]=(...r)=>t.onMaskClick&&t.onMaskClick(...r))},[I(P,{name:"p-dialog",onBeforeEnter:t.onBeforeEnter,onEnter:t.onEnter,onBeforeLeave:t.onBeforeLeave,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave,appear:""},{default:w(()=>[n.visible?b((s(),m("div",y({key:0,ref:t.containerRef,class:t.dialogClass,role:"dialog","aria-labelledby":t.ariaLabelledById,"aria-modal":n.modal},e.$attrs),[n.showHeader?(s(),m("div",{key:0,ref:t.headerContainerRef,class:"p-dialog-header",onMousedown:i[2]||(i[2]=(...r)=>t.initDrag&&t.initDrag(...r))},[v(e.$slots,"header",{},()=>[n.header?(s(),m("span",{key:0,id:t.ariaLabelledById,class:"p-dialog-title"},k(n.header),9,j)):p("",!0)]),c("div",X,[n.maximizable?b((s(),m("button",{key:0,ref:t.maximizableRef,autofocus:a.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:i[0]||(i[0]=(...r)=>t.maximize&&t.maximize(...r)),type:"button",tabindex:n.maximizable?"0":"-1"},[c("span",{class:h(t.maximizeIconClass)},null,2)],8,Y)),[[d]]):p("",!0),n.closable?b((s(),m("button",y({key:1,ref:t.closeButtonRef,autofocus:a.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:i[1]||(i[1]=(...r)=>t.close&&t.close(...r)),"aria-label":t.closeAriaLabel,type:"button"},n.closeButtonProps),[c("span",{class:h(["p-dialog-header-close-icon",n.closeIcon])},null,2)],16,A)),[[d]]):p("",!0)])],544)):p("",!0),c("div",y({ref:t.contentRef,class:t.contentStyleClass,style:n.contentStyle},n.contentProps),[v(e.$slots,"default")],16),n.footer||e.$slots.footer?(s(),m("div",{key:1,ref:t.footerContainerRef,class:"p-dialog-footer"},[v(e.$slots,"footer",{},()=>[R(k(n.footer),1)])],512)):p("",!0)],16,K)),[[g,{disabled:!n.modal}]]):p("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):p("",!0)]),_:3},8,["appendTo"])}function _(e,i){i===void 0&&(i={});var n=i.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var M=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;_(M);T.render=V;export{T as default};
