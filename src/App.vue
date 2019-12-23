<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (JSON.parse(localStorage.getItem("theme"))) {
      let content = JSON.parse(localStorage.getItem("theme"));
      document.getElementById("app").className = content;
    }
    if (JSON.parse(localStorage.getItem("userInfo"))) {
      this.$router.push({ name: "home-page" });
    } else {
      this.$router.push({ name: "page-logn" });
    }
    if (JSON.parse(localStorage.getItem("metaNmae"))) {
      this.$router.push({ path: JSON.parse(localStorage.getItem("metaNmae")) });
    }
  }
};
</script>

<style lang='scss'>
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background-color: rgba(235, 241, 246, 1);
}
.themea {
  background-image: url("http://attach.bbs.miui.com/forum/201309/28/161643n533qonlp625iel3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.fonta {
  font-size: 14px;
  span {
    font-size: 14px;
  }
  i {
    font-size: 14px;
  }
}
.fontb {
  font-size: 16px;
  span {
    font-size: 16px;
  }
  i {
    font-size: 16px;
  }
}
.fontc {
  font-size: 12px;
  span {
    font-size: 12px;
  }
  i {
    font-size: 12px;
  }
}
.themeb {
  background-image: url("http://abc.2008php.com/2014_Website_appreciate/2014-07-06/20140706015939.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .el-table {
    color: #fff;
  }
  span {
    color: #fff;
  }
  i {
    color: #fff;
  }
}
.themec {
  background-image: url("http://attachments.gfan.net.cn/forum/201412/21/231053pjmq86yaqavzgf7y.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .el-table {
    color: #fff;
  }
  span {
    color: #fff;
  }
  i {
    color: #fff;
  }
}
.el-drawer__open .el-drawer.rtl {
  width: 75% !important;
}
</style>
