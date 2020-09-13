<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  
  async mounted () {

    // Pass in report types here
    // Get from SelectionControl.vue
    // reportTypes = ['NullReference', 'Undefined']
    // Then we're gonna pass it to the axios get request: http://localhost:3000/reports/{reportTypes}
    // Actually it should be a method that is triggered by the SelectionComponent 

    this.loaded = false
    try {
        let res = await this.$http({
            url: 'http://localhost:3000/reports',
            method: 'get',
            timeout: 8000,
            headers: {
            'Content-Type': 'application/json',
            }
        });
        if(res.status == 200){
            console.log(res.status);
        }
        this.chartdata = res.data;
        console.log(res.data);
        this.loaded = true;
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
  },
}
</script>