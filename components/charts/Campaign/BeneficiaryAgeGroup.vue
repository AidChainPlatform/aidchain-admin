<template>
  <div
    class="box-shadow space-y-4 flex flex-col w-full justify-around rounded-lg bg-white p-4"
  >
    <h2 class="font-bold text-sm">
     Beneficiary By Age Group
    </h2>
    
    <div class="relative mx-auto flex w-[80%] items-center justify-center">
      <Doughnut :data="chartData" :options="chartOptions" :height="180"  />
    </div>
  </div>
</template>



<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs' 
ChartJS.register(ArcElement, Tooltip, Legend) 

export default {
  name: 'App',
  components: { Doughnut  },
  data() {
    return {
      chartData: { 
        labels: ["Single", "Married", "Divorce"],
        datasets: [
          {
            backgroundColor: ["#134611", "#3DA35D", "#96E072"],
            data: [240, 150, 170],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: { 
            usePointStyle: true,
            position: 'bottom',
            labels: {usePointStyle: true},
          }
        },  
        cutout: 90,   
        maintainAspectRatio: true,
      }
    }
  }
}
</script>
