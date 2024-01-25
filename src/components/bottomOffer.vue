<template>
  <div class="page-banner common-tb-120"  style="background: #FAFAFA;">
    <div class="page-banner-content">
      <h1 data-aos="zoom-in"> {{ $t("page.bottom") }}</h1>
      <div class="quote-button-bottom">
        <div data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
           <a href="javascript:;" class="btn btn2" @click="getQuote">
             <span class="btn-inner">
               {{ $t("page.quotation") }} <img src="@/assets/img/btn_pic01.png">
             </span>
             <div class="btnbg-x"></div>
           </a>
        </div>
        <div class="finger" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
          <img src="@/assets/img/finger.png">
        </div>
      </div>
    </div>
  </div>



</template>

<script>
import AOS from "aos";
export default {
  name: "bottomOffer",
  methods:{
    getQuote(){
      this.$quote.show(this.$route.name,this.$route.params.lang)
    }
  },
  mounted() {
    AOS.init({});
  }
}
</script>

<style scoped>
.quote-button-bottom{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.quote-button-bottom a{
  padding: 15px 40px;
  color: #000;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-top: 30px;
  font-size: 20px;
}

.quote-button-bottom a img{
  width: 32px;
  padding-left: 10px;
}

.finger{
  position:absolute;
  top: 40px;
  right: -70px;
}

.finger img{
  width: 100px;
}

.finger{
  cursor: pointer;
  animation: fingerHandle 1s ease infinite both;
}


@keyframes fingerHandle {
  0% {
    transform: none;
  }
  70% {
    transform: scale3d(.8, .8, .8);
  }
  100% {
    transform: none;
  }
}


.btn2 {
  border: 1px solid #ddd;
  position: relative;
  background: #fff;
  color: #000;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
}

.btn2:hover {
  color: #fff;
}

.btn2 .btnbg-x {
  position: absolute;
  left: -1px;
  width: 0;
  top: -1px;
  bottom: -1px;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.btn2:hover .btnbg-x {
  width: 100%;
  width: calc(100% + 2px);
  background: var(--background);
  border-radius: 50px;
}

.btn2 .btn-inner {
  padding: 0 12px;
  position: relative;
  z-index: 1;
}





</style>