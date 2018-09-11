<template>
    <div id="login">
        <Header></Header>
        <div class="login">
            <span class="login-title">
                 <label>
                     <span class="fl">手机号:</span>
                     <span class="fr"><input  name="phone" type="number" placeholder="请输入手机号"  ref="phonenum" :class="{ag:thisshow==true}"/></span>
                </label>
            </span>
            <span ref="thisspan" v-show="thisshow" class="hint"></span>   
            <span class="login-ti">
                <label>
                    <span class="login-co">
                        <span>验证码:</span>
                        <input type="text" placeholder="请输入验证码" class="code"/>
                    </span>
                   <button type="button" :disabled="disabled" @click="sendcode" class="btns" :class="{grey:thisgrey==true}">{{btntxt}}</button>
               </label>
               <span  class="hint-hit"><img src="../assets/提示@2x.png"/>验证码有效期5分钟</span>
            </span>
               
            
        </div>
        <div class="forin">
            <label>验证即注册，未注册将自动创建9891账号</label>
            <button>登录</button>
        </div>
    </div>
</template>
<script>
import Header from '@/components/mycenter'
// import func from './vue-temp/vue-editor-bridge';
export default {
    name:'login',
    data:function(){
        return{
            disabled:false,
            time:60,
            btntxt:"获取验证码",
            thisshow:false,
            disabled:false,
            thisgrey:false,
            // formMess:{
                // phone:this.phone
            // }
        }
    },
    methods:{
        sendcode(){
            let phonenum = this.$refs.phonenum.value;
            var reg=11 &&/^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(phonenum==""){
                console.log(this.thisshow)
                this.thisshow = true;
                this.$refs.thisspan.innerText = '请输入手机号'
            }else if(!reg.test(phonenum)){
                // alert("手机号输入错误");
                console.log('asd')
                this.thisshow= true;
                this.$refs.thisspan.innerText = '手机号输入错误'
                // innerHtml="手机号输入错误";
            }else{
                this.$refs.thisspan.innerText = ''
                this.thisshow = false;
                this.time=60;
                // console.log(this.time)
                this.thisgrey=true;
                this.disabled=true;
                this.timer();
            }
        },
        timer(){
            if(this.time>0){
                this.time--;
                this.btntxt=this.time+"s后重发";
                setTimeout(this.timer,1000);
                this.disabled=true;
            }else{
                this.time=0;
                this.btntxt="获取验证码";
                this.disabled=false;
                this.thisgrey= false;
            }
        },
    },
    components:{
            Header         
    }
}
</script>
<style scoped>
.ag{
    border-color: #FF4747!important;
}
.grey{
    background: #999999!important;
    color: #ffffff!important;
    border: none!important;
}
.fl{
    float: left;
    padding: 0.3rem 0 0.7rem
}
.fr{
    float: right;
}
html{
    width: 100%;
    height: 100%!important;
    background: #ffffff; 
}
body{
    width: 100%;
    height: 100%;
    background: #ffffff; 
}
#app{
   width: 100%;
    height: 100%;
    background: #ffffff; 
}
#login{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.login{
padding-top: 100px;
position: relative;
}
.login label{
    display: block;
    font-size: 1rem;
    font-weight: 500;
    /* line-height: 4rem; */
    text-align: left;
    /* border-radius: 5px; */
    overflow: hidden;
}
.login .login-title,.login .login-ti{
        display: block;
        width: 80%;
        margin: 0 auto 2rem;
}
.login .login-title span{
    display: inline-block;
}
.login label input{
    display: inline-block;
    width: 16rem;
    height: 2rem;
    text-align: left;
    padding-left: 0.4rem;
    font-size: 1rem;
    border: 1px solid #eeeeee;
    border-radius: 6px;
}
.login .login-ti .login-co{
    float: left;
}
.login .login-ti .login-co span{
    margin-right: 10px;
}
.login .login-ti button{
    float: right;
}
.login label .code{
    width: 10rem;
}
.hint{
    display: block;
    font-size: 0.5rem;
    color: #FF4747;
    line-height: 0;
    padding-left: 4rem;
    /* margin-top: -10px; */
        position: absolute;
    left: 50%;
    transform: translateX(-73%);
    top: 65%;
}
.hint-hit{
    display: block;
    font-size: 0.5rem;
    color: #999999;
    line-height: 0;
    /* padding-left: 4rem; */
    /* margin-top: -10px; */
    margin-top: 15px;
    width: 11rem;
}
.hint-hit img{
    width: 0.9rem;
    display: inline-block;
    padding-right: 4px;
}
.btns{
    display: inline-block;
    width: 5.5rem;
    height: 2.4rem;
    background: rgb(216, 232, 252);
    border: none;
    color: #549DF8;
    border-radius: 5px;
    border: 1px solid #549DF8;
}
.login label input:focus{
    border-color: #549DF8;
    outline: none;
}
.btns:focus,.btns:checked{
    outline: none;
}
.forin{
    width: 100%;
    /* height: 100%; */
}
.forin label{
    display: inline-block;
    width: 100%;
    font-size: 1rem;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    padding-top: 3rem;
    color: #999999;
}
.forin button{
    display: block;
    width: 12rem;
    height: 2.5rem;
    background: #FF4747;
    border: none;
    border-radius: 20px;
    margin-top: 0.4rem;
    font-size: 1rem;
    color: #ffffff;
}
.forin button:focus{
    outline: none;
}
</style>
