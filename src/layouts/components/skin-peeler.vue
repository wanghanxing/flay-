<template>
  <el-dropdown class="colorBtn" trigger="click" @command="changeColor">
    <i class="el-icon-brush"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="a" @click="change_type(a)">巨人</el-dropdown-item>
      <el-dropdown-item command="b" @click="change_type(b)">小黄人</el-dropdown-item>
      <el-dropdown-item command="c" @click="change_type(c)">秋</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "skin-peeler",
  data() {
    return {};
  },
  methods: {
    changeColor(command) {
      document.getElementById("app").className = "theme" + command;
      window.localStorage.setItem(
        "theme",
        JSON.stringify(document.getElementById("app").className)
      );
    }
  }
};
</script>

<style lang='less'>
</style>