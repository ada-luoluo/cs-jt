<template>

  <div class="website-banner" data-aos="fade-left">
    <h1 style="color: #fff"> {{ $t("menu.contact") }}</h1>
    <img src="@/assets/img/contact_pic01.png">
  </div>

  <div class="common-padding common-tb-120">
    <div class="contact">
      <div class="contact-left" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="500">
<!--        <div class="footer-address">-->
<!--          <p class="c-name">{{ $t("footer.company1") }}</p>-->
<!--          <p>-->
<!--            <span>{{ $t("footer.address") }}:</span>-->
<!--            <span>{{ $t("footer.address1") }}</span>-->
<!--          </p>-->
<!--          <p>-->
<!--            <span>{{ $t("form.tel") }}</span>-->
<!--            <span>(852) 24902300 </span>-->
<!--          </p>-->
<!--          <p>-->
<!--            <span>{{ $t("footer.mail") }}:</span>-->
<!--            <span>info@chinaskynet.net</span>-->
<!--          </p>-->

<!--        </div>-->

        <div class="footer-address">
          <p class="c-name">{{ $t("footer.company2") }}</p>
          <p>
            <span>{{ $t("footer.address") }}:</span>
            <span>{{ $t("footer.address2") }}</span>
          </p>
          <p>
            <span>{{ $t("form.tel") }}</span>
            <span> (0755) 25100512</span>
          </p>
          <p>
            <span>{{ $t("footer.mail") }}:</span>
            <span>info@chinaskynet.net</span>
          </p>
         </div>

        <div class="footer-qrcode">
          <div class="sns-qrcode">
            <img src="@/assets/img/footer_img01.png" class="big-pic">
            <a href="https://www.facebook.com/profile.php?id=61552824635528" target="_blank">
              <img src="@/assets/img/footer_img04.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/IG.png" class="big-pic">
            <a href="https://www.instagram.com/chinaskytechnology/" target="_blank">
              <img src="@/assets/img/IG-icon.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/footer_img02.png" class="big-pic">
            <a  href="javascript:;">
              <img src="@/assets/img/footer_img05.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/WB.png" class="big-pic">
            <a href="https://weibo.com/cnskynet" target="_blank">
              <img src="@/assets/img/WB-icon-1.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/ft-wa.png" class="big-pic">
            <a href="https://api.whatsapp.com/send?phone=85251750111" target="_blank">
              <img src="@/assets/img/footer_img06.png">
            </a>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <request-form></request-form>
      </div>


    </div>


  </div>




  <div class="inner-chunk">
    <div class="map-info" ref="chartDom"></div>
  </div>


</template>

<script>

import requestForm from "@/components/requestForm";

import { ref,onMounted } from "vue"



export default {
  name: "contact",
  components:{
    requestForm
  },
  setup() {
    const chartDom = ref(null);

    const BMap = window.BMap;

    onMounted(() => {
      const map = new BMap.Map(chartDom.value);
      const point = new BMap.Point(114.114935, 22.564538); // 设置经度和纬度


      map.centerAndZoom(point, 20);

      const icon = new BMap.Icon(require("@/assets/img/dw.png"), new BMap.Size(28, 28)); // 设置自定义图标样式和大小
      const marker = new BMap.Marker(point, { icon: icon }); // 创建标记并设置坐标点和图标样式
      map.addOverlay(marker); // 将标记添加到地图上


      const label = new BMap.Label("中天动力", {
        position: point, // 文本显示位置
        offset: new BMap.Size(12, -10) // 文本偏移量
      });
      label.setStyle({
        color: "#0342bd",
        fontSize: "14px",
        fontWeight: "bold",
        border: "none",
        backgroundColor: "transparent"
      });
      map.addOverlay(label); // 将标签添加到地图上
      map.enableScrollWheelZoom(true);

    });
    return {
      chartDom,
    };
  }

}
</script>

<style scoped>
.map-info{
  width: 100%;
  height: 500px;
}

@media only screen and (min-width:0) and (max-width:767px){
  .map-info{
   height: 300px;
  }
}

</style>