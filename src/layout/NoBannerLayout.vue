<template>
  <div class="box">
    <Header></Header>
    <main class="flex-between-center">
      <div class="router-box"><router-view></router-view></div>
      <div class="right-bar">
        <AvatarBox></AvatarBox>
        <ToolBox />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import AvatarBox from "@/components/AvatarBox";
import ToolBox from "@/components/ToolBox";
import Footer from "@/components/Footer";
export default {
  name: "layoutIndex",
  components: { Header, AvatarBox, ToolBox, Footer },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  main {
    margin-top: 60px;
    padding: 30px;
    background-color: #f8f8f8;
    align-items: flex-start;
    .router-box {
      margin-right: 30px;
      width: 100%;
    }
    .right-bar {
      position: sticky;
      top: 80px;
    }
  }
}
</style>
