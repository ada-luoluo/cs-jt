<template>
<div class="it-banner">
  <div class="mall-banner-txt">
    <h1 data-aos="zoom-in"> {{ $t("menu.it") }}</h1>
    <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("page.it1") }}</p>
<!--    <div class="it-banner-img">-->
<!--      <img v-bind:src="$t('page.it0')">-->
<!--    </div>-->
  </div>
</div>

  <!--  新增-> 开始 -->
  <div class="common-padding common-tb-120">
    <div class="ourServes">
      <h1 class="it-common-title"  data-aos="zoom-in"  data-aos-delay="600">{{ $t("net.servesBigTitle0") }}</h1>

      <div class="ourServes-content"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">
        <div class="ourServes-left">
          <div class="ourServes-title">
            <h1>{{ $t("net.servesBigTitle1") }}</h1>
            <div class="ourServes-line"></div>
          </div>
          <img src="@/assets/img/net-00.png">
        </div>
        <div class="ourServes-right">
          <h1 class="title-in-mobile">{{ $t("net.servesBigTitle1") }}</h1>
          <div class="ourServes-list">
            <div class="ourServes-li">
              <img src="@/assets/img/net-01.png">
              <h3>{{ $t("net.servesTitle1") }}</h3>
              <p>{{ $t("net.servesContent1") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-02.png">
              <h3>{{ $t("net.servesTitle2") }}</h3>
              <p>{{ $t("net.servesContent2") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-03.png">
              <h3>{{ $t("net.servesTitle3") }}</h3>
              <p>{{ $t("net.servesContent3") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-04.png">
              <h3>{{ $t("net.servesTitle4") }}</h3>
              <p>{{ $t("net.servesContent4") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-05.png">
              <h3>{{ $t("net.servesTitle5") }}</h3>
              <p>{{ $t("net.servesContent5") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-06.png">
              <h3>{{ $t("net.servesTitle6") }}</h3>
              <p>{{ $t("net.servesContent6") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-08.png">
              <h3>{{ $t("net.servesTitle7") }}</h3>
              <p>{{ $t("net.servesContent7") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/net-09.png">
              <h3>{{ $t("net.servesTitle8") }}</h3>
              <p>{{ $t("net.servesContent8") }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="ourServes-content" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
        <div class="ourServes-left">
          <div class="ourServes-title">
            <h1>{{ $t("net.servesBigTitle2") }}</h1>
            <div class="ourServes-line"></div>
          </div>
          <img src="@/assets/img/pc-00.png">
        </div>
        <div class="ourServes-right">
          <h1 class="title-in-mobile">{{ $t("net.servesBigTitle2") }}</h1>
          <div class="ourServes-list">

            <div class="ourServes-li">
              <img src="@/assets/img/pc-01.png">
              <h3>{{ $t("net.servesTitle21") }}</h3>
              <p>{{ $t("net.servesContent21") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-02.png">
              <h3>{{ $t("net.servesTitle22") }}</h3>
              <p>{{ $t("net.servesContent22") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-03.png">
              <h3>{{ $t("net.servesTitle23") }}</h3>
              <p>{{ $t("net.servesContent23") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-04.png">
              <h3>{{ $t("net.servesTitle24") }}</h3>
              <p>{{ $t("net.servesContent24") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-05.png">
              <h3>{{ $t("net.servesTitle25") }}</h3>
              <p>{{ $t("net.servesContent25") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-06.png">
              <h3>{{ $t("net.servesTitle26") }}</h3>
              <p>{{ $t("net.servesContent26") }}</p>
            </div>
            <div class="ourServes-li">
              <img src="@/assets/img/pc-07.png">
              <h3>{{ $t("net.servesTitle27") }}</h3>
              <p>{{ $t("net.servesContent27") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="our-reason  common-tb-120">
    <h1 class="it-common-title"  data-aos="zoom-in">{{ $t("net.reason0") }}</h1>
    <div class="common-padding">
      <div class="our-reason-list" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
        <div>
          <div class="our-reason-li">
            <span>01</span>
            <p>{{ $t("net.reason1") }}</p>
          </div>
          <div class="our-reason-li">
            <span>02</span>
            <p>{{ $t("net.reason2") }}</p>
          </div>
          <div class="our-reason-li">
            <span>03</span>
            <p>{{ $t("net.reason3") }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="common-padding common-tb-120">
    <div class="serve-set">
      <h1 class="it-common-title"   data-aos="zoom-in">{{ $t("net.set0") }}</h1>
      <div class="set-table"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
        <table>
          <thead>
          <tr>
            <th></th>
            <th>{{ $t("net.set1") }}</th>
            <th>{{ $t("net.set2") }}</th>
            <th>{{ $t("net.set3") }}</th>
            <th>{{ $t("net.set4") }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ $t("net.set5") }}</td>
            <td>{{ $t("net.set9") }}</td>
            <td>-</td>
            <td>{{ $t("net.set9") }}</td>
            <td>{{ $t("net.set9") }}</td>
          </tr>
          <tr>
            <td>{{ $t("net.set6") }}</td>
            <td>{{ $t("net.set9") }}</td>
            <td>-</td>
            <td>{{ $t("net.set9") }}</td>
            <td>{{ $t("net.set9") }}</td>
          </tr>
          <tr>
            <td>{{ $t("net.set7") }}</td>
            <td>-</td>
            <td>{{ $t("net.set10") }}</td>
            <td>{{ $t("net.set9") }}</td>
            <td>{{ $t("net.set9") }}</td>
          </tr>
          <tr>
            <td>{{ $t("net.set8") }}</td>
            <td>-</td>
            <td>-</td>
            <td>{{ $t("net.set11") }}</td>
            <td>{{ $t("net.set11") }}</td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!--  新增-> 结束 -->

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
  name: "it",
  components:{
    bottomOffer,
    requestForm
  }
}
</script>

<style scoped>

</style>