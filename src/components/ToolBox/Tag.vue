<template>
  <div :class="['tag','tag-theme'+tagData.themeIndex]">
      <span class="title">{{tagData.title}}</span>
      <span class="tag-num">{{tagData.num}}</span>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
      tagData:{
          type:Object,
          default:{
              title:'环境配置',
              num:34,
              themeIndex:0
          }
      }
  },
};
</script>
<style lang="scss" scoped>

 
</style>
