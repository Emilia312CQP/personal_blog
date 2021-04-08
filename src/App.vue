<template>
  <div id="app">
    <transition name="fade" duration="800">
      <icon
        v-show="showBack"
        @click="goTop"
        id="back-to-top"
        class="iconfont iconfanhuidingbu z-top cursor-pointer"
      ></icon>
    </transition>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return { showBack: false };
  },
  mounted() {
    window.onresize = () => {
      this.$store.commit(
        "style/CHANGE_THEME_BOX_WIDTH",
        document.querySelector("#nav").clientWidth + 15 + "px"
      );
    };
    window.onscroll = () => {
      if (window.scrollY >= 500) {
        this.showBack = true;
      } else {
        this.showBack = false;
      }
    };
  },
  methods: {
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timer = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timer);
        }
      }, 15);
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
