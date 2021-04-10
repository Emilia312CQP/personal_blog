<template>
  <div :class="['c-list-item','text-color',hasBorder?'box-radius':'']">
    <h2 :class="['c-list-item-hd',borderInTitle?'border-color':'']">
      {{ artData.title }}
    </h2>
    <div :class="['c-list-item-bd','deep-grey',borderInTitle?'':'border-color']">
      <span
        ><i class="iconfont icontouxiang"></i>
        <span>{{ artData.author }}</span></span
      >
      <slot/>
      <span
        ><i class="iconfont iconrili"></i> <span>{{ artData.date }}</span></span
      >
      <span>
        <i class="iconfont iconfenlei"></i>
        <span>{{ artData.cate }}</span></span
      >
      <div style="display:inline-block;">
        <i class="iconfont iconicontag"></i>
        <Tooltip v-for="(item,index) in artData.tags" :content="item">
            <span :class="['border-tag','border-tag'+index]">{{ item }}</span>  
        </Tooltip>
      </div>
      <span>
        <i class="iconfont icontianchongxing-"></i>
        <span>{{ artData.ago }}</span></span>
    </div>
  </div>
</template>
<script>
 
export default {
  props: {
    //  文章列表数据
    artData: {
      type: Object,
      default:()=> {
        return {
        title: "组合与管道",
        author: "ru shui",
        date: "2021-04-07",
        cate: "系列文章",
        tags: ["frontend", "javascript", "hight-performance"],
        ago: "8分钟前",
      }
      },
     
    },
    // 是否含有边框
    hasBorder:{
        type:Boolean,
        default:true
    },
     borderInTitle:{
          type:Boolean,
          default:true
      }
  },
};
</script>

<style lang="scss" scoped>
.c-list-item {
  padding: 20px;
  .c-list-item-hd {
    text-align: left;
    font-size: 32px;
    font-weight: normal;
    line-height: 2.5;
    margin-bottom: 10px;
  }
  .c-list-item-bd {
    text-align: left;
    padding-bottom: 20px;
    > span {
      cursor: pointer;
      display: inline-block;
      margin: 2px 12px;
      >span{
          line-height: 2.5;
      }
      .iconfont {
        margin-right: 8px;
      }
    }
    >div{
        padding-left: 12px;
        line-height: 2.5;
    }
  }
}
</style>
