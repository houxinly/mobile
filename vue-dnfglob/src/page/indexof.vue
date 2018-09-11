<template>
    <div class="indexof">
        <Header></Header>
        <div class="indexof-con">
            <img src="../assets/banner 拷贝@2x.png" />
            <div class="indexof-persion">
                <div class="index-box">
                     <img src="../assets/对勾@2x.png" class="indexof-img1"/><span>全网最低</span>
                </div>
                <div class="index-box">
                     <img src="../assets/对勾@2x.png" class="indexof-img1"/><span>自动秒发</span>
                </div>
                <div class="index-box">
                     <img src="../assets/对勾@2x.png" class="indexof-img1"/><span>安全快捷</span>
                </div>
                <div class="index-box">
                     <img src="../assets/对勾@2x.png" class="indexof-img1"/><span>24小时发货</span>
                </div>
               
            </div>
            <div class="aid">
                <label>区服</label>
                <div>
                    <div class="select">
                        <label @click="showCont">选择大区</label>
                          <label @click="showCont">选择服务器</label>
                        <ul class="select-q" v-if="show">
                            <li><span>广东区</span></li>   
                        </ul>
                    </div>
                    <div class="select-child">
                      
                        <!-- <ul class="select-q" v-if="show">
                            <li><span>广东区</span></li>
                            <li><span>西南</span></li>
                            <li><span>河北</span></li>
                            <li><span>杭州区</span></li>
                            <li><span>北京区</span></li>
                            <li><span>广东区</span></li>
                            <li><span>西南</span></li>
                            <li><span>河北</span></li>
                            <li><span>杭州区</span></li>
                            <li><span>北京区</span></li>
                            <li><span>广东区</span></li>
                            <li><span>西南</span></li>
                            <li><span>河北</span></li>
                            <li><span>杭州区</span></li>
                            <li><span>北京区</span></li>  
                            <li><span>北京区</span></li>
                            <li><span>广东区</span></li>
                            <li><span>西南</span></li>
                            <li><span>河北</span></li>
                            <li><span>杭州区</span></li>
                            <li><span>北京区</span></li>   
                            <li><span>北京区</span></li>
                            <li><span>广东区</span></li>
                            <li><span>西南</span></li>
                            <li><span>河北</span></li>
                            <li><span>杭州区</span></li>
                            <li><span>北京区</span></li>     
                        </ul> -->
                    </div>
                    <div class="taochan">
                        <p>套餐</p>
                        <ul>
                            <li><span>1000万</span></li>
                            <li><span>2000万</span></li>
                            <li><span>5000万</span></li>
                            <li><span>1亿</span></li>
                        </ul>
                    </div>  
                </div>
                 <router-link to="/myorder"><span>再来一单</span></router-link>

            </div>
            
        </div>
        <Footer></Footer>
    </div>
    
</template>
<script>
import Header from '@/components/header'
import Footer from '../components/footer'
export default {
    name: 'Indexof',
    components:{
            Header,
            Footer
        },
  data () {
    return {
        radio3: '上海',
        show:false
    }
   },
   methods:{
       showCont:function(){
           this.show=!this.show;
       }
   }
    }
</script>
<style scoped>
/* .select-q{
    display: none;
} */
.select{
    margin-top: 20px;
    display: inline-block;
    margin-left: 4%;  
}
.select-child{
    display: inline-block;
    /* position: fixed;
    top: 449px;
    left: 48%; */
}
.select label,.select-child label{
    display: inline-block;
    width: 10rem;
    height: 3rem;
    background: #F8F7FA;
    border-radius: 6px;
    line-height: 3rem;
    font-size: 1rem;
    padding-left: 0.6rem;
}
.select-q{
    width: 96%;
    height: 200px;
    display: block;
    background: #F8F7FA;
    margin-left: -10%;
    margin-top: 10px;
    overflow-x:hidden; 
    overflow-y:scroll;
    position: absolute;
}
.select-q li span{
    display: inline-block;
    width: 3.6rem;
    height: 1.4rem;
    text-align: center;
}
.select-q li{
    float: left;
    list-style: none;
    margin-top: 1rem;
    width: 4rem;
    height: 2rem;
    margin-left: 0.4rem;
    font-size: 1rem;
}
.select-q li span:hover{
    border: 1px solid red;
    background: rgba(238,87, 0);
}
    .indexof{
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }
    .indexof-con{
        margin: 0 auto;
        overflow: hidden;
    }
    .indexof-con img{
        width: 100%;
    }
    .indexof-persion{
        width: 100%;
        height: 4%;
        margin:  0 auto;
        overflow: hidden;
        background:rgba(255,255,255,1);
    }
    .index-box{
        float: left;
        height: 31%;
        margin-left: 2%;
        line-height: 72px;
    }
    .index-box img{
        width: 1rem;
        vertical-align: middle;
        margin-left: 6px;
    }
    .index-box span{
        vertical-align: middle;
        font-size: 1rem;
        /* font-family:PingFang-SC-Medium; */
        font-weight:500;
        color:rgba(153,153,153,1);
        line-height:18px;  
        padding-left: 4px;  
       
    }
    .aid{
        height: 285px;
        width: 100%;
        font-size: 1rem;
        background:rgba(255,255,255,1);
        margin-top: 20px;
        letter-spacing: 2px;
    }
    .aid>label{
        margin-left: 4%;
        position: relative;
        top: 10px;
    }
    
    .aid select{
        display: inline-block;
        width: 45%;
        height: 30px;
        background:rgba(248,247,250,1);
        border-radius:5px;
    }
    .aid select:checked,.aid select:focus{
        border: none;
    }
    .aid .aid-daqu{
        margin-left: 4%;
        margin-top: 10px;
    }
    .aid select option{
        width: 200%;
        height: 200px;
    }
    .taochan{
        width: 100%;
    }
    .taochan p{
        margin-top: 10px;
        margin-left: 4%;
    }
    .taochan .taoc{
        display: inline-block;
        margin-top: 10px;
        width: 18%;
        height: 20px;
        padding-left: 10px;
    }
    .taochan ul{
        margin-left: -7%;
        margin-top: 10px;
        width: 100%;
    }
    .taochan ul li{
        list-style: none;
        float: left;
        margin-left: 1%;
    }
    .taochan>ul>li>span{
        display: inline-block;
        width: 6rem;
        height: 2.4rem;
        background: #F8F7FA;
        text-align: center;
        line-height: 2.4rem;
        font-size: 1rem;
        font-weight: 500;   
    }
    .taochan>ul>li>span:hover{
        background: #FF5436;
        color: #F8F7FA;
    }
</style>
