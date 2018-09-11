<template>
    <div class="order">
        <Header></Header>
        <div class="hinit">
            <div class="hinit-title">
                <img src="../assets/提示.png"/>
                <span>温馨提示</span>
            </div>
            <div class="hinit-con">
                <p class="hinit-con1">1. 邮寄发货，游戏官方默认收取5%邮寄手续费，由您承担.</p>
                <p>2. 如您的角色名带有特殊符号，请务必复制输入。</p>
                <p>3. 非高峰期，金币将在5-20分钟内发送至您的邮箱，请耐心等待。如有问题，可随时联系订单客服。</p>
            </div>
            
        </div>
        <div class="shopinfo ow">
            <div class="shopinfo-title">
                <img src="../assets/商品@2x.png"/>
                <span>商品信息</span>
            </div>
            <label>游戏区服:
                <span>地下城与勇士/广东区/广东六</span>
            </label>
            <label>购买数量:
                <span>2000万金币</span><span class="shop-price">￥28.00</span>
            </label>
        </div>
        <div class="shopinfo">
            <div class="shopinfo-title">
                <img src="../assets/填写@2x.png"/>
                <span>订单信息</span>
            </div>
            <label>联系手机:
                 <input type="number" name="tell"/>
            </label>
            <label>游戏角色:
                <input type="text" name="name"/>
            </label>
        </div>
        <div class="shopinfo">
            <div class="shopinfo-title">
                <img src="../assets/付款@2x.png"/>
                <span>支付方式</span>
            </div>
            <label class="payway">
                <img src="../assets/微信支付@2x.png"/>
                <span class="way">微信支付</span>
                <input type="radio" name="way" checked="checked"/>
            </label>
            <label class="payway pay-zfb"><img src="../assets/支付宝@2x.png"/>
            
                <span class="way">支付宝支付</span>
                <input type="radio" name="way"/>
            </label>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '../components/payfooter'
export default {
    name: 'Order',
    components:{
            Header,
            Footer
        },
}
</script>
<style scoped>
    .oreder{
        width: 100%;
        overflow: hidden;
    }
    .hinit{
       float: left;
        width: 100%;
        height: 24%;
        /* height: 260px; */
        background: #ffffff;
        top: 6%;
    }
    .hinit-title{
        width: 100%;
        height: 12%;
        margin:  0 auto;
    }
    .hinit-title img{
        width: 1rem;
        margin-left: 5%;
        margin-top: 12px;
    }
    .hinit-title span{
        width:101px;
        height:25px;
        font-size:1rem;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(0,0,0,1);
        line-height:34px;
    }
    .hinit-con{
        width: 90%;
        background: #FFFBEB;
        height: 8rem;
        margin-left: 5%;
    }
    .hinit-con .hinit-con1{
        padding-top: -10px;
    }
    .hinit-con p{
        font-size: 0.8rem;
        width: 91%;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:27px;
        vertical-align: middle;
        margin-left: 10px;
        position: relative;
        top:10px;
        
    }
    .shopinfo{
        width: 100%;
        height: 17% ;
        background:#ffffff;
        overflow: hidden;
        
    }
    .ow{
        padding-top: 20px;
    }
    .shopinfo-title{
        width: 100%;
        height: 20%;
        background:rgba(248,247,250,1);
        margin: 0 auto;
        overflow: hidden;
        vertical-align: middle;
        line-height: 30px;
        
    }
    .shopinfo-title img{
        width: 1rem;
        margin-left: 5%;
        vertical-align: middle;
    }
    .shopinfo-title span{
        font-size:1rem;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(0,0,0,1);
        vertical-align: middle;
    }
    .shopinfo label{
        width: 100%;
        height:2.4rem;
        display: inline-block;
        padding-left: 5%;
        vertical-align: middle;
        margin-top: 4%;
        border-bottom: 1px solid #eeeeee;
        color: #999999;
        margin-left: 4px;
        
    }
    .shopinfo label input{
        display: inline-block;
        font-size:1rem;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(0,0,0,1);
        vertical-align: middle;
        margin-bottom: 3px;
        border: 1px solid #F8F7FA;
    }
    .shopinfo label input:focus, .shopinfo label input:checked{
        outline: none;
    }
    .shopinfo .shop-price{
        color: #FF5436;
        padding-left: 37%;
        padding-bottom: -20px;
        font-size:1rem;
        font-weight: bold;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
    }
    .shopinfo label img{
        width: 1.5rem;
    }
    .shopinfo .payway .way{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 1rem;
        margin-top: -2%;
        margin-left: 4px;
    }
    .shopinfo .payway input{
        float: right;
        width: 31px;
        height: 1.4rem;
        margin-right: 40px;
        border: none;
        -webkit-appearance: none;
        background: #fff url("../assets/圆形未选中.png");
        background-size: 1.4rem; 
        background-color: transparent;
        margin-top: -4px;
        background-repeat: no-repeat;
    }


.shopinfo input[type="radio"]:focus,
.shopinfo input[type="radio"]:hover {
    outline: none;
  }
   
.shopinfo input:checked {
    background-image: url("../assets/圆形选中.png");
    background-repeat: no-repeat;
    background-size: 1.4rem;  
  }
  .shopinfo .pay-zfb{
      border-bottom: none;
  }
</style>
