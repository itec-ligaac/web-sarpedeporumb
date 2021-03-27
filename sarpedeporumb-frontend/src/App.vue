<template>
  <div id="app">

<nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a href="#">My Site</a></h1>
    </li>
     <!-- Remove the class "menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#">
      <span>Menu</span></a>
    </li>
  </ul>

  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      <li class="active"><a href="#">Right Button Active</a></li>
      <li class="has-dropdown">
        <a href="#">Right Button Dropdown</a>
        <ul class="dropdown">
          <li><a href="#">First link in dropdown</a></li>
          <li class="active"><a href="#">Active link in dropdown</a></li>
        </ul>
      </li>
    </ul>

    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="#">Left Nav Button</a></li>
    </ul>
  </section>
</nav>

    <router-view/>
    <footer id="footer">
      <div>
        <router-link class="credits" to="/">
          SARPE TRAVEL 2021
        </router-link>
      </div>
    </footer>

  </div>
</template>

<style lang="scss">
@import "app";
@import "./assets/flex.scss";
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: chartreuse;
}

.top-nav-bar-wrapper{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: $black;
  .top-nav-bar{
    height: 60px;
    width: 100%;
    max-width: 1620px;
    margin: 0 auto;

    @include flexbox();
    @include justify-content(center);
    @include flex-direction(column);
    .top-nav-bar-title{
      color: $white;
      font-family: 'Gloria Hallelujah', cursive;
      font-size: 35px;
      margin: auto auto;
    }
  }
}

  #footer{
    width: 100%;
    background-color: $black;
    overflow-y: hidden;
    @include flexbox();
    @include justify-content(space-between);
    @include flex-direction(row);
    font-family: 'Karla', sans-serif;
    .credits{
      color: $white;
      align-self: center;
      text-align: left;
      padding: 20px;

    }
  }
</style>
