<template>
  <div>
    <post></post>
  </div>
</template>

<script>
  import axios from 'axios'
  import Post from '../components/Post.vue'

  export default {
    components: {
      Post
    },
    // mounted(){
    //   axios.get(`http://comento.cafe24.com/request.php?page=${this.page}&ord=${this.ord}&category=${this.category}`)
    //   .then((res) => {
    //     this.posts = res.data.list
    //     console.log(this.posts)
    //   })
    // }
  }
</script>

<style lang="less" scoped>

</style>