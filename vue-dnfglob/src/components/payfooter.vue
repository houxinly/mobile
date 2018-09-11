<template>
    <div class="footer">
        <router-link to="/payment">
            <label>
                <span>立即支付：￥28.00元</span>
            </label>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"payfooter"
}
</script>
<style scoped>
    .footer{
        width: 100%;
        height: 3rem;
        position: fixed;
        bottom: 2px;
        background:rgba(248,247,250,1);
    }
    .footer label{
        font-size: 0.4rem;
        width: 12rem;
        height: 3rem;
        display: inline-block;
        border-radius: 50px;
        background: #ff4747;
        border: none;
        margin: 0 auto;
        margin-left: 30%;
        color: #F8F7FA;
        text-align: center;
        /* vertical-align: middle; */
        margin-top: -0.5rem;

    }
    .footer label span{
        position: relative;
        display: inline-block;
        /* margin-top: 6%; */
        padding-top: 6%;
        font-size: 1rem;
    }
</style>