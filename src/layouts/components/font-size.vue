<template>
  <el-dropdown class="colorBtn" trigger="click" @command="changeColor">
    <i class="el-icon-edit"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="a" @click="change_type(a)">
        <i class="el-icon-edit"></i>默认
      </el-dropdown-item>
      <el-dropdown-item command="b" @click="change_type(b)">
        <i class="el-icon-edit"></i>中
      </el-dropdown-item>
      <el-dropdown-item command="c" @click="change_type(c)">
        <i class="el-icon-edit"></i>小
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "font-size",
  data() {
    return {};
  },
  methods: {
    changeColor(command) {
      let odiv = document.getElementById("app");
      let font3 = "font" + command;
      let sss = odiv.className.split("");
      if (sss.length > 6) {
        odiv.className = sss.slice(0, 6).join("");
      }
      odiv.className += " " + font3;
    //   window.localStorage.setItem("font", JSON.stringify(odiv.className));
    }
  }
};
</script>

<style>
</style>