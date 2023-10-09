<template>

   <aside  class="sidebar"  :class="{'shownavbar' : isMenuOpen}">
    <div @click="toggleMenu"  class="nav-close"><i class="bi bi-x-lg"></i></div>
        <div class="side-items">
          <ul>
            <li class="side-item"><a class="side-link">صفحه اصلی</a></li>
          <li class="side-item"><a class="side-link">تماس با ما</a></li>
          <li class="side-item"><a class="side-link">درباره ما</a></li>
          </ul>
          
        </div>
        <div class="social-media">
          <div class="social-item"><i class="bi bi-instagram"></i></div>
          <div class="social-item"><i class="bi bi-twitter"></i></div>
          <div class="social-item"><i class="bi bi-whatsapp"></i></div>
          <div class="social-item"><i class="bi bi-telegram"></i></div>
        </div>
    </aside>
    <div class="container">
        <nav class="nav col-md-12">
      <img  class="logo" src="/images/navbar/logo.png">
      <img @click="toggleMenu" id="nav-btn" class="menu-icon" src="/images/navbar/menu_icon.svg">
      <ul class="navbar-nav">
       <li class="nav-item">
        <a class="nav-link" href="#">صفحه اصلی <span class="point">.</span></a>
       </li>
       <li class="nav-item">
        <a class="nav-link" href="#">تماس با ما <span class="point">.</span></a>
       </li>
       <li class="nav-item">
        <a class="nav-link" href="#">درباره ما <span class="point">.</span></a>
       </li>
      </ul>
    </nav>
  </div>
   
</template>
<script>
  
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>
<style>
@import url('/assets/css/navbar.css');
</style>