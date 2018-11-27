<template>
   <section>
     <el-row>
			<div style="margin: 24px 0 0 13px;font:14px;color: #919191;border-left: 4px solid #F98319;padding-left:8px ;">
				{{tilte}}<strong style="color: #F98319;padding: 0 5px;font: 14px;">-</strong>
			</div>
		</el-row>
		<!--工具条-->
     <el-row style="margin:34px 0 0 89px;font: 14px;" v-if="showMenu">
	           	    <div class="input" v-if="showRFID">
                       <span class="label">发射源编号</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									
	           	    
								 <div class="input" v-if="showDevice">
                       <span class="label">设备IMEI</span>
											 <div class="con">
												 <input type="text">
											 </div>
								 </div>

									<div class="input" v-if="showPhone">
                       <span class="label">手机号</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showService">
                       <span class="label">景区</span>
											 <div class="con">
												 <el-select v-model="value" placeholder="请选择">
															<el-option
																v-for="item in options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
															</el-option>
														</el-select>
											 </div>
									</div>

									<div class="input" v-if="showAllot">
                       <span class="label">分配状态</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showDeviceNum">
                       <span class="label">设备号</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showVersion">
                       <span class="label">版本号</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showNameID">
                       <span class="label">用户名</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showLoginName">
                       <span class="label">登录名</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showRole">
                       <span class="label">角色</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showName">
                       <span class="label">名称</span>
											 <div class="con">
												 <input type="text">
											 </div>
									</div>

									<div class="input" v-if="showState">
                       <span class="label">状态</span>
											 <div class="con">
												 <el-select v-model="value" placeholder="状态">
															<el-option
																v-for="item in options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
															</el-option>
														</el-select>
											 </div>
									</div>
	           	   
										<div class="input" v-if="showDate">
                       <span class="label">日期</span>
											 <div class="con">
												 <div class="block1" style="display: inline;">
														<el-date-picker
															v-model="value1"
															type="date">
														</el-date-picker>
													</div>
													<div class="block1" style="display: inline;">
														<el-date-picker
															v-model="value2"
															align="right"
															type="date"
															:picker-options="pickerOptions1">
														</el-date-picker>
												</div>
											 </div>
										 </div>

												<div class="input" v-if="showRobotNum">
                          <span class="label">机器码</span>
													<div class="con">
														<input type="text">
													</div>
								  	    </div>	
        </el-row>
        <el-row>
        	<el-col :span="24" align="rignth" >
        		<div style="float:right">
        				<!-- <img src="../assets/images/juse.png" alt="" srcset=""> -->
								<el-button round size="small" @click="alertMessege">查询</el-button>
								<el-button round size="small">重置</el-button>
        		</div>
        	</el-col>
        </el-row>
        <el-row>
        	<div style="width: 1512px;margin-left:34px;border-bottom: 1px solid #FED3B0;padding-bottom: 10px;padding-left: 53px;">
        		共有位置版发射源:2个
        	</div>
        </el-row>
        
         <el-row style="margin-left: 89px;">
        		<el-button round @click="dialogFormVisible = true" size="small" v-if="Info">新增</el-button>
        		<el-button round size="small" v-if="del">删除</el-button>
        		<el-button round size="small" v-if="inc">导入</el-button>
        		<el-button round size="small" v-if="educe">导出</el-button>
        		<el-button round @click="dialogFormVisible = true" size="small" v-if="add">添加设备</el-button>
        		<el-button round @click="dialogFormVisible = true" size="small" v-if="assign">分配设备</el-button>
        		<el-button round size="small" v-if="incDevice">导入设备</el-button>
        		<el-button round size="small" v-if="expDev">导出设备</el-button>
						<el-button round size="small" v-if="SimJetSoft">一键关机</el-button>
         </el-row>
      
			     <!-- 模态框 -->
        <el-dialog title="新增" :visible.sync="dialogFormVisible">
						<el-form :model="form" v-if="showform">
               <div v-if="showInputIMEI">
									<el-form-item label="设备IMEI*" :label-width="formLabelWidth" >
										<el-input v-model="form.IMEI" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputcodeMachine">
									<el-form-item label="机器码*" :label-width="formLabelWidth" >
										<el-input v-model="form.codeMachine" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputphone">
									<el-form-item label="手机号码*" :label-width="formLabelWidth" >
										<el-input v-model="form.phone" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputstateful">
									<el-form-item label="状态*" :label-width="formLabelWidth" >
										<el-input v-model="form.stateful" autocomplete="off"></el-input>
									</el-form-item>
               </div>

               <div v-if="showInputName">
									<el-form-item label="景区服务商*" :label-width="formLabelWidth" >
										<el-input v-model="form.name" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputAddress">
									<el-form-item label="通讯地址*" :label-width="formLabelWidth" >
										<el-input v-model="form.address" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputPerson">
									<el-form-item label="负责人*" :label-width="formLabelWidth" >
										<el-input v-model="form.person" autocomplete="off"></el-input>
									</el-form-item>
               </div>


                <div v-if="showInputusername">
									<el-form-item label="用户名*" :label-width="formLabelWidth" >
										<el-input v-model="form.username" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputloginname">
									<el-form-item label="登录名*" :label-width="formLabelWidth" >
										<el-input v-model="form.loginname" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputloginpwd">
									<el-form-item label="登录密码*" :label-width="formLabelWidth" >
										<el-input v-model="form.loginpwd" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputrole">
									<el-form-item label="角色*" :label-width="formLabelWidth" >
										<el-input v-model="form.role" autocomplete="off"></el-input>
									</el-form-item>
               </div>

               <div v-if="showInputPhone">
									<el-form-item label="负责人电话*" :label-width="formLabelWidth" >
										<el-input v-model="form.phone" autocomplete="off"></el-input>
									</el-form-item>
               </div>
               <div v-if="showInputrolename">
									<el-form-item label="角色名*" :label-width="formLabelWidth" >
										<el-input v-model="form.rolename" autocomplete="off"></el-input>
									</el-form-item>
               </div>
							 <div v-if="showInputjwd">
								<el-form-item label="经纬度*" :label-width="formLabelWidth" >
									<el-input v-model="form.jwd" autocomplete="off"></el-input>
								</el-form-item>
							 </div> 
               <div v-if="showInputSpot"> 
								<el-form-item label="景区*" :label-width="formLabelWidth" >
									<div><span>青城山</span>&nbsp;	&nbsp; <span>青城山</span>	&nbsp;	&nbsp;<span>青城山</span></div>
									<el-input v-model="form.jwd" autocomplete="off" placeholder="请选择景区...."></el-input>
								</el-form-item>
               </div>
               <div v-if="showInputservice"> 
								<el-form-item label="景区*" :label-width="formLabelWidth" >
									<el-select v-model="value" placeholder="太行山">
												<el-option
													v-for="item in options"
													:key="item.value"
													:label="item.label"
													:value="item.value">
												</el-option>
											</el-select>
								</el-form-item>
               </div>
               <div v-if="showInputIDcard"> 
								<el-form-item label="身份*" :label-width="formLabelWidth" >
									<el-select v-model="value" placeholder="请选择.....">
												<el-option
													v-for="item in options"
													:key="item.value"
													:label="item.label"
													:value="item.value">
												</el-option>
											</el-select>
								</el-form-item>
               </div>
               <div v-if="showInputCard">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span>用户名称</span>
									</div>
									<div v-for="o in 4" :key="o" class="text item">
											<el-checkbox v-model="checked">备选项</el-checkbox>
									</div>
								</el-card>
               </div>	
						</el-form>
							<div slot="footer" class="dialog-footer">
								<!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
								<el-button type="warning" @click="dialogFormVisible = false">添 加</el-button>
							</div>
        </el-dialog>


        <el-row>
        	&nbsp;
        </el-row>


         <el-row style="margin-left: 89px;">
         	 <el-table :data="tableData" border highlight-current-row style="width:100%;" 
                  v-loading="loading"  id="tablearea">
 			<el-table-column
		      type="selection"
		      width="55"
          fixed="left">
		    </el-table-column>
            <div v-for="items in tableitems">
                <div v-if="items.hasSubs">
                    <el-table-column
                            :label="items.label"
                            header-align="center">
                        <el-table-column
                                v-for="tableitem in items.subs"
                                v-if="!tableitem.hidden"
                                :prop="tableitem.prop"
                                :label="tableitem.label"
                                header-align="center"
                                :align="tableitem.align"
                                :sortable="!tableitem.unsortable"
                                :width="tableitem.width"
                                :formatter="tableitem.format"
                        >
                        </el-table-column>
                    </el-table-column>
                </div>
                <div v-if="!items.hasSubs">
                    <el-table-column
                            v-for="tableitem in items.subs"
                            v-if="!tableitem.hidden"
                            :prop="tableitem.prop"
                            :label="tableitem.label"
                            header-align="center"
                            :align="tableitem.align"
                            :sortable="!tableitem.unsortable"
                            :width="tableitem.width"
                            :formatter="tableitem.format"
                    >
                   
                    </el-table-column>
                </div>
            </div>

            <el-table-column label="操作"  v-if="showImg" align="center">
                	<template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
            </el-table-column>
           </el-table>
             <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40">
              </el-pagination>
            </div>
         </el-row>
          

        <el-row>
        	&nbsp;
          &nbsp;
        </el-row>
    </section>
