<template>
    <div class="glob">
        <div class="globbox">
            <div class="glob-title">
                <label>订单编号：GB5101510255485</label>
                <label class="glob-sc">交易完成</label>
            </div>
            <div class="glob-con">
                <img src="../assets/DNF_logo@2x.png"/>
                <label class="glob-aid">DNF金币/华北区/华北一区</label>
                <label class="glob-prie">1000万金币 <span>￥18.00</span></label>
                <label class="glob-time">2018-09-03 21:44:00</label>
            </div>
        </div>
        <div class="globbox">
            <div class="glob-title">
                <label>订单编号：GB5101510255485</label>
                <label class="glob-sc glob-cl">处理中</label>
            </div>
            <div class="glob-con">
                <img src="../assets/DNF_logo@2x.png"/>
                <label class="glob-aid">DNF金币/华北区/华北一区</label>
                <label class="glob-prie">1000万金币 <span>￥18.00</span></label>
                <label class="glob-time">2018-09-03 21:44:00</label>
            </div>
        </div>
        <div class="globbox">
            <div class="glob-title">
                <label>订单编号：GB5101510255485</label>
                <label class="glob-sc globqux">交易取消</label>
            </div>
            <div class="glob-con glob-defaut">
                <img src="../assets/DNF_logo@2x.png"/>
                <label class="glob-aid">DNF金币/华北区/华北一区</label>
                <label class="glob-prie">1000万金币 <span>￥18.00</span></label>
                <label class="glob-time">2018-09-03 21:44:00</label>
            </div>
            <div class="glob-qux">
                <img src="../assets/提示 拷贝@2x.png"/>
                <label>下单超过15分钟未付款，订单将会自动确认取消</label>
            </div>
        </div>
        <div class="globbox">
            <div class="glob-title">
                <label>订单编号：GB5101510255485</label>
                <label class="glob-sc">交易完成</label>
            </div>
            <div class="glob-con">
                <img src="../assets/DNF_logo@2x.png"/>
                <label class="glob-aid">DNF金币/华北区/华北一区</label>
                <label class="glob-prie">1000万金币 <span>￥18.00</span></label>
                <label class="glob-time">2018-09-03 21:44:00</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
body{
     background:rgba(248,247,250,1);
}
html{
     background:rgba(248,247,250,1);
}
.globbox{
    width: 100%;
    background: #ffffff;
   margin-top: 10px;
   float: left;
   margin:  0 auto;
   overflow: hidden;
}
.glob-title{
    /* width: 100%; */
    height: 3rem;
    vertical-align: middle;
    line-height: 3rem;
    padding-left: 1.5rem;
    color: #666666;
    font-size: 1rem;
    border-bottom: 1px solid #eeeeee;
}
.glob-title .glob-sc{
    /* display: inline-block; */
    border-radius: 20px;
    width: 5.5rem;
    height: 2rem;
    background: #F3FFF0;
    text-align: center;
    line-height: 2rem;
    color: #63BA4D;
    float: right;
    margin-right: 1.5rem;
    margin-top: 0.4rem;
}
.glob-title .glob-cl{
    background:rgba(240,253,255,1);
    color:rgba(53,162,255,1);

}
.glob-title .globqux{
    background: #EAEAEA;
    color: #666666;
}
.globbox .glob-qux{
    width: 100%;
    height: 2rem;
    border-top: 1px solid #eeeeee;
}
.globbox .glob-qux img{
    display: inline-block;
    width: 0.8rem;
    vertical-align: middle;
    padding-left: 1.5rem;
}
.globbox .glob-qux label{
    font-size: 0.8rem;
    color: #FF5436;
    vertical-align: middle; 
    line-height: 2rem;
}
.glob-con{
    width: 100%;
    height: 7rem;
    margin: 0 auto;
}
.glob-con img{
    width: 5.5rem;
    display: inline-block;
    margin-top: 1.6rem;
}
.glob-con label{
    width: 12.5rem;
    display: block;
    /* margin-left: -2rem; */
    line-height: 1.6rem;
}
.glob-con .glob-price{
    display: inline;
    /* width: 12rem; */
}
.glob-con .glob-aid{
    overflow: hidden;
    margin: -67px auto 0;
}
.glob-con .glob-time{
    font-size: 0.5rem;
    color: #999999;
}
.glob-con label span{
    color: #ff5436;
    margin-left: 3rem;
    font-weight: bold;
}
</style>
