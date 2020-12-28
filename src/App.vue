<template>
  <transition mode="out-in" name="fade">
    <div id="app-bg" v-if="bgList[0].url">
      <div @click="next">下一张</div>
      <img  alt="bg" :src="`http://www.bing.com${bgList[0].url}`" />
    </div>
  </transition>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      form:{
        index: 0
      },
      bgList: [
        {}
      ],
      index:0,
    }
  },
  created(){
    this.getBg()
  },
  methods:{
    getBg(){
      this.$http({
        method: 'post',
        url: '/app/getBingBg',
        data:this.form
      }).then(res=>{
        this.bgList = res.data.data
      })
    },
    next(){
      this.bgList= [
        {}
      ],
      this.form = {
        index: this.form.index+=1
      }
      this.getBg()
    }
  }
}
</script>

<style lang="scss">
#app-bg {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  img {
    min-height: 100%;
    min-width: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.4;
}
</style>


