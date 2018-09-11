<template>
    <div class="payment">
        <Header></Header>
        <div class="pay-success">
            <div class="pay-title">
                 <img src="../assets/成功@2x.png"/>
                 <p>订单支付成功！</p>
            </div>
           <div class="pay-info">
               <label class="pay-info1">订单编号:
                   <span>KFH5541524125415</span>
               </label>
               <label>商品信息:
                   <span>地下城与勇士/广东区/广东一</span>
               </label>
               <label>订单金额:
                   <span class="price">10363万金币=200元</span>
               </label>
           </div>
           <div class="pay-hint">
               <img src="../assets/提示@2x.png" />
               <p>
                   温馨提示：金币将在5-20分钟内发送至<span>我是大魔王</span>邮箱内，高峰期可能会有延迟，请耐心等待！<br/>如有疑问，可联系订单客服。
               </p>
           </div>
           <div class="pay-again">
               <router-link to="./"><span>再来一单</span></router-link>
           </div>
           <div class="pay-tell">
              
                   <label>
                   <img src="../assets/电话@2x.png"/>
                   <span>客服热线:400-001-9891</span>
                   
               </label>
                <label>
                   <img src="../assets/qq@2x.png" class="qq"/>
                   <span>QQ群:123456</span>
                    
               </label>

               
           </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header'
export default {
    name: 'Payment',
    components:{
            Header
            
        },
}
</script>
<style scoped>
.payment{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
}
.pay-success{
    background: #ffffff;
    width: 100%;
    height: 100%;
    top: 60px;
    float: left;
}
.pay-title{
    width: 100%;
    height: 200px;
    position: relative;
    text-align: center;
}
.pay-title img{
    width: 4.5rem;
    margin: 53px auto 0;
    overflow: hidden;
}
.pay-title p{
    font-size:1.5rem;
    /* font-family:MicrosoftYaHei; */
    font-weight:400;
    color:rgba(93,185,0,1);
    line-height:37px;
    text-align: center;
    margin-left: 32px;
}
.pay-info{
    width: 100%;
    /* margin-top: 20px; */
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
}
.pay-info1{
    margin-top: 10px;
}
.pay-info label{
  display: block;
  color: #999999;
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 31px;
  font-weight: 500;
}
.pay-info label span{
    color: #333333;
    
}
.pay-info label .price{
    color: #FF4747;
    font-weight: 500;
}
.pay-hint{
    width: 100%;
    margin: 30px auto 0;
}
.pay-hint img{
    padding-left: 31px;
    width: 1rem;
    display: inline-block;
}
.pay-hint p{
    width: 75%;
    overflow: hidden;
    margin: -24px auto 0;
    padding-left: 10px;
    color: #999999;
    font-size: 1rem;
}.pay-hint p span{
    color: #FF4747;
}
.pay-again{
    width: 100%;
    height: 60px;
    margin: 30px auto 0;
}
.pay-again  span{
    display: block;
    width: 52%;
    height: 46px;
    background: #FF4747;
    border-radius: 30px;
    text-align: center;
    line-height: 46px;
    font-size: 1rem;
    color: #F8F7FA;
    overflow: hidden;
    margin: 0 auto;
    overflow: hidden;
   
}
.pay-again a:link,.pay-again a:visited{
    text-decoration: none;
}
.pay-tell{
    width: 100%;
    text-align: center;
    font-size: 1rem;
}
.pay-tell label{
    display: block;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    
    line-height: 30px;
    padding-left: 20px;
}
.pay-tell label img{
    width: 1rem;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
}
.pay-tell label .qq{
    margin-left: -74px;
    overflow: hidden;
}
</style>
