<template>
  <div id="app" class="owa">
    <div class="top-bar" data-topbar role="navigation">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">
            <label>
              <strong id="logo"><router-link to="/">SARPE TRAVEL</router-link></strong>
            </label></li>
        </ul>
      </div>
      <
      <ul class="dropdown menu" data-dropdown-menu>
        <li>
          <i class="fi-list" style="font-size:2.3em; margin-right:0.5em;"></i>
          <ul class="menu">
            <li><a href="#"></a></li>
            <li><router-link to="profile">Profile</router-link></li>
            <li><a>Log Out</a></li>
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
@import "assets/foundation-icons/foundation-icons.css";
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
#logo {
  font-family: 'Gloria Hallelujah';
  font-size-adjust: 1.1;
  margin: 0 !important;
  padding: 0 !important;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  border-radius: 0.4em;
  transition: 0.1s ease-in-out;
  cursor: pointer;
}
#logo:hover {
  background-color: lighten($color: map-get($foundation-palette, hilight), $amount: 10%);
}
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
