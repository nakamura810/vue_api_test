<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
            Navigatinon Lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

            <v-list dense nav>
      <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
        <v-list-item-icon>
          <v-icon>{{ nav_list.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="#333" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-items>
     <v-menu offset-y>
  <template v-slot:activator="{on}">
  <v-btn v-on="on" style="text-transform: none">okada@libertylife.jp<v-icon>mdi-menu-down</v-icon></v-btn>
  </template>
  <v-list>
    <v-list-item v-for="support in supports" :key="support">
      <v-list-item-content>
        <v-list-item-title class="title">{{ support }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-menu>
     </v-toolbar-items>
</v-app-bar>
     <v-footer color="primary" dark app>
      フッター部分
    </v-footer>
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      drawer:null,
      nav_lists:[
      {name: '予約スケジュール',icon: 'mdi-vuetify'},
      {name: '入退館',icon: 'mdi-cogs'},
      {name: 'メンバー',icon: 'mdi-palette'},
      {name: 'アンケート',icon: 'mdi-view-dashboard'},
      {name: 'ウィジェット',icon: 'mdi-function'},
      {name: 'シフト',icon: 'mdi-vuetify'},
      ],
      supports:[
      'メンバーズサイト',
      'スタッフ管理サイト',
      'お知らせ',
      '障害情報',
      'ログアウト'
      ]
    }
  }
}
</script>