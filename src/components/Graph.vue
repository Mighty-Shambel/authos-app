<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  
  export default {
    extends: Bar,
    props: ['chartData', 'options'],
    mounted() {
      this.renderChart(this.chartData, this.options);
    },
    watch: {
      chartData() {
        this.$data._chart.destroy();
        this.renderChart(this.chartData, this.options);
      },
    },
  };
  </script>