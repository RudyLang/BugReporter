<script>
import { Line, mixins } from "vue-chartjs";

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartdata', 'options'],

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>
</style>