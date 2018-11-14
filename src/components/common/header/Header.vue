<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                   <img src="../../../assets/images/logo.png" alt="" srcset=""> 
                   <span>智 慧 全 域</span> 
                   <div class="box">
                       <span class="active">管理员</span>
                       <span>退出</span>
                   </div>
                </div>
            </el-col>
        </el-row>
       
    </div>
</template>
<script>
   export default {
       name:'Header',
       data(){
           return{

           }
       }
   }
</script>

<style lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
  border-bottom: 1px #ffe6c9 solid;
  box-shadow: #ffe6c9 5px 2px 6px;
  position: relative;
  img{
    //   margin-top: 8px;
      margin-left: 20px;
  }
  span{
      display: inline-block;
      font-size: 26px;
      color: #ff6600;
      font-weight: 500;
      margin-top: 12px;
      margin-left: 20px;
  }
  .box{
      position: absolute;
      top:12px;
      right: 60px; 
      span{
          display: inline-block;
          font-size: 12px;
          color: #888;
          &.active{
              color: #ff6600;
          }
        
      }
  }
 
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

