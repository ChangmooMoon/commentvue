<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="container">

            <div class="header">
              회원가입
            </div>

            <div class="body">
              지금 가입하면 꿈꾸던 기업에 재직중인 현직자와<br>
              <font color='red'>익명</font>으로 대화할 수 있습니다.
            </div>

            <div class="footer">
              <div class='sign-up-button facebook' @click="$emit('close')">
                페이스북 계정으로 회원가입
              </div>
              <div class='sign-up-button google' @click="$emit('close')">
                구글 계정으로 회원가입
              </div>
              <div class='sign-up-button naver' @click="$emit('close')">
                페이스북 계정으로 회원가입
              </div>
              <div class='sign-up-button after'>
                나중에 하기
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['signUpModal']
  }
</script>

<style lang="less" scoped>
  @facebook : #3b5998;
  @google : #ea4335;
  @naver: #00bd39;
  @background: rgba(0,0,0,0.7);

   .modal-mask {
    position: fixed;
    display: table;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @background;
    transition: opacity .3s ease;
    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      .container {
        width: 75vw;
        height: 90vh;
        margin: 0px auto;
        padding: 2rem;
        background-color: white;
        transition: all .3s ease;
        font-weight: bold;
        @media (max-width : 480px) {
          width: 85vw;
        }
        .header{
          text-align: center;
          font-size: 2rem;
          padding-bottom: 3rem;
        }
        .body{
          text-align: center;
          border: 1px solid black;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        .footer{
          .sign-up-button {
            text-align: center;
            color: white;
            margin-bottom: 1rem;
            line-height: 4rem;
            height: 4rem;
          }
          .google{
            background-color: @google;
          }
          .facebook{
             background-color: @facebook;
          }
          .naver{
             background-color: @naver;
          }
          .after{
            color: black;
          }
        }
      }
    }
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>