</template>
<script>
import axios from "axios";
import { path } from "../api/api.js";

export default {
  data() {
    return {
      checked: "",
      value: "",

      loading: false,
      hidePagination: false,
      // showRFID: false,

      // 模态框
      dialogFormVisible: false,
      form: {
        name: "",
        address: "",
        person: "",
        phone: "",
        jwd: "",
        username: "",
        loginname: "",
        loginpwd: "",
        role: "",
        rolename: "",
        IMEI: "",
        codeMachine: "",
        phone: "",
        stateful: ""
      },
      formLabelWidth: "100px",

      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value3: "",
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",

      tilte: "RFID管理",
      currentPage4: 8,
      tableData: [
        {
          id: 123, //
          username: "张三", //用户名
          RFIDNum: 110, //发射源编号
          ReportCount: 15, //播报次数
          tourist: "", //旅游景点
          coodrinte: "", //坐标
          visitTimes: "", //访问次数
          devicesTotal: 100, //设备总数
          offlineTotal: 20, //离线总数
          device: "", //设备IMEI
          deviceNum: "", //设备号
          service: "", //景区
          postalNum: "110", //通讯号码
          quantity: "57%", //电量
          serialNum: 1, //序号
          Verifychar: "", //是否确认
          upgradeVersion: "", //升级版本
          Version: "", //版本
          place: "", //位置
          via: "", //头像
          scenicspot: "", //所属景区
          verifychar: true, //是否确认
          address: "青城山", //地址
          serviceproviders: "", //景区服务商
          addtime: "", //添加时间
          date: "", //时间
          robotNum: "2165415", //机器码
          broradius: "", //播报半径
          onlineTotal: 62, //在线总数
          princiPalName: "刘星", //负责人姓名
          principalphone: "13333333333", //负责人电话
          postalAddress: "", //通讯地址
          touristGroup: "", //旅游团
          allot: "", //分配状态
          softwareVersion: "", //软件版本
          Condition: "", //状态
          upgradeDate: "", //升级时间
          upgradeAllot: "", //升级状态
          upgradeVersion: "", //升级版本
          phone: "13500000000", //手机号
          trapeze: "", //经纬度
          theirdroup: "", //所属团
          rescue: "", //救援
          loginName: "", //登录名
          scenicNum: 50, //景区数
          role: "", //角色
          remark: "", //备注
          accessdate: "" //访问时间
        }
      ]
    };
  },
  props: [
    "showMenu",
    "tableitems",
    "showImg",
    "showRFID",
    "showRobotNum",
    "showDevice",
    "showPhone",
    "showService",
    "showAllot",
    "showDeviceNum",
    "showVersion",
    "showNameID",
    "showLoginName",
    "showRole",
    "showName",
    "showState",
    "showDate",
    "Info",
    "del",
    "inc",
    "educe",
    "add",
    "assign",
    "incDevice",
    "expDev",
    "SimJetSoft",
    "showform",
    "showInputName",
    "showInputAddress",
    "showInputPerson",
    "showInputPhone",
    "showInputjwd",
    "showInputSpot",
    "showInputservice",
    "showInputCard",
    "showInputusername",
    "showInputIDcard",
    "showInputloginname",
    "showInputloginpwd",
    "showInputrole",
    "showInputrolename",
    "showInputIMEI",
    "showInputcodeMachine",
    "showInputphone",
    "showInputstateful"
  ],
  methods: {
    // 操作按钮
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    alertMessege: function() {
      alert("111");
      this.$emit("showSetting", "ljb");
    },

    getTableData(sform) {
      var vm = this;
      // this.loading = true;
      var api = this.queryapi;
      /*setTimeout(() => {
           vm.alertInfo('登录过期,请重新登录!')
       }, 100)
*/
      this.$axios
        .post(path + api, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
        .then(function(response) {
          let ret = response;
          if (ret.status == "200") {
            vm.tableData = ret.data.value.list;
            console.log(ret.data.value);
            vm.total = ret.data.value.total;
            vm.loading = false;
          }
        })
        .catch(function(error) {
          setTimeout(() => {
            alert("请求失败");
          }, 150);
        });
    }
  }
};
</script>

<style lang="less">
section {
  position: relative;
  .input {
    display: inline-block;
    margin-right: 50px;
    margin-top: 20px;
  }
  .label {
    display: inline;
    font-size: 16px;
    text-align: right;
  }
  .con {
    display: inline;
    input {
      width: 186px;
      height: 30px;
      background: #f0f1f5;
      border-radius: 5px;
      margin-left: -26px;
    }
    .block {
      display: inline;
    }
    .el-input__icon {
      margin-top: -4px;
      margin-left: -20px;
    }
    .el-input__icon {
      color: #ff6600;
    }
    .el-select__caret {
      margin-top: 5px;
      // margin-right: 10px;
    }
  }
  // 模态框
  .el-dialog__header {
    border-bottom: #ff6600 1px solid;
  }
  .el-dialog__title {
    color: #ff6600;
  }
  .el-input__inner {
    width: 285px;
  }
  .el-dialog__footer {
    width: 95%;
    text-align: center;
  }
  .el-button--warning {
    width: 100px;
    span {
      font-size: 16px;
    }
  }
  .el-dialog {
    width: 520px;
  }
  .el-card.box-card.is-always-shadow {
    width: 285px;
    margin-left: 100px;
    text-align: center;
    border: 1px solid #ff6600;
    .el-card__header {
      background: #ffefdd;
      span {
        color: #fb8c32;
      }
    }
  }
  .el-dialog__body {
    .el-checkbox__label {
      padding-left: 40px;
    }
  }
  .el-pagination {
    position: absolute;
    right: 80px;
    .el-input__inner {
      width: 100px;
    }
  }
}
</style>


