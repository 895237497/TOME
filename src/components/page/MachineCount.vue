<template>
    <div id="Emitters">
        <!-- 上面部分 -->
             <div class="top">
                 <div>
                   <span class="title">发射源管理<span class="line">-</span>机器码统计</span>
                 </div>
                 <div class="input">
                     <span>编号 <input type="text"/></span>
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
                    <span>日期
                        <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                        <el-date-picker
                        v-model="value2"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </span>
                </div>
                <div class="input">
                    <span>机器码<input type="text"/></span>
                </div>
                <div class="input">
                   <el-button type="warning" plain>查询</el-button>
                   <el-button type="info" plain>重置</el-button>
                </div>
             </div>
        <!-- 下面部分 -->
        <div class="bottom">
            <div>
                <el-button round>导出</el-button>
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
                    label="发射源编号"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.num }}</template>
                    </el-table-column>
                     <el-table-column
                    label="地址"
                    width="220">
                    <template slot-scope="scope">{{ scope.row.address }}</template>
                    </el-table-column>
                     <el-table-column
                    label="机器码"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.code }}</template>
                    </el-table-column>
                     <el-table-column
                    label="景区服务商"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.service }}</template>
                    </el-table-column>
                     <el-table-column
                    label="旅游景点"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.spot }}</template>
                    </el-table-column>
                    <!-- <el-table-column
                    prop="date"
                    label="添加时间"
                    width="160">
                    </el-table-column> -->
                      <el-table-column
                        prop="time"
                        label="访问次数"
                        width="200">
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        // 日期
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
      tableData3: [
        {
          num: "",
          address: "上海市普陀区金沙江路",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
          
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 ",
          code: "",
          service: "",
          spot: "",
          time: "2016-05-03"
         
        }
      ],
      multipleSelection: []
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
    // 分页
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
  .line {
    color: #ff6600;
  }
  .input {
    display: inline-block;
    margin: 20px;
    margin-left: 80px;
      &:nth-of-type(6){
          margin-left: 84%;
      }
    span {
      // width: 300px;
      display: inline-block;
      font-size: 16px;
      color: #666;
      // margin-left: 15px;
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
        color: #ff6600;
      }
    }
  }
  .bottom {
    margin-top: 30px;
  }
  .pag{
      margin-top: 20px;
      margin-left: 60%;
  }
  .tab{
      width: 90%;
      border:1px solid #ff6600;
      margin-top: 30px;
  }
}
</style>

