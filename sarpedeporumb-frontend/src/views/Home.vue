<template>
<div class="home-page">
  <div class="home-page-content">
    <div class="start-button-text">
      <h1><b>Plan your dream holiday with the virus in mind today!</b></h1>
      <router-link class="button-start" to="/register"><b>Sign Up</b></router-link>
    </div>

    <div class="home-page-spacer"></div>
    <img class="jumbo-image" src="../assets/images/travel_woman.svg" alt="Travel picture of woman">
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

};
</script>

<style lang='scss'>

@import "../app";
@import "../assets/flex.scss";
@import "../assets/screen-size.scss";
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
.home-page{
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: $medium-gray;
  top: 0;
  .home-page-content{
    width: 100%;
    height: 100vh;
    max-width: 1620px;
    margin: 0 auto;
    align-content: center;
    @include lg{
      @include flexbox();
      @include justify-content(center);
      @include flex-direction(column);
    }
    @include flexbox();
    @include justify-content(center);
    @include flex-direction(row);

    .start-button-text{
      @include flexbox();
      @include justify-content(flex-start);
      @include flex-direction(column);
      height: auto;
      margin: auto 0;
      h1{
        text-align: center;
        font-family: 'Karla', sans-serif;
        // font-size: 50px;
        // width: 350px;
        // margin: 20px auto;
      }
      .button-start{
        border: 0;
        border-radius: 5px;
        padding: 12px 40px;
        margin: 20px auto;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        font-family: inherit;
        font-size: 1em;
        background-color: #6c63ff;
        color: $white;
        cursor: pointer;
        transition: all 0.4s ease 0s;
        &:hover{
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.4s ease 0s;
        }
      }

    }

    .home-page-spacer{
      width: 10%;
    }

    .jumbo-image{
      height: auto;
      width: 50em;
      margin: 0 auto;
    }
  }
}

</style>
