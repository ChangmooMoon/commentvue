<template>
  <div>
    <BoardFilter v-bind:categoryNum='categoryNum' :ord='ord' v-on:saveCategory="saveCategory"></BoardFilter>
    <ordFilter v-bind:changeOrd='changeOrd'></ordFilter>
    <Board v-bind:posts='posts' :ads='ads'></Board>
  </div>
</template>

<script>
  import axios from 'axios'
  import BoardFilter from '../components/BoardFilter.vue'
  import ordFilter from '../components/ordFilter.vue'
  import Board from '../components/Board.vue'

  export default {
    data() {
      return {
        page: 1, // 1~xx
        ord: 'asc', // asc, desc
        categoryNum: 1, // 1,2,3
        posts: [],
        ads: []
      }
    },
    mounted(){
      axios.get(`http://comento.cafe24.com/request.php?page=${this.page}&ord=${this.ord}&category=${this.categoryNum}`)
      .then((res) => {
        this.posts = res.data.list
      })
      axios.get('http://comento.cafe24.com/ads.php?page=1')
      .then((res) => {
        console.log(res)
      }) // ???? 다른건 되는데 이 axios 요청만 안됨
    },
    updated(){
      axios.get(`http://comento.cafe24.com/request.php?page=${this.page}&ord=${this.ord}&category=${this.categoryNum}`)
      .then((res) => {
        this.posts = res.data.list
      })
    },
    methods: {
      saveCategory(changed){
        this.categoryNum = changed
      },
      changeOrd(changed){

      }
    },
    components: {
      BoardFilter,
      ordFilter,
      Board
    },
  }
</script>

<style lang="less" scoped>

</style>
