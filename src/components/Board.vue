<template>
  <div>
    <div class='board'>

      <div v-for="(post, index) in posts" :key='post.no' class='board_list'>

        <div class='post_info'>
          <div class='info_header'>
            <span>{{post.category_no}}</span>
            <span>{{post.no}}</span>
          </div>
          <span>{{post.email}}|</span>
          <span>{{post.updated_at}}</span>
        </div>
        <div class='post_title'>
          <b>{{post.title}}</b>
        </div>
        <div class='post_contents'>
          {{abstract[index]}}
        </div>
        <div class='commercial' v-if='(index+1) % 3 === 0'>
        <div>Sponsored</div>
        <div class='commercial-content'>
          <img class='commercial-pic' src='http://comento.cafe24.com/public/images/test1.jpg'>
          <div class='commercial-text'>
            <div class='title'><b>광고 get요청이 안되요...</b></div>
            <div>광고내용을가져와주세요광고내용을...</div>
          </div>
        </div>
      </div>

      </div>

    </div>
    <div class='button'>
      More
    </div>
  </div>
</template>

<script>
  export default {
    props: ['posts','ads'],
    computed : {
      abstract(){
        return this.posts.map((post,index) => {
          if(post.contents.length > 150){
            return post.contents.substring(0,149) + '.......';
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .board {
    border: 1px black solid;
    border-top : none;
    .board_list {
      border-top: 1px solid black;
      padding-bottom: 1rem;
    }
    .post_info {
      padding: 1rem;
    }
    .post_title, .post_contents {
      padding: 0.5rem 1rem;
    }

    .commercial {
      border-top : 1px solid black;
      padding: 0.5rem 1rem;
      .commercial-content {
        display: flex;
        .commercial-pic {
          width: 50%;
          height: 50%;
        }
        .commercial-text {
          padding: 1rem;
          .title {
            font-size: 1.1rem;
            padding-bottom: 1rem;
          }
        }
      }
    }
  }

  .button {
    margin-top: 1rem;
    font-weight: bold;
    color: white;
    background-color: #00c854;
    border: 1px solid black;
    height: 30px;
    text-align: center;
  }

</style>
