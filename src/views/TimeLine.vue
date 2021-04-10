<template>
  <div class="timeline-box dtext-color">
    <Timeline class="time-line-item">
      <TimelineItem>
        <p class="timeline-title">Yesterday Once More!</p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </TimelineItem>
      <TimelineItem>
        <p class="year">2021</p>
        <br />
      </TimelineItem>
      <TimelineItem v-for="item in timeLine" :key="item.title">
        <span class="time">{{ item.date }}</span>
        <p class="content">
          <span>{{ item.title }}</span>
        </p>
      </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeLine: [
        { date: "4/7", title: "组合与管道" },
        { date: "4/6", title: "高性能javascript" },
        { date: "4/6", title: "时间循环" },
        { date: "4/5", title: "数组的函数式编程" },
        { date: "4/2", title: "封装axios" },
        { date: "4/2", title: "闭包与高阶函数" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.timeline-box {
  padding-left: 60px;
  .time-line-item {
    p {
      cursor: pointer;
      span {
        position: relative;
        left: 30px;
      }
    }
    margin: 0 auto;
    width: 400px;
    ::v-deep .ivu-timeline-item-tail {
      border-left: 8px solid #eaecef;
      left: 4px;
    }
    ::v-deep .ivu-timeline-item-head-blue {
      border-color: #ccc;
      color: #ccc;
    }
    ::v-deep .ivu-timeline-item-head {
      width: 15px;
      height: 15px;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #ccc;
      position: absolute;
    }
    ::v-deep .ivu-timeline-item-content {
      text-align: left;
      &:nth-of-type(- n + 2) {
        transform: none !important;
      }
    }

    .time {
      font-size: 16px;
      display: inline-block;
      transform: translate(-280%, 0);
    }
    .content {
      font-size: 20px;
      transform: translate(0, -100%);
    }
    .year {
      font-size: 26px;
      line-height: 1;
      text-indent: 30px;
    }
    .timeline-title {
      text-indent: 30px;
      font-size: 20px;
      line-height: 1;
    }
  }
}
</style>
