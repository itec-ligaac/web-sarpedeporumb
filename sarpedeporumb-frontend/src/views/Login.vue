<template>
<div class="grid-container">
  <div class="grid-x align-center">
    <div class="grid-y">
      <div class="small-0 medium-2 large-4 xlarge-8" />
      <login-form class="" />
      <div class="auto" />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import loginForm from '../components/loginForm.vue';

export default {
  components: { loginForm },
  name: 'Home',
  comments: {
    loginForm,
  },
};
</script>

<style lang='scss'>
</style>
