<template>
  <div class="page-logn">
    <div class="logn-time">{{time}}</div>
    <div class="background-animation">
      <ul>
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <div class="logn-title">
      <span>
        A BOLD ATTEMPT IS HALF SUCCESS。
        —— DEER
      </span>
    </div>
    <div class="logn-land">
      <div class="logn-land-content">
        <el-input placeholder="请输入内容" v-model="account">
          <template slot="prepend">
            <i class="el-icon-user-solid"></i>
          </template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="password" show-password>
          <template slot="prepend">
            <i class="el-icon-c-scale-to-original"></i>
          </template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="verificationCode">
          <template slot="prepend">
            <i class="verificationCode-font">验证码</i>
          </template>
          <el-button slot="append" class="rainbow">{{verificationCode}}</el-button>
        </el-input>
        <el-button type="primary" size="small" @click="landClick">登陆</el-button>
      </div>
    </div>
    <div class="logn-btn">
      <el-button type="text">忘记密码</el-button>
      <el-button type="text">注册用户</el-button>
    </div>
    <div class="logn-quick-selection">
      <el-button type="info" @click="lognQuickSelection">快速选择用户</el-button>
    </div>
    <div class="logn-tips">
      <p>
        <el-button type="text">帮助</el-button>
        <el-button type="text">隐私</el-button>
        <el-button type="text">条款</el-button>
      </p>
      <p>Time is the most precious of all wealth@http//...</p>
    </div>
    <div class="logn-dialog">
      <el-dialog title="快速选择用户" :visible.sync="dialogVisible" width="30%">
        <div class="logn-dialog-content">
          <span v-for="(item,index) in users" :key="index" @click="dialogContent(item)">
            <i class="el-icon-s-custom"></i>
            <p>{{item.name}}</p>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "page-logn",
  data() {
    return {
      account: "", //账户
      password: "", //密码
      verificationCode: "AFCR", //验证码
      accountName: "临时账户",
      time: dayjs().format("HH:mm:ss"),
      dialogVisible: false,
      userInfo: JSON.parse(localStorage.getItem("userInfo")) || [],
      users: [
        {
          name: "管理员",
          account: "admin", //账户
          password: "admin" //密码
        },
        {
          name: "用户1",
          account: "admin", //账户
          password: "admin" //密码
        },
        {
          name: "用户2",
          account: "admin", //账户
          password: "admin" //密码
        }
      ]
    };
  },
  created() {
    // if (JSON.parse(localStorage.getItem("userInfo"))) {
    //   this.account = JSON.parse(localStorage.getItem("userInfo"))[0].account;
    //   this.password = JSON.parse(localStorage.getItem("userInfo"))[0].password;
    // }
  },
  mounted() {
    this.settime = setInterval(() => {
      this.times();
    }, 1000);
  },
  methods: {
    times() {
      this.time = dayjs().format("HH:mm:ss");
    },
    lognQuickSelection() {
      this.dialogVisible = true;
    },
    // 登陆
    landClick(val) {
      //快速选择用户
      if (val.name) {
        this.account = val.account;
        this.password = val.password;
        this.accountName = val.name;
      }
      if (!this.account || !this.password) {
        return this.$message.error("账号密码不能为空");
      }
      if (this.account !== "admin" || this.password !== "admin") {
        return this.$message.error("账号密码输入错误");
      }
      let obj = {
        account: this.account,
        password: this.password,
        accountName: this.accountName
      };
      let result = [];
      let newObj = {};
      for (let i = 0; i < this.userInfo.length; i++) {
        if (!newObj[this.userInfo[i].accountName]) {
          result.push(this.userInfo[i]);
          newObj[this.userInfo[i].accountName] = true;
        }
      }
      console.log(result);
      // var obj = {};
      // arr = arr.reduce(function(item, next) {
      //  obj[next.key] ? '' : obj[next.key] = true && item.push(next);
      //  return item;
      // }, []);
      // console.log(arr);
      // let objName = {};
      // let arr = []
      // if (this.userInfo.length > 1) {
      //   for (let i = 0; i < this.userInfo.length; i++) {
      //     objName.push(this.userInfo[i].accountName);
      //   }
      //   arr = [...new Set(objName)]
      // }
      this.userInfo.push(obj);
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      this.$router.push({ name: "home-page" });
    },
    //快速选择用户
    dialogContent(val) {
      this.landClick(val);
    }
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Lato:300");
.page-logn {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  text-align: center;
  position: absolute;
  overflow: hidden;

  .logn-time {
    width: 100%;
    font-size: 20em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
    position: absolute;
    top: 100px;
  }
  .background-animation {
    position: absolute;
    bottom: -200px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        background-color: #ffffff;
        animation: router 25s linear infinite;
        margin: 0 30px;
      }
      @keyframes router {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      li:nth-child(1) {
        width: 20px;
        height: 20px;
        border-radius: 5px;
        animation-delay: 0s;
      }
      li:nth-child(2) {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      li:nth-child(3) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        animation-delay: 4s;
      }
      li:nth-child(4) {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      li:nth-child(5) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        animation-delay: 0s;
      }
      li:nth-child(6) {
        width: 20px;
        height: 20px;
        border-radius: 5px;
        animation-delay: 3s;
      }
      li:nth-child(7) {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        animation-delay: 7s;
      }
      li:nth-child(8) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      li:nth-child(9) {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      li:nth-child(10) {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
  .logn-title {
    color: #a0a2a5 !important;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 12px;
    span {
      color: #bcbcbd !important;
    }
  }
  .logn-land {
    display: inline-block;
    width: 280px;
    height: 290px;
    padding: 15px;
    margin-top: 10%;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    position: relative;
    z-index: 9999;
    color: #a0a2a5 !important;
    .logn-land-content {
      margin-top: 15px;
      .el-input {
        margin-bottom: 25px;
      }
      .el-button--default {
        font-family: serif;
        color: #ccc !important;
      }
      .el-button--primary {
        width: 100%;
      }
    }
    i {
      color: #666 !important;
    }
    .el-icon-user-solid,
    .el-icon-c-scale-to-original,
    .verificationCode-font {
      color: #666 !important;
    }
  }
  .logn-btn {
    position: relative;
    z-index: 1;
    span {
      color: #666 !important;
    }
    .el-button {
      padding: 10px 50px;
    }
  }
  .logn-quick-selection {
    position: relative;
    z-index: 1;
    .el-button--info {
      background-color: #a0a2a5;
      width: 220px;
      border-color: #a0a2a5;
    }
  }
  .logn-tips {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    bottom: 0;
    font-size: 12px;
    color: #a8a8a8 !important;
    span {
      color: #a8a8a8 !important;
    }
    .el-button--text {
      color: #a8a8a8;
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
  .logn-dialog {
    position: relative;
    z-index: 9999;
    .el-dialog__header {
      text-align: left;
      .el-dialog__title {
        font-size: 16px;
        color: #a0a2a5;
      }
    }
    .logn-dialog-content {
      width: 100%;
      display: flex;
      span {
        flex: 1;
        color: #a0a2a5 !important;
        i {
          font-size: 36px;
          color: #a0a2a5 !important;
        }
      }
    }
  }
  .rainbow {
    letter-spacing: 0.2rem;
    font-family: Lato, serif;
    text-transform: uppercase;

    span {
      animation: rainbow 15s alternate infinite forwards;
    }
  }

  @keyframes rainbow {
    @for $i from 0 through 20 {
      #{percentage($i * 0.05)} {
        color: hsl(random(360%), 75, 75);
      }
    }
  }
}
</style>