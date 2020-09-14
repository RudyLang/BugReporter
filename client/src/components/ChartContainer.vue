<template>
  <div class="container">
    <line-chart 
        v-if="loaded" 
        :chartdata="chartdata" 
        :options="options"
    />
  </div>
</template>

<script>
import LineChart from "./Chart.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },

  data: () => ({
    loaded: false,
    chartdata: null,
  }),

  // Default to 'NullReference' report type upon mounting
  async mounted() {
    this.fillChart();

    this.$root.$on("ChartContainer", (selectedTypes) => {
      this.updateChart(selectedTypes);
    });

    this.loaded = false;

    try {
      let res = await this.$http({
        url: "http://localhost:3000/filter",
        method: "post",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          reportTypes: ["NullReference"],
        },
      });
      if (res.status == 200) {
        console.log(res.status);
      }
      //this.chartdata = res.data;
      console.log(res.data[0].comment);
      this.loaded = true;
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  methods: {
    updateChart: async function (types) {
      let parsedTypes = JSON.parse(JSON.stringify(types));
      console.log(parsedTypes);
      this.loaded = false;
      try {
        let res = await this.$http({
          url: "http://localhost:3000/filter",
          method: "post",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            reportTypes: parsedTypes,
          },
        });
        if (res.status == 200) {
          console.log(res.status);
        }
        //this.chartdata = res.data[0];
        console.log(res.data);
        this.loaded = true;
        return res.data;
      } catch (err) {
        console.error(err);
      }
    },

    fillChart: function () {
      this.chartdata = {
        labels: ["Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "NullReference",
            data: [1, 4, 10],
          },
          {
            label: "Undefined",
            data: [2, 10, 1],
          },
        ],
      };
    },
  },
};
</script>