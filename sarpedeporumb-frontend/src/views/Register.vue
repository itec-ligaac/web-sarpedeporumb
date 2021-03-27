<template>
<div class="register-page">
  <div class="register-page-content">
    <div class="full-form">
    <div class="upper-register">
        <h1><b>Sign up</b></h1>
        <form action="" class="register-form">
            <label for="name">Name</label>
                <br>
            <input class="outer-input" type="name" placeholder="Name" v-model="name"/>
                <br>
            <label for="email">Email</label>
                <br>
            <input class="outer-input" type="name" placeholder="Email" v-model="email"/>
            <label for="password">Password</label>
            <br>
            <div class="password-field-wrapper">
                <input id="password-field-register" type="password"
                placeholder="Password" v-model="password">
                <div class="icon-see-password-wrapper">
                    <img  src="../assets/images/eye-slash.svg" v-if="!seePass" class="icon"
                       @click="togglePass()">
                    <img  src="../assets/images/eye.svg" v-if="seePass" class="icon"
                       @click="togglePass()">
                </div>
            </div>
        </form>
    <p class="error-message">{{error}}</p>
    </div>
      <button class="button" @click="registerUser()">Sign up</button>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      seePass: '',
      error: '',
    };
  },
  methods: {
    togglePass() {
      const x = document.getElementById('password-field-register');
      this.seePass = !this.seePass;
      if (x.type === 'password') {
        x.type = 'text';
      } else {
        x.type = 'password';
      }
    },
  },
};
</script>

<style lang='scss'>

@import "../app";
@import "../assets/flex.scss";
@import "../assets/screen-size.scss";
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
.register-page{

  width: 100%;
  height: auto;
  min-height: 100vh;
  background: $white;
  margin-top: 60px;
  .register-page-content{

    width: 100%;
    height: 100vh;
    max-width: 1620px;
    margin: 0 auto;
    @include flexbox();
    @include justify-content(center);
    @include flex-direction(column);
    .full-form{
       width: 100%;
       max-width: 350px;
       margin: 0 auto;
       box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
       padding: 10px;
       border-radius: 10px;
        .upper-register{

            h1{
                font-size: 50px;
            }
            .register-form{
              .password-field-wrapper{
                  @include flexbox();
                  @include justify-content(flex-start);
                  @include flex-direction(row);
                  input{
                      border-radius: 10px 0 0 10px;
                      padding: 10px;
                      background: $white;
                      height:50px;
                      width:250px;
                      border: solid 1px $black;

                      font-size: 20px;
                      &:focus{
                      background: $white;
                  }
                  }
                  .icon-see-password-wrapper{
                      border-radius: 0 10px 10px 0;
                      background: $black;
                      height:50px;
                      width:50px;
                      @include flexbox();
                      @include justify-content(center);
                      @include flex-direction(column);
                      align-content: center;
                      .icon{
                          margin:auto;
                          cursor: pointer;
                      }
                  }
              }
              .outer-input{
                border-radius: 10px;
                margin: 10px auto;
                padding: 10px;
                background: $white;
                height:50px;
                width:300px;
                border: solid 1px $black;

                font-size: 20px;
                &:focus{
                background: $white;
                }
              }
              .forgot-password{
                  @include flexbox();
                  @include justify-content(flex-end);
                  &:hover{
                      cursor: pointer;
                      text-decoration: underline;
                  }
              }
              label{
                  font-size: 24px;
                  font-weight: bold;
              }
          }
          .error-message{
              color: red;
          }
        }
        .button{
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
  }
}

</style>
