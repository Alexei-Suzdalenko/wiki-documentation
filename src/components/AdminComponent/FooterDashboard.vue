<template>
  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Wiki - {{ currentData }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import firebase from 'firebase';
export default {
   data() {
    return {
      currentData : ''
    }
  },
  methods: {
    testLoginThisUser(){
      if(!window.localStorage.getItem('email') || !window.localStorage.getItem('password') || !window.localStorage.getItem('uid')){
        window.localStorage.clear(); 
        this.$router.push('/bad-user');    
        return;
      }
      let currentContext = this;
      let email = window.localStorage.getItem('email') || 'pete@gmail.com';
      let password = window.localStorage.getItem('password') || '12345678AlexeiSuzdalenko';
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => { window.localStorage.setItem('uid', userCredential.user.uid); })
          .catch((error) => {
           window.localStorage.clear(); currentContext.$router.push('/bad-user');
          });
     },
    getMiCurrentTime() {
      let currentdate = new Date();
      let minutes = currentdate.getMinutes();
      if(minutes < 10) minutes = '0'+minutes;
      let second = currentdate.getSeconds();
      if(second < 10) second = '0'+second;
      let datetime = currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/"
          + currentdate.getFullYear() + " - "
          + currentdate.getHours() + ":"
          + minutes + ":"
          + second;
      this.currentData = datetime
    }
  },
  created() {
    this.testLoginThisUser();
    setInterval(this.getMiCurrentTime, 1100);
  }
}
</script>