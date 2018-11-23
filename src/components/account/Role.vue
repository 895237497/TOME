<template>
  <div id="Emitters">
      <CommonInput
         :showMenu="showMenu"
		     :showName='showName'
		     :info="info"
         :del="del"
         :showform="showform"
         :showInputrolename="showInputrolename"
         :showInputIDcard="showInputIDcard"
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
      showName: true,
      info: true,
      del: true,
      showMenu: true,
      showform:true,
      showInputrolename:true,
      showInputIDcard:true,
     
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "ID",
              prop: "id",
              width: "200",
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
              label: "角色名称",
              prop: "role",
              width: "635",
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
              width: "640",
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
