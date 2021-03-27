<template>
  <form class="log-in-form">
    <h3 class="text-center">Log in with you email account</h3>
    <label>Email
      <input type="email" placeholder="me@sarpe.xyz">
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
