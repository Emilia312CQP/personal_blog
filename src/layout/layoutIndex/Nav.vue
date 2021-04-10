<template>
  <div class="nav-bar">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" to="/">
        <a href="javascript:;">首页</a>
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <a href="javascript:;">分类</a>
        </template>
        <MenuGroup title="前端基础">
          <MenuItem name="2-1" to="/cate/base/html">HTML</MenuItem>
          <MenuItem name="2-2"  to="/cate/base/javascript">Javascript</MenuItem>
          <MenuItem name="2-3" to="/cate/base/css">Css</MenuItem>
        </MenuGroup>
        <MenuGroup title="系列文章">
          <MenuItem name="2-4" to="/cate/series/css" >函数式编程</MenuItem>
          <MenuItem name="2-5" to="/cate/series/css">常用工具封装</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="3" to="/tag">
        <a href="javascript:;">标签</a>
      </MenuItem>
      <MenuItem name="4" to="/timeline">
        <a href="javascript:;">归档</a>
      </MenuItem>
      <MenuItem name="5" to="/about">
        <a href="javascript:;">关于</a>
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme1: "light",
    };
  },
  methods:{
    goPage(path){
      this.$router.replace(path);
    },
  },
 
};
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 100% !important;
  padding: 0;
   
  .ivu-menu-item{  
      margin-right: 5px;
      padding: 0 10px;
     ::v-deep a{
          color:#666!important;
          font-size:20px!important;
          font-weight: normal!important;
      }
  }
  .ivu-menu-submenu{
      margin-right: 5px;
      padding: 0 10px;
  }
  .ivu-menu-submenu-title{
        a{
          color:#666!important;
          font-size:20px!important;
          font-weight: normal!important;
      }
  }
}
</style>
