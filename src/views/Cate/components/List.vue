<template>
  <div class="series-list">
    <ul>
      <li v-for="item in seriesArr" :key="item.title" class="cursor-pointer">
        <router-link :to="item.path" class="text-color">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    seriesArr: {
      type: Array,
      default: ()=>[
        { title: "typescript函数式编程", path: "/cate/base/html" },
        { title: "常用工具封装", path: "/cate/base/html" },
      ],
    },
  },
};
</script>
<style lang="scss" scoped>
.series-list {
  ul {
    list-style: disc outside none;
    text-align: left;

    li > a {
      font-size: 18px;
      line-height: 2;
    }
  }
}
</style>
