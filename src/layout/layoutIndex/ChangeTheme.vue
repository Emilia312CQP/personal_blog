<template>
  <div class="theme-box cursor-pointer">
    <Dropdown style="margin-right: 30px">
      <i class="iconfont iconhuanfu grey-icon"></i>
      <DropdownMenu slot="list">
        <DropdownItem>
          <span class="title deep-grey">切换主题色 :</span>
          <span
            @click="toggleTheme('theme-green')"
            class="block block-green"
          ></span>
          <span
            @click="toggleTheme('theme-blue')"
            class="block block-blue"
          ></span>
          <span
            @click="toggleTheme('theme-pink')"
            class="block block-pink"
          ></span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
import { changeTheme } from "@/utils/Interface";
export default {
  name: "themeBox",
  methods: {
    toggleTheme(color) {  
      changeTheme(color);
      console.log(this.$store.getters.theme);
    },
  },
};
</script>
<style lang="scss" scoped>
.theme-box {
  display: inline-block;
  .ivu-dropdown {
    .ivu-dropdown-rel {
      .iconfont {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .ivu-dropdown-item {
      &:hover {
        background: transparent;
      }
    }
  }
  .title {
    margin-right: 4px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
