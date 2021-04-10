<template>
  <div class="l-footer deep-grey">
    <h2 class="uname">{{ uname }}</h2>
    <p class="copyR">MIT Licensed | Copyright © 2021-present Ru Shui</p>
  </div>
</template>
<script>
export default {
  computed: {
    uname() {
      return this.$store.getters.uname;
    },
  },
};
</script>
<style lang="scss" scoped>
.l-footer {
  width: 100%;
  padding: 40px;
  border-top: 1px solid #ededed;
  background: #ffffff;
  .uname {
    font-size: 24px;
  }
}
</style>
