<template>
    <div class="header">
        <p>DNF金币</p>
        <router-link to="./login"><img src="../assets/个人中心@2x.png"/></router-link>
         
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
        /* position: fixed; */
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
    /* .header p{
        width:10.92rem;
height:2.67rem;

font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:0.91rem;
    } */
    .header img{
        width: 1rem;
        vertical-align: middle;
        margin-top: -52px;
        margin-left: 90%;
    }
</style>
