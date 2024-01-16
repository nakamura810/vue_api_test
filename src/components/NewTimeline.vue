<template>
  <v-container>
        <v-row>
      <v-col>
        <barChartCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import barChartCard from "../components/chart/barChartCard.vue";

  export default {
    name: 'NewTimeline',
    components: {
    barChartCard
    },
    methods: {
    renderChart() {
    },
  }
}
</script>
