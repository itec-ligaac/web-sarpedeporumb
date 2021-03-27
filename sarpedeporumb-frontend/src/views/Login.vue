<template>
<div class="grid-y">
  <div class="cell large-auto">One</div>
  <div class="cell large-auto">Two</div>
  <div class="cell large-auto">Three</div>
  <div class="cell large-auto">Four</div>
  <div class="cell large-auto">Five</div>
  <div class="cell large-auto">Six</div>
</div>
</template>

<script>
// @ is an alias to /src
import loginForm from '../components/loginForm.vue';

export default {
  name: 'Home',
  comments: {
    loginForm,
  },
};
</script>

<style lang='scss'>
</style>
