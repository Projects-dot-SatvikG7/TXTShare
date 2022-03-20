import{i as w,g as I,G as D,p as x,a as E,s as S,b as B,z as L,u as f,t as T,c as h,X as k,o as A}from"./vendor.0d043dc6.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}};_();const O=document.querySelector("#app");O.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="container-fluid">
    <a id="brand" class="navbar-brand" href="/">\u{1F4DD} TXTShare </a>
    <div class="d-flex justify-content-end" id="navbarSupportedContent">
      <button id="sib" hidden="false" class="btn btn-primary">Sign in with Google</button>
      <img id="profile_pic" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" hidden="true" alt="user_profile_pic">
      <button id="sob" hidden="true" class="btn btn-primary mx-2 py-0">Sign Out</button>
    </div>
  </div>

</nav>

<main>

<section id="so" hidden="false">
  <h1>Sign in to continue</h1>
</section>

<section id="si" hidden="true">
  <div id="ud"></div>
  <div id="data" hidden="true"></div>
  <div id="ig" class="input-group">
    <textarea id="newData" class="form-control" aria-label="Save Text"></textarea>
    <span id="addData" class="btn btn-success d-flex align-items-center">Save Text</span>
  </div>
</section>

</main>
`;const H={apiKey:"AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",authDomain:"txt-share.firebaseapp.com",databaseURL:"https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"txt-share",appId:"1:802040092553:web:47c61f164c8dc5fc39b358",measurementId:"G-9X5YRQBBYD"},l=w(H);I(l);const K=new D,g=x(l),u=E(l),r=document.getElementById("sib"),c=document.getElementById("sob"),d=document.getElementById("profile_pic");r.onclick=()=>S(u,K);c.onclick=()=>B(u);const m=document.getElementById("si"),b=document.getElementById("so"),y=document.getElementById("ud"),v=document.getElementById("data"),P=document.getElementById("addData"),s=document.getElementById("newData");window.addEventListener("load",async()=>{var n;(await L(f(g,"texts"))).forEach(t=>{n=t,console.log(`${t.id} => ${t.data().data}`),v.innerText=t.data().data,v.hidden=!1}),P.addEventListener("click",async()=>{if(!s.value){window.alert("Data cannot be empty string");return}try{let t;n?n?(t=await k(n.ref,{data:s.value,ts:h()}),console.log("Document written with ID: ",t),location.reload()):console.log("Something went wrong"):(t=await T(f(g,"texts"),{data:s.value,ts:h()}),console.log("Document written with ID: ",t),location.reload())}catch(t){console.error("Error adding document: ",t)}})});A(u,n=>{n?(m.hidden=!1,b.hidden=!0,r.hidden=!0,c.hidden=!1,d.hidden=!1,console.log(n),d.src=n.photoURL,y.innerHTML=`
                        <h3>Hello ${n.displayName}!</h3>
                        <p>User ID: ${n.uid}</p>
                        <p>User Email: ${n.email}</p>
                        
                        `):(m.hidden=!0,b.hidden=!1,r.hidden=!1,d.hidden=!0,c.hidden=!0,y.innerHTML="")});
