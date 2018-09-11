<template>
    <div class="header">
        <p>个人中心</p>
        <router-link to="./"><label>DNF金币></label></router-link>
         
    </div>    
</template>
<script>
export default {
    name: 'Header',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
    .header{
        /* float: left; */
        width: 100%;
        height:3rem;
        background:rgba(248,247,250,1);
        position: fixed;
    }
    .header p{
        overflow: hidden;
        margin: 0 auto;
        width:100%;
        height:62%;
        font-size:1.4rem;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(0,0,0,1);
        margin-top: 0.3rem;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
    }
    .header label{
        display: inline-block;
        width: 8rem;
        font-size: 0.8rem;
        vertical-align: middle;
        margin-top: -50px;
        margin-left: 80%;
        color: #000000;
    }
</style>
