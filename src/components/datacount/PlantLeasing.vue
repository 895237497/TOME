<template>
    <div id="Emitters">
        <!-- 上面部分 -->
             <div class="top">
                 <div>
                   <span class="title">数据统计<span class="line">-</span>设备租赁次数统计</span>
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
                   <el-button  plain>重置</el-button>
                </div>
                <div class="input">
                    <span>游客数统计：</span>
                </div>
             </div>
        <!-- 下面部分 -->
       <div class="bottom" style="display: flex;">
        <!-- 环形图 -->
        <div id="main" style="width:400px;height:600px;margin-top:15px"></div>
        <!-- 仪表图 -->
        <div id="main1" style="width:400px;height:600px;margin-top:15px"></div>
        <!-- 折线图 -->
        <div id="main2" style="width:600px;height:600px;margin-top:15px flex:1"></div>

    </div> 
    </div>
</template>
<script>
var eCharts = require("echarts")
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
      value2: ""
      // 报表

    };
  },
  mounted() {
 },
 
    methods: {
        // 仪表图表
        meterCharts1() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [{
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [{
                        value: 50,
                        name: '实时游客数'
                    }]
                }]
            };

              // 使用刚指定的配置项和数据显示图表。
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 10000).toFixed() - 0;
                myChart.setOption(option, true);
            }, 2000);
            // myChart.setOption(option);

        },
        // 仪表图表
        meterCharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main1'));
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [{
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}'
                    },
                    data: [{
                        value: 50,
                        name: '累积游客数'
                    }]
                }]
            };

              // 使用刚指定的配置项和数据显示图表。
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 10000).toFixed() - 0;
                myChart.setOption(option, true);
            }, 2000);
            // myChart.setOption(option);

        },
        // 折线图表
        lineCharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main2'));
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: '今日游客数'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['', '', '', '', '']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {
                            normal: {}
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: false,
                                position: 'top'
                            }
                        },
                        areaStyle: {
                            normal: {}
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

    },
    mounted() {
        this.$nextTick(
            this.meterCharts1(),
            this.meterCharts(),
            this.lineCharts()
        )

    },
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
    &:nth-of-type(4) {
      margin-left: 25%;
    }
    span {
      // width: 300px;
      display: inline-block;
      font-size: 16px;
      color: #666;
      text-align: right;
      // margin-left: 15px;
      input {
        height: 30px;
        outline: none;
        border: none;
        border-radius: 6px;
        background: rgb(236, 233, 233);
        text-align: center;
        padding-left: 4px;
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
  //报表部分
 
}
</style>

