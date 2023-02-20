import{R as b,j as r,m as c,o as l,b as a,q as u,n as i,l as s,k as p,t as n}from"./entry.769ec967.js";var h={name:"Button",props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:b}};const g=["aria-label","disabled"],y={class:"p-button-label"};function f(o,S,t,m,C,e){const d=r("ripple");return c((l(),a("button",{class:i(e.buttonClass),type:"button","aria-label":e.defaultAriaLabel,disabled:e.disabled},[u(o.$slots,"default",{},()=>[t.loading&&!t.icon?(l(),a("span",{key:0,class:i(e.iconStyleClass)},null,2)):s("",!0),t.icon?(l(),a("span",{key:1,class:i(e.iconStyleClass)},null,2)):s("",!0),p("span",y,n(t.label||" "),1),t.badge?(l(),a("span",{key:2,class:i(e.badgeStyleClass)},n(t.badge),3)):s("",!0)])],10,g)),[[d]])}h.render=f;export{h as default};