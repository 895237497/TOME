<template>
    <div id="right">
         <div class="rightcontent">
               <CommonInput 
                :showMenu="showMenu" 
                :showRFID="showRFID"
                :showRobotNum="showRobotNum"
                :showDevice="showDevice"
                :showPhone="showPhone"
                :showService="showService"
                :showAllot="showAllot"
                :showDeviceNum="showDeviceNum"
                :showVersion="showVersion"
                :showNameID="showNameID"
                :showLoginName="showLoginName"
                :showRole="showRole"
                :showName="showName"
                :showState="showState"
                :showDate="showDate"
                :Info="Info"
                :del="del"
                :inc="inc"
                :educe="educe"
                :add="add"
                :assign="assign"
                :incDevice="incDevice"
                :delDevice="delDevice"
                :shutdown="shutdown"
               />
              <ComTable/>
        </div>
    </div>
</template>

<script>
import CommonInput from '@/components/CommonInput'
import ComTable from '@/components/ComTable'


export default {
components:{
    CommonInput,
    ComTable
},

  name: "Login",
  data() {
    return {
        showMenu:true,
        showRFID:true,
        showRobotNum:true,
        showDevice:true,
        showPhone:true,
        showService:true,
        showAllot:true,
        showDeviceNum:true,
        showVersion:true,
        showNameID:true,
        showLoginName:true,
        showRole:true,
        showName:true,
        showState:true,
        showDate:true,
        Info:true,
        del:true,
        inc:true,
        educe:true,
        add:true,
        assign:true,
        incDevice:true,
        delDevice:true,
        shutdown:true,
    };
  },

  methods: {}
};
</script>

<style lang="less">
#right{
    .rightcontent{
        margin: 20px;
    }
}
</style>


