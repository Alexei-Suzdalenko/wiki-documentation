<template>
  <HeaderAdmin />
</template>

<script>
import HeaderAdmin from '@/components/AdminComponent/HeaderDashboard.vue';
import api from '@/api/index';
export default {
  components: { HeaderAdmin },
  created() {
    api.getListThemes().then((res) => {
      this.$store.commit('pushGlobalListThemes', {'listThemes': res.reverse() });
    });
  }
}
</script>