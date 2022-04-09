import{i as u,g as h,G as f,p as b,a as m,o as g,s as v,b as w,X as y,h as l,Y as c,c as x}from"./vendor.d4250a2e.js";const _=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};_();const D=document.querySelector("#app");D.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="container-fluid">
    <a id="brand" class="navbar-brand" href="/">\u{1F4DD} TXTShare </a>
    <div class="d-flex justify-content-end" id="navbarSupportedContent">
      <button  id="sib" class="btn btn-primary">Sign in with Google</button>
      <img   id="profile_pic" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="user_profile_pic">
      <button  id="sob" class="btn btn-primary mx-2 py-0">Sign Out</button>
    </div>
  </div>

</nav>

<main>

<section hidden id="so" >
  <h1>Sign in to continue</h1>
</section>

<section hidden id="si" >
  <div id="ud"></div>
  <div id="data"></div>
  <div id="ig" class="input-group">
    <textarea id="newData" class="form-control" aria-label="Save Text"></textarea>
    <span id="addData" class="btn btn-success d-flex align-items-center">Save Text</span>
  </div>
</section>

</main>
`;const S={apiKey:"AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",authDomain:"txt-share.firebaseapp.com",databaseURL:"https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"txt-share",storageBucket:"txt-share.appspot.com",messagingSenderId:"802040092553",appId:"1:802040092553:web:47c61f164c8dc5fc39b358",measurementId:"G-9X5YRQBBYD"},r=u(S);h(r);const A=new f,p=b(r),n=m(r),k=async t=>{const i=l(p,"texts",t.uid);c(i,{id:t.uid},{merge:!0});const o=await x(i);o.data().data?$("#data").html(o.data().data).show():(c(i,{data:"data"},{merge:!0}),$("#data").html("No text data available, add new data from the below textbox").show())},I=async()=>{const t=$("#newData").val();y(l(p,"texts",n.currentUser.uid),{data:t},{merge:!0}),$("#data").html(t).show()};$(function(){$("#sob","#profile_pic","#ud").hide(),$("#sib").show(),$("#data").html("Fetching..."),g(n,t=>{t?(k(t),$("#si").removeAttr("hidden"),$("#so").attr("hidden",!0),$("#ud").html(`
                    <h3>Hello ${t.displayName}!</h3>
                    <p>User ID: ${t.uid}</p>
                    <p>User Email: ${t.email}</p>
                    `),$("#profile_pic").attr("src",t.photoURL),$("#profile_pic").show(),$("#sib").hide(),$("#sob").show(),$("#ud").show()):($("#so").removeAttr("hidden"),$("#si").attr("hidden",!0),$("#sob").hide(),$("#sib").show(),$("#profile_pic").hide(),$("#sob","#profile_pic","#data","#ud").hide()),$("#loader").hide()}),$("#sib").click(function(){v(n,A)}),$("#sob").click(function(){w(n)}),$("#addData").click(function(){if(!$("#newData").val()){window.alert("Data cannot be empty");return}I()})});
