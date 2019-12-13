<template>
  <div class="test-pageone">
    <div id="myChart" :style="{width: '80%', height: '80%',opacity:'.7'}"></div>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts-gl");
export default {
  name: "test-pageone",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表

      // myChart.setOption(option);
    }
  }
};
</script>

<style lang='scss'>
.test-pageone {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>