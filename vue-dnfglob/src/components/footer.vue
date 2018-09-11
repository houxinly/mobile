<template>
    <div class="footer">
        <label>
            商品价格:<span>￥68.00元</span>
        </label>
        <router-link to="/order"><button>立即购买</button></router-link>
    </div>
</template>
<script>
export default {
    name:"footer"
}
</script>
<style scoped>
    .footer{
        width: 100%;
        height: 6%;
        position: fixed;
        bottom: 0px;
    }
    .footer label{
        display: inline-block;
        width: 50%;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        line-height: 37px;
        color: #333333;
        font-size: 1rem;
        font-weight: 500;
    }
    .footer label span{
        color: #ff5436;
        font-weight: bold;
        padding-left: 1rem;
    }
    .footer button{
        width: 48%;
        height: 100%;
        display: inline-block;
        background: #ff5436;
        border: none;
        color: #ffffff;
        font-size: 1rem;
    }
</style>
