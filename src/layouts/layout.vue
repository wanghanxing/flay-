<template>
  <div class="layout">
    <div class="layout-header">
      <span class="layout-header-img">{{time}}</span>
      <span @click="retractFold">
        <i class="el-icon-s-fold"></i>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link el-icon-s-grid">
            当前页
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">当前菜单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link el-icon-folder">
            演示页面
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">当前页</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span>
        <p @click="searchClick">
          <el-tooltip effect="dark" :content="`搜索`" placement="right">
            <i class="el-icon-search"></i>
          </el-tooltip>
        </p>
        <p @click="loadingClick">
          <el-tooltip effect="dark" :content="`日志`" placement="right">
            <i class="el-icon-loading"></i>
          </el-tooltip>
        </p>
        <p class="btn-fullscreen" @click="rankClick">
          <el-tooltip effect="dark" :content="`全屏`" placement="right">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </p>
        <p>
          <el-tooltip effect="dark" :content="`主题`" placement="right">
            <skin-peeler></skin-peeler>
          </el-tooltip>
        </p>
        <p @click="settingClick">
          <el-tooltip effect="dark" :content="`字体`" placement="right">
            <font-size></font-size>
          </el-tooltip>
        </p>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>
            {{accountName}}你好
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-switch-button" @click.native="dropdownclick">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <div class="layout-menu">
      <div>
        <el-menu
          default-active="navselected"
          class="el-menu-vertical-demo"
          :active="navselected"
          @select="selectItems"
          @open="handleOpen"
          unique-opened
          @close="handleClose"
          background-color="rgba(235, 241, 246, .3)"
          :collapse="foldRetract"
          router
          theme="dark"
        >
          <el-submenu :index="index+''" v-for="(item,index) in menuList" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.meta.name}}</span>
            </template>
            <el-menu-item
              @click="submenuselect"
              :index="item.path+newitem.path"
              v-for="(newitem,index) in item.children"
              :key="index"
              router
            >{{newitem.meta.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="layout-content" v-if="!dialogVisible">
        <el-tabs type="card" closable @tab-click="tabClick">
          <el-tab-pane :label="this.$route.meta.name">
            <slot></slot>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="layout-searchClick">
      <el-dialog :visible.sync="dialogVisible" fullscreen>
        <div class="block">
          <el-avatar :size="100" :src="circleUrl"></el-avatar>
        </div>
        <el-input placeholder="请输入内容" v-model="searchClickText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchClickSearch"></el-button>
        </el-input>
        <el-card class="box-card">
          <div v-for="o in 10" :key="o" class="text item">{{'内容 ' + o }}</div>
        </el-card>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import skinPeeler from "./components/skin-peeler";
import fontSize from "./components/font-size";
import router from "../router/index";
import dayjs from "dayjs";
export default {
  name: "layout",
  components: { skinPeeler, fontSize },
  data() {
    return {
      foldRetract: false,
      foldRetractnumber: 0,
      dialogVisible: false,
      searchClickText: "",
      accountName: "",
      menuList: [],
      menuListchd: [],
      tabpaneList: [],
      tabpaneName: [],
      time: dayjs().format("HH:mm:ss"),
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      form: {
        name: "",
        password: ""
      },
      navtype: "horizontal",
      navselected: "1",
      gridData: [
        {
          name: "123",
          date: "123",
          address: "123"
        },
        {
          name: "123",
          date: "123",
          address: "123"
        },
        {
          name: "123",
          date: "123",
          address: "123"
        }
      ]
    };
  },
  watch: {
    // 监测store.state
    "$store.state.adminleftnavnum": "getNavType",
    "$router.currentRoute.meta.name"(val) {
      console.log(val, "!!!!!!!!!!");
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.settime = setInterval(() => {
      this.times();
    }, 1000);
  },
  methods: {
    init() {
      let routerList = this.$router.options.routes;
      this.menuList = routerList.slice(1);
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        this.accountName = JSON.parse(
          localStorage.getItem("userInfo")
        )[0].accountName;
      }
    },
    times() {
      this.time = dayjs().format("HH:mm:ss");
    },
    tabClick(val) {
      console.log(val, "!!!!!tabClick!!!!");
      // this.submenuselect(val);
    },
    //展开当前的menu
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    //menu收起的回调
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //选择侧边栏子项change
    submenuselect(val) {
      // console.log(val, "@@@@@@");
      let arr = this.tabpaneName.join("");
      if (arr.indexOf(this.$route.meta.name) === -1) {
        this.tabpaneName.push(this.$route.meta.name);
      }
      this.$router.push({ path: val.$route.path });
      localStorage.setItem("metaNmae", JSON.stringify(val.$route.path));
    },
    getNavType() {
      this.navselected = this.$store.state.adminleftnavnum;
    },
    //菜单激活的回调
    selectItems(index) {
      this.$store.state.adminleftnavnum = index;
    },
    // 折叠收起 侧边栏
    retractFold() {
      this.foldRetractnumber += 1;
      if (this.foldRetractnumber % 2 === 1) {
        this.foldRetract = true;
      } else {
        this.foldRetract = false;
      }
    },
    //当前账户退出
    dropdownclick() {
      this.$router.push({ name: "page-logn" });
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        window.localStorage.removeItem("userInfo");
      }
      if (JSON.parse(localStorage.getItem("metaNmae"))) {
        window.localStorage.removeItem("metaNmae");
      }
    },
    //搜索页  搜索click
    searchClickSearch() {
      console.log("searchClickSearch");
    },
    //搜索
    searchClick() {
      console.log("searchClick");
      this.dialogVisible = true;
    },
    //日志
    loadingClick() {
      console.log("日志loadingClick");
      this.$message.info("无动态");
    },
    //全屏
    rankClick() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    //字体
    settingClick() {
      console.log("settingClick");
    }
  }
};
</script>

<style lang='scss'>
.layout {
  width: 100%;
  height: 100%;
  // background-color: #ebf1f6;
  overflow: hidden;
  .el-dropdown {
    color: #000;
  }
  .layout-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .layout-header-img {
      display: inline-block;
      width: 200px;
      height: 60px;
      // background-color: rgba(235, 241, 246, .3);
      // background-image: url("../pages/Logn/images/logo@2x.png");
      background-size: 50% 50%;
      background-repeat: no-repeat;
      margin-right: 20px;
      background-position: center;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      font-weight: 400;
    }
    span {
      margin: auto;
      font-weight: 700;
    }
    span:nth-child(2) {
      font-size: 30px;
      margin-right: 20px;
      color: #000;
    }
    span:nth-child(4) {
      flex: 2;
      margin-left: 20px;
    }
    span:nth-child(5) {
      min-width: 200px;
      margin-right: 20px;
      color: #000;
      p {
        display: inline-block;
        i {
          padding: 0 10px;
          font-size: 20px;
        }
      }
    }
    span:nth-child(6) {
      margin-right: 20px;
    }
  }
  // 侧边栏
  .layout-menu {
    height: 85%;
    width: 100%;
    display: flex;
    .el-menu {
      height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .layout-content {
      width: 100%;
      height: 100%;
      padding: 0 10px 10px 10px;
      .el-tabs {
        height: 100%;
        background-color: rgba(235, 241, 246, 0.4);
      }
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs--border-card > .el-tabs__header {
        background-color: rgba(235, 241, 246, 0.4);
        border-color: #ccc;
      }
      .el-tabs--border-card {
        border-color: #ccc;
      }
      .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
        background-color: rgba(235, 241, 246, 0.4);
      }
      .el-tabs__content {
        height: 100%;
      }
      .el-tab-pane {
        height: 100%;
      }
    }
  }
  .layout-searchClick {
    text-align: center;
    .block {
      padding: 20px;
    }
    .el-dialog {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .el-card {
      margin-top: 50px;
      max-height: 280px;
      overflow: auto;
      .el-card__body {
        padding: 0;
        .text {
          padding: 20px 0;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
}
</style>