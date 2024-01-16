<template>
<div id="app" :style="style">
  <v-app>
    <Nav_list />
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</div>
</template>

<script>
import Nav_list from './components/Nav_list.vue'

export default {
  components: {
  Nav_list
  }
}
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>

<style lang="scss">
body{ font-family:'Noto Sans',sans-serif; }
#app {
  --background-color: #efefef;
  background-color: var(--background-color);
}
</style>