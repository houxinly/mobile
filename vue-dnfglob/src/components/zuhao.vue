<template>
    <div class="myorder-box">
        <div class="myorder-null">
            <img src="../assets/null.jpg" class="11"/>
        <label>没有订单哦</label>
        <router-link to="./"><span>返回首页</span></router-link>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
$(function(){
    $(".11").click(function(){
        alert(1)
    })
})
</script>
<style scoped>
html{
    background: #ffffff;
}
body{
    background: #ffffff;
}
.myorder-box{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.myorder-null{
    width: 100%;
    height: 100%;
}
.myorder-null img{
    display: inline-block;
    /* text-align: center; */
    padding-left: 30%;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 60px;
}
.myorder-null label,.myorder-null span{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 0.8rem;
}
</style>
