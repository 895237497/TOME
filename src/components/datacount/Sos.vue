<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
         :showService="showService"
         :showDate="showDate"
         />
       		<ComTable :tableitems='tableitems'/>
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
      showService:true,
      showDate:true,
     
     
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
              label: "时间",
              prop: "date",
              width: "182",
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
              label: "位置",
              prop: "place",
              width: "184",
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
              label: "手机号",
              prop: "phone",
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
              label: "头像",
              prop: "via",
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
              label: "经纬度",
              prop: "trapeze",
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
              label: "所属景区",
              prop: "scenicspot",
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
              label: "所属团",
              prop: "theirdroup",
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
              label: "是否确认",
              prop: "Verifychar",
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
              label: "救援",
              prop: "rescue",
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
              label: "备注",
              prop: "remark",
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
      ]
    };
  }
};
</script>

<style lang="less">
</style>
