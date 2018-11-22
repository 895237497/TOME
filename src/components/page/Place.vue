<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
		     :showRFID='showRFID'
         :showService="showService"
         :showDate="showDate"
         :info="info"
         :del="del"
         :inc="inc"
		     :educe="educe"

         />
       		<ComTable :tableitems='tableitems' :showImg="showImg"/>
    </div>
</template>

<script>
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
      showRFID:true,
      showService:true,
      showDate:true,
      info:true,
      inc:true,
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
              label: "播报半径",
              prop: "broradius",
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
              label: "景区服务商",
              prop: "serviceproviders",
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
              label: "旅游景点",
              prop: "tourist",
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
              label: "坐标",
              prop: "coodrinte",
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
              label: "添加时间",
              prop: "addtime",
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
  }
};
</script>

<style lang="less">
</style>
