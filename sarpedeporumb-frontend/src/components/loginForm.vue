<template>
  <form class="log-in-form" v-on:submit.prevent="onRegister">
    <h3 class="text-center">Log in with you email account</h3>
    <label>Email
      <input name="email" type="email" placeholder="me@sarpe.xyz">
    </label>
    <label>Password
      <input name="password" type="password" placeholder="Password">
    </label>
    <input id="show-password" type="checkbox"><label for="show-password">Show password</label>
    <p><input type="submit" class="button expanded" value="Log in"></p>
    <p class="text-center"><a href="#">Forgot your password?</a></p>
  </form>
</template>

<script>
import axios from 'axios';
import router from '@/router/';

export default {
  name: 'Login',
  methods: {
    onRegister: (el) => {
      const email = el.target.email.value;
      const password = el.target.password.value;

      const res = axios.post('https://www.sarpe.xyz/api/v1/auth/login', {
        email,
        password,
      });
      const resParsed = JSON.parse(res);
      console.log(resParsed);
      if (resParsed.token) {
        sessionStorage.setItem('session', res);
        router.push('/');
      }
    },
  },
};
</script>

<style lang='scss'>
</style>
