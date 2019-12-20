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
    <div class="head-portrait">
      <span @click="headPortrait" class="head-portrait-lastimg">
        <i class="el-icon-plus icon-plus" v-if="!headerImgs"></i>
        <img :src="headerImgs" alt v-else />
      </span>
      <el-dialog title="选择头像" :visible.sync="imgdialogVisible" width="30%">
        <span
          class="head-portrait-dialog"
          v-for="(item,index) in imgHeaders"
          :key="index"
          @click="headimgClick(index,item.src)"
        >
          <img :src="item.src" alt />
        </span>
      </el-dialog>
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
      imgdialogVisible: false,
      account: "", //账户
      password: "", //密码
      imgHeaders: [
        {
          src:
            "http://imgsrc.baidu.com/forum/w=580/sign=ea715970798b4710ce2ffdc4f3cfc3b2/898ea9014c086e064d459e1a09087bf40bd1cb8d.jpg"
        },
        {
          src:
            "http://b-ssl.duitang.com/uploads/item/201511/13/20151113110434_kyReJ.jpeg"
        },
        {
          src:
            "http://b-ssl.duitang.com/uploads/item/201608/21/20160821194924_UCvFZ.jpeg"
        },
        {
          src:
            "http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg"
        },
        {
          src:
            "http://pic3.zhimg.com/50/v2-ed3df8233f628be769436ffed300a917_hd.jpg"
        },
        {
          src:
            "http://pic2.zhimg.com/50/v2-1c3bd9fe6c6a28c5ca3a678549dfde28_hd.jpg"
        },
        {
          src:
            "http://b-ssl.duitang.com/uploads/item/201509/21/20150921173512_PehaH.jpeg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://cdn.duitang.com/uploads/item/201411/23/20141123144736_2ntsu.thumb.700_0.jpeg"
        },
        {
          src:
            "http://b-ssl.duitang.com/uploads/item/201410/20/20141020224133_Ur54c.jpeg"
        },
        {
          src:
            "http://img3.duitang.com/uploads/item/201606/07/20160607191023_isxzV.jpeg"
        },
        {
          src:
            "http://cdn.duitang.com/uploads/item/201410/02/20141002202633_52c4N.jpeg"
        }
      ],
      headerImgs: "",
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
    if (JSON.parse(localStorage.getItem("headerImgs"))) {
      this.headerImgs = JSON.parse(localStorage.getItem("headerImgs"));
    }
  },
  mounted() {
    this.settime = setInterval(() => {
      this.times();
    }, 1000);
  },
  methods: {
    //头像选择弹窗
    headPortrait() {
      this.imgdialogVisible = true;
    },
    // 选择头像 保存到本地
    headimgClick(index, val) {
      if (val) {
        this.$set(this, "headerImgs", val);
        this.imgdialogVisible = false;
        localStorage.setItem("headerImgs", JSON.stringify(this.headerImgs));
      }
    },
    //处理背景时间
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
  .head-portrait {
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    position: relative;
    top: 50px;
    border: 1px dashed #ccc;
    border-radius: 50%;
    overflow: hidden;
    .head-portrait-lastimg {
      img {
        width: 100%;
      }
    }
    .icon-plus {
      font-size: 20px;
      color: #ccc;
    }
    .el-dialog__body {
      padding: 10px;
    }
    .head-portrait-dialog {
      margin: 3px;
      img {
        width: 50px;
        opacity: 0.8;
      }
      img:hover {
        transform: scale(1.2, 1.2);
        opacity: 1;
      }
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
  .el-dialog__wrapper {
    z-index: 20001 !important;
  }
}
</style>