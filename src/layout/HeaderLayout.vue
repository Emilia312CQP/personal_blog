<template>
  <div class="box">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "@/components/Footer";
export default {
  components: { Header, Footer },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  main {
    margin-top: 60px;
    padding: 20px;
  }
  
}
</style>
