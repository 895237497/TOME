<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
		     :showAllot='showAllot'
         :showState="showState"
         :showPhone="showPhone"
         :showService="showService"
         :showDevice="showDevice"
         :showRobotNum="showRobotNum"
         :del="del"
         :add="add"
         :assign="assign"
         :incDevice="incDevice"
         :expDev="expDev"
         />
       		<ComTable :tableitems='tableitems'  :showImg="showImg" />
    </div>
</template>

<script>
import CommonInput from "../CommonInput";
import ComTable from "../ComTable";
import axios from 'axios';
export default {
  components: {
    CommonInput,
    ComTable
  },
  data() {
    return {
      showDate:true,
      showMenu:true,
      showAllot:true,
      showState:true,
      showPhone:true,
      showService:true,
      showDevice:true,
      showRobotNum:true,
      showImg:true,
      del:true,
      add:true,
      assign:true,
      incDevice:true,
      expDev:true,
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "设备IMEI",
              prop: "device",
              width: "100",
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
              label: "机器码",
              prop: "robotNum",
              width: "120",
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
              label: "旅游团",
              prop: "touristGroup",
              width: "120",
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
              width: "160",
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
              label: "分配状态",
              prop: "allot",
              width: "120",
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
              label: "通讯号码",
              prop: "postalNum",
              width: "160",
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
              label: "软件版本",
              prop: "softwareVersion",
              width: "120",
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
              label: "电量",
              prop: "quantity",
              width: "160",
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
              label: "状态",
              prop: "Condition",
              width: "160",
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
  mounted() {
    let param={
      codeMachine:"51515651",
      imei:"551161",
      telephone:"13000000000"
    }
    axios.post("http://192.168.0.39:9091/terminal/addTerminal",{
      param:param
    })
    .then(response=>{
      console.log(response);
      
    })
  },
};
</script>

<style lang="less">
</style>
