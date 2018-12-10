<template>
  <div id="map">
    <div id="allmap" ref="allmap"></div>
    <div class="count">
      <!-- 设备总数 -->
      <div class="sum">
        <span>设备总数</span>
        <p>{{sum.count}}</p>
      </div>
      <!-- 在线总数 -->
      <div class="sum">
        <span>在线总数</span>
        <p>{{sum.onLineCount}}</p>
      </div>
    </div>
    <!-- 当天人流量 -->
    <div id="flux">
      <span>当天人流量</span>
      <p></p>
    </div>
  </div>
</template>
<script>
import { MP } from "./map.js";
import BMap from "BMap";
import { path } from "../../../api/api.js";
export default {
  data() {
    return {
      sum: ""
    };
  },
  methods: {
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      var point = new BMap.Point(104.07, 30.67);
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point);  // 创建标注
      map.addOverlay(marker);               // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      // map.centerAndZoom(new BMap.Point(104.07, 30.67), 11); // 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别
      // map.addControl(
      //   new BMap.MapTypeControl({
      //     //添加地图类型控件
      //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
      //   })
      // );
      // map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 //map.setMapStyle({style:'midnight'});//地图风格

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            //map.addOverlay(mk);
            map.panTo(r.point);
            alert("您的位置：" + r.point.lng + "," + r.point.lat);
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );

      var data_info = [
        [
          113.30764968,
          23.1200491,
          "地址：北京市东城区王府井大街88号乐天银泰百货八层<br><a href='https://www.baidu.com'>详情<a>"
        ],
        [
          116.406605,
          39.921585,
          "地址：北京市东城区东华门大街<br><a href='https://www.baidu.com'>详情<a>"
        ],
        [
          116.412222,
          39.912345,
          "地址：北京市东城区正义路甲5号<br><a href='https://www.baidu.com'>详情<a>"
        ]
      ];
      var opts = {
        width: 250, // 信息窗口宽度
        height: 80, // 信息窗口高度
        //              title : "信息窗口" , // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      };

      for (var i = 0; i < data_info.length; i++) {
        var myIcon = new BMap.Icon(
          "http://developer.baidu.com/map/jsdemo/img/fox.gif",
          // URL = "../../../assets/images/lixian.png",
          new BMap.Size(100, 57)
        );

        var marker = new BMap.Marker(
          new BMap.Point(data_info[i][0], data_info[i][1]),
          { icon: myIcon }
        ); // 创建标注
        var content = data_info[i][2];
        map.addOverlay(marker); // 将标注添加到地图中
        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        addClickHandler(content, marker);
      }

      //地图描点单击事件
      function addClickHandler(content, marker) {
        marker.addEventListener("click", function(e) {
          openInfo(content, e);
        });
      }

      function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point); //开启信息窗口
      }

      //地图移动获取经纬度
      map.addEventListener("moveend", function() {
        console.log("lng: " + map.getCenter().lng);
        console.log("lat: " + map.getCenter().lat);
      });

      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      });
      map.addControl(navigationControl);
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function(e) {
        // 定位成功事件
        console.log("经度  lng:" + e.point.lng);
        console.log("维度  lat:" + e.point.lat);
        //      var address = '';
        //      address += e.addressComponent.province;
        //      address += e.addressComponent.city;
        //      address += e.addressComponent.district;
        //      address += e.addressComponent.street;
        //      address += e.addressComponent.streetNumber;
        //      alert("当前定位地址为：" + address);
      });
      geolocationControl.addEventListener("locationError", function(e) {
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);
    },
    finddevicecount() {
      var api = "/device/terminal/selectTerminalCount";
      var _this = this;
      var token = localStorage.getItem("token");
      console.log(token);

      this.$axios
        .get(path + api, {
          headers: {
            Authorization: "Bearer" + token
          }
        })
        .then(response => {
          console.log(response, "查询设备总数及在线数量事件-----");
          return (_this.sum = response.data.value);
        });
    }
  },

  mounted() {
    //调用上面的函数
    //this.map();
    this.$nextTick(function(init) {
      var _this = this;
      MP(_this.ak).then(BMap => {
        //在此调用api
        this.map();
      });
    });
    this.finddevicecount();
  }
};
</script>


<style lang="less">
#map {
  width: 100%;
  height: 100%;
  position: relative;
  #allmap {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    z-index: 1;
  }
  .count {
    width: 500px;
    height: 150px;
    // border: solid 1px #ccc;
    position: absolute;
    top: 40px;
    right: 20px;
    display: flex;
    .sum {
      flex: 1;
      text-align: center;
      z-index: 9999999999;

      span {
        display: inline-block;
        width: 100%;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        background: #ed5001;
        color: #fff;
      }
      p {
        background: #fbfbfbc7;
        height: 120px;
        font-size: 40px;
        line-height: 120px;
        color: #8c8c8c;
      }
    }
  }
  #flux {
    width: 500px;
    height: 300px;
    // border: solid 1px #ccc;
    position: absolute;
    top: 220px;
    right: 20px;
    span {
      display: inline-block;
      width: 100%;
      height: 30px;
      font-size: 20px;
      line-height: 30px;
      background: #ed5001;
      color: #fff;
      text-align: center;
    }
    p {
      background: #fbfbfbc7;
      height: 270px;
      font-size: 30px;
      // line-height: 120px;
    }
  }
}
</style>

