<template>
  <div :class="['c-avatar','flex-col-center', hasBorder?'box-radius':'']">
    <img src="../assets/avatar.png" alt="个人头像" />
    <div class="uname text-color">{{ uname }}</div>
    <div class="item-list flex-between-center">
      <div
        class="item flex-col-center text-color cursor-pointer"
        v-for="item in itemList"
        :key="item.item"
      >
        <span class="num">{{ item.num }}</span>
        <span class="item-title">{{ item.item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        { item: "Articles", num: 18 },
        { item: "Category", num: 3 },
        { item: "tags", num: 30 },
        { item: "Timeline", num: 18 },
      ],
    };
  },
  props:{
      hasBorder:{
          type:Boolean,
          default:true
      }
  },
  computed: {
    uname() {
      return this.$store.getters.uname;
    },
  },
};
</script>
<style lang="scss" scoped>
.c-avatar {
  background-color: #ffffff;
  min-width: 320px;
  padding: 20px 0;
  margin-bottom: 26px;
  > img {
    width: 128px;
    height: 128px;
  }
  .uname {
    font-size: 22px;
    margin: 24px;
  }
  .item-list {
    .item {
      padding: 0 15px;
      .num {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
}
</style>
