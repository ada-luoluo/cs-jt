<template>
  <div class="common-padding common-tb-120">
    <div class="news-more">
      <h2>{{title}}</h2>
      <h5><img src="@/assets/img/clock.png">{{ date }}</h5>
      <div class="editor">
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsDetails",
  data() {
    return {
      title:"biati1111 111",
      date: "2023.12.03",
      content:"111111 1111 1"
    }
  }
}
</script>

<style scoped>

</style>