<template>
  <v-app>
    <Nav_list />
      <v-main>
        <router-view />
      </v-main>
  </v-app>
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