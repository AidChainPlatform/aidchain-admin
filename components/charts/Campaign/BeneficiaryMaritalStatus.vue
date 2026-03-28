<template>
  <div class="box-shadow space-y-4 flex flex-col w-full justify-around rounded-lg bg-white p-4">
    <h2 class="font-bold text-sm">
      Beneficiary By Marital Status
    </h2>

    <div class="relative mx-auto flex w-[90%] items-center justify-center">
      <Doughnut :data="chartData" :options="chartOptions" :height="180" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps(['currentCampaign'])

// const maritalData = computed(() => {
//   return [currentCampaign.Beneficiary_marital_status.single, currentCampaign.Beneficiary_marital_status.married, currentCampaign.Beneficiary_marital_status.divorce]
// })

// const duely = [props.currentCampaign.Beneficiary_marital_status.single]

// onMounted(() => console.log([props?.currentCampaign.Beneficiary_marital_status.single, props?.currentCampaign.Beneficiary_marital_status.married, props?.currentCampaign.Beneficiary_marital_status.divorce]))

const chartData = ref({
  labels: ["Single", "Married", "Divorce"],
  datasets: [
    {
      backgroundColor: ["#134611", "#3DA35D", "#96E072"],
      data: [100, 90, 80],
    },
  ],
})

const chartOptions = ref({
  plugins: {
    legend: {
      usePointStyle: true,
      position: 'bottom',
      labels: { usePointStyle: true },
    }
  },
  cutout: 90,
  maintainAspectRatio: true,
})
</script>
