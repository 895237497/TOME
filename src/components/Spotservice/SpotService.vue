<template>
    <div id="Emitters">
        <!-- 上面部分 -->
             <div class="top">
                 <div>
                   <span class="title">景区服务商</span>
                 </div>
                  
                  <div class="input">
                     <span>景区 <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                     </span>
                 </div>
               
                
                <div class="input">
                   <el-button type="warning" plain>查询</el-button>
                </div>
                <div class="total">
                      <span>共有景区：</span>
                </div>
             </div>
        <!-- 下面部分 -->
        <div class="bottom">
            <div>
                <el-button round  @click="dialogFormVisible = true">新增</el-button>
                   <el-dialog title="新增" :visible.sync="dialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="景区服务商" :label-width="formLabelWidth">
                                <el-input v-model="form.mark" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="通讯地址" :label-width="formLabelWidth">
                                <el-input v-model="form.address" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="负责人" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="负责人电话" :label-width="formLabelWidth">
                                <el-input v-model="form.phone" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="经纬度" :label-width="formLabelWidth">
                                <el-input v-model="form.coords" autocomplete="off"></el-input><span class="gain">获取</span>
                                </el-form-item>
                                
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button type="primary" @click="dialogFormVisible = false"> 添加</el-button>
                            </div>
                    </el-dialog>
                <el-button round>删除</el-button>
                <el-button round>导入</el-button>
                <el-button round>导出</el-button>
                <el-button round>一键关机</el-button>
            </div> 
            <div class="tab">
                 <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="景区服务商"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.spot }}</template>
                    </el-table-column>
                     <el-table-column
                    label="设备总数"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.count }}</template>
                    </el-table-column>
                     <el-table-column
                    label="在线总数"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.usertotal }}</template>
                    </el-table-column>
                     <el-table-column
                    label="离线总数"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.nousertotal }}</template>
                    </el-table-column>
                     <el-table-column
                    label="负责人姓名"
                    width="180">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                    </el-table-column>
                      <el-table-column
                    label="负责人电话"
                    width="180">
                    <template slot-scope="scope">{{ scope.row.phone }}</template>
                    </el-table-column>
                    <!-- <el-table-column
                    prop="date"
                    label="添加时间"
                    width="160">
                    </el-table-column> -->
                      <el-table-column
                        prop="address"
                        label="通讯地址"
                        width="180">
                      </el-table-column>
                      <el-table-column label="操作">
                         <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                             <el-button
                            size="mini"
                            type="danger"
                            @click="handleClose(scope.$index, scope.row)">关机</el-button>
                         </template>
                       </el-table-column>
                </el-table>
                
            </div>   
        </div>
        <!-- 分页 -->
         <div class="pag">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
                </el-pagination>            
         </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      // select选择
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
      value: "",

      tableData3: [
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        },
        {
          spot: "",
          name: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          phohe: "",
          usertotal: "",
          nousertotal: ""
        }
      ],
      multipleSelection: [],
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          address: '',
          mark: '',
          phone: '',
          delivery: false,
          coords: ''
        
        },
        formLabelWidth: '86px'
      
    };
    
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 操作按钮
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleClose(index, row) {
      console.log(index, row);
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    
    }
  
};
</script>

<style lang="less">
#Emitters {
  width: 88%;
  height: 100%;
  // margin-left: 13%;
  // margin-top: -496px;

  .top {
    border-bottom: 1px solid #db6f27;
  }
  .title {
    font-size: 16px;
    color: #ccc;
    border-left: 4px solid #ff6600;
    margin-left: 10px;
  }

  .input {
    display: inline-block;
    margin: 20px;
    margin-left: 80px;

    span {
      // width: 300px;
      display: inline-block;
      font-size: 16px;
      color: #666;
      // margin-left: 15px;
    }
    input {
      height: 30px;
      outline: none;
      border: none;
      border-radius: 6px;
      background: rgb(236, 233, 233);
      text-align: center;
    }
    .el-input__inner {
      width: 94%;
      height: 30px;
      line-height: 30px;
      background: rgb(236, 233, 233);
      text-align: center;
    }
    .el-input__icon {
      text-align: right;
      // margin-left: 10px;
      line-height: 30px;
      // color: #ff6600;
    }
  }
  .total {
    margin-left: 5%;
    margin-bottom: 20px;
  }
  .bottom {
    margin-top: 30px;
  }
  .pag {
    margin-top: 20px;
    margin-left: 60%;
  }
   //模态框
   .el-dialog__wrapper{
       width: 70%;
       margin-left: 10%;
         .gain{
             position: absolute;
             top: 0;
             left: 82%;
             color: #ff6600;
         }
        .el-dialog__title{
            color:#ff6600;
            border-left: 5px solid #ff6600;
            margin-left: 14px;
            font-size: 16px;
            padding-left: 5px;
        }
        .el-dialog__header{
            border-bottom: 1px solid #ff6600;
        }
       .el-input__inner{
           width: 80%;
       }
        
       .el-button--primary{
           background: #ff6600;
           border-color: #db6f27;  
       }
       .dialog-footer{
           width: 58%;
       }
      .el-button.is-round{
          margin-right: 15px;
      }
   }
   .tab{
      width: 90%;
      border:1px solid #ff6600;
      margin-top: 30px;
  }
}
</style>

