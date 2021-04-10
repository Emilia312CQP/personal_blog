<template>
  <div class="layout-index">
    <Header></Header>
    <div class="banner">
      <h1>{{ uname }}</h1>
      <p class="desc">To Build Amazing Things !</p>
    </div>
    <main class="flex-between-center">
      <div class="router-box"><router-view></router-view></div>
      <div class="right-bar">
        <AvatarBox></AvatarBox>
        <ToolBox />
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/header";
import AvatarBox from "@/components/AvatarBox";
import ToolBox from "@/components/ToolBox";
import Footer from '@/components/Footer'
export default {
  name: "layoutIndex",
  components: { Header, AvatarBox, ToolBox,Footer },
  computed: {
    uname() {
      return this.$store.getters.uname;
    },
  },
};
</script>
<style lang="scss" scoped>
.layout-index {
  width: 100%;
  .banner {
    color: #ffffff;
    width: 100%;
    height: 350px;
    margin-top: 57.6px;
    background: url("../../imgs/baner.png") no-repeat center;
    background-size: cover;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      font-weight: normal;
      margin-bottom: 20px;
    }
    p {
      font-size: 40px;
    }
  }
  main {
    padding: 30px;
   background-color: #F8F8F8;
   align-items: flex-start;
    .router-box {
      margin-right: 30px;
      width: 100%;
    }
    .right-bar{
      position: sticky;
      top: 80px;
    }
  }
}
</style>
