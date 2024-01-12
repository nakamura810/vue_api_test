
  <template>
  <v-card outlined elevation="2">
    <v-card-title>
      <v-icon>mdi-image</v-icon>
      契約内容
    </v-card-title>
    <v-card-subtitle>ユーザー履歴</v-card-subtitle>
    <v-card-text>
      <Chart :chartData="chartItems" :options="chartOptions"/>
    </v-card-text>
  </v-card>
</template>
 
<script>
  import Chart from './bar_chart_box.js'

  export default {
    components: {
      Chart
    },
    data() {
      return {
        chartItems: {
          labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月" ,"10月" ,"11月" ,"12月"],
          datasets: [{
            type:"bar",
            label: "月会費",
            borderWidth: 1,
            backgroundColor: '#2b9fc3',
            data: [12, 23, 4, 16, 28, 30]
          },        
          {
          type:"bar",
          label: "オプション",
          backgroundColor: '#f9caf2',
          data: [12, 23, 4, 16, 28, 30]
          },
          {
          type:"bar",
          label: "年会費",
          backgroundColor: '#89de61',
          data: [12, 23, 4, 16, 28, 30]
          }
          ]
        },
        chartOptions: {
          maintainAspectRatio: false,
          scales: {
            // X-Axis
            xAxes: [{
              stacked: true,
              display: true,
              // グリッドの非表示
              gridLines: {
                display:false
              }
            }],
            // Y-Axis
            yAxes: [{
              stacked: true,
              display: true,
              position: 'left',
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 10,
              },
            }]
          },
        }
      }
    }
  }
</script>
