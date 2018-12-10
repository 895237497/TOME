<template>
  <div id="Emitters">

       sos
       <Fence v-for="(checkinfoitem, index) in checkinfo"
       		v-on:changeName="changeName"
          :index='index'
       	/>
       
    </div>
	
    
</template>

<script>
import Fence from "./Fence";
export default {
	  components: {
	    Fence
	  },
	  data() {
	  	return {
	  		checkinfo:[
					{
						breakfast:"breakfast",
						roomImg:"roomImg",
						productName:"productName",
						name:"name",
						cancenFlag:"cancenFlag"
					},
					{
						breakfast:"breakfast2",
						roomImg:"roomImg2",
						productName:"productName2",
						name:"name2",
						cancenFlag:"cancenFlag2"
					},
					{
						breakfast:"breakfast3",
						roomImg:"roomImg3",
						productName:"productName3",
						name:"name3",
						cancenFlag:"cancenFlag3"
					},
					{
						breakfast:"breakfast4",
						roomImg:"roomImg4",
						productName:"productName4",
						name:"name4",
						cancenFlag:"cancenFlag4"
					}]
	  	}
	  	
	  },
	  methods:{
	  	input(val){
	  		alert(val)
	  	},
	  	changeName(data){

				alert('组件传值通信success')
	  		var checkinfo=this.checkinfo;

	  		var index = data.index;
	  		
	  		var name = data.name;

	  		console.log('=====================')
	  		//修改数组对应索引的对象的name属性
	  		checkinfo[index]['name']=name
	  		console.log('修改之后-----')
	  		console.log(checkinfo)
	  	}
	  }
  }
</script>

<style lang="less">
	
</style>
