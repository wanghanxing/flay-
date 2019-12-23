<template>
  <div class="last-pageone">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">侧滑页面</el-button>
    <el-drawer
      title="详情页"
      :visible.sync="drawer"
      :style="{backgroundColor:colorpicker}"
      ref="drawerColor"
    >
      <span>内容!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "last-pageone",
  data() {
    return {
      drawer: false,
      direction: "rtl", //右侧滑出
      colorpicker: ""
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
    drawerlast() {
      console.log(this.$refs.drawerColor, "@@@@@@@");
    }
  }
};
</script>
<style lang='scss'>
.last-pageone {
  width: 100%;
}
</style>