<template>
  <div class='footer-signUp'>
    <div>
      지금 가입하면 꿈꾸던 기업에 재직중인 현직자와 <font color='red'>익명</font>으로 대화할 수 있습니다.
    </div>
    <span class='signup-button hide'>
      SNS계정으로 빠른 회원가입
    </span>
    <span class='hide'>
      또는
    </span>
    <span class='signup-button hide'>
      로그인
    </span>
    <button class='signup-button mobile'>
      회원가입
    </button>
  </div>
</template>
<script>
  export default {

}
</script>
<style lang='less' scoped>
  .footer-signUp{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20vh;
    font-size: 1.1rem;
    text-align: center;
    line-height: 4rem;
    border: 1px solid grey;
    padding: 1rem;
    font-weight: bold;
    .mobile {
      display: none;
    }
    @media(max-width: 480px){
      line-height: 2rem;
      height: 25vh;
      .hide {
        display: none;
      }
      .mobile {
        display: initial;
        width: 80vw;
      }
    }
    .signup-button {
      color: white;
      padding: 0.5rem;
      background-color: #00c854;
      border: 1px solid grey;
      margin: 1rem;
    }
    .login{
      background-color: #9b9b9b;
      color: black;
    }
  }
</style>


