import{_ as i}from"./nuxt-link.d4ef3428.js";import{d as l,o as n,b as a,k as e,t as s,e as r,w as d,f as _}from"./entry.769ec967.js";const g=""+globalThis.__publicAssetsURL("images/logo-orange.svg"),m=""+globalThis.__publicAssetsURL("images/asset-access.svg"),p={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},x={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},h=e("div",{class:"col-12 mt-5 xl:mt-0 text-center"},[e("img",{src:g,alt:"Sakai logo",class:"mb-5",style:{width:"81px",height:"60px"}})],-1),u={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"}},f={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"}},b={class:"grid flex flex-column align-items-center"},v=e("div",{class:"flex justify-content-center align-items-center bg-orange-500 border-circle",style:{width:"3.2rem",height:"3.2rem"}},[e("i",{class:"pi pi-fw pi-lock text-2xl text-50"})],-1),w={class:"text-900 font-bold text-4xl lg:text-5xl mb-2"},y={class:"text-600 text-center"},k=e("img",{src:m,alt:"Access denied",class:"mt-5",width:"80%"},null,-1),A={class:"col-12 mt-5 text-center"},D=e("i",{class:"pi pi-fw pi-arrow-left text-blue-500 mr-2",style:{"vertical-align":"center"}},null,-1),T=l({__name:"AccessDenied",props:{error:null},setup(o){const t=o;return(N,j)=>{const c=i;return n(),a("div",p,[e("div",x,[h,e("div",u,[e("div",f,[e("div",b,[v,e("h1",w,s(t.error.statusMessage||"Access Denied"),1),e("span",y,s(t.error.message),1),k,e("div",A,[D,r(c,{to:"/",class:"text-blue-500"},{default:d(()=>[_(" Go to Dashboard ")]),_:1})])])])])])])}}});export{T as default};