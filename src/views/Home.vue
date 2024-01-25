<template>

<div class="home-ad-bg" v-if="showPopup">
     <div class="home-ad-container">
        <div class="home-ad-content">
          <div class="home-ad-slogan">
            <img src="@/assets/img/20.png">
          </div>
          <div class="home-ad-c">
              <h1>{{ $t("page.addStore01") }}</h1>
              <h2>{{ $t("page.addStore02") }}<span>{{ $t("page.addStore03") }}</span> </h2>
              <div class="home-ad-price">
                <span>{{ $t("page.addStore04") }} </span>6500.00/<span>{{ $t("page.addStore05") }}</span>
              </div>
            <div class="home-ad-incules">
              <span>{{ $t("page.addStore06") }}</span>
            </div>
            <div class="org-price">
              {{ $t("page.addStore07") }}
            </div>
            <div class="home-ad-links">
              <router-link :to="{ path: `/${$i18n.locale}/mall` }" >{{ $t("page.addStore08") }}</router-link>
            </div>
          </div>
        </div>
       <div class="home-ad-close">
         <img src="@/assets/img/ad-close.png"  @click="closePopup">
       </div>
     </div>
</div>



<div>
  <home-banner></home-banner>
  <home-customize></home-customize>
  <home-website></home-website>
  <home-app></home-app>
  <home-wechat></home-wechat>
  <home-mall></home-mall>
  <home-it></home-it>

  <div class="common-bottom common-padding common-tb-120">
   <div class="common-bottom-content">
     <request-form></request-form>
   </div>
  </div>

</div>


</template>

<script>

import homeBanner from "@/views/homeDetails/homeBanner";
import homeCustomize from "@/views/homeDetails/homeCustomize";
import homeWebsite from "@/views/homeDetails/homeWebsite";
import homeApp from "@/views/homeDetails/homeApp";
import homeWechat from "@/views/homeDetails/homeWechat";
import homeMall from "@/views/homeDetails/homeMall";
import homeIt from "@/views/homeDetails/homeIt";
import requestForm from "@/components/requestForm";


export default {
  name: "Home",
  components:{
    homeBanner,
    homeCustomize,
    homeWebsite,
    homeApp,
    homeWechat,
    homeMall,
    homeIt,
    requestForm,
  },
  data() {
    return {
      showPopup: false
    };
  },
  mounted() {
    // 检查本地存储中是否有标记，如果没有则显示弹窗
    //01-只要关闭一次以后就不会出现
    // if (!localStorage.getItem('popupClosed')) {
    //   this.showPopup = true;
    // }

    // 检查会话存储中是否有标记，如果没有则显示弹窗
    //02-每次重新打开浏览器弹窗都会打开
    if (!sessionStorage.getItem('popupClosed')) {
      this.showPopup = false;
    }
  },
  methods: {
    closePopup() {
      // 关闭弹窗
      this.showPopup = false;
      //01
      // localStorage.setItem('popupClosed', 'true');
      //02
      sessionStorage.setItem('popupClosed', 'true');
    }
  }
}
</script>

<style scoped>

</style>