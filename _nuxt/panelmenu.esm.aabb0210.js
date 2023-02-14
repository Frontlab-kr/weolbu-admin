import{U as w,O as c,D as u,R as B,y as k,q as M,o as d,b as m,F as y,s as D,m as _,n as o,j as I,g as b,w as x,l as P,k as h,t as H,r as S,e as A,x as L,T as F}from"./entry.7f5874b1.js";var T={name:"PanelMenuSub",emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},template:{type:Function,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getItemId(e){return`${this.panelId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,a){return e&&e.item?c.getItemValue(e.item[t],a):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return c.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle(e){this.$emit("item-toggle",e)},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getItemToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-fw pi-chevron-down":"pi pi-fw pi-chevron-right"]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:B}};const U={class:"p-submenu-list"},O=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset"],z=["onClick"],j=["href","onClick"],G={class:"p-menuitem-text"},R=["href","target"],q={class:"p-menuitem-text"},W={class:"p-toggleable-content"};function J(e,t,a,s,l,i){const f=k("router-link"),p=k("PanelMenuSub",!0),r=M("ripple");return d(),m("ul",U,[(d(!0),m(y,null,D(a.items,(n,g)=>(d(),m(y,{key:i.getItemKey(n)},[i.isItemVisible(n)&&!i.getItemProp(n,"separator")?(d(),m("li",{key:0,id:i.getItemId(n),style:_(i.getItemProp(n,"style")),class:o(i.getItemClass(n)),role:"treeitem","aria-label":i.getItemLabel(n),"aria-expanded":i.isItemGroup(n)?i.isItemActive(n):void 0,"aria-level":a.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(g)},[I("div",{class:"p-menuitem-content",onClick:v=>i.onItemClick(v,n)},[a.template?(d(),b(S(a.template),{key:1,item:n.item},null,8,["item"])):(d(),m(y,{key:0},[i.getItemProp(n,"to")&&!i.isItemDisabled(n)?(d(),b(f,{key:0,to:i.getItemProp(n,"to"),custom:""},{default:x(({navigate:v,href:C,isActive:E,isExactActive:K})=>[P((d(),m("a",{href:C,class:o(i.getItemActionClass(n,{isActive:E,isExactActive:K})),tabindex:"-1","aria-hidden":"true",onClick:N=>i.onItemActionClick(N,v)},[i.getItemProp(n,"icon")?(d(),m("span",{key:0,class:o(i.getItemIconClass(n))},null,2)):h("",!0),I("span",G,H(i.getItemLabel(n)),1)],10,j)),[[r]])]),_:2},1032,["to"])):P((d(),m("a",{key:1,href:i.getItemProp(n,"url"),class:o(i.getItemActionClass(n)),target:i.getItemProp(n,"target"),tabindex:"-1","aria-hidden":"true"},[i.isItemGroup(n)?(d(),m("span",{key:0,class:o(i.getItemToggleIconClass(n))},null,2)):h("",!0),i.getItemProp(n,"icon")?(d(),m("span",{key:1,class:o(i.getItemIconClass(n))},null,2)):h("",!0),I("span",q,H(i.getItemLabel(n)),1)],10,R)),[[r]])],64))],8,z),A(F,{name:"p-toggleable-content"},{default:x(()=>[P(I("div",W,[i.isItemVisible(n)&&i.isItemGroup(n)?(d(),b(p,{key:0,id:i.getItemId(n)+"_list",role:"group",panelId:a.panelId,focusedItemId:a.focusedItemId,items:n.items,level:a.level+1,template:a.template,activeItemPath:a.activeItemPath,exact:a.exact,onItemToggle:i.onItemToggle},null,8,["id","panelId","focusedItemId","items","level","template","activeItemPath","exact","onItemToggle"])):h("",!0)],512),[[L,i.isItemActive(n)]])]),_:2},1024)],14,O)):h("",!0),i.isItemVisible(n)&&i.getItemProp(n,"separator")?(d(),m("li",{key:1,style:_(i.getItemProp(n,"style")),class:o(i.getSeparatorItemClass(n)),role:"separator"},null,6)):h("",!0)],64))),128))])}T.render=J;var V={name:"PanelMenuList",emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},template:{type:Function,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0}},searchTimeout:null,searchValue:null,data(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys(e){this.autoUpdateActiveItemPath(e)}},mounted(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp(e,t){return e&&e.item?c.getItemValue(e.item[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.parentKey)},isItemGroup(e){return c.isNotEmpty(e.items)},onFocus(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&c.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey(e){const t=c.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey(e){const t=c.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey(e){c.isNotEmpty(this.focusedItem)&&(this.activeItemPath.some(a=>a.key===this.focusedItem.key)?this.activeItemPath=this.activeItemPath.filter(a=>a.key!==this.focusedItem.key):this.focusedItem=c.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault())},onArrowRightKey(e){c.isNotEmpty(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(s=>s.key===this.focusedItem.key)?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItem.parentKey),this.activeItemPath.push(this.focusedItem))),e.preventDefault())},onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey(e){if(c.isNotEmpty(this.focusedItem)){const t=u.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`),a=t&&(u.findSingle(t,".p-menuitem-link")||u.findSingle(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onItemToggle(e){const{processedItem:t,expanded:a}=e;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==t.parentKey),a&&this.activeItemPath.push(t)),this.focusedItem=t,u.focus(this.$el)},isElementInPanel(e,t){const a=e.currentTarget.closest(".p-panelmenu-panel");return a&&a.contains(t)},isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem(e){return!!e&&!this.isItemDisabled(e)},findFirstItem(){return this.visibleItems.find(e=>this.isValidItem(e))},findLastItem(){return c.findLast(this.visibleItems,e=>this.isValidItem(e))},findNextItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t<this.visibleItems.length-1?this.visibleItems.slice(t+1).find(s=>this.isValidItem(s)):void 0)||e},findPrevItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t>0?c.findLast(this.visibleItems.slice(0,t),s=>this.isValidItem(s)):void 0)||e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let a=null,s=!1;if(c.isNotEmpty(this.focusedItem)){const l=this.visibleItems.findIndex(i=>i.key===this.focusedItem.key);a=this.visibleItems.slice(l).find(i=>this.isItemMatched(i)),a=c.isEmpty(a)?this.visibleItems.slice(0,l).find(i=>this.isItemMatched(i)):a}else a=this.visibleItems.find(l=>this.isItemMatched(l));return c.isNotEmpty(a)&&(s=!0),c.isEmpty(a)&&c.isEmpty(this.focusedItem)&&(a=this.findFirstItem()),c.isNotEmpty(a)&&this.changeFocusedItem({originalEvent:e,processedItem:a,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s},changeFocusedItem(e){const{originalEvent:t,processedItem:a,focusOnNext:s,selfCheck:l,allowHeaderFocus:i=!0}=e;c.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):i&&this.$emit("header-focus",{originalEvent:t,focusOnNext:s,selfCheck:l})},scrollInView(){const e=u.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath(e){this.activeItemPath=Object.entries(e||{}).reduce((t,[a,s])=>{if(s){const l=this.findProcessedItemByItemKey(a);l&&t.push(l)}return t},[])},findProcessedItemByItemKey(e,t,a=0){if(t=t||a===0&&this.processedItems,!t)return null;for(let s=0;s<t.length;s++){const l=t[s];if(this.getItemProp(l,"key")===e)return l;const i=this.findProcessedItemByItemKey(e,l.items,a+1);if(i)return i}},createProcessedItems(e,t=0,a={},s=""){const l=[];return e&&e.forEach((i,f)=>{const p=(s!==""?s+"_":"")+f,r={item:i,index:f,level:t,key:p,parent:a,parentKey:s};r.items=this.createProcessedItems(i.items,t+1,r,p),l.push(r)}),l},flatItems(e,t=[]){return e&&e.forEach(a=>{this.isVisibleItem(a)&&(t.push(a),this.flatItems(a.items,t))}),t}},computed:{processedItems(){return this.createProcessedItems(this.items||[])},visibleItems(){return this.flatItems(this.processedItems)},focusedItemId(){return c.isNotEmpty(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:T}};function Q(e,t,a,s,l,i){const f=k("PanelMenuSub");return d(),b(f,{id:a.panelId+"_list",class:"p-panelmenu-root-list",role:"tree",tabindex:-1,"aria-activedescendant":l.focused?i.focusedItemId:void 0,panelId:a.panelId,focusedItemId:l.focused?i.focusedItemId:void 0,items:i.processedItems,template:a.template,activeItemPath:l.activeItemPath,exact:a.exact,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle},null,8,["id","aria-activedescendant","panelId","focusedItemId","items","template","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemToggle"])}V.render=Q;var X={name:"PanelMenu",emits:["update:expandedKeys","panel-open","panel-close"],props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},data(){return{id:this.$attrs.id,activeItem:null}},watch:{"$attrs.id":function(e){this.id=e||w()}},mounted(){this.id=this.id||w()},methods:{getItemProp(e,t){return e?c.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:c.equals(e,this.activeItem)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},getPanelId(e){return`${this.id}_${e}`},getPanelKey(e){return this.getPanelId(e)},getHeaderId(e){return`${this.getPanelId(e)}_header`},getContentId(e){return`${this.getPanelId(e)}_content`},onHeaderClick(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),u.focus(e.currentTarget)},onHeaderKeyDown(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey(e){const t=u.hasClass(e.currentTarget,"p-highlight")?u.findSingle(e.currentTarget.nextElementSibling,".p-panelmenu-root-list"):null;t?u.focus(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey(e){const t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=u.hasClass(t,"p-highlight")?u.findSingle(t.nextElementSibling,".p-panelmenu-root-list"):null;a?u.focus(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey(e,t){const a=u.findSingle(e.currentTarget,".p-panelmenu-header-action");a?a.click():this.onHeaderClick(e,t),e.preventDefault()},onHeaderActionClick(e,t){t&&t(e)},findNextHeader(e,t=!1){const a=t?e:e.nextElementSibling,s=u.findSingle(a,".p-panelmenu-header");return s?u.hasClass(s,"p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader(e,t=!1){const a=t?e:e.previousElementSibling,s=u.findSingle(a,".p-panelmenu-header");return s?u.hasClass(s,"p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader(e){const{originalEvent:t,focusOnNext:a,selfCheck:s}=e,l=t.currentTarget.closest(".p-panelmenu-panel"),i=s?u.findSingle(l,".p-panelmenu-header"):a?this.findNextHeader(l):this.findPrevHeader(l);i?this.changeFocusedHeader(t,i):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem(e,t,a=!1){if(!this.isItemDisabled(t)){const s=this.isItemActive(t),l=s?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&c.equals(t,this.activeItem)?null:t,this.changeExpandedKeys({item:t,expanded:!s}),this.$emit(l,{originalEvent:e,item:t})}},changeExpandedKeys({item:e,expanded:t=!1}){if(this.expandedKeys){let a={...this.expandedKeys};t?a[e.key]=!0:delete a[e.key],this.$emit("update:expandedKeys",a)}},changeFocusedHeader(e,t){t&&u.focus(t)},getPanelClass(e){return["p-panelmenu-panel",this.getItemProp(e,"class")]},getHeaderClass(e){return["p-panelmenu-header",this.getItemProp(e,"headerClass"),{"p-highlight":this.isItemActive(e),"p-disabled":this.isItemDisabled(e)}]},getHeaderActionClass(e,t){return["p-panelmenu-header-action",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getHeaderIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getHeaderToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-chevron-down":"pi pi-chevron-right"]}},components:{PanelMenuList:V}};const Y=["id"],Z=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown"],$={class:"p-panelmenu-header-content"},ee=["href","onClick"],te={class:"p-menuitem-text"},ie=["href"],ae={class:"p-menuitem-text"},se=["id","aria-labelledby"],ne={key:0,class:"p-panelmenu-content"};function le(e,t,a,s,l,i){const f=k("router-link"),p=k("PanelMenuList");return d(),m("div",{id:l.id,class:"p-panelmenu p-component"},[(d(!0),m(y,null,D(a.model,(r,n)=>(d(),m(y,{key:i.getPanelKey(n)},[i.isItemVisible(r)?(d(),m("div",{key:0,style:_(i.getItemProp(r,"style")),class:o(i.getPanelClass(r))},[I("div",{id:i.getHeaderId(n),class:o(i.getHeaderClass(r)),tabindex:i.isItemDisabled(r)?-1:a.tabindex,role:"button","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemActive(r),"aria-controls":i.getContentId(n),"aria-disabled":i.isItemDisabled(r),onClick:g=>i.onHeaderClick(g,r),onKeydown:g=>i.onHeaderKeyDown(g,r)},[I("div",$,[e.$slots.item?(d(),b(S(e.$slots.item),{key:1,item:r},null,8,["item"])):(d(),m(y,{key:0},[i.getItemProp(r,"to")&&!i.isItemDisabled(r)?(d(),b(f,{key:0,to:i.getItemProp(r,"to"),custom:""},{default:x(({navigate:g,href:v,isActive:C,isExactActive:E})=>[I("a",{href:v,class:o(i.getHeaderActionClass(r,{isActive:C,isExactActive:E})),tabindex:-1,onClick:K=>i.onHeaderActionClick(K,g)},[i.getItemProp(r,"icon")?(d(),m("span",{key:0,class:o(i.getHeaderIconClass(r))},null,2)):h("",!0),I("span",te,H(i.getItemLabel(r)),1)],10,ee)]),_:2},1032,["to"])):(d(),m("a",{key:1,href:i.getItemProp(r,"url"),class:o(i.getHeaderActionClass(r)),tabindex:-1},[i.getItemProp(r,"items")?(d(),m("span",{key:0,class:o(i.getHeaderToggleIconClass(r))},null,2)):h("",!0),i.getItemProp(r,"icon")?(d(),m("span",{key:1,class:o(i.getHeaderIconClass(r))},null,2)):h("",!0),I("span",ae,H(i.getItemLabel(r)),1)],10,ie))],64))])],42,Z),A(F,{name:"p-toggleable-content"},{default:x(()=>[P(I("div",{id:i.getContentId(n),class:"p-toggleable-content",role:"region","aria-labelledby":i.getHeaderId(n)},[i.getItemProp(r,"items")?(d(),m("div",ne,[A(p,{panelId:i.getPanelId(n),items:i.getItemProp(r,"items"),template:e.$slots.item,expandedKeys:a.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,exact:a.exact},null,8,["panelId","items","template","expandedKeys","onItemToggle","onHeaderFocus","exact"])])):h("",!0)],8,se),[[L,i.isItemActive(r)]])]),_:2},1024)],6)):h("",!0)],64))),128))],8,Y)}function re(e,t){t===void 0&&(t={});var a=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var de=`
.p-panelmenu .p-panelmenu-header-action {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-action:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;re(de);X.render=le;export{X as default};
