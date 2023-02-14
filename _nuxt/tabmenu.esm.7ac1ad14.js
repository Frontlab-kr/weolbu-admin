import{D as u,R as T,y as D,q as B,o as i,b as o,j as c,F as k,s as E,g as m,w as N,n as f,m as L,l as x,k as h,t as g,r as v}from"./entry.7f5874b1.js";var S={name:"TabMenu",emits:["update:activeIndex","tab-change"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},timeout:null,data(){return{d_activeIndex:this.activeIndex}},watch:{$route(){this.timeout=setTimeout(()=>this.updateInkBar(),50)},activeIndex(e){this.d_activeIndex=e}},mounted(){this.updateInkBar()},updated(){this.updateInkBar()},beforeUnmount(){clearTimeout(this.timeout)},methods:{onItemClick(e,s,a,t){if(this.disabled(s)){e.preventDefault();return}s.command&&s.command({originalEvent:e,item:s}),s.to&&t&&t(e),a!==this.d_activeIndex&&(this.d_activeIndex=a,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:a})},onKeydownItem(e,s,a){let t=a,r={};const l=this.$refs.tabLink;switch(e.code){case"ArrowRight":{r=this.findNextItem(this.$refs.tab,t),t=r.i;break}case"ArrowLeft":{r=this.findPrevItem(this.$refs.tab,t),t=r.i;break}case"End":{r=this.findPrevItem(this.$refs.tab,this.model.length),t=r.i,e.preventDefault();break}case"Home":{r=this.findNextItem(this.$refs.tab,-1),t=r.i,e.preventDefault();break}case"Space":case"Enter":{e.currentTarget&&e.currentTarget.click(),e.preventDefault();break}case"Tab":{this.setDefaultTabIndexes(l);break}}l[t]&&l[a]&&(l[a].tabIndex="-1",l[t].tabIndex="0",l[t].focus())},findNextItem(e,s){let a=s+1;if(a>=e.length)return{nextItem:e[e.length],i:e.length};let t=e[a];return t?u.hasClass(t,"p-disabled")?this.findNextItem(e,a):{nextItem:t,i:a}:null},findPrevItem(e,s){let a=s-1;if(a<0)return{nextItem:e[0],i:0};let t=e[a];return t?u.hasClass(t,"p-disabled")?this.findPrevItem(e,a):{prevItem:t,i:a}:null},getItemClass(e,s){return["p-tabmenuitem",e.class,{"p-highlight":this.d_activeIndex===s,"p-disabled":this.disabled(e)}]},getRouteItemClass(e,s,a){return["p-tabmenuitem",e.class,{"p-highlight":this.exact?a:s,"p-disabled":this.disabled(e)}]},getItemIcon(e){return["p-menuitem-icon",e.icon]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},setDefaultTabIndexes(e){setTimeout(()=>{e.forEach(s=>{s.tabIndex=u.hasClass(s.parentElement,"p-highlight")?"0":"-1"})},300)},setTabIndex(e){return this.d_activeIndex===e?"0":"-1"},updateInkBar(){let e=this.$refs.nav.children,s=!1;for(let a=0;a<e.length;a++){let t=e[a];u.hasClass(t,"p-highlight")&&(this.$refs.inkbar.style.width=u.getWidth(t)+"px",this.$refs.inkbar.style.left=u.getOffset(t).left-u.getOffset(this.$refs.nav).left+"px",s=!0)}s||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")}},directives:{ripple:T}};const K={class:"p-tabmenu p-component"},R=["aria-labelledby","aria-label"],z=["href","aria-label","aria-disabled","tabindex","onClick","onKeydown"],A={class:"p-menuitem-text"},P=["onClick","onKeydown"],H=["href","target","aria-label","aria-disabled","tabindex"],j={class:"p-menuitem-text"},F={ref:"inkbar",class:"p-tabmenu-ink-bar"};function O(e,s,a,t,r,l){const _=D("router-link"),y=B("ripple");return i(),o("div",K,[c("ul",{ref:"nav",class:"p-tabmenu-nav p-reset",role:"menubar","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[(i(!0),o(k,null,E(a.model,(n,d)=>(i(),o(k,{key:l.label(n)+"_"+d.toString()},[n.to&&!l.disabled(n)?(i(),m(_,{key:0,to:n.to,custom:""},{default:N(({navigate:b,href:C,isActive:w,isExactActive:I})=>[l.visible(n)?(i(),o("li",{key:0,ref_for:!0,ref:"tab",class:f(l.getRouteItemClass(n,w,I)),style:L(n.style),role:"presentation"},[e.$slots.item?(i(),m(v(e.$slots.item),{key:1,item:n,index:d},null,8,["item","index"])):x((i(),o("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:C,class:"p-menuitem-link","aria-label":l.label(n),"aria-disabled":l.disabled(n),tabindex:I?"0":"-1",onClick:p=>l.onItemClick(p,n,d,b),onKeydown:p=>l.onKeydownItem(p,n,d,b)},[n.icon?(i(),o("span",{key:0,class:f(l.getItemIcon(n))},null,2)):h("",!0),c("span",A,g(l.label(n)),1)],40,z)),[[y]])],6)):h("",!0)]),_:2},1032,["to"])):l.visible(n)?(i(),o("li",{key:1,ref_for:!0,ref:"tab",class:f(l.getItemClass(n,d)),role:"presentation",onClick:b=>l.onItemClick(b,n,d),onKeydown:b=>l.onKeydownItem(b,n,d)},[e.$slots.item?(i(),m(v(e.$slots.item),{key:1,item:n,index:d},null,8,["item","index"])):x((i(),o("a",{key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:n.url,class:"p-menuitem-link",target:n.target,"aria-label":l.label(n),"aria-disabled":l.disabled(n),tabindex:l.setTabIndex(d)},[n.icon?(i(),o("span",{key:0,class:f(l.getItemIcon(n))},null,2)):h("",!0),c("span",j,g(l.label(n)),1)],8,H)),[[y]])],42,P)):h("",!0)],64))),128)),c("li",F,null,512)],8,R)])}function V(e,s){s===void 0&&(s={});var a=s.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var $=`
.p-tabmenu {
    overflow-x: auto;
}
.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: nowrap;
}
.p-tabmenu-nav a {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    text-decoration: none;
    overflow: hidden;
}
.p-tabmenu-nav a:focus {
    z-index: 1;
}
.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}
.p-tabmenu-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;V($);S.render=O;export{S as default};
