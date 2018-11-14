<template>
    <div id="Emitters">
        <!-- 上面部分 -->
             <div class="top">
                 <div>
                   <span class="title">账号分配<span class="line">-</span>账号管理</span>
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
                     <span>用户名 <input type="text"/></span>
                  </div> 
                <div class="input">
                     <span>登录名 <input type="text"/></span>
                  </div> 
                  <div class="input">
                     <span>角色 <input type="text"/></span>
                  </div> 
                <div class="input">
                   <el-button type="warning" plain>查询</el-button>
                   <el-button type="info" plain>重置</el-button>
                </div>
                <div class="input">
                      <span>共有账号：</span>
                </div>
             </div>
        <!-- 下面部分 -->
        <div class="bottom">
            <div>
                <el-button round>新增</el-button>
                <el-button round>删除</el-button>
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
                    label="用户名"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.num }}</template>
                    </el-table-column>
                     <el-table-column
                    label="登录名"
                    width="220">
                    <template slot-scope="scope">{{ scope.row.address }}</template>
                    </el-table-column>
                     <!-- <el-table-column
                    label="播报次数"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.count }}</template>
                    </el-table-column> -->
                     <el-table-column
                    label="景区数"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.service }}</template>
                    </el-table-column>
                     <el-table-column
                    label="景区"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.spot }}</template>
                    </el-table-column>
                      <el-table-column
                    label="角色"
                    width="200">
                    <template slot-scope="scope">{{ scope.row.point }}</template>
                    </el-table-column>
                    <!-- <el-table-column
                    prop="date"
                    label="添加时间"
                    width="160">
                    </el-table-column> -->
                      <!-- <el-table-column
                        prop="time"
                        label="访问时间"
                        width="180">
                      </el-table-column> -->
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
                            @click="handleReset(scope.$index, scope.row)">密码重置</el-button>
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
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03"
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
        },
        {
          num: "",
          address: "上海市普陀区金沙江路 1518 弄",
          count: "",
          service: "",
          point: "",
          date: "2016-05-03",
          time: ""
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
    handleReset(index, row) {
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
    padding-left: 5px;

  }
  .line {
    color: #ff6600;
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
  .pag {
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

