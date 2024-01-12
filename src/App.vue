<template>
  <v-app>
    <v-app-bar
      app
      white
      clippedLeft
      :height="60"
    >
        <v-app-bar-nav-icon
        @click="drawer = !drawer"
    >
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <p class="mb-0 mr-2">okada@libertylife.jp</p>
     <v-btn 
      color="blue"
    >
      サインアウト
    </v-btn>
</v-app-bar>
 <v-navigation-drawer
      app
      dark
      clipped
      :width="200"
      :value="$vuetify.breakpoint.mdAndDown? drawer : true"
      :expand-on-hover="$vuetify.breakpoint.lgAndUp && drawer"
    >
      <v-list
        nav
        dense
      >
        <v-list-item>
          <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
          <router-link to="/">トップページ</router-link>
        </v-list-item>
        
        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
          <router-link to="/purchases">契約内容</router-link>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      drawer:this.$vuetify.breakpoint.lgAndUp,
    }
  }
}
</script>