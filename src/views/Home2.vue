<template>
      <v-content>
<div class="tab">
    <div class="tab_box container">
    <section class="h_text"><v-icon x-large class="mdi mdi-account-circle"></v-icon><nav><p>ミョウジナマエ</p>苗字名前</nav></section>
        <ul class="tab_list">
             <li @click="changeTab('1')" v-bind:class="{'active': isActive === '1'}">基本情報</li>
             <li @click="changeTab('2')" v-bind:class="{'active': isActive === '2'}">契約内容</li>
        </ul>
    </div>
</div>
<v-container>
<v-row class="home-service__contents">
<v-col md="2">
      <v-card><div><p class="h_c">プレミアム会員</p></div></v-card>
</v-col>
<v-col md="2">
      <v-card><div><p class="h_c">オプション</p></div></v-card>
</v-col>
<v-col md="2">
      <v-card><div><p class="h_c">所持チケット</p></div></v-card>
</v-col>
<v-col md="2">
      <v-card><div><p class="h_c">所持クーポン</p></div></v-card>
</v-col>
<v-col md="2">
      <v-card><div><p class="h_c">オプション</p></div></v-card>
</v-col>
<v-col md="2">
      <v-card><div><p class="h_c">オプション</p></div></v-card>
</v-col>
      </v-row>
</v-container>      
<div class="container">
    <div class="article">
        <!--タブで入れ替えたいコンポーネントの配置-->
        <HelloWorld v-show="isActive === '1'" class="item"></HelloWorld>
        <NewTimeline v-show="isActive === '2'" class="item"></NewTimeline>
    </div>
</div>

        </v-content>
</template>

<script>
  import HelloWorld from "../components/HelloWorld.vue";
  import NewTimeline from "../components/NewTimeline.vue";
  

  export default {
      data() {
        return {
            isActive: '2',
        };
    },
    name: 'Home2',
    components: {
    HelloWorld, NewTimeline,
    },
    methods: {
      changeTab(val) {
          this.isActive = val;
        },
      }
    }
</script>
<style lang="scss" scoped>
.container{
  padding:0;
}
    .tab{
        width: 100%;
    }
    .tab_list {
        overflow: hidden;
        list-style: none;
                display:flex;
    }
    .tab_list li {

        padding: 10px 20px;
        cursor: pointer;
        transition: .3s;
    }
    .tab_list li:not(:first-child) {
        border-left: none;
    }
    .tab_list li.active {
        border-bottom: 3px solid #2b9fc3;
        cursor: auto;
    }
    .article{
        overflow: hidden;
        margin-top: -1px;
    }
    .tab_box{
      background-color:#fff;
      border-radius:10px;
    }
    .home-service__contents {
  margin-top: 20px;
  display:flex;
  justify-content:center;
}
.v-sheet.v-card:not(.v-sheet--outlined){
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){
  box-shadow: none !important;
}
.h_c{
display:flex;
  justify-content:center;
  padding:2rem 0 2rem 0;
}
.h_text{
  display:flex;
  margin-left:2rem;
  font-size:2rem;
  text-align:center;
}
.h_text nav{
  margin-left:1rem;
}
.h_text p{
  font-size:1rem;
  opacity:0.8;
}

</style>