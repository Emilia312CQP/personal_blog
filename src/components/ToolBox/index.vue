<template>
  <div class="c-tool-box flex-col-center box-radius text-color">
    <div class="icon-tool flex-between-center">
      <Tooltip placement="top" v-for="(item,index) in itemList" :content="item.item">
        <div :class="['icon-item','cursor-pointer',curItemIndex===index?'active':'']">
          <i
            :class="['iconfont', item.icon]"
            :style="{ fontSize: item.size }"
          ></i>
        </div>
      </Tooltip>
    </div>
    <div class="tool-title border-color">
      <i
        :class="['iconfont', itemList[curItemIndex].icon]"
        :style="{ fontSize: itemList[curItemIndex].size }"
      ></i>
      <span class="num">
        {{ itemList[curItemIndex].num }}
      </span>
      <span class="item">{{ itemList[curItemIndex].item }}</span>
    </div>
    <div class="tag-box">
         <Tag v-for="item in tagList" :key="item.title" :tagData="item" ></Tag>
    </div>
  </div>
</template>
<script>
import Tag from './Tag';
export default {
  data() {
    return {
      itemList: [
        { item: "Articles", num: 18, icon: "icon16", size: "24px" },
        { item: "Category", num: 3, icon: "iconfenlei", size: "24px" },
        { item: "tags", num: 30, icon: "iconicontag", size: "26px" },
        { item: "Timeline", num: 18, icon: "icontime", size: "26px" },
      ],
      curItemIndex: 1,
      tagList: [
        { title: "环境配置", num: 2, themeIndex: 0 },
        { title: "前端基础", num: 2, themeIndex: 1 },
        { title: "系列文章", num: 2, themeIndex: 2 },
       ],
    };
  },
  components:{Tag},
};
</script>
<style lang="scss" scoped>
.c-tool-box {
    background-color: #FFFFFF;
  min-width: 320px;
  padding: 20px 20px;
  .icon-tool {
    .icon-item {
      width: 44px;
      height: 44px;
      margin: 0 18px;
      border-radius: 50%;
      background: hsla(0, 0%, 49.8%, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 24px;
      }
    }
  }
  .tool-title {
    width: 100%;
    text-align: left;
    text-indent: 14px;
    padding: 30px 0 10px 0;
    font-size: 22px;
    .iconfont {
      font-size: 16px;
    }
    .num {
      font-size: 24px;
    }
  }
  .tag-box{
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      .ivu-tag{
          font-size: 20px;
          margin-right: 10px;
      }
      text-align: left;
  }
}
</style>
