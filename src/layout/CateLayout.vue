<template>
  <div class="box">
    <Header />
    <main>
      <div class="avatar-side box-shadow">
        <AvatarBox :hasBorder="false" />
        <div class="line"></div>
        <Menu accordion>
          <Submenu name="1">
            <template slot="title">
              页面布局
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              语义化标签
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="router-box"><router-view></router-view></div>
      <Footer></Footer>
    </main>
  </div>
</template>
<script>
import Header from "../components/header";
import AvatarBox from "@/components/AvatarBox";
import Footer from "@/components/Footer";
export default {
  components: { Header, AvatarBox, Footer },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  main {
    width: 100%;
    margin-top: 60px;
    padding-left: 320px;
    box-sizing: border-box;
    background-color: #ffffff;
    .avatar-side {
      position: fixed;
      left: 0;
      top: 60px;
      height: 100%;
      background-color: #ffffff;
      .line {
        width: 100%;
        height: 1px;
        background-color: #eaecef;
      }
      //   左侧菜单栏
      ::v-deep .ivu-menu{
        width: 100%!important;
        font-size: 16px;
      }
      ::v-deep .ivu-menu-vertical.ivu-menu-light:after {
        display: none;
      }
      ::v-deep .ivu-icon{
        display: none;
      }
      ::v-deep .ivu-menu-submenu-title{
        &:hover{
          background: rgb(248, 248, 248);
        }
      }
      ::v-deep .ivu-menu-item-active:not(.ivu-menu-submenu){
        background: transparent;
        &:after{
          display: none;
        }
        
      }
      ::v-deep .ivu-menu-item{
          font-size: 16px;
        }
    }

    .router-box {
      height: 1600px;
    }
  }
}
</style>
