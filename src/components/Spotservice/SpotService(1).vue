<template>
    <div id="Emitters">
       		<common-table
		       			 :showMenu="showMenu"
		       			 :showRFID='showRFID'
		       			 :tableitems='tableitems'
       		></common-table>
    </div>
</template>
<script>
	
import CommonTable from '../CommonTable'
export default {
	components: {
            CommonTable
        },
  data() {
    return {
    	showMenu:true,
    	showRFID:false,
    	tableitems:[
    	 {

                        hasSubs: false,
                        subs: [{
                            label: '编号',
                            prop: 'id',
                            width: '123',
                            type: 'number',
                            editable: true,
                            searchable: true,
                            addable: true,
                            unsortable: true,
                            align: 'center'
                        }]
                    }, 
                    {
                        hasSubs: false, subs: [
                            {
                                label: '用户名称',
                                prop: 'username',
                                width: '180',
                                type: 'str',
                                editable: false,
                                searchable: true,
                                addable: true,
                                unsortable: true,
                                align: 'center',
                            },
                        ]
                    },
                    {

                        hasSubs: false,
                        subs: [{
                            label: '年龄',
                            prop: 'age',
                            width: '180',
                            type: 'number',
                            editable: true,
                            searchable: true,
                            addable: true,
                            unsortable: true,
                            align: 'center'
                        }]
                    }
                    ,
                    {

                        hasSubs: false,
                        subs: [{
                            label: '年龄1',
                            prop: 'age',
                            width: '180',
                            type: 'number',
                            editable: true,
                            searchable: true,
                            addable: true,
                            unsortable: true,
                            align: 'center'
                        }]
                    }
    	]
    	
	}
   }
};
</script>

<style lang="less">
#Emitters {
 /* width: 88%;
  height: 100%;
  overflow: hidden;*/
 margin: 35px 35px 0 35px;
}
</style>

