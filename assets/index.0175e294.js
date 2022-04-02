import{i as p,g as h,G as u,p as f,a as b,o as g,s as m,b as v,X as w,h as d,c as y,Y as x}from"./vendor.d4250a2e.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};S();const D=document.querySelector("#app");D.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="container-fluid">
    <a id="brand" class="navbar-brand" href="/">\u{1F4DD} TXTShare </a>
    <div class="d-flex justify-content-end" id="navbarSupportedContent">
      <button id="sib" class="btn btn-primary">Sign in with Google</button>
      <img id="profile_pic" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="user_profile_pic">
      <button id="sob" class="btn btn-primary mx-2 py-0">Sign Out</button>
    </div>
  </div>

</nav>

<main>

<section id="so" >
  <h1>Sign in to continue</h1>
</section>

<section id="si" >
  <div id="ud"></div>
  <div id="data"></div>
  <div id="ig" class="input-group">
    <textarea id="newData" class="form-control" aria-label="Save Text"></textarea>
    <span id="addData" class="btn btn-success d-flex align-items-center">Save Text</span>
  </div>
</section>

</main>
`;const _={apiKey:"AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",authDomain:"txt-share.firebaseapp.com",databaseURL:"https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"txt-share",storageBucket:"txt-share.appspot.com",messagingSenderId:"802040092553",appId:"1:802040092553:web:47c61f164c8dc5fc39b358",measurementId:"G-9X5YRQBBYD"},l=p(_);h(l);const k=new u,c=f(l),n=b(l),A=async t=>{const i=d(c,"texts",t.uid),o=await y(i);if(o.exists())$("#data").html(o.data().data).show();else{const s=d(c,"texts",t.uid);x(s,{data:"No text data available"},{merge:!0}),$("#data").html("No text data available, add new data from the below textbox").show()}},I=async()=>{const t=$("#newData").val();w(d(c,"texts",n.currentUser.uid),{data:t}),$("#data").html(t).show()};$(function(){$("#si").hide(),$("#so").show(),$("#sob").hide(),$("#sib").show(),$("#profile_pic").hide(),$("#ud").html(""),$("#data").hide(),g(n,t=>{t?(A(t),$("#si").show(),$("#so").hide(),$("#sob").show(),$("#sib").hide(),$("#profile_pic").attr("src",t.photoURL),$("#profile_pic").show(),$("#ud").html(`
                    <h3>Hello ${t.displayName}!</h3>
                    <p>User ID: ${t.uid}</p>
                    <p>User Email: ${t.email}</p>
                    `)):($("#si").hide(),$("#so").show(),$("#sob").hide(),$("#sib").show(),$("#profile_pic").hide(),$("#ud").html(""))}),$("#sib").click(function(){m(n,k)}),$("#sob").click(function(){v(n)}),$("#addData").click(function(){I()})});
