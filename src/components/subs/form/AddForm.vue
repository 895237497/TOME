<template>
    <div class="complexadd">
       <el-dialog :title="addtitle" :visible.sync="addVisible" @open="onopen" @close="onclose"
                   :close-on-click-modal="false" width="20%">

            <el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm" style="width:98%;">
                <el-input v-model="addForm.id" style="display:none"></el-input>
                <div v-for="items in additems" style="">
                    <el-form-item v-for="item in items.subs" v-if="item.addable" :label="item.label" :prop="item.prop">
                        <p style=""
                                v-for="item in items.subs"
                                :is="item.type"
                                :id="item.prop"
                                :ref="item.prop"
                                :selectlist="item.selectlist"
                                :citylist="''"
                                :distinctslist="''"
                                :hasDistincts="true"
                                v-on:fromedititem="listenadditem"
                        ></p>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
				<el-button @click="resetadd" size="small">清空</el-button>
				<el-button type="primary" @click="addSubmit" :loading="addloading" size="small">保存</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
 	 import common from '../../common/common.js'
    import AddNumber from '../add-subs/AddNumber'
    import AddDate from '../add-subs/AddDate'
    import AddText from '../add-subs/AddText'
    import AddTextarea from '../add-subs/AddTextarea'
    import AddSelect from '../add-subs/AddSelect'
    import AddUpload from '../add-subs/AddUpload'

    export default {
         components: {
            number: AddNumber,
            str: AddText,
            date: AddDate,
            selection: AddSelect,
            upload: AddUpload,
            multitext: AddTextarea
        },
        data() {
            return {
                addForm: {},
                tempaddForm: {},
            }
        },
        props: ['addVisible', 'additems', 'addFormRules', 'rowdata', 'addtitle', 'dialogsize', 'addloading'],
        methods: {
            listenadditem: function (formitem) {
                //addForm中存在则覆盖，不存在则加入该属性
                // this.$extend(this.addForm,formitem)
                // console.log('------------------')
                Object.assign(this.addForm, formitem)
            },
            onclose() {
                this.addloading = false
                //清空addForm
                this.cleanSubs()
                //重置表单数据
                this.addForm = common.clone(this.tempaddForm)
                //关闭对话框
                this.$emit('adddialog', false)
                this.$refs['addForm'].resetFields()
            },
            onopen() {
                //重置表单验证
                //this.$refs['addForm'].resetFields()
            },
            resetadd() {
                //还原表单
                this.cleanSubs()
                this.addForm = common.clone(this.tempaddForm)
                //重置表单验证
                this.$refs['addForm'].resetFields()
            },
            addSubmit() {
                //将addForm传递给父组件,在父组件调用ajax保存数据
                this.$emit('add', this.addForm)
            },
            cleanSubs() {
                for (var i = 0; i < this.additems.length; i++) {
                    for (var x in this.additems[i].subs) {
                        var t = this.additems[i].subs[x].prop;
                        if (typeof(this.$refs[t]) != 'undefined') {
                            this.$refs[t][0].setValue()
                        }
                    }
                }
            }

        },
        watch:{
        	
        }
    }
</script>
<style>
	.el-form-item__label{
		
	}
	
	
</style>