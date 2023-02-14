import{_ as o}from"./logo-error.df12abb3.js";import{d as i,y as c,o as l,b as a,j as e,t as s,e as n,w as d,f as _}from"./entry.7f5874b1.js";const m=""+globalThis.__publicAssetsURL("images/asset-error.svg"),g={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},h={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},p=e("div",{class:"col-12 mt-5 xl:mt-0 text-center"},[e("img",{src:o,alt:"Sakai logo",class:"mb-5",style:{width:"81px",height:"60px"}})],-1),u={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"}},x={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"}},f={class:"grid flex flex-column align-items-center"},b=e("div",{class:"flex justify-content-center align-items-center bg-pink-500 border-circle",style:{height:"3.2rem",width:"3.2rem"}},[e("i",{class:"pi pi-fw pi-exclamation-circle text-2xl text-50"})],-1),v={class:"font-bold text-5xl text-900 mb-2"},w={class:"text-600"},y=e("img",{src:m,alt:"Error",class:"mt-5",width:"80%"},null,-1),k={class:"col-12 mt-5 text-center"},j=e("i",{class:"pi pi-fw pi-arrow-left text-blue-500 mr-2",style:{"vertical-align":"center"}},null,-1),N=i({__name:"ServerError",props:{error:null},setup(t){return(E,S)=>{const r=c("router-link");return l(),a("div",g,[e("div",h,[p,e("div",u,[e("div",x,[e("div",f,[b,e("h1",v,s(t.error.statusMessage||"Error Occurred"),1),e("span",w,s(t.error.message||"Something went wrong!"),1),y,e("div",k,[j,n(r,{to:"/",class:"text-blue-500"},{default:d(()=>[_(" Go to Dashboard ")]),_:1})])])])])])])}}});export{N as default};