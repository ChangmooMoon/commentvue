<template>
  <div class='filterBox'>
    <b-button @click="showModal">필터</b-button>

    <b-modal ref="myModalRef" hide-footer title="필터">
      <div class="d-block text-center">
        <span>
          <input type="checkbox" id='1' v-model="category" true-value='1'>
          <label for="1">카테고리 1</label>
        </span>
        <span>
          <input type="checkbox" id='2' v-model="category" true-value='2'>
          <label for="2">카테고리 2</label>
        </span>
        <span>
          <input type="checkbox" id='3' v-model="category" true-value='3'>
          <label for="3">카테고리 3</label>
        </span>
      </div>
      <b-btn class="mt-3 close" variant="outline-danger" block @click="saveCategory">저장</b-btn>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: ['categoryNum','ord'],
    data : () => {
      return {
        category: 1
      }
    },
    methods : {
      showModal () {
        this.$refs.myModalRef.show()
      },
      hideModal () {
        this.$refs.myModalRef.hide()
      },
      saveCategory(){
        this.$emit('saveCategory',this.category)
        this.hideModal()
      }
    }
}
</script>

<style lang="less" scoped>
  .filterBox {
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    height: 7vh;
    .close {
      width: 50px;
      &:hover {
        background-color: white;
      }
    }
    .checked{
      font-weight: bold;
      color : red;
    }
  }
</style>
