<template>
  <div class="box">
    <!-- 面包屑 -->
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <ListItem :hasBorder="false" :borderInTitle="false">
      <span><i class="iconfont iconyj"></i> <span>...</span></span>
    </ListItem>
    <template>
      <div class="main">
        <List />
      </div>
    </template>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem";
import List from "@/views/Cate/components/List";
export default {
  components: {
    ListItem,
    List,
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding: 30px;
  ::v-deep {
    .ivu-breadcrumb {
      text-align: left;
    }
  }
  .main{
    padding: 20px 30px;
  }
}
</style>
