<template>
  <router-view/>
</template>

<script>

export default {         // firebase accaunt loj.rus@gmail.com 
  created() {
    this.$store.commit('situate');              // set Suzdalenko.listNews = []
  }
}
</script>
