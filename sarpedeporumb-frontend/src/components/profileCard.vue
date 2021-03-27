<template>
  <div class="card-user-container">

    <!--card's image-->
    <div class="card-user-avatar">
      <img src="https://placehold.it/200x200" alt="" class="user-image">
    </div>

    <!--user info name, bio and location-->
    <div class="card-user-bio">
      <h4>User Name</h4>
      <p>UX/UI ,Front-end developer, Foundation interested. </p>
      <span class="location"><span class="location-icon fa fa-map-marker"></span>
      <span class="location-text">Makkah Al-Mukaramah</span></span>
    </div>

    <!--card's follow button-->
    <div class="card-user-button">
      <a href="#" class="hollow button">Log out</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Profile Card',
};
</script>

<style lang='scss'>
</style>
