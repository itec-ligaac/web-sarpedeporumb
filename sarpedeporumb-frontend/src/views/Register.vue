<template>
<div class="grid-container">
  <div class="grid-x align-center">
    <div class="grid-y">
      <div class="small-0 medium-2 large-4 xlarge-8" />
      <register-form class="" />
      <div class="auto" />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import registerForm from '../components/registerForm.vue';

export default {
  components: { registerForm },
  name: 'Home',
  comments: {
    registerForm,
  },
};
</script>

<style lang='scss'>
</style>
