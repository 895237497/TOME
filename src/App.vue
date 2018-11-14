<template>
  <div id="app">
    <!-- <manage-header></manage-header> -->
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import Header from './components/common/header/Header'
export default {
    data(){
        return {

        }
    },
    components: {
        // "manage-header": Header
    }
}

</script>

<style>
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
