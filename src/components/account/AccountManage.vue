<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
         :showService="showService"
         :showNameID="showNameID"
         :showLoginName="showLoginName"
         :showRole="showRole"
         :Info="Info"
         :del="del"
         />
       		<ComTable :tableitems='tableitems' :showImg="showImg"/>
    </div>
</template>

<script>
import axios from 'axios'
import CommonInput from "../CommonInput";
import ComTable from "../ComTable";
export default {
  components: {
    CommonInput,
    ComTable
  },
  data() {
    return {
      showMenu: true,
      showImg:true,
      showService:true,
      showNameID:true,
      showLoginName:true,
      showRole:true,
      Info:true,
      del:true,
     
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "用户名",
              prop: "username",
              width: "240",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        },
         {
          hasSubs: false,
          subs: [
            {
              label: "登录名",
              prop: "loginName",
              width: "240",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        },
        {
          hasSubs: false,
          subs: [
            {
              label: "景区数",
              prop: "scenicNum",
              width: "240",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        },
         {
          hasSubs: false,
          subs: [
            {
              label: "景区",
              prop: "service",
              width: "240",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        },
         {
          hasSubs: false,
          subs: [
            {
              label: "角色",
              prop: "role",
              width: "240",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        }, 
      ]
    };
  },
  // mounted() {
  //   var token = localStorage.getItem("token");
  //   console.log(token,"打印的token");
    
  //   var _this=this
  //   var access_token = _this.token;
  //   axios.post("http://192.168.0.128:8080/user/selectAllRole",{
  //     paeSize:1,
  //     pageNum:10,
  //     token:_this.access_token
  //   })
  //   .then(response=>{
  //     console.log(response,"打印的数据是------------");
      
      
  //   })
  // },
};
</script>

<style lang="less">
</style>
