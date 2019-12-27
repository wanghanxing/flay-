<template>
  <div class="last-pageone">
    <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">侧滑页面</el-button>
    <el-drawer title="详情页" :visible.sync="drawer" :with-header="false" ref="drawerColor">
      <div class="el-drawer-content_" :style="{backgroundColor:colorpicker}">
        <h2>标题</h2>
        <span>内容!</span>
      </div>
    </el-drawer>-->
    <canvas id="myCanvas" class="my-canvas_"></canvas>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "last-pageone",
  data() {
    return {
      // drawer: false,
      // direction: "rtl", //右侧滑出
      // colorpicker: ""
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("colorpicker"))) {
      this.colorpicker = JSON.parse(localStorage.getItem("colorpicker"));
    }
  },
  mounted() {
    this.drawerlast();
  },
  methods: {
    //网格线
    drawerlast() {
      let canvas = document.getElementById("myCanvas");
      let context = canvas.getContext("2d");

      function drawGrid(context, color, stepx, stepy) {
        context.strokeStyle = color;
        context.lineWidth = 1;
        for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
          context.beginPath();
          context.moveTo(i, 0);
          context.lineTo(i, context.canvas.height);
          context.stroke();
        }
        for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
          context.beginPath();
          context.moveTo(0, i);
          context.lineTo(context.canvas.width, i);
          context.stroke();
        }
      }
      drawGrid(context, "#666", 6, 6);
    }
  }
};
</script>
<style lang='scss'>
.last-pageone {
  height: 70%;
  padding: 20px;
  .el-drawer-content_ {
    width: 100%;
    height: 100%;
    padding: 10px;
    h2 {
      margin: 0;
      padding: 0;
    }
  }
  .my-canvas_ {
    width: 100%;
    height: 100%;
  }
}
</style>