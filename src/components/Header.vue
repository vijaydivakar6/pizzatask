<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light main__navbar">
      <div class="container">
        <!-- <router-link  to="/" ><img src="../assets/images/Mariachi-Logo.svg" alt="logo" class="header__logo"></router-link> -->
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse nav__collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/"
                >My Orders <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/orderpizza"
                >Order Pizza</router-link
              >
            </li>
            <!-- <li class="nav-item">
                     <router-link class="nav-link" to="/about">ABOUT</router-link>
                  </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main__navbar {
  border-bottom: 1px solid gray;
}
</style>
