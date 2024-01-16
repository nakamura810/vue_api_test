<template>
  <v-container>
  <v-col md="3">
    <v-card><p>プロフィール</p>
    <nav><p>会員番号</p>xxxx</nav>
    <nav><p>氏名</p><v-textarea
          label=""
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea></nav>
    </v-card>
  </v-col>
    <v-col md="2">
    <v-card><p>メンバー管理</p></v-card>
  </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>
<style>

</style>