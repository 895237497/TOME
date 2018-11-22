<template>
   <section>		
         <el-row style="margin-left: 89px;">
         	 <el-table :data="tableData" border highlight-current-row style="width:100%;" :height="tableheight2"
                  v-loading="loading" @sort-change="sortChange" id="tablearea">
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

            <el-table-column label="操作" :width="btswidth" v-if="showImg" align="center">
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
export default {
  data() {
    return {
      loading: false,
      hidePagination: false,
      showRFID: false,
      showMenu: false, 
      tilte: "RFID管理",
      currentPage4: 8,
      tableData: [
        {
          id: 123, //
          username: "张三", //用户名
          RFIDNum:110, //发射源编号
          ReportCount:15, //播报次数
          tourist:"", //旅游景点
          coodrinte:'', //坐标
          visitTimes:'', //访问次数
          devicesTotal:100, //设备总数
          offlineTotal:20, //离线总数
          device:"", //设备IMEI
          deviceNum:'',//设备号
          service:"", //景区
          postalNum:'110', //通讯号码
          quantity:"57%", //电量
          serialNum:1, //序号
          Verifychar:'',//是否确认
          upgradeVersion:"", //升级版本
          Version:'',//版本
          place:"", //位置
          via:'', //头像
          scenicspot:"", //所属景区
          verifychar:true, //是否确认
          address:"青城山", //地址
          serviceproviders:"", //景区服务商
          addtime:'', //添加时间
          date:'',//时间
          robotNum:"2165415", //机器码
          broradius:'', //播报半径
          onlineTotal:62, //在线总数
          princiPalName:'刘星', //负责人姓名
          principalphone:"13333333333", //负责人电话
          postalAddress:'', //通讯地址
          touristGroup:'', //旅游团
          allot:"", //分配状态
          softwareVersion:"", //软件版本
          Condition:'', //状态
          upgradeDate:'', //升级时间
          upgradeAllot:'', //升级状态
          upgradeVersion:'',//升级版本
          phone:"13500000000", //手机号
          trapeze:'', //经纬度
          theirdroup:'', //所属团
          rescue:'', //救援
          loginName:'', //登录名
          scenicNum:50, //景区数
          role:'', //角色
          remark:'',//备注
          accessdate:'',//访问时间
        },
        
        
      ],
      tableitems: []
    };
  },
  props: ["showMenu","tableitems","showImg"],
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
      }
    }
};
</script>

<style lang="less">
section{
  position: relative;
  .block{
    background: #fff;
    position: absolute;
    right: 50px;
  }
}
</style>

