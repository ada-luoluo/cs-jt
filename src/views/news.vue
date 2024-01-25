<template>
  <div class="common-padding common-tb-120">
    <div class="news-list">
      <div class="news-li" v-for="item in news" :key="item.id" @click="getMore(item.id)">
        <div class="news-time">
          <img src="@/assets/img/clock.png">{{ item.date }}
        </div>
        <div class="news-txt">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: "NewsList",
  setup() {
    const news = ref([
      {
        id: 1,
        date: '2023-09-25',
        title: 'News 1',
        content: 'This is the content of News 1.',
      },
      {
        id: 2,
        date: '2023-09-26',
        title: 'News 2',
        content: 'This is the content of News 2.',
      },
      {
        id: 3,
        date: '2023-09-27',
        title: 'News 3',
        content: 'This is the content of News 3.',
      },
    ]);

    return {
      news,
    };
  },
  methods:{
    getMore(id) {
      const lang = this.$route.params.lang; // 获取当前语言
      this.$router.push({ name: 'newsDetails', params: { lang: lang, id: id } });
    },
  }
}
</script>

<style scoped>

</style>