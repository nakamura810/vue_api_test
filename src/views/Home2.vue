<template>
  <div>
    <v-row>
      <v-col>
        <barChartCard />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import barChartCard from "../components/chart/barChartCard.vue";
  

  export default {
    name: 'Home2',
    components: {
      barChartCard
    },
    methods: {
    renderChart() {
      }
    }
  }
</script>
