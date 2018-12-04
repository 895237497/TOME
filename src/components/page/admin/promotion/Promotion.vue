<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
		     :showService='showService'
		     :educe="educe"
         />
       		<ComTable :tableitems='tableitems' :showImg="showImg"/>
    </div>
</template>

<script>
import CommonInput from "../../../../components/CommonInput";
import ComTable from "../../../../components/ComTable";
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
      showDate:true,
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
              width: "360",
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
              label: "版本",
              prop: "Version",
              width: "360",
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
