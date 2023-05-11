<template>
  <h1>Admin dashboard</h1> 
</template>

  <script>
  import Graph from '../../../components/Graph.vue';

export default {
  components: {
    Graph,
  },
  data() {
    return {
      currentPage: 'dashboard',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [10, 20, 30, 25, 40, 35, 50],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
};
  </script>
  
  <style>
  
  </style>