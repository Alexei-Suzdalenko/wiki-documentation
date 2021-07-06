<template>
  <div class="form-group">
    <input type="email" class="form-control form-control-user" v-model="email" aria-describedby="emailHelp" placeholder="Enter Email Address...">
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-control-user" v-model="password" placeholder="Password">
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox small">
      <input type="checkbox" class="custom-control-input" id="customCheck">
      <label class="custom-control-label" for="customCheck">Remember Me</label>
    </div>
  </div>
  <span class="btn btn-primary btn-user btn-block" v-on:click="tryLogin">{{ login }}</span>
</template>
<script>
import firebase from 'firebase/app';
export default {
  data(){
    return {
      email: window.localStorage.getItem('email') || '',
      password:  window.localStorage.getItem('password') || '',
      login: 'Login'
    }
  },
  watch: {
    email: function() { this.login = 'Login'; },
    password: function () { this.login = 'Login'; }
  },
  methods: {
    tryLogin(){ this.login = 'Try to Login...';
      let currentContext = this;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => { this.login = 'You are logged in';
            window.localStorage.setItem('uid', userCredential.user.uid);
            window.localStorage.setItem('email', this.email);
            window.localStorage.setItem('password', this.password);
            setTimeout(function(){
              let currentTheme = window.localStorage.getItem('currentTheme');
                if(currentTheme){
                  currentContext.$router.push('/dashboard/theme/' + currentTheme);
                } else {
                  currentContext.$router.push('/dashboard/all-items');
                }
              }, 1500);
          })
          .catch((error) => { this.login = error.message;
            let errorCode = error.code;
            let errorMessage = error.message;
          });
    }
  }
}
</script>