<template>
  <div
    class="box-shadow space-y-4  flex flex-col w-full justify-around rounded-lg bg-white p-4"
  >
    <h2 class="font-bold text-sm">
     Beneficiary By Location
    </h2>
    
    <div class="relative mx-auto flex w-[90%] items-center justify-center">
      <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :height="220" /> 
    </div>
  </div>
</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: { 
     labels: ["KADUNA", "ABUJA", "LAGOS", "JOS"],
  datasets: [{
    data: [6500, 4500, 2040, 5000, 1000, 5900,  1000, 5900, 8000],
    backgroundColor: '#27AE60',  
  }]
      },
      chartOptions: {  
          indexAxis: 'y',
                  plugins: { legend: { display: false }},  
      scales: {
            x: {
        grid: {
          drawOnChartArea: false,
        }},
      y: {
        grid: {
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
        },
        beginAtZero: true
      }
    }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 3.17px 19.8125px rgba(174, 174, 192, 0.15);
}
</style> 