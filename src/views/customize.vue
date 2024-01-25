<template>

<div class="page-banner">
  <div class="page-banner-content">
    <h1 data-aos="zoom-in">{{ $t("page.customizeName0") }}</h1>
    <div class="quote-button">
      <a href="javascript:;" @click="getQuote" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
        {{ $t("page.quotation") }} <img src="@/assets/img/btn_pic01.png">
      </a>
    </div>
  </div>
  <img src="@/assets/img/dinzhi_pic01.png" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
</div>

  <div class="common-padding common-tb-120">
       <div class="customize-serve">
        <div class="row">
          <div class="customize-li" data-aos="fade-up">
            <img src="@/assets/img/dinzhi_pic02.png">
            <h3>{{ $t("page.customizeName1") }}</h3>
            <p>
              {{ $t("page.customizeIntro1") }}
            </p>
          </div>
          <div class="customize-li" data-aos="fade-up" data-aos-delay="200">
            <img src="@/assets/img/dinzhi_pic03.png">
            <h3>{{ $t("page.customizeName2") }}</h3>
            <p>
              {{ $t("page.customizeIntro2") }}
            </p>
          </div>
          <div class="customize-li" data-aos="fade-up" data-aos-delay="400">
            <img src="@/assets/img/dinzhi_pic04.png">
            <h3>{{ $t("page.customizeName3") }}</h3>
            <p>
              {{ $t("page.customizeIntro3") }}
            </p>
          </div>
          <div class="customize-li" data-aos="fade-up" data-aos-delay="600">
            <img src="@/assets/img/dinzhi_pic05.png">
            <h3>{{ $t("page.customizeName4") }}</h3>
            <p>
              {{ $t("page.customizeIntro4") }}
            </p>
          </div>
          <div class="customize-li"  data-aos="fade-up" data-aos-delay="800">
            <img src="@/assets/img/dinzhi_pic06.png">
            <h3>{{ $t("page.customizeName5") }}</h3>
            <p>
              {{ $t("page.customizeIntro5") }}
            </p>
          </div>
          <div class="customize-li" data-aos="fade-up" data-aos-delay="1000">
            <img src="@/assets/img/dinzhi_pic07.png">
            <h3>{{ $t("page.customizeName6") }}</h3>
            <p>
              {{ $t("page.customizeIntro6") }}
            </p>
          </div>
         </div>
       </div>
  </div>


  <div style="background: #FAFAFA;">
     <div class="common-padding common-tb-120">
       <div class="customize-system">
          <h1 data-aos="zoom-in">{{ $t("page.customizeTitle") }}</h1>
          <div class="row">

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="400">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName7") }}
               </div>
              <div class="system-more">
                <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName71") }}</p>
                <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName72") }}</p>
                <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName73") }}</p>
                <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName74") }}</p>
              </div>

             </div>
            </div>

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="600">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName8") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName81") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName82") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName83") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName84") }}</p>
                </div>
              </div>
            </div>

            <div class="customize-system-li"  data-aos="fade-right" data-aos-delay="800">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName9") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName91") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName92") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName93") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName94") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName95") }}</p>
                </div>
              </div>
            </div>

            <div class="customize-system-li"  data-aos="fade-right" data-aos-delay="1000">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName10") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName101") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName102") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName103") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName104") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName105") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="1200">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName11") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName111") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName112") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName113") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName114") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName115") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName116") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName117") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="1400">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName12") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName121") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName122") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName123") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName124") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName125") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName126") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName127") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="1600">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName13") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName131") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName132") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName133") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName134") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName135") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName136") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName137") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li"  data-aos="fade-right" data-aos-delay="1800">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName14") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName141") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName142") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName143") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName144") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName145") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName146") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName147") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName148") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li"  data-aos="fade-right" data-aos-delay="2000">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("index.customize15") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName151") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName152") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName153") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName154") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName155") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName156") }}</p>
                </div>

              </div>
            </div>

            <div class="customize-system-li" data-aos="fade-right" data-aos-delay="2200">
              <div class="customize-system-content">
                <div class="system-name">
                  {{ $t("page.customizeName16") }}
                </div>
                <div class="system-more">
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName161") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName162") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName163") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName164") }}</p>
                  <p><img src="@/assets/img/dinzhi_pic09.png">{{ $t("page.customizeName165") }}</p>
                </div>

              </div>
            </div>

          </div>
       </div>
     </div>
  </div>

  <!--    // Active: 1-网站，2-app,3-微信-->
  <project Active="0"></project>

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
import project from "@/components/Project";

export default {
  name: "customize",
  components:{
    bottomOffer,
    requestForm,
    project
  },
  methods:{
    getQuote(){
      this.$quote.show(this.$route.name,this.$route.params.lang)
    }
  },

}
</script>

<style scoped>

</style>