<template>
 		<el-row  style="margin: 34px 0 47px 89px;font:'microsoft yahei' 18px/32px ;" v-if="showTools.tools">
 			
 			
 			<div style="display: inline;margin-right: 48px;" v-if="showTools.no" >
 				<span style="margin-right: 18px;">发射源编号</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入发射源编号"
				  v-model="sform.no"
				  clearable>
				</el-input>
 			</div>

 			<div style="display: inline;margin-right: 48px;" v-if="showTools.codeMachine" >
 				<span style="margin-right: 18px;">机器码</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入机器码"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.username" >
 				<span style="margin-right: 18px;">用户名</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.allot" >
 				<span style="margin-right: 18px;">分配状态</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.imei" >
 				<span style="margin-right: 18px;">设备IMEI</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.phone" >
 				<span style="margin-right: 18px;">手机号</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.device" >
 				<span style="margin-right: 18px;">设备号</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.version" >
 				<span style="margin-right: 18px;">版本号</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入用户名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			  <div style="display: inline;margin-right: 48px;" v-if="showTools.name" >
 				<span style="margin-right: 18px;">名称</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入名称"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.loginname" >
 				<span style="margin-right: 18px;">登录名</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入登录名"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.role" >
 				<span style="margin-right: 18px;">角色</span>
 				<el-input style="display: inline-block;" size="small"
				  placeholder="请输入角色"
				  v-model="sform.codeMachine"
				  clearable>
				</el-input>
 			</div>
 			
 			<div style="display: inline;margin-right: 48px;" v-if="showTools.scenery">
 				<span style="margin-right: 18px;">景区</span>
 				<el-select  size="small" v-model="sform.sceneryIdId" placeholder="请选择">
				    <el-option st
				      v-for="item in scenerylistquery"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
			    </el-select>
 			</div>

			 <div style="display: inline;margin-right: 48px;" v-if="showTools.state">
 				<span style="margin-right: 18px;">状态</span>
 				<el-select  size="small" v-model="sform.sceneryIdId" placeholder="请选择">
				    <el-option st
				      v-for="item in scenerylistquery"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
			    </el-select>
 			</div>

 			<div style="display: inline;margin-right: 48px;" v-if="showTools.date">
 				<span style="margin-right: 18px;">日期</span>
 				<el-date-picker size="small"
			      v-model="sform.startTime"
			      type="date"
			      placeholder="开始日期">
			    </el-date-picker>
			    <el-date-picker size="small"
			      v-model="sform.endTime"
			      type="date"
			      placeholder="结束日期">
			    </el-date-picker>
 			</div>
 			

 			
 			<div style="display: inline;margin-left: 70px;">
 				 <el-button size="small" style="background: #FA841A;color: white; " @click="query">查询</el-button>
 				  <el-button size="small" @click="resetForm">重置</el-button>
 				  <el-button size="small" @click="query">刷新</el-button>
 			</div>
 			
       </el-row>
</template>

<script>

import axios from "axios";
import common from "../common/common.js";
export default {
  name: 'tools_vue',
  data () {
    return {
		showToolrs:false,
		showRFID:true,
		sform:{
			no:'',
			startTime:'',
			endTime:'',
			sceneryIdId:'',
			codeMachine:''
		},


    }
  },
	props:['scenerylistquery','showTools'],
  methods:{
	
	query(){
		var ssform = this.sform;
		var formdata ={};
		var scenerylist= this.scenerylistquery;
		

		//封装表单数据
		for(var att in ssform){
						
			if(ssform[att] != 'undefined' && ssform[att] !== ''){
					
				if(att.endsWith('Time')){
					if(ssform[att] != null && ssform[att] != undefined && ssform[att] !== ''){
						formdata[att]=ssform[att].getTime();
					}						
				}else{
					formdata[att]=ssform[att];
				}
			}
		}

		//将searchForm传递给父组件
		this.$emit('search',formdata)
		
	},
	resetForm(){

		var ssform = this.sform
		var resetfrom={};
		for(var att in ssform){
			resetfrom.att=''
		}
		this.queryTime='';
		this.sform = resetfrom;
	}
 },
  watch:{
 
  },
  activated() {
           

  },
  mounted() {

    
  }
}
</script>
<style type="text/css">

.el-date-editor .el-range__icon{
	color:#ff6600 ;
}
	.check-left{
		margin-right: 18px;
	}
	
	
	.el-input__icon {
      color: #ff6600;
    }
    
    .el-input__icon {
      color: #ff6600;
    }
  
    /*section .el-input__inner{
    	width: 150px;
    }*/
	.el-row .el-input{
		width: 150px;
	}
	.el-button--small, .el-button--small.is-round{
		margin-top: 15px;
	}
	/*.el-input__inner{
		width: 150px;
	}*/
</style>