<template>
      <v-content>
<div class="tab">
    <div class="tab_box container">
    <section>苗字名前</section>
        <ul class="tab_list">
             <li @click="changeTab('1')" v-bind:class="{'active': isActive === '1'}">基本情報</li>
             <li @click="changeTab('2')" v-bind:class="{'active': isActive === '2'}">契約内容</li>
        </ul>
    </div>
</div>
<div class="container">
    <div class="article">
        <!--タブで入れ替えたいコンポーネントの配置-->
        <HelloWorld v-show="isActive === '1'" class="item"></HelloWorld>
        <NewTimeline v-show="isActive === '2'" class="item"></NewTimeline>
    </div>
</div>
      <v-btn class="mx-auto">プレミアム会員</v-btn><v-btn>オプション</v-btn><v-btn>所持クーポン</v-btn>
    <v-row>
      <v-col>
        <barChartCard />
      </v-col>
    </v-row>
        </v-content>
</template>

<script>
  import barChartCard from "../components/chart/barChartCard.vue";
  import HelloWorld from "../components/HelloWorld.vue";
  import NewTimeline from "../components/NewTimeline.vue";
  

  export default {
      data() {
        return {
            isActive: '1',
        };
    },
    name: 'Home2',
    components: {
      barChartCard, HelloWorld, NewTimeline,
    },
    methods: {
    renderChart() {
      },
      changeTab(val) {
          this.isActive = val;
      }
    }
  }
</script>
<style scoped>
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
    .container{
      max-width:100% !important;
    }
</style>