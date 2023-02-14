import{s as F}from"./portal.esm.812dc1ee.js";import{U as C,O as d,Z as v,D as l,R as z,y as x,q as T,o,g as b,w as y,b as u,F as k,s as O,m as P,n as p,j as L,l as E,k as f,t as w,r as B,T as A,e as K,v as R}from"./entry.7f5874b1.js";var S={name:"ContextMenuSub",emits:["item-click","item-mouseenter"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},template:{type:Function,default:null},exact:{type:Boolean,default:!0},activeItemPath:{type:Object,default:null}},methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,n){return e&&e.item?d.getItemValue(e.item[t],n):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return d.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},onEnter(){this.position()},position(){const e=this.$refs.container.parentElement,t=l.getOffset(this.$refs.container.parentElement),n=l.getViewport(),a=this.$refs.container.offsetParent?this.$refs.container.offsetWidth:l.getHiddenElementOuterWidth(this.$refs.container),r=l.getOuterWidth(e.children[0]);this.$refs.container.style.top="0px",parseInt(t.left,10)+r+a>n.width-l.calculateScrollbarWidth()?this.$refs.container.style.left=-1*a+"px":this.$refs.container.style.left=r+"px"},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:z}};const N={key:0,ref:"container"},G=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],W=["onClick","onMouseenter"],H=["href","onClick"],U={class:"p-menuitem-text"},Z=["href","target"],j={class:"p-menuitem-text"},X={key:1,class:"p-submenu-icon pi pi-angle-right"},Y=["id"];function q(e,t,n,a,r,i){const c=x("router-link"),h=x("ContextMenuSub",!0),m=T("ripple");return o(),b(A,{name:"p-contextmenusub",onEnter:i.onEnter},{default:y(()=>[n.root||n.visible?(o(),u("ul",N,[(o(!0),u(k,null,O(n.items,(s,g)=>(o(),u(k,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(o(),u("li",{key:0,id:i.getItemId(s),style:P(i.getItemProp(s,"style")),class:p(i.getItemClass(s)),role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(g)},[L("div",{class:"p-menuitem-content",onClick:I=>i.onItemClick(I,s),onMouseenter:I=>i.onItemMouseEnter(I,s)},[n.template?(o(),b(B(n.template),{key:1,item:s.item},null,8,["item"])):(o(),u(k,{key:0},[i.getItemProp(s,"to")&&!i.isItemDisabled(s)?(o(),b(c,{key:0,to:i.getItemProp(s,"to"),custom:""},{default:y(({navigate:I,href:D,isActive:V,isExactActive:M})=>[E((o(),u("a",{href:D,class:p(i.getItemActionClass(s,{isActive:V,isExactActive:M})),tabindex:"-1","aria-hidden":"true",onClick:_=>i.onItemActionClick(_,I)},[i.getItemProp(s,"icon")?(o(),u("span",{key:0,class:p(i.getItemIconClass(s))},null,2)):f("",!0),L("span",U,w(i.getItemLabel(s)),1)],10,H)),[[m]])]),_:2},1032,["to"])):E((o(),u("a",{key:1,href:i.getItemProp(s,"url"),class:p(i.getItemActionClass(s)),target:i.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true"},[i.getItemProp(s,"icon")?(o(),u("span",{key:0,class:p(i.getItemIconClass(s))},null,2)):f("",!0),L("span",j,w(i.getItemLabel(s)),1),i.getItemProp(s,"items")?(o(),u("span",X)):f("",!0)],10,Z)),[[m]])],64))],40,W),i.isItemVisible(s)&&i.isItemGroup(s)?(o(),b(h,{key:0,id:i.getItemId(s)+"_list",role:"menu",class:"p-submenu-list",menuId:n.menuId,focusedItemId:n.focusedItemId,items:s.items,template:n.template,activeItemPath:n.activeItemPath,exact:n.exact,level:n.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),onItemClick:t[0]||(t[0]=I=>e.$emit("item-click",I)),onItemMouseenter:t[1]||(t[1]=I=>e.$emit("item-mouseenter",I))},null,8,["id","menuId","focusedItemId","items","template","activeItemPath","exact","level","visible"])):f("",!0)],14,G)):f("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(o(),u("li",{key:1,id:i.getItemId(s),style:P(i.getItemProp(s,"style")),class:p(i.getSeparatorItemClass(s)),role:"separator"},null,14,Y)):f("",!0)],64))),128))],512)):f("",!0)]),_:1},8,["onEnter"])}S.render=q;var J={name:"ContextMenu",inheritAttrs:!1,emits:["focus","blur","show","hide"],props:{model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,list:null,data(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||C()},activeItemPath(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener(),this.bindDocumentContextMenuListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindDocumentContextMenuListener())}},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&v.clear(this.container),this.target=null,this.container=null},mounted(){this.id=this.id||C(),this.global&&this.bindDocumentContextMenuListener()},methods:{getItemProp(e,t){return e?d.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&d.isNotEmpty(e.items)},toggle(e){this.visible?this.hide():this.show(e)},show(e){this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},l.focus(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide(){this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:n}=e;if(d.isEmpty(t))return;const{index:a,key:r,level:i,parentKey:c,items:h}=t,m=d.isNotEmpty(h),s=this.activeItemPath.filter(g=>g.parentKey!==c&&g.parentKey!==r);m&&(s.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:i,parentKey:c},this.activeItemPath=s,n&&l.focus(this.list)},onItemClick(e){const{processedItem:t}=e,n=this.isProccessedItemGroup(t);if(this.isSelected(t)){const{index:r,key:i,level:c,parentKey:h}=t;this.activeItemPath=this.activeItemPath.filter(m=>i!==m.key&&i.startsWith(m.key)),this.focusedItemInfo={index:r,level:c,parentKey:h},l.focus(this.list)}else n?this.onItemChange(e):this.hide()},onItemMouseEnter(e){this.onItemChange(e)},onArrowDownKey(e){const t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{const t=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()}},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],n=this.activeItemPath.find(r=>r.key===t.parentKey);d.isEmpty(t.parent)||(this.focusedItemInfo={index:-1,parentKey:n?n.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(r=>r.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault()},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=l.findSingle(this.list,`li[id="${`${this.focusedItemId}`}"]`),n=t&&l.findSingle(t,".p-menuitem-link");n?n.click():t&&t.click();const a=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(a)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter(e){this.position(),this.autoZIndex&&v.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter(){this.bindOutsideClickListener(),this.bindResizeListener(),this.bindDocumentContextMenuListener(),this.$emit("show"),l.focus(this.list)},onLeave(){this.$emit("hide"),this.container=null},onAfterLeave(e){this.autoZIndex&&v.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindDocumentContextMenuListener()},position(){let e=this.pageX+1,t=this.pageY+1,n=this.container.offsetParent?this.container.offsetWidth:l.getHiddenElementOuterWidth(this.container),a=this.container.offsetParent?this.container.offsetHeight:l.getHiddenElementOuterHeight(this.container),r=l.getViewport();e+n-document.body.scrollLeft>r.width&&(e-=n),t+a-document.body.scrollTop>r.height&&(t-=a),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),n=this.visible?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&n&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!l.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener(){this.documentContextMenuListener||(this.documentContextMenuListener=e=>{e.button!==2?this.show(e):this.hide()},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return d.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?d.findLastIndex(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,a=!1;return this.focusedItemInfo.index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo.index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(a=!0),n===-1&&this.focusedItemInfo.index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=l.findSingle(this.list,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,n={},a=""){const r=[];return e&&e.forEach((i,c)=>{const h=(a!==""?a+"_":"")+c,m={item:i,index:c,level:t,key:h,parent:n,parentKey:a};m.items=this.createProcessedItems(i.items,t+1,m,h),r.push(m)}),r},containerRef(e){this.container=e},listRef(e){this.list=e?e.$el:void 0}},computed:{containerClass(){return["p-contextmenu p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{ContextMenuSub:S,Portal:F}};function Q(e,t,n,a,r,i){const c=x("ContextMenuSub"),h=x("Portal");return o(),b(h,{appendTo:n.appendTo},{default:y(()=>[K(A,{name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:y(()=>[r.visible?(o(),u("div",R({key:0,ref:i.containerRef,class:i.containerClass},e.$attrs),[K(c,{ref:i.listRef,id:r.id+"_list",class:"p-contextmenu-root-list",role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,template:e.$slots.item,activeItemPath:r.activeItemPath,exact:n.exact,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,level:0,visible:r.submenuVisible,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-activedescendant","menuId","focusedItemId","items","template","activeItemPath","exact","aria-labelledby","aria-label","visible","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"])],16)):f("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:1},8,["appendTo"])}function $(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ee=`
.p-contextmenu {
    position: absolute;
}
.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
}
.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-contextmenu .p-menuitem-text {
    line-height: 1;
}
.p-contextmenu .p-menuitem {
    position: relative;
}
.p-contextmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-contextmenu-enter-from {
    opacity: 0;
}
.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`;$(ee);J.render=Q;export{J as default};
