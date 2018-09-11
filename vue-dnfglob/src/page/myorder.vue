<template>
    <div id="Myorder">
       <Header></Header>
       <div class="myorder-con">
           <ul class="myorder-tab">
            <li class="tab" @click="toggleTab('Glob')"><a>金币</a></li>
            <li class="tab" @click="toggleTab('Dail')"><a>代练/陪玩</a></li>
            <li class="tab" @click="toggleTab('Jhm')"><a>激活码</a></li>
            <li class="tab" @click="toggleTab('Zuhao')"><a>租号</a></li>
        </ul>
            <div class="hit">
                <img src="../assets/提示@2x.png"/>
                <label>如有任何疑问，可联系在线客服QQ群：<span>258642356</span></label>
            </div>
            <div class="tabcon">
                <prince :is="currentTab" keep-alive></prince>
               
            </div>  
       </div>
        
    </div>
</template>
<script  scoped>
import Header from '@/components/mycenter'
import Glob from '@/components/golb'
import Dail from '@/components/dailian'
import Zuhao from '@/components/zuhao'
import Jhm from '@/components/jhm'
export default{
    name: 'Myorder',
    data(){
        return{
           currentTab: 'Glob'
        }
    },
    components:{
            Header,
            Glob,
            Dail,
            Zuhao,
            Jhm
    },
    methods:{
        toggleTab: function(tab) {
        this.currentTab = tab;
  }
        }
    }
</script>
<style scoped>
#Myorder{
    height: 100%;
}
.myorder-tab{
    position: fixed;
    margin-top: -130px;
    background: #ffffff;
    width: 100%;
}
.hit{
    position: fixed;
     margin-top: -72px;
}
.myorder-con{
    width: 100%;
    top: 72px;
    height: 100%;
    padding-top: 168px;
    background: #ffffff;
    /* position: fixed; */
}
.my-hint{
width:100%;
height: 60px;
background: #eeeeee;
}
.myorder-con .tab{
    display: inline-block;
}
/* .myorder-con ul li{
    float: left;
    list-style: none;
    padding-left: 3rem;
    font-size: 1rem;
} */
.hit{
    width: 100%;
    height: 2rem;
    background: #F8F7FA;
    
}
.hit img{
    width: 0.8rem;
    display: inline-block;
    margin: 0 auto;
    overflow: hidden;
    vertical-align: middle;
    margin-left: 1.5rem;
}
.hit label{
    font-size: 0.7rem;
    line-height: 2rem;
    color: #999999;
}
.hit label span{
    color: #62B7FF;
}
.tabcon{
    display: block;
    margin-top: -33px;
}
.myorder-tab{
    height: 4rem;
    line-height: 3.5rem;
    /* padding-left: 3.5rem; */
}
.myorder-tab .tab{
    font-size:  1rem;
    font-weight: 500;
    margin-left: 2rem;
}
.myorder-tab .tab:hover{
    border-bottom: 4px solid #FF5436;
    color: #FF5436;
}
</style>
