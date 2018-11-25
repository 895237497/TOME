<template>
  <div id="Emitters">
      <!-- <CommonInput
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
         :showform="showform"
         :showInputIMEI="showInputIMEI"
         :showInputcodeMachine="showInputcodeMachine"
         :showInputphone="showInputphone"
         :showInputstateful="showInputstateful"
         :showInputservice="showInputservice"
         /> -->
       		<ComTable
                      :tableitems='tableitems'
                      :showImg="showImg"
                      :queryapi="queryapi"
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
                      :showform="showform"
                      :showInputIMEI="showInputIMEI"
                      :showInputcodeMachine="showInputcodeMachine"
                      :showInputphone="showInputphone"
                      :showInputstateful="showInputstateful"
                      :showInputservice="showInputservice"
                      ref="tumitable" />
    </div>
</template>

<script>
// import CommonInput from "../CommonInput";
import ComTable from "../ComTable";
import axios from 'axios';
export default {
  components: {
    // CommonInput,
    ComTable
  },
  data() {
    return {
      queryapi:"/device/terminal/addTerminal",
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
      showform:true,
      showInputIMEI:true,
      showInputcodeMachine:true,
      showInputphone:true,
      showInputstateful:true,
      showInputservice:true,
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
     alert("actived")
    let sfrom={}
    this.$refs['tumitable'].getTableData({});
    
  },
  activated() {
   
  },
};
</script>

<style lang="less">
</style>
