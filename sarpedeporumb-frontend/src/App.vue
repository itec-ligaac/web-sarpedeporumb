<template>
  <div id="app" class="owa">
    <div class="top-bar" data-topbar role="navigation">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li class="menu-text"><strong>SARPE TRAVEL</strong></li>
        </ul>
      </div>
      <ul class="dropdown menu" data-dropdown-menu>
        <li>
          <a href="#">Item 1</a>
          <ul class="menu">
            <li><a href="#">Item 1A</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view/>
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
