<template>
      <v-content>
    <v-row>
      <v-col>
        <barChartCard />
      </v-col>
    </v-row>
        </v-content>
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
