<template>
  <div>
    <div class='board'>
      <div class='board_description'>
        <span>카테고리명</span>
        <span>글번호</span>
      </div>

      <div class='board_list'>
        <div class='post_info'>
          <span id='email'>이메일 |</span>
          <span id='date'>날짜</span>
        </div>
        <div class='post_title'>
          <b>제목</b>
        </div>
        <div class='post_contents'>
          내용
        </div>
      </div>
      <li>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
        <ul>4</ul>
      </li>
    </div>
    <!-- <SignUpModal v-bind:signUpModal='signUpModal'></SignUpModal> -->
    <SignUpFooter v-bind:signUpFooter='signUpFooter'></SignUpFooter>
  </div>
</template>

<script>
  import SignUpModal from './common/SignUpModal.vue'
  import SignUpFooter from './common/SignUpFooter.vue'
  export default {
    data(){
      return {
        signUpModal: true,
        signUpFooter : false
      }
    },
    methods : {

    },
    components : {
      SignUpModal,
      SignUpFooter
    }
  }
</script>

<style lang="less" scoped>
  .board {
    border: 1px black solid;

    .board_description {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem;
    }
    .board_list {
      border-top: 1px solid black;
      padding-bottom: 1rem;
    }
    .post_info {
      padding: 1rem;
    }
    .post_title, .post_contents{
      padding: 0.5rem 1rem;
    }
  }

</style>
