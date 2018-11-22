<template>
    <div id="login">
      <!-- 登录背景图 -->
        <div class="login_logo">
           <img src="../../assets/images/login-logo.png" alt="" srcset="">  
        </div>
       <!--登录表单  -->
        <div class="from">
            <img src="../../assets/images/logo.png" alt="" srcset="">
            <span>智 慧 全 域 管 理 系 统</span>
          <!-- <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group> -->
        <div style="margin: 10px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm"  :rules="rules" ref="ruleForm"  class="demo-ruleForm">
          <el-form-item label="用户账号" prop="name">
            <!-- <el-input v-model="ruleForm.name" ></el-input> -->
             <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>           
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input class="input" type="code" v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <span class="picture">
            <img @click="getVcode" :src="vcode">
          </span>
           <!-- <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item> -->
        </el-form >
           <button  @click="submitForm('ruleForm')">登录</button>
        </div>

       

    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      vcode: "",
      labelPosition: "top",
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入您的账号", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 512个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [
          {
            required: true,
            message: "验证码错误",
            trigger: "blur"
          }
        ]
      }
    };
  },
  // created() {
  //   if (localStorage.hasOwnProperty("login")) {
  //     var login = JSON.parse(localStorage.getItem("login"));
  //     this.info.name = login.name;
  //     this.info.password = login.password;
  //   }
  //   this.getVcode();
  // },

  methods: {
    getVcode() {
      this.getCheckCode();
    },
    // 登录函数
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://192.168.0.128:8080/sys/login", {
              username: _this.ruleForm.username,
              password: _this.ruleForm.password,
              imageCode: _this.ruleForm.code
            })
            .then(response => {
              console.log(response, "打印的数据是.....");
              if (response.status === 200) {
                if (response.data.resultStatus.resultCode === '0000') {                  
                  this.$store.commit("SET_TOKEN", response.data.token);
                  this.$store.commit("GET_USER", response.data.username);
                  localStorage.setItem("token",response.data.value.access_token)
                  // var token = localStorage.getItem("token");
                  // alert(token)
                  this.$message({
                    message: "登陆成功",
                    type: "success"
                  });
                
                  this.$router.push({ path: "/index" });
                }
                else{
                  //  登录失败的错误提示
                      this.$message({
                        message:"账号或者密码错误",
                        type:"error"
                      })

                } 
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //验证码函数
    getCheckCode() {
      let param = {
        imageCode: ""
      };
      axios
        .get("http://192.168.0.128:8080/sys/captcha", {
          params: param,
          responseType: "arraybuffer"
        })
        .then(response => {
          return (
            "data:image/png;base64," +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .then(data => {
          console.log(data);
          return (this.vcode = data);
        });
    }
  },
  mounted() {
    this.getCheckCode();
  }
};
</script>

<style lang="less">
#login {
  width: 100%;
  position: relative;
  .login_logo {
    margin-left: 80px;
    img{
      background-repeat:no-repeat;
      overflow-y: hidden;
    }
  }
  .from {
    width: 20%;
    height: 50%;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 28%;
    left: 60%;
    box-shadow: #fafafb 1px 1px 1px 1px;
    z-index: 9999;
    img {
      margin-top: 50px;
      margin-left: 68px;
    }
    span {
      position: absolute;
      top: 11%;
      margin-left: 12px;
      font-size: 20px;
      font-weight: 600;
      color: #ff6600;
    }
    .el-form-item {
      margin-left: 20%;
    }
    .el-form-item__label {
      font-size: 16px;
      color: #fa6908;
      font-weight: 600;
      // margin-top: 18px;
    }
    .el-input__inner {
      width: 80%;
      border-radius: 20px;
      &:nth-of-type(3) {
        width: 70%;
      }
    }
    .input {
      width: 70%;
    }
    .picture {
      position: absolute;
      top: 61%;
      left: 44%;
      img {
        width: 80px;
        height: 40px;
        border-radius: 10px;
        color: #ff6600;
      }
    }
    button {
      width: 56%;
      margin-left: 20%;
      margin-top: 4%;
      font-size: 26px;
      background: #ff6600;
      border: none;
      outline: none;
      border-radius: 20px;
      color: #fff;
    }
  }
}
</style>


