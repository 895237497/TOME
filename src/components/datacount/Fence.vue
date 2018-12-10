<template>
  <div id="Emitters">

    <!--   姓名
       <input style="border: 1px solid #EEEEEE;" v-model="name" type="" name="" id="" value="" /><br />
    索引
       <input style="border: 1px solid #EEEEEE;" v-model="index" type="" name="" id="" value="" /><br />
       <button @click="changeName">修改</button>-->
       <div id="">
       	请输入姓名:<el-input type="text" placeholder="请输入"  @change="changeName" style="width: 300px;"></el-input><el-input type="text" placeholder="请输入"   style="width: 300px;"></el-input>
       </div>
      	  索引{{index}}
       <hr />
      
    </div>

    
</template>

<script>

export default {
  components: {
    
  },
  data() {
  	return{
  		
  		name:''
  	}
  },
  props:[
  	'index'
  ],
  methods:{
  	changeName(val){
  		
  		alert(val+"----"+this.index)
  		var data = {}
  		data.name = val;
  		data.index = this.index;
  		console.log(data)
  		this.$emit('changeName',data)
  	}
  }
  }
</script>

<style lang="less">
	

</style>
