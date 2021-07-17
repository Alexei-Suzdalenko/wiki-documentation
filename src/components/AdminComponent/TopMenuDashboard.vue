<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <button class="btn btn-link d-md-none rounded-circle mr-3" v-on:click="openCloseMenu">
      <i class="fa fa-bars"></i>
    </button>
    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
        <input v-model="search" type="text" class="form-control bg-light border-0 small" placeholder="Search for items ..." aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" v-on:click="resetValue">
            <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>
      <li class="nav-item dropdown no-arrow">
        <span class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small" v-on:click="tryLogoutUser">Logout</span>
          <img class="img-profile rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx02o0FpkD1dU4f_5m6rb3fiz79PsHVR0MQ&usqp=CAU">
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  created() {
    
  },
  watch: {
    'search' : function(newValue){
      this.$store.commit('situateSearchValue', { 'searchValue': newValue });
      this.$router.push('/dashboard/all-items');
    }
  },
  methods: {
    openCloseMenu(){
      this.$store.commit('openCloseMenuNow');
    },
    tryLogoutUser(){
      let confirmData = confirm('You want to go out ?');
      if(confirmData){
        window.localStorage.clear();
         this.$router.push('/buy-buy');
      }
    },
    resetValue(){
      this.search = '';
    }
  }
}
</script>