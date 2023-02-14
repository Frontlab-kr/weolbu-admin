import{U as P,O as m,D as g,R as _,y as K,q as A,o as l,b as o,n as h,m as v,t as C,k as I,F as b,s as L,j as k,g as E,w as D,l as w,r as M,p as S,e as N}from"./entry.7f5874b1.js";var F={name:"MegaMenuSub",emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},items:{type:Array,default:null},level:{type:Number,default:0},template:{type:Function,default:null},activeItem:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getSubListId(e){return`${this.getItemId(e)}_list`},getSubListKey(e){return this.getSubListId(e)},getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,i){return e&&e.item?m.getItemValue(e.item[t],i):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return m.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getSubmenuHeaderClass(e){return["p-megamenu-submenu-header p-submenu-header",this.getItemProp(e,"class"),{"p-disabled":this.isItemDisabled(e)}]},getColumnClass(e){let t=this.isItemGroup(e)?e.items.length:0,i;switch(t){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getItemToggleIconClass(){return["p-submenu-icon",this.horizontal?"pi pi-angle-down":"pi pi-angle-right"]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:_}};const T=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],G=["onClick","onMouseenter"],B=["href","onClick"],R={class:"p-menuitem-text"},O=["href","target"],U={class:"p-menuitem-text"},H={key:0,class:"p-megamenu-panel"},j={class:"p-megamenu-grid"},q=["id"];function W(e,t,i,r,n,s){const d=K("router-link"),u=K("MegaMenuSub",!0),f=A("ripple");return l(),o("ul",null,[i.submenu?(l(),o("li",{key:0,class:h(s.getSubmenuHeaderClass(i.submenu)),style:v(s.getItemProp(i.submenu,"style")),role:"presentation"},C(s.getItemLabel(i.submenu)),7)):I("",!0),(l(!0),o(b,null,L(i.items,(a,x)=>(l(),o(b,{key:s.getItemKey(a)},[s.isItemVisible(a)&&!s.getItemProp(a,"separator")?(l(),o("li",{key:0,id:s.getItemId(a),style:v(s.getItemProp(a,"style")),class:h(s.getItemClass(a)),role:"menuitem","aria-label":s.getItemLabel(a),"aria-disabled":s.isItemDisabled(a)||void 0,"aria-expanded":s.isItemGroup(a)?s.isItemActive(a):void 0,"aria-haspopup":s.isItemGroup(a)&&!s.getItemProp(a,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":s.getAriaSetSize(),"aria-posinset":s.getAriaPosInset(x)},[k("div",{class:"p-menuitem-content",onClick:c=>s.onItemClick(c,a),onMouseenter:c=>s.onItemMouseEnter(c,a)},[i.template?(l(),E(M(i.template),{key:1,item:a.item},null,8,["item"])):(l(),o(b,{key:0},[s.getItemProp(a,"to")&&!s.isItemDisabled(a)?(l(),E(d,{key:0,to:s.getItemProp(a,"to"),custom:""},{default:D(({navigate:c,href:y,isActive:p,isExactActive:V})=>[w((l(),o("a",{href:y,class:h(s.getItemActionClass(a,{isActive:p,isExactActive:V})),tabindex:"-1","aria-hidden":"true",onClick:z=>s.onItemActionClick(z,c)},[s.getItemProp(a,"icon")?(l(),o("span",{key:0,class:h(s.getItemIconClass(a))},null,2)):I("",!0),k("span",R,C(s.getItemLabel(a)),1)],10,B)),[[f]])]),_:2},1032,["to"])):w((l(),o("a",{key:1,href:s.getItemProp(a,"url"),class:h(s.getItemActionClass(a)),target:s.getItemProp(a,"target"),tabindex:"-1","aria-hidden":"true"},[s.getItemProp(a,"icon")?(l(),o("span",{key:0,class:h(s.getItemIconClass(a))},null,2)):I("",!0),k("span",U,C(s.getItemLabel(a)),1),s.isItemGroup(a)?(l(),o("span",{key:1,class:h(s.getItemToggleIconClass())},null,2)):I("",!0)],10,O)),[[f]])],64))],40,G),s.isItemVisible(a)&&s.isItemGroup(a)?(l(),o("div",H,[k("div",j,[(l(!0),o(b,null,L(a.items,c=>(l(),o("div",{key:s.getItemKey(c),class:h(s.getColumnClass(a))},[(l(!0),o(b,null,L(c,y=>(l(),E(u,{key:s.getSubListKey(y),id:s.getSubListId(y),role:"menu",class:"p-submenu-list p-megamenu-submenu",menuId:i.menuId,focusedItemId:i.focusedItemId,submenu:y,items:y.items,template:i.template,exact:i.exact,level:i.level+1,onItemClick:t[0]||(t[0]=p=>e.$emit("item-click",p)),onItemMouseenter:t[1]||(t[1]=p=>e.$emit("item-mouseenter",p))},null,8,["id","menuId","focusedItemId","submenu","items","template","exact","level"]))),128))],2))),128))])])):I("",!0)],14,T)):I("",!0),s.isItemVisible(a)&&s.getItemProp(a,"separator")?(l(),o("li",{key:1,id:s.getItemId(a),style:v(s.getItemProp(a,"style")),class:h(s.getSeparatorItemClass(a)),role:"separator"},null,14,q)):I("",!0)],64))),128))])}F.render=W;var J={name:"MegaMenu",emits:["focus","blur"],props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},exact:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},outsideClickListener:null,resizeListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeItem(e){m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted(){this.id=this.id||P()},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener()},methods:{getItemProp(e,t){return e?m.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&m.isNotEmpty(e.items)},hide(e,t){this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&g.focus(this.menubar),this.dirty=!1},onFocus(e){if(this.focused=!0,this.focusedItemInfo.index===-1){const t=this.findFirstFocusedItemIndex(),i=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:i.key,parentKey:i.parentKey}}this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){if(this.disabled){e.preventDefault();return}const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:i}=e;if(m.isEmpty(t))return;const{index:r,key:n,parentKey:s,items:d}=t,u=m.isNotEmpty(d);u&&(this.activeItem=t),this.focusedItemInfo={index:r,key:n,parentKey:s},u&&(this.dirty=!0),i&&g.focus(this.menubar)},onItemClick(e){const{originalEvent:t,processedItem:i}=e,r=this.isProccessedItemGroup(i),n=m.isEmpty(i.parent);if(this.isSelected(i)){const{index:d,key:u,parentKey:f}=i;this.activeItem=null,this.focusedItemInfo={index:d,key:u,parentKey:f},this.dirty=!n,g.focus(this.menubar)}else if(r)this.onItemChange(e);else{const d=n?i:this.activeItem;this.hide(t),this.changeFocusedItemInfo(t,d?d.index:-1),g.focus(this.menubar)}},onItemMouseEnter(e){this.dirty&&this.onItemChange(e)},onArrowDownKey(e){if(this.horizontal)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{const i=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,key:i.key,parentKey:i.parentKey},this.searchValue="")}const t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()},onArrowUpKey(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){const t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{const t=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}},onArrowLeftKey(e){const t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.horizontal){const r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.vertical&&m.isNotEmpty(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);const r=t.columnIndex-1,n=this.visibleItems.findIndex(s=>s.columnIndex===r);n!==-1&&this.changeFocusedItemInfo(e,n)}e.preventDefault()},onArrowRightKey(e){const t=this.findVisibleItem(this.focusedItemInfo.index);if(this.isProccessedItemGroup(t)){if(this.vertical)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{const n=this.findVisibleItem(this.focusedItemInfo.index);this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}const r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r)}else{const r=t.columnIndex+1,n=this.visibleItems.findIndex(s=>s.columnIndex===r);n!==-1&&this.changeFocusedItemInfo(e,n)}e.preventDefault()},onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=g.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),i=t&&g.findSingle(t,".p-menuitem-link");i?i.click():t&&t.click();const r=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(r)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.findVisibleItem(this.focusedItemInfo.index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),i=this.popup?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&i&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{g.isTouchDevice()||this.hide(e,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return m.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?m.findLastIndex(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem(e){return m.isNotEmpty(this.visibleItems)?this.visibleItems[e]:null},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,r=!1;return this.focusedItemInfo.index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(n=>this.isItemMatched(n)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(n=>this.isItemMatched(n)):i+this.focusedItemInfo.index):i=this.visibleItems.findIndex(n=>this.isItemMatched(n)),i!==-1&&(r=!0),i===-1&&this.focusedItemInfo.index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemInfo(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r},changeFocusedItemInfo(e,t){const i=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=m.isNotEmpty(i)?i.key:"",this.scrollInView()},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=g.findSingle(this.menubar,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,i={},r="",n){const s=[];return e&&e.forEach((d,u)=>{const f=(r!==""?r+"_":"")+(n!==void 0?n+"_":"")+u,a={item:d,index:u,level:t,key:f,parent:i,parentKey:r,columnIndex:n!==void 0?n:i.columnIndex!==void 0?i.columnIndex:u};a.items=t===0&&d.items&&d.items.length>0?d.items.map((x,c)=>this.createProcessedItems(x,t+1,a,f,c)):this.createProcessedItems(d.items,t+1,a,f),s.push(a)}),s},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-megamenu p-component",{"p-megamenu-horizontal":this.horizontal,"p-megamenu-vertical":this.vertical}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=m.isNotEmpty(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce((t,i)=>(i.forEach(r=>{r.items.forEach(n=>{t.push(n)})}),t),[]):this.processedItems},horizontal(){return this.orientation==="horizontal"},vertical(){return this.orientation==="vertical"},focusedItemId(){return m.isNotEmpty(this.focusedItemInfo.key)?`${this.id}_${this.focusedItemInfo.key}`:null}},components:{MegaMenuSub:F}};const Q=["id"],X={key:0,class:"p-megamenu-start"},Y={key:1,class:"p-megamenu-end"};function Z(e,t,i,r,n,s){const d=K("MegaMenuSub");return l(),o("div",{ref:s.containerRef,id:n.id,class:h(s.containerClass)},[e.$slots.start?(l(),o("div",X,[S(e.$slots,"start")])):I("",!0),N(d,{ref:s.menubarRef,id:n.id+"_list",class:"p-megamenu-root-list",tabindex:i.disabled?-1:i.tabindex,role:"menubar","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-disabled":i.disabled||void 0,"aria-orientation":i.orientation,"aria-activedescendant":n.focused?s.focusedItemId:void 0,menuId:n.id,focusedItemId:n.focused?s.focusedItemId:void 0,items:s.processedItems,horizontal:s.horizontal,template:e.$slots.item,activeItem:n.activeItem,exact:i.exact,level:0,onFocus:s.onFocus,onBlur:s.onBlur,onKeydown:s.onKeyDown,onItemClick:s.onItemClick,onItemMouseenter:s.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","template","activeItem","exact","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(l(),o("div",Y,[S(e.$slots,"end")])):I("",!0)],10,Q)}function $(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var ee=`
.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-megamenu-root-list > .p-menuitem {
    position: relative;
}
.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-megamenu .p-menuitem-text {
    line-height: 1;
}
.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
}
.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}
.p-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* Horizontal */
.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

/* Vertical */
.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}
.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}
.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
}
.p-megamenu-grid {
    display: flex;
}
.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}
.p-megamenu-col-2 {
    width: 16.6667%;
}
.p-megamenu-col-3 {
    width: 25%;
}
.p-megamenu-col-4 {
    width: 33.3333%;
}
.p-megamenu-col-6 {
    width: 50%;
}
.p-megamenu-col-12 {
    width: 100%;
}
`;$(ee);J.render=Z;export{J as default};
