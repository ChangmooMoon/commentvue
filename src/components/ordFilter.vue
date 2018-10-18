<template>
  <div class='ord'>
    <span @click='asc'>오름차순</span>
    <span @click='asc'>내림차순</span>
  </div>
</template>

<script>
export default {
  methods : {
    asc(){
      console.log('하위~')
    }
  }
}
</script>

<style lang="less" scoped>
  .ord {
    float: right;
    margin-top: 0.5rem;
  }
</style>
