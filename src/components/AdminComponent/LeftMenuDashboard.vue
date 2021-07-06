<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <span class="sidebar-brand d-flex align-items-center justify-content-center">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Admin</div>
    </span>

    <hr class="sidebar-divider my-0">

    <li class="nav-item active">
      <span class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></span>
    </li>

    <hr class="sidebar-divider">

    <div class="sidebar-heading">
      Interface
    </div>
    <li class="nav-item">
      <router-link to="/dashboard/themes" class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
         aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Themes</span>
      </router-link>
       <div class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar" style="display:block;">
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">List themes</h6>
          <span  v-on:click="saveCurrentThemeAndGoIt(item.id, item.seen)"
                 v-for="(item, index) in currentData" v-bind:key="index"
                 class="collapse-item">{{ item.title }}</span>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider">

    <div class="sidebar-heading">
      Addons
    </div>
    <li class="nav-item">
      <router-link to="/dashboard/all-items" class="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
         aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Items</span>
      </router-link>
    </li>

    <hr class="sidebar-divider d-none d-md-block">

    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      otherVaribles: 'otherVaribles'
    }
  },
  methods: {
    saveCurrentThemeAndGoIt(themeId, seenTheme){
        window.localStorage.setItem('currentTheme', themeId);
        // add +1 seen
        this.$router.push('/dashboard/theme/' + themeId);
    }
  },
  computed: {
    currentData(){
      let lenghtThemes = this.$store.state.suzdalenko.listThemesGlobal.length || false;
      if( !lenghtThemes ) return;
      let listThemes = [];
      for(let i = 0; i < lenghtThemes; i++) {
        let currentObj = {};
            currentObj.title = this.$store.state.suzdalenko.listThemesGlobal[i].title.substring(0,22);
            currentObj.id =  this.$store.state.suzdalenko.listThemesGlobal[i].id;
            currentObj.seen =  this.$store.state.suzdalenko.listThemesGlobal[i].seen;
            listThemes.push(currentObj);
      }
      return listThemes;
    }
  },
}
</script>

