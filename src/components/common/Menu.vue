<template>
    <div id="content">
        <!-- 左边菜单 -->
        <div class="left">
           <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false"><img src="../../assets/images/dianji.png"/></el-radio-button>
                <el-radio-button :label="true"><img src="../../assets/images/dianji.png"/></el-radio-button>
            </el-radio-group>
            <ul v-if="list in lists">
              <li>{{list.name}}</li>
            </ul>
            <!-- <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <router-link to="/index">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="icon iconfont icon-shouye"></i>
                    <span slot="title">首页</span>
                    </template>
                </el-submenu>
                </router-link>
                <router-link to="/SpotService">
                <el-submenu index="2">
                    <template slot="title">
                    <i class="icon iconfont icon-jingqu"></i>
                    <span slot="title">景区服务商</span>
                    </template>
                </el-submenu>
                </router-link>
                <router-link to="/Management">
                <el-submenu index="3">
                    <template slot="title">
                    <i class="icon iconfont icon-shouji"></i>
                    <span slot="title">设备管理</span>
                     </template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">设备信息</el-menu-item>
                    </el-menu-item-group> 
                </el-submenu>
                </router-link>
                <router-link to="/page">
                <el-submenu index="4">
                    <template slot="title">
                    <i class="icon iconfont icon-wifi"></i>
                    <span slot="title">发射源管理</span>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item index="4-1"><router-link to="/Emitters">发射源统计</router-link></el-menu-item>
                    <el-menu-item index="4-2">机器码统计</el-menu-item>
                    <el-menu-item index="4-3">发射源访问日志</el-menu-item>
                    <el-menu-item index="4-4">发射源</el-menu-item>
                    <el-menu-item index="4-5">位置版</el-menu-item>
                    </el-menu-item-group>                   
                </el-submenu>
                </router-link>
                <router-link to="/datacount">
                <el-submenu index="5">
                    <template slot="title">
                    <i class="icon iconfont icon-shujutongjiweixuanzhong"></i>
                    <span slot="title">数据统计</span>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item index="5-1">设备租赁次数统计表</el-menu-item>
                    <el-menu-item index="5-2">SOS统计</el-menu-item>
                    <el-menu-item index="5-3">人流统计</el-menu-item>
                    <el-menu-item index="5-4">电子围栏统计</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </router-link>
                <router-link to="/promotion">
                <el-submenu index="6">
                    <template slot="title">
                    <i class="icon iconfont icon-update"></i>
                    <span slot="title">设备升级</span>
                    </template>
                    <el-menu-item-group>
                    <el-menu-item index="6-1">升级情况</el-menu-item>
                    <el-menu-item index="6-2">升级日志</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </router-link>
                <router-link to="/AccountManage">
                <el-submenu index="7">
                    <template slot="title">
                    <i class="icon iconfont icon-zhanghao00"></i>
                    <span slot="title">账号分配</span>
                    </template>
                   <el-menu-item-group>
                    <el-menu-item index="7-1">账号管理</el-menu-item>
                    <el-menu-item index="7-2">角色分配</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </router-link>
            </el-menu> -->
        </div>
        <!-- 右边内容 -->
        <!-- <div class="right">
               <router-view></router-view>
        </div> -->
    </div>
</template>
<script>
// import "../../assets/font/iconfont.css";
import axios from "axios";

export default {
  
  name: "Menu",
  data() {
    return {
      isCollapse: true,
      lists:''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){
    var token = localStorage.getItem("token");
    alert(token)
     var _this=this
     //var access_token=this.access_token
     var access_token="58a38873-7471-4104-baca-b07884447136 "
     axios.get("http://192.168.0.128:8080/manager/me",{
        headers:{
          'Authorization': 'Bearer' + token,
        }
       
     })
     .then(response=>{
       console.log(response);
       if(response.data.resultStatus.resultCode === '0000'){
        return  this.lists=response.data.value
       }
       
     })
  }
};
</script>
<style lang="less">
#content {
  display: flex;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border: none;
  }
  .left {
    width: 12%;
    margin-top: 3%;

    .el-tree-node__label {
      font-size: 20px;
      color: #ff6600;
    }
    .el-submenu__title {
      font-size: 16px;
      color: #7e7876;
    }
    .icon {
      color: #ff6600;
    }
    .el-radio-button__inner {
      border: none;
      margin-left: 10px;
    }

    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background: #ccc;
      box-shadow: -1px 0 0 0 #ccc;
    }
    .el-submenu .el-menu-item {
      color: #ff6600;
    }
  }
  .right {
    width: 100%;
    flex: 1;
    // height: 100%;
    margin-top: 30px;
    margin-left: 20px;
  }
}
</style>
