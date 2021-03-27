<template>
<div>
  <register-form></register-form>
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
