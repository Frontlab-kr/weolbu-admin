import{U as P,O as m,Z as g,D as h,R as V,y as k,q as _,o,b as d,F as x,s as z,m as C,n as b,j as y,g as v,w as B,l as K,k as f,t as L,r as M,p as A,v as R,e as N}from"./entry.7f5874b1.js";var w={name:"MenubarSub",emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},template:{type:Function,default:null},exact:{type:Boolean,default:!0},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,i){return e&&e.item?m.getItemValue(e.item[t],i):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return m.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]},getSubmenuIcon(){return["p-submenu-icon pi",{"pi-angle-right":!this.root,"pi-angle-down":this.root}]}},computed:{containerClass(){return{"p-submenu-list":!this.root,"p-menubar-root-list":this.root}}},directives:{ripple:V}};const T=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],G=["onClick","onMouseenter"],O=["href","onClick"],U={class:"p-menuitem-text"},j=["href","target"],H={class:"p-menuitem-text"},q=["id"];function W(e,t,i,r,a,s){const u=k("router-link"),l=k("MenubarSub",!0),c=_("ripple");return o(),d("ul",null,[(o(!0),d(x,null,z(i.items,(n,p)=>(o(),d(x,{key:s.getItemKey(n)},[s.isItemVisible(n)&&!s.getItemProp(n,"separator")?(o(),d("li",{key:0,id:s.getItemId(n),style:C(s.getItemProp(n,"style")),class:b(s.getItemClass(n)),role:"menuitem","aria-label":s.getItemLabel(n),"aria-disabled":s.isItemDisabled(n)||void 0,"aria-expanded":s.isItemGroup(n)?s.isItemActive(n):void 0,"aria-haspopup":s.isItemGroup(n)&&!s.getItemProp(n,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":s.getAriaSetSize(),"aria-posinset":s.getAriaPosInset(p)},[y("div",{class:"p-menuitem-content",onClick:I=>s.onItemClick(I,n),onMouseenter:I=>s.onItemMouseEnter(I,n)},[i.template?(o(),v(M(i.template),{key:1,item:n.item},null,8,["item"])):(o(),d(x,{key:0},[s.getItemProp(n,"to")&&!s.isItemDisabled(n)?(o(),v(u,{key:0,to:s.getItemProp(n,"to"),custom:""},{default:B(({navigate:I,href:E,isActive:F,isExactActive:S})=>[K((o(),d("a",{href:E,class:b(s.getItemActionClass(n,{isActive:F,isExactActive:S})),tabindex:"-1","aria-hidden":"true",onClick:D=>s.onItemActionClick(D,I)},[s.getItemProp(n,"icon")?(o(),d("span",{key:0,class:b(s.getItemIconClass(n))},null,2)):f("",!0),y("span",U,L(s.getItemLabel(n)),1)],10,O)),[[c]])]),_:2},1032,["to"])):K((o(),d("a",{key:1,href:s.getItemProp(n,"url"),class:b(s.getItemActionClass(n)),target:s.getItemProp(n,"target"),tabindex:"-1","aria-hidden":"true"},[s.getItemProp(n,"icon")?(o(),d("span",{key:0,class:b(s.getItemIconClass(n))},null,2)):f("",!0),y("span",H,L(s.getItemLabel(n)),1),s.getItemProp(n,"items")?(o(),d("span",{key:1,class:b(s.getSubmenuIcon())},null,2)):f("",!0)],10,j)),[[c]])],64))],40,G),s.isItemVisible(n)&&s.isItemGroup(n)?(o(),v(l,{key:0,menuId:i.menuId,role:"menu",class:"p-submenu-list",focusedItemId:i.focusedItemId,items:n.items,mobileActive:i.mobileActive,activeItemPath:i.activeItemPath,template:i.template,exact:i.exact,level:i.level+1,onItemClick:t[0]||(t[0]=I=>e.$emit("item-click",I)),onItemMouseenter:t[1]||(t[1]=I=>e.$emit("item-mouseenter",I))},null,8,["menuId","focusedItemId","items","mobileActive","activeItemPath","template","exact","level"])):f("",!0)],14,T)):f("",!0),s.isItemVisible(n)&&s.getItemProp(n,"separator")?(o(),d("li",{key:1,id:s.getItemId(n),style:C(s.getItemProp(n,"style")),class:b(s.getSeparatorItemClass(n)),role:"separator"},null,14,q)):f("",!0)],64))),128))])}w.render=W;var Z={name:"Menubar",emits:["focus","blur"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},buttonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeItemPath(e){m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted(){this.id=this.id||P()},beforeUnmount(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.container&&g.clear(this.container),this.container=null},methods:{getItemProp(e,t){return e?m.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&m.isNotEmpty(e.items)},toggle(e){this.mobileActive?(this.mobileActive=!1,g.clear(this.menubar),this.hide()):(this.mobileActive=!0,g.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()},show(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},h.focus(this.menubar)},hide(e,t){this.mobileActive&&setTimeout(()=>{h.focus(this.$refs.menubutton)},0),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&h.focus(this.menubar),this.dirty=!1},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:i}=e;if(m.isEmpty(t))return;const{index:r,key:a,level:s,parentKey:u,items:l}=t,c=m.isNotEmpty(l),n=this.activeItemPath.filter(p=>p.parentKey!==u&&p.parentKey!==a);c&&n.push(t),this.focusedItemInfo={index:r,level:s,parentKey:u},this.activeItemPath=n,c&&(this.dirty=!0),i&&h.focus(this.menubar)},onItemClick(e){const{originalEvent:t,processedItem:i}=e,r=this.isProccessedItemGroup(i),a=m.isEmpty(i.parent);if(this.isSelected(i)){const{index:u,key:l,level:c,parentKey:n}=i;this.activeItemPath=this.activeItemPath.filter(p=>l!==p.key&&l.startsWith(p.key)),this.focusedItemInfo={index:u,level:c,parentKey:n},this.dirty=!a,h.focus(this.menubar)}else if(r)this.onItemChange(e);else{const u=a?i:this.activeItemPath.find(l=>l.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,u?u.index:-1),this.mobileActive=!1,h.focus(this.menubar)}},onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick(e){this.toggle(e)},menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?m.isEmpty(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e));else{const r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowUpKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(m.isEmpty(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key};const a=this.findLastItemIndex();this.changeFocusedItemIndex(e,a)}}else{const r=this.activeItemPath.find(a=>a.key===t.parentKey);if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(a=>a.parentKey!==this.focusedItemInfo.parentKey);else{const a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],i=t?this.activeItemPath.find(r=>r.key===t.parentKey):null;if(i)this.onItemChange({originalEvent:e,processedItem:i}),this.activeItemPath=this.activeItemPath.filter(r=>r.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault();else{const r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?this.activeItemPath.find(r=>r.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e));else{const r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=h.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),i=t&&h.findSingle(t,".p-menuitem-link");i?i.click():t&&t.click();const r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.menubar!==e.target&&!this.menubar.contains(e.target),i=this.mobileActive&&this.$refs.menubutton!==e.target&&!this.$refs.menubutton.contains(e.target);t&&(i?this.mobileActive=!1:this.hide())},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{h.isTouchDevice()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return m.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?m.findLastIndex(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,r=!1;return this.focusedItemInfo.index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)):i+this.focusedItemInfo.index):i=this.visibleItems.findIndex(a=>this.isItemMatched(a)),i!==-1&&(r=!0),i===-1&&this.focusedItemInfo.index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=h.findSingle(this.menubar,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,i={},r=""){const a=[];return e&&e.forEach((s,u)=>{const l=(r!==""?r+"_":"")+u,c={item:s,index:u,level:t,key:l,parent:i,parentKey:r};c.items=this.createProcessedItems(s.items,t+1,c,l),a.push(c)}),a},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-menubar p-component",{"p-menubar-mobile-active":this.mobileActive}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${m.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{MenubarSub:w}};const J={key:0,class:"p-menubar-start"},Q=["aria-haspopup","aria-expanded","aria-controls","aria-label"],X=y("i",{class:"pi pi-bars"},null,-1),Y=[X],$={key:2,class:"p-menubar-end"};function ee(e,t,i,r,a,s){const u=k("MenubarSub");return o(),d("div",{ref:s.containerRef,class:b(s.containerClass)},[e.$slots.start?(o(),d("div",J,[A(e.$slots,"start")])):f("",!0),i.model&&i.model.length>0?(o(),d("a",R({key:1,ref:"menubutton",role:"button",tabindex:"0",class:"p-menubar-button","aria-haspopup":!!(i.model.length&&i.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":e.$primevue.config.locale.aria.navigation,onClick:t[0]||(t[0]=l=>s.menuButtonClick(l)),onKeydown:t[1]||(t[1]=l=>s.menuButtonKeydown(l))},i.buttonProps),Y,16,Q)):f("",!0),N(u,{ref:s.menubarRef,id:a.id,class:"p-menubar-root-list",role:"menubar",items:s.processedItems,template:e.$slots.item,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?s.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?s.focusedItemId:void 0,activeItemPath:a.activeItemPath,exact:i.exact,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:s.onFocus,onBlur:s.onBlur,onKeydown:s.onKeyDown,onItemClick:s.onItemClick,onItemMouseenter:s.onItemMouseEnter},null,8,["id","items","template","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","exact","aria-labelledby","aria-label","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(o(),d("div",$,[A(e.$slots,"end")])):f("",!0)],2)}function te(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var ie=`
.p-menubar {
    display: flex;
    align-items: center;
}
.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menubar .p-menuitem-text {
    line-height: 1;
}
.p-menubar .p-menuitem {
    position: relative;
}
.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.p-menubar-root-list > li ul {
    display: none;
    z-index: 1;
}
.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}
.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    z-index: 1;
}
.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
.p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}
.p-menubar-button {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
`;te(ie);Z.render=ee;export{Z as default};
