import{i as u,g as h,G as f,p as g,a as b,o as m,s as y,b as v,X as w,h as l,Y as c,c as x}from"./vendor.d4250a2e.js";const D=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}};D();const A=document.querySelector("#app");A.innerHTML=`
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
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6418689390281143"
     crossorigin="anonymous"><\/script>
  <!-- horizontal ad text data -->
  <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6418689390281143"
      data-ad-slot="8693357864"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
  <\/script>
</section>

</main>
`;const S={apiKey:"AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",authDomain:"txt-share.firebaseapp.com",databaseURL:"https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"txt-share",storageBucket:"txt-share.appspot.com",messagingSenderId:"802040092553",appId:"1:802040092553:web:47c61f164c8dc5fc39b358",measurementId:"G-9X5YRQBBYD"},d=u(S);h(d);const _=new f,p=g(d),n=b(d),k=async t=>{const i=l(p,"texts",t.uid);c(i,{id:t.uid},{merge:!0});const s=await x(i),o=`<a style="background: black;" href="/" >TXTShare</a> ("App") was just build as a utility for my personal use. Privacy of user was not taken into account while building this App. App does not use any kind of encryption over your text data ("Data"). Users are advised to refrain from pasting any sensitive Data in the app. Creator of the App will not be liable in case of breach of user's Data. By continuing the use of App the user will be subject to the terms, guidelines and policies of the App.`;s.data().data?$("#data").html(s.data().data).show():(c(i,{data:o},{merge:!0}),$("#data").html(o).show())},T=async()=>{const t=$("#newData").val();$("#newData").val(""),w(l(p,"texts",n.currentUser.uid),{data:t},{merge:!0}),$("#data").html(t).show()};$(function(){$("#sob","#profile_pic","#ud").hide(),$("#sib").show(),$("#data").html("Fetching..."),m(n,t=>{t?(k(t),$("#si").removeAttr("hidden"),$("#so").attr("hidden",!0),$("#ud").html(`
                    <h3>Hello ${t.displayName}!</h3>
                    <p>User ID: ${t.uid}</p>
                    <p>User Email: ${t.email}</p>
                    `),$("#profile_pic").attr("src",t.photoURL),$("#profile_pic").show(),$("#sib").hide(),$("#sob").show(),$("#ud").show()):($("#so").removeAttr("hidden"),$("#si").attr("hidden",!0),$("#sob").hide(),$("#sib").show(),$("#profile_pic").hide(),$("#sob","#profile_pic","#data","#ud").hide()),$("#loader").hide()}),$("#sib").click(function(){y(n,_)}),$("#sob").click(function(){v(n)}),$("#addData").click(function(){if(!$("#newData").val()){window.alert("Data cannot be empty");return}T()})});
