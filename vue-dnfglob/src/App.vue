<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
}
body{
  height:100%;
  width: 100%;
   background:rgba(248,247,250,1);
}
*{
  margin: 0 auto;
  font-family: "Microsoft Yahei";

}
#app{
  width: 100%;
  height: 100%;
  background:rgba(248,247,250,1);
}
</style>
