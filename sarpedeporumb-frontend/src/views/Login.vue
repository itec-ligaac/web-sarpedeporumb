<template>
<div>
  <login-form></login-form>
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
