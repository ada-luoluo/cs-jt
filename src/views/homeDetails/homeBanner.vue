<template>
  <div class="common-padding">
    <div class="home-banner margin-tb-120">

      <div class="home-video">
        <div id="subtitle" data-aos="fade-right" data-aos-delay="400">
          <div class="welcome">
            <h1><span>{{ $t("index.welcome") }}</span>{{ $t("index.come") }}</h1>
            <h1>{{ $t("index.name") }}</h1>
          </div>
          <span v-for="(subtitle, index) in displaySubtitles" :key="index" :class="{'active': currentTime >= subtitle.startTime && currentTime <= subtitle.endTime, 'subtitle': true}">{{ subtitle.text }}</span>
        </div>
        <video data-aos="fade-left" ref="player" id="player" :src="videoSrc" @timeupdate="updateSubtitle" controls autoplay muted loop></video>

      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "homeBanner",
  data() {
    return {
      videoSrc: this.$t('video.url'), // 视频路径
      chineseSubtitles: [
        { startTime: 0, endTime: 13, text: this.$t('video.subtitles1') },
        { startTime: 14, endTime: 23, text: this.$t('video.subtitles2') },
        { startTime: 24, endTime: 37, text: this.$t('video.subtitles3') },
        { startTime: 38, endTime: 52, text: this.$t('video.subtitles4') },
        { startTime: 52.6, endTime: 64, text: this.$t('video.subtitles5') },
        { startTime: 65, endTime: 89, text: this.$t('video.subtitles6') },
        { startTime: 90, endTime: 102, text: this.$t('video.subtitles7') },
        { startTime: 103, endTime: 112, text: this.$t('video.subtitles8') },
        { startTime: 113, endTime: 117, text: this.$t('video.subtitles9') },
      ],
      chineseSimpleSubtitles: [
        { startTime: 0, endTime: 8, text: this.$t('video.subtitles1') },
        { startTime: 9, endTime: 15, text: this.$t('video.subtitles2') },
        { startTime: 16, endTime: 24, text: this.$t('video.subtitles3') },
        { startTime: 25, endTime: 34, text: this.$t('video.subtitles4') },
        { startTime: 35, endTime: 43, text: this.$t('video.subtitles5') },
        { startTime: 44, endTime: 59, text: this.$t('video.subtitles6') },
        { startTime: 60, endTime: 68, text: this.$t('video.subtitles7') },
        { startTime: 68.5, endTime: 75, text: this.$t('video.subtitles8') },
        { startTime: 76, endTime: 78, text: this.$t('video.subtitles9') },
      ],
      englishSubtitles: [
        { startTime: 0, endTime: 10, text: this.$t('video.subtitles1') },
        { startTime: 12, endTime: 19, text: this.$t('video.subtitles2') },
        { startTime: 19.5, endTime: 30.8, text: this.$t('video.subtitles3') },
        { startTime: 31, endTime: 43, text: this.$t('video.subtitles4') },
        { startTime: 43.5, endTime: 56, text: this.$t('video.subtitles5') },
        { startTime: 56.5, endTime: 76, text: this.$t('video.subtitles6') },
        { startTime: 76.8, endTime: 88.8, text: this.$t('video.subtitles7') },
        { startTime: 89.1, endTime: 92.8, text: this.$t('video.subtitles8') },
        { startTime: 93, endTime: 119, text: this.$t('video.subtitles9') },
      ],
      currentSubtitles: [],
      currentTime: 0,
    };
  },
  methods: {
    updateSubtitle() {
      this.currentTime = Math.floor(this.$refs.player.currentTime);

      // 根据当前语言选择对应的字幕数组
      let subtitles = this.$i18n.locale === 'en' ? this.englishSubtitles : this.chineseSubtitles;

      // 根据当前时间动态显示对应的字幕
      this.currentSubtitles = subtitles.filter(subtitle => {
        return this.currentTime >= subtitle.startTime && this.currentTime <= subtitle.endTime;
      });
    },
  },
  computed: {
    // 根据当前语言选择对应的字幕数组
    displaySubtitles() {
      switch (this.$i18n.locale) {
        case 'en':
          return this.englishSubtitles;
        case 'hk':
          return this.chineseSubtitles;
        case 'cn':
          return this.chineseSimpleSubtitles;
        default:
          return this.chineseSubtitles;
      }
    },
  },
};
</script>


<style scoped>

.welcome{
  padding-bottom: 20px;
}

.welcome h1{
  font-size: 50px;
}

.welcome h1 span{
  font-size: 60px;
  color: var(--background);
}


.home-video {
  width: 100%;
  display: flex;
  align-items:  center;
  justify-content: center;
}
#player {
  /*视频512 加背景542*/
  background:url("~@/assets/img/home_pic03.png") no-repeat;
  background-size: 100%;
  padding: 15px;
  width: 512px;
}
#subtitle {
  color: #000;
  padding-right: 100px;
}

.subtitle{
  width: 100%;
  display: block;
  padding: 3px 0;
  font-size:18px;
}

.active{
  color:var(--background);
  font-weight: bold;
}

.en .welcome h1 {
  font-size: 40px;
}
.en .welcome h1 span{
  padding-right: 10px;
  font-size: 48px;
}

.en .subtitle{
  font-size: 16px;
}

@media only screen and (min-width:1200px) and (max-width:1600px){
  .welcome h1, .en .welcome h1{
    font-size: 36px;
  }
  .welcome h1 span{
    font-size:48px;
  }

  #subtitle {
    padding-right: 50px;
  }

}

@media only screen and (min-width:0px) and (max-width:1200px){

  .home-video{
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  .welcome h1{
    font-size: 24px;

  }
  .welcome h1 span, .en .welcome h1 {
    font-size: 30px;
  }
  #subtitle {
    width: 100%;
    padding-right: 0;
  }
  #player{
    margin-bottom: 20px;
  }

}

@media only screen and (min-width:0px) and (max-width:768px){
  #player{
    width: 100%;
    height: inherit;
  }
  .welcome{
    padding-bottom: 5px;
  }
  .welcome h1 span, .en .welcome h1 span{
    font-size: 24px;
  }
  .welcome h1, .en .welcome h1{
    font-size: 20px
  }

}



</style>