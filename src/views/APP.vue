<template>

  <div class="new-layout">
    <div class="new-layout-left"  data-aos="zoom-in" data-aos-delay="300">
      <!--     PC版按鈕   -->
      <div class="other-bg-1">
        <router-link :to="{ path: `/${$i18n.locale}/case`, query: { active: 2 } }">{{ $t("page.look") }}</router-link>
      </div>
    </div>
    <div class="new-layout-right">
      <div class="new-layout-txt">
        <div v-for="(item, index) in data" :key="index" class="new-layout-part" data-aos="zoom-in">
          <div class="new-layout-title" @click="handleClick(index)">
            <h1>{{ item.title }}</h1>
            <div class="arrow-wrapper" :class="{ 'hide-container': item.showText }">
              <div class="arrow-container" >
                <div class="arrow">
                  <img src="@/assets/img/new01.png">
                </div>
              </div>
            </div>
          </div>
          <div class="new01" :class="{ 'show-text': item.showText }">
            <p>{{ item.content }}</p>
          </div>
        </div>
        <!--     手機版按鈕   -->
        <div class="mobile-case-btn">
          <router-link :to="{ path: `/${$i18n.locale}/case`, query: { active: 2 } }">{{ $t("page.look") }}</router-link>
        </div>

      </div>
    </div>
  </div>




 <bottom-offer></bottom-offer>

  <div class="common-bottom common-padding common-tb-120">
    <div class="common-bottom-content">
      <request-form></request-form>
    </div>
  </div>

</template>

<script>
import bottomOffer from "@/components/bottomOffer";
import requestForm from "@/components/requestForm";


export default {
  name: "APP",
  components:{
    bottomOffer,
    requestForm,
  },
  data() {
    return {
      data: [
        { title: this.$t("page.appName1"),
          content: this.$t("page.appTxt1"),
          showText: true
        },
        { title: this.$t("page.appName2"),
          content: this.$t("page.appTxt2"),
          showText: false
        },
        { title: this.$t("page.appName3"),
          content: this.$t("page.appTxt3"),
          showText: false
        }
      ]
    };
  },
  methods: {
    handleClick(index) {
      this.data.forEach((item, i) => {
        item.showText = i === index;
      });
    }
  }
}
</script>

<style scoped>
.new-layout{
  background: url("~@/assets/img/app-case.jpg") center center no-repeat;
}
</style>