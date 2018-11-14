<template>

     <div id="allmap" ref="allmap"></div>
</template>
<script>
import { MP } from './map.js'
export default {
  data(){
    return{}
  },
  methods: {
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(104.07, 30.67), 11); // 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 //map.setMapStyle({style:'midnight'});//地图风格
    }
  },
  mounted() {
    //调用上面个的函数
    //this.map();
    this.$nextTick(function(init) {
      var _this = this;
      MP(_this.ak).then(BMap => {
        //在此调用api
        this.map();
      });
    });
  }
};
</script>


<style lang="less">
#allmap {
  width: 88%;
  height: 1000px;
  // margin-left: 190px;
}
</style>

