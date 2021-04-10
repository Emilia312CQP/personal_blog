<template>
  <div class="tag-box">
      <div class="tags">
          <span v-for="(item,index) in tagList" :key="item" class="dark-tag" :class="getThemeClass(index)">{{item}}</span>
      </div>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem'
export default {
  data() {
    return {
        tagList:[
            'all','frontend','typescript','vite','vue','env config','css','html','基础','encapsulation','forEach','partial'
        ]
    };
  },
  components:{ListItem},
  methods:{
      getThemeClass(index){
          if(index<=9){
              return 'dark-tag-'+index
          }
          return 'dark-tag-'+ index%9
      }
  }
};
</script>
<style lang="scss" scoped>
.tag-box{
    .tags{
        margin-bottom: 20px;
    }

}
</style>
