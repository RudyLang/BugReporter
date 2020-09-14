<template>
  <div class="container">
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" :styles="chartStyle" />
  </div>
</template>

<script>
import LineChart from "./Chart.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },

  data() {
    return {
      loaded: false,
      chartdata: null,
      height: 300,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      testData: {
        occurencesByDate: [],
        ocurrencesByHour: [],
        hours: [],
        occurencesByMinute: [],
      },
    };
  },

  // Default to 'NullReference' report type upon mounting
  async mounted() {
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
          reportTypes: ["Crash"],
        },
      });
      if (res.status == 200) {
        console.log(res.status);
      }

      console.log(res.data);

      // Tally the number of occurences per hour
      let group = res.data.reduce((occ, it) => {
        occ[it.hour] = occ[it.hour] + 1 || 1;
        return occ;
      }, {});

      console.log("Occurences by hour:");

      this.testData.ocurrencesByHour = Object.keys(group); // Extract occurences as an array
      this.testData.hours = Object.values(group); // Extract hours as an array

      console.log(this.testData.ocurrencesByHour);
      console.log(this.testData.hours);

      this.loaded = true;

      this.fillChart();

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

        // Tally the number of occurences per hour
        let group = res.data.reduce((occ, it) => {
          occ[it.hour] = occ[it.hour] + 1 || 1;
          return occ;
        }, {});

        console.log("Occurences by hour:");

        this.testData.ocurrencesByHour = Object.keys(group); // Extract occurences as an array
        this.testData.hours = Object.values(group); // Extract hours as an array

        console.log(this.testData.ocurrencesByHour);
        console.log(this.testData.hours);

        this.loaded = true;

        this.fillChart();

        this.loaded = true;
        return res.data;
      } catch (err) {
        console.error(err);
      }
    },

    fillChart: function () {
      this.chartdata = {
        labels: this.testData.ocurrencesByHour,
        datasets: [
          {
            label: "NullReference",
            data: this.testData.hours,
            borderColor: "rgba(235, 64, 52, 1)",
          },
        ],
      };
    },
  },

  computed: {
    chartStyle() {
      return {
        height: `${this.height}px`,
        position: "relative",
      };
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
  max-height: 300px;
}
</style>