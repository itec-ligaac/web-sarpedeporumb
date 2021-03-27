<template>
  <form class="log-in-form">
    <h4 class="text-center">Register with your email</h4>
    <label>Name
      <input type="text" placeholder="somebody">
    </label>
    <label>Email
      <input type="email" placeholder="somebody@example.com">
    </label>
    <label>Password
      <input type="password" placeholder="Password">
    </label>
    <input id="show-password" type="checkbox"><label for="show-password">Show password</label>
    <p><input type="submit" class="button expanded" value="Log in"></p>
    <p class="text-center"><a href="#">Forgot your password?</a></p>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
};
</script>

<style lang='scss'>
</style>
