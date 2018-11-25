<template>
  <div id="Emitters">
      <!-- <CommonInput
         :showMenu="showMenu"
		     :showRFID='showRFID'
         :showService="showService"
         :showRobotNum="showRobotNum"
         :showDate="showDate"
		     :educe="educe"
         /> -->
       		<ComTable :tableitems='tableitems' :showMenu="showMenu"
		     :showRFID='showRFID'
         :showService="showService"
         :showRobotNum="showRobotNum"
         :showDate="showDate"
		     :educe="educe"/>
    </div>
</template>

<script>
// import CommonInput from "../CommonInput";
import ComTable from "../ComTable";
export default {
  components: {
    // CommonInput,
    ComTable
  },
  data() {
    return {
      showMenu: true,
      showImg:true,
      showRFID:true,
      showRobotNum:true,
      showService:true,
      showDate:true,
      educe:true,
      del: true,
      info: true,
     
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "发射源编号",
              prop: "RFIDNum",
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
              label: "地址",
              prop: "address",
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
              label: "机器码",
              prop: "robotNum",
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
              label: "景区服务商",
              prop: "serviceproviders",
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
              label: "旅游景点",
              prop: "tourist",
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
              label: "访问次数",
              prop: "visitTimes",
              width: "238",
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
