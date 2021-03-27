<template>
  <div id="app">

    <div class="top-nav-bar-wrapper">
      <div class="top-nav-bar">
        <p class="top-nav-bar-title">SARPE TRAVEL</p>
        <div class="top-nav-bar-links">
        </div>
      </div>
    </div>
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
