import "./styles.css";
const root = document.querySelector("#app");
root.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <div class="container-fluid">
    <a id="brand" class="navbar-brand" href="/">📝 TXTShare </a>
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
`;