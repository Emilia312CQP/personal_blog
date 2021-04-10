<template>
  <header class="header box-shadow z-top">
    <div class="avatar-box flex-between-center">
      <Icon type="md-menu" class="san-dao-gang cursor-pointer" />
      <img src="../assets/avatar.png" alt="头像" class="avatar" />
      <div class="can-hide">{{ uname }}</div>
    </div>
    <div class="nav-box">
      <div class="nav-bar">
        <div
          id="theme-box"
          class="theme-search-box flex-between-center"
          :style="{ right: right }"
        >
          <ThemeBox />
          <template>
            <Icon
              class="showing-in-small cursor-pointer"
              v-show="!showInput"
              type="md-search"
              @click="toggleInput"
            />
            <transition name="slide" :duration="{ enter: 800, leave: 0 }">
              <Input
                class="active-input-showing-in-small"
                size="large"
                v-show="showInput"
                @on-blur="showInput = false"
              >
                <Icon type="ios-search" slot="prefix" />
              </Input>
            </transition>
          </template>
          <Input
            :class="['search-input', inputStyleClass]"
            @on-blur="returnInputStyle"
            @on-focus="changeInputStyle"
            style="width: auto;margin-right:30px;"
            size="large"
          >
            <Icon type="ios-search" slot="prefix" />
          </Input>
        </div>
        <NavBar id="nav" ref="navBar" />
      </div>
    </div>
  </header>
</template>
<script>
import ThemeBox from "@/layout/layoutIndex/ChangeTheme";
import NavBar from "@/layout/layoutIndex/Nav";
export default {
  name: "headerBox",
  data() {
    return {
      inputStyleClass: "input-deactive",
      showInput: false,
    };
  },
  mounted() {
    this.$store.commit(
      "style/CHANGE_THEME_BOX_WIDTH",
      this.$refs.navBar.$el.clientWidth + 15 + "px"
    );
  },
  components: { ThemeBox, NavBar },
  methods: {
    changeInputStyle() {
      this.inputStyleClass = "input-active";
    },
    returnInputStyle() {
      this.inputStyleClass = "input-deactive";
    },
    toggleInput() {
      this.showInput = true;
      const dom = document.querySelector(
        ".active-input-showing-in-small>input"
      );
      this.$nextTick(() => {
        dom.focus();
      });
    },
  },
  computed: {
    uname() {
      return this.$store.getters.uname;
    },
    right() {
      return this.$store.getters.themeBoxWidth;
    },
  },
  watch: {
    rightWidth: {
      handler: function(val) {
        console.log(val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  padding: 0 15px;
  .avatar-box {
    position: absolute;
    left: 15px;
    font-size: 25px;
    height: 100%;
    .avatar {
      width: 35.2px;
      height: 35.2px;
      margin-right: 10px;
    }
  }
  .nav-box {
    position: absolute;
    right: 15px;
    height: 100%;
    .active-input-showing-in-small {
      margin-right: 30px;
      ::v-deep .ivu-input {
        width: 180px;
      }
    }
    .nav-bar {
      position: relative;
      display: inline-block;
      height: 100%;
      .theme-search-box {
        position: absolute;
        top: 0;
        height: 100%;
        .search-input {
          display: inline-block;
        }
      }
      #nav {
        padding: 0;
        
      }
    }
    .ivu-icon-ios-search:before {
      font-size: 24px;
      font-weight: bold;
      color: #aaaaaa;
      margin-left: 6px;
    }
  }
  .showing-in-small {
    font-size: 26px;
    font-weight: bold;
    color: #aaaaaa;
    margin: 4px 20px 0 6px;
  }

  .input-deactive {
    ::v-deep .ivu-input {
      width: 240px;
      background-color: #efeef4;
      transition: all 0.2s;
    }
  }
  .input-active {
    ::v-deep .ivu-input {
      background-color: #ffffff;
      width: 340px;
      transition: all 0.2s;
    }
  }
  .san-dao-gang {
    color: #242424;
    font-size: 30px;
    margin-right: 6px;
  }
}
</style>
