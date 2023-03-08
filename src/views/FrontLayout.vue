<template>
  <h1 class="text-center">前台</h1>
  <hr />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">桌遊販電</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
          <li class="nav-item">
            <RouterLink to="/" class="me-3 nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="me-3 nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="me-3 nav-link"
              >產品列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/cart" class="me-3 nav-link">購物車</RouterLink>
          </li>
          <li class="nav-item ms-auto">
            <RouterLink to="/admin" class="me-3 nav-link">後台</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="me-3 nav-link">登入</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />

  <RouterView></RouterView>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  components: {
    RouterView,
    RouterLink,
  },
};
</script>
