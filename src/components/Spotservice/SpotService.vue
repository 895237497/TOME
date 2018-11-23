<template>
    <div id="Emitters">
      <CommonInput
          :showMenu="showMenu"
          :showService='showService'
          :info="info" 
          :del="del"
          :inc="inc"
          :educe="educe"
          :SimJetSoft="SimJetSoft" 
          :showform="showform"
          :showInputName="showInputName"
          :showInputAddress="showInputAddress"
          :showInputPerson="showInputPerson"
          :showInputPhone="showInputPhone"
          :showInputjwd="showInputjwd"
         />
         
         <!-- 表格组件 -->
       		<ComTable :tableitems='tableitems' :showImg='showImg'/>
          <!-- 弹出框
           <modal-box :visible.sync="CreateVisible" :options="CreateOptions" @Confirm="ConfirmCreateHandler()">
    
          </modal-box> -->
                    
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
      showService: true,
      info: true,
      del: true,
      inc: true,
      educe: true,
      SimJetSoft: true,
      showImg: true,
      //模态框
      showform: true,
      showInputName: true,
      showInputAddress:true,
      showInputPerson:true,
      showInputPhone:true,
      showInputjwd:true,
      // 表格组件
      tableitems: [
        {
          hasSubs: false,
          subs: [
            {
              label: "景区服务商",
              prop: "serviceproviders",
              width: "123",
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
              label: "设备总数",
              prop: "devicesTotal",
              width: "180",
              type: "str",
              editable: false,
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
              label: "在线总数",
              prop: "onlineTotal",
              width: "180",
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
              label: "离线总数",
              prop: "offlineTotal",
              width: "180",
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
              label: "负责人姓名",
              prop: "princiPalName",
              width: "180",
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
              label: "负责人电话",
              prop: "principalphone",
              width: "180",
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
              label: "通讯地址",
              prop: "postalAddress",
              width: "180",
              type: "number",
              editable: true,
              searchable: true,
              addable: true,
              unsortable: true,
              align: "center"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less">
#Emitters {
  /* width: 88%;
  height: 100%;
  overflow: hidden;*/
  margin: 35px 35px 0 35px;
}
// 模态框

</style>

