<template>
    <div id="app">
       <Header/>
       <section>
           <router-view></router-view>
       </section>
    </div>
</template>

<script>
import Header from './common/header/Header'
export default {
    components:{
        Header,
    }
}
</script>

<style lang="less">
    body,html{
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
    }
    #app{
        height: 100%;
        box-sizing: border-box;
        /* overflow: hidden; */
    }
</style>


