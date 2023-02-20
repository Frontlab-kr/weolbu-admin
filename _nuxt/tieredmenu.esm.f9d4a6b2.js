import{O as _}from"./overlayeventbus.esm.2cb0342e.js";import{s as D}from"./portal.esm.295e816d.js";import{U as P,O as o,Z as v,D as h,C as z,R as O,y,j as M,o as l,b as c,F as x,s as B,p as C,n as b,k,g,w as L,m as w,l as p,t as E,r as R,e as K,T as N,v as H}from"./entry.769ec967.js";var S={name:"TieredMenuSub",emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},template:{type:Function,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,s){return e&&e.item?o.getItemValue(e.item[t],s):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return o.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:O}};const G=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],U=["onClick","onMouseenter"],Z=["href","onClick"],j={class:"p-menuitem-text"},W=["href","target"],q={class:"p-menuitem-text"},J={key:1,class:"p-submenu-icon pi pi-angle-right"},Q=["id"];function X(e,t,s,a,r,i){const d=y("router-link"),u=y("TieredMenuSub",!0),m=M("ripple");return l(),c("ul",null,[(l(!0),c(x,null,B(s.items,(n,f)=>(l(),c(x,{key:i.getItemKey(n)},[i.isItemVisible(n)&&!i.getItemProp(n,"separator")?(l(),c("li",{key:0,id:i.getItemId(n),style:C(i.getItemProp(n,"style")),class:b(i.getItemClass(n)),role:"menuitem","aria-label":i.getItemLabel(n),"aria-disabled":i.isItemDisabled(n)||void 0,"aria-expanded":i.isItemGroup(n)?i.isItemActive(n):void 0,"aria-haspopup":i.isItemGroup(n)&&!i.getItemProp(n,"to")?"menu":void 0,"aria-level":s.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(f)},[k("div",{class:"p-menuitem-content",onClick:I=>i.onItemClick(I,n),onMouseenter:I=>i.onItemMouseEnter(I,n)},[s.template?(l(),g(R(s.template),{key:1,item:n.item},null,8,["item"])):(l(),c(x,{key:0},[i.getItemProp(n,"to")&&!i.isItemDisabled(n)?(l(),g(d,{key:0,to:i.getItemProp(n,"to"),custom:""},{default:L(({navigate:I,href:A,isActive:F,isExactActive:V})=>[w((l(),c("a",{href:A,class:b(i.getItemActionClass(n,{isActive:F,isExactActive:V})),tabindex:"-1","aria-hidden":"true",onClick:T=>i.onItemActionClick(T,I)},[i.getItemProp(n,"icon")?(l(),c("span",{key:0,class:b(i.getItemIconClass(n))},null,2)):p("",!0),k("span",j,E(i.getItemLabel(n)),1)],10,Z)),[[m]])]),_:2},1032,["to"])):w((l(),c("a",{key:1,href:i.getItemProp(n,"url"),class:b(i.getItemActionClass(n)),target:i.getItemProp(n,"target"),tabindex:"-1","aria-hidden":"true"},[i.getItemProp(n,"icon")?(l(),c("span",{key:0,class:b(i.getItemIconClass(n))},null,2)):p("",!0),k("span",q,E(i.getItemLabel(n)),1),i.isItemGroup(n)?(l(),c("span",J)):p("",!0)],10,W)),[[m]])],64))],40,U),i.isItemVisible(n)&&i.isItemGroup(n)?(l(),g(u,{key:0,id:i.getItemId(n)+"_list",role:"menu",class:"p-submenu-list",menuId:s.menuId,focusedItemId:s.focusedItemId,items:n.items,template:s.template,activeItemPath:s.activeItemPath,exact:s.exact,level:s.level+1,onItemClick:t[0]||(t[0]=I=>e.$emit("item-click",I)),onItemMouseenter:t[1]||(t[1]=I=>e.$emit("item-mouseenter",I))},null,8,["id","menuId","focusedItemId","items","template","activeItemPath","exact","level"])):p("",!0)],14,G)):p("",!0),i.isItemVisible(n)&&i.getItemProp(n,"separator")?(l(),c("li",{key:1,id:i.getItemId(n),style:C(i.getItemProp(n,"style")),class:b(i.getSeparatorItemClass(n)),role:"separator"},null,14,Q)):p("",!0)],64))),128))])}S.render=X;var Y={name:"TieredMenu",inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeItemPath(e){this.popup||(o.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted(){this.id=this.id||P()},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&v.clear(this.container),this.target=null,this.container=null},methods:{getItemProp(e,t){return e?o.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return o.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&o.isNotEmpty(e.items)},toggle(e){this.visible?this.hide(e,!0):this.show(e)},show(e,t){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},t&&h.focus(this.menubar)},hide(e,t){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&h.focus(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&o.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:s}=e;if(o.isEmpty(t))return;const{index:a,key:r,level:i,parentKey:d,items:u}=t,m=o.isNotEmpty(u),n=this.activeItemPath.filter(f=>f.parentKey!==d&&f.parentKey!==r);m&&n.push(t),this.focusedItemInfo={index:a,level:i,parentKey:d},this.activeItemPath=n,m&&(this.dirty=!0),s&&h.focus(this.menubar)},onOverlayClick(e){_.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick(e){const{originalEvent:t,processedItem:s}=e,a=this.isProccessedItemGroup(s),r=o.isEmpty(s.parent);if(this.isSelected(s)){const{index:d,key:u,level:m,parentKey:n}=s;this.activeItemPath=this.activeItemPath.filter(f=>u!==f.key&&u.startsWith(f.key)),this.focusedItemInfo={index:d,level:m,parentKey:n},this.dirty=!r,h.focus(this.menubar)}else if(a)this.onItemChange(e);else{const d=r?s:this.activeItemPath.find(u=>u.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,d?d.index:-1),h.focus(this.menubar)}},onItemMouseEnter(e){this.dirty&&this.onItemChange(e)},onArrowDownKey(e){const t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(e,!0),e.preventDefault()}else{const t=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()}},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],s=this.activeItemPath.find(r=>r.key===t.parentKey);o.isEmpty(t.parent)||(this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(r=>r.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault()},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=h.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),s=t&&h.findSingle(t,".p-menuitem-link");if(s?s.click():t&&t.click(),!this.popup){const a=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(a)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(e,!0),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter(e){this.autoZIndex&&v.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.alignOverlay(),h.focus(this.menubar),this.scrollInView()},onAfterEnter(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave(e){this.autoZIndex&&v.clear(e)},alignOverlay(){this.container.style.minWidth=h.getOuterWidth(this.target)+"px",h.absolutePosition(this.container,this.target)},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),s=this.popup?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&s&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new z(this.target,e=>{this.hide(e,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{h.isTouchDevice()||this.hide(e,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return o.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(s=>this.isValidItem(s)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?o.findLastIndex(this.visibleItems.slice(0,e),s=>this.isValidItem(s)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let s=-1,a=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(r=>this.isItemMatched(r)),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(r=>this.isItemMatched(r)):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(r=>this.isItemMatched(r)),s!==-1&&(a=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,s=h.findSingle(this.menubar,`li[id="${t}"]`);s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,s={},a=""){const r=[];return e&&e.forEach((i,d)=>{const u=(a!==""?a+"_":"")+d,m={item:i,index:d,level:t,key:u,parent:s,parentKey:a};m.items=this.createProcessedItems(i.items,t+1,m,u),r.push(m)}),r},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-tieredmenu p-component",{"p-tieredmenu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${o.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{TieredMenuSub:S,Portal:D}};const $=["id"];function ee(e,t,s,a,r,i){const d=y("TieredMenuSub"),u=y("Portal");return l(),g(u,{appendTo:s.appendTo,disabled:!s.popup},{default:L(()=>[K(N,{name:"p-connected-overlay",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:L(()=>[r.visible?(l(),c("div",H({key:0,ref:i.containerRef,id:r.id,class:i.containerClass,onClick:t[0]||(t[0]=(...m)=>i.onOverlayClick&&i.onOverlayClick(...m))},e.$attrs),[K(d,{ref:i.menubarRef,id:r.id+"_list",class:"p-tieredmenu-root-list",tabindex:s.disabled?-1:s.tabindex,role:"menubar","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":s.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,template:e.$slots.item,activeItemPath:r.activeItemPath,exact:s.exact,level:0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","template","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"])],16,$)):p("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]),_:1},8,["appendTo","disabled"])}function te(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ie=`
.p-tieredmenu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}
.p-tieredmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}
.p-tieredmenu .p-menuitem {
    position: relative;
}
.p-tieredmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-tieredmenu .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
`;te(ie);Y.render=ee;export{Y as default};
