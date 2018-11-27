<template>
  <div id="Emitters">
      <!-- <CommonInput
         :showMenu="showMenu"
		     :showService='showService'
         :showRobotNum="showRobotNum"
         :showDate="showDate"
         :showVersion="showDeviceNum"
         :showDeviceNum="showVersion"
		     :educe="educe"
         /> -->
       		<ComTable :tableitems='tableitems' :showMenu="showMenu"
		     :showService='showService'
         :showRobotNum="showRobotNum"
         :showDate="showDate"
         :showVersion="showDeviceNum"
         :showDeviceNum="showVersion"
		     :educe="educe"/>
    </div>
</template>

<script>
// import CommonInput from "../../../../components/CommonInput";
import ComTable from "../../../../components/ComTable";
export default {
  components: {
    // CommonInput,
    ComTable
  },
  data() {
    return {
      showMenu: true,
      showImg:true,
      showService:true,
      showDate:true,
      showRobotNum:true,
      showVersion:true,
      showDeviceNum:true,
      educe:true,
      del: true,
      info: true,
     
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "序号",
              prop: "serialNum",
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
              label: "景区服务商",
              prop: "serviceproviders",
              width: "190",
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
              width: "190",
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
              label: "设备号",
              prop: "deviceNum",
              width: "190",
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
              width: "190",
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
              label: "升级时间",
              prop: "upgradeDate",
              width: "190",
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
              label: "升级版本",
              prop: "upgradeVersion",
              width: "190",
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
              label: "升级状态",
              prop: "upgradeAllot",
              width: "186",
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
  }
};
</script>

<style lang="less">
</style>
