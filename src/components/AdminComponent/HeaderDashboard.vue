<template>
  <div id="wrapper">
    <LeftMenuDashboard />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopMenuDashboard />
        <router-view />
      </div>
      <FooterDashboard />
    </div>
  </div>

  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<script>
import LeftMenuDashboard from './LeftMenuDashboard';
import TopMenuDashboard from './TopMenuDashboard';
import FooterDashboard from "./FooterDashboard";
export default {
  components: {FooterDashboard, TopMenuDashboard, LeftMenuDashboard },
  data(){
    return {

    }
  }
}
</script>