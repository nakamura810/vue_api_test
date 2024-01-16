<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped-left color="#333" >
      <v-container>
        <v-list-item>
          
            <img src="../assets/logo_test.png" height="10px" width="auto">
        
        </v-list-item>

        <v-divider></v-divider>

            <v-list dense nav>
      <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.link" color="white">
        <v-list-item-icon>
          <v-icon color="white">{{ nav_list.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content style="color: white;">
          <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

      </v-container>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon><v-icon>mdi mdi-bell</v-icon>
    <v-spacer></v-spacer>
    <v-toolbar-items>
     <v-menu offset-y>
  <template v-slot:activator="{on}">
  <v-btn v-on="on" style="text-transform: none">okada@libertylife.jp<v-icon>mdi-menu-down</v-icon></v-btn>
  </template>
  <v-list>
    <v-list-item v-for="support in supports" :key="support.name">
      <v-list-item-icon>
      <v-icon>{{ support.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="title">{{ support.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-menu>
     </v-toolbar-items>
</v-app-bar>
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      drawer:null,
      nav_lists:[
      {name: '契約内容',icon: 'mdi-vuetify',link: '/purchases'},
      {name: 'ホーム',icon: 'mdi-cogs',link: '/'},
      {name: 'メンバー',icon: 'mdi-palette'},
      {name: 'アンケート',icon: 'mdi-view-dashboard'},
      {name: 'ウィジェット',icon: 'mdi-function'},
      {name: 'シフト',icon: 'mdi-vuetify'},
      ],
      supports:[
      {name: 'メンバーズサイト',icon: 'mdi-vuetify',link: '/about'},
      {name: 'スタッフ管理サイト',icon: 'mdi-vuetify'},
      {name: 'お知らせ',icon: 'mdi-bug'},
      {name: '障害情報',icon: 'mdi-github'},
      {name: 'ログアウト',icon: 'mdi-stack-overflow'}
      ]
    }
  }
}
</script>

<style>
.v-btn--is-elevated {
  box-shadow: none !important;
}

</style>