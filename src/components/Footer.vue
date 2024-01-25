<template>
<div  style="background: #205085;">
<div class="common-padding footer-content">
  <div class="footer">
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

<!--    <div class="footer-address">-->
<!--      <p>{{ $t("footer.company1") }}</p>-->
<!--      <p>-->
<!--        <span>{{ $t("footer.address") }}:</span>-->
<!--        <span>{{ $t("footer.address1") }}</span>-->
<!--      </p>-->
<!--      <p>-->
<!--        <span>{{ $t("footer.mail") }}:</span>-->
<!--        <span>info@chinaskynet.net</span>-->
<!--      </p>-->
<!--      <div class="footer-tel">-->
<!--        {{ $t("footer.tel1") }}-->
<!--      </div>-->
<!--    </div>-->

    <div class="footer-address">
      <p>{{ $t("footer.company2") }}</p>
      <p>
        <span>{{ $t("footer.address") }}:</span>
        <span>{{ $t("footer.address2") }}</span>
      </p>
      <p>
        <span>{{ $t("footer.mail") }}:</span>
        <span>info@chinaskynet.net</span>
      </p>
      <div class="footer-tel">
        {{ $t("footer.tel2") }}
      </div>
    </div>
  </div>
</div>

  <div class="copyright">
    <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备17043282号-2</a></p>
  </div>
</div>

<!-- 右浮動 -->
  <div class="quotation-fixed">
    <div class="c-contact">
      <a href="https://work.weixin.qq.com/kfid/kfc01f46ad3aa0f588d" target="_blank">
        <img src="@/assets/img/kefu.png">
        <p>{{ $t("menu.service") }}</p>
      </a>
    </div>
    <div class="quotation-c-btn" @click="getQuote">
      <a href="javascript:;" >
        <p>{{ $t("menu.quotation") }}</p>
      </a>
    </div>
  </div>


</template>

<script>
export default {
  name: "Footer",
  methods:{
    getQuote(){
      // console.log(this.$route)
      this.$quote.show(this.$route.name,this.$route.params.lang)
    }
  },
  computed: {
    getWhatsAppText() {
      // 根据当前页面的条件返回不同的文本
      if (this.$route.name === 'customize') {
        return '我想咨询定制开发';
      } else if (this.$route.name === 'website') {
        return '我想咨询网站开发';
      } else if (this.$route.name === 'APP') {
        return '我想咨询APP开发';
      }else if (this.$route.name === 'wechat') {
        return '我想咨询微信开发';
      }else if (this.$route.name === 'mall') {
        return '我想咨询网上商城';
      }else {
        return '我想咨询...';
      }
    },
    getWhatsAppLink() {
      // 在链接中使用相应的文本
      const text = encodeURIComponent(this.getWhatsAppText);
      return `https://api.whatsapp.com/send?phone=85251750111&text=${text}`;
    },
  },
}
</script>

<style scoped>
.footer-content{
  padding-top:120px;
  padding-bottom: 30px;
}

.footer{
  display: flex;
  justify-content: center;
}

.footer-qrcode{
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.sns-qrcode{
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
}


.sns-qrcode a{
  display: block;
  text-align: center;
}
.sns-qrcode img:nth-child(2), .sns-qrcode a img{
  width: 30px;
  margin: 20px auto;
}
.footer-address{
  padding-left: 30px;
}

.footer-address p{
  display: flex;
  color: #fff;
  font-size: 20px;
  padding-bottom: 15px;
}

.footer-address p span:nth-child(1){
  width: 60px;
}

.footer-address p span:nth-child(2){
  width: calc(100% - 60px);
}

.footer-tel{
  font-weight: 500;
  font-size: 32px;
  color: #03CFEF;
  padding-top: 30px;
}


.copyright{
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid rgba(244, 244, 244, 0.6);
}

.copyright p, .copyright a{
  padding: 20px;
  color: #fff;
  text-align: center;
}

.quotation-fixed{
  position: fixed;
  top: 45%;
  right: 0;
  border-bottom-left-radius: 5px;
}

.quotation-fixed a{
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.quotation-fixed img{
  width: 32px;
  padding-bottom: 6px;
  position: relative;
  z-index: 1;
}
.c-contact{
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25d366;
  margin-bottom: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
}
.c-contact a{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
}

.c-contact a img{
  padding-bottom: 10px;
}

.c-contact p{
  text-align: center;
}
.quotation-c-btn{
  background: #f88400;
  padding: 10px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}


.finger{
  cursor: pointer;
  animation: fingerHandle 1s ease infinite both;
}


.footer-qrcode img.big-pic{
  transition: transform 0.3s ease;
}

.footer-qrcode .sns-qrcode:hover img.big-pic{
  transform: scale(1.4)!important;
  /*box-shadow: 0px 0px 12px #cbcaca;*/
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

/**/
.online-server{
  position: fixed;
  right: 0;
  bottom: 0;
}

.online-server-c{
  background: #25d366;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.online-server-c img{
  width: 36px;
}

.online-server-c p{
  color: #fff;
  padding-top: 5px;
}

@media only screen and (min-width:0px) and (max-width:960px){
  .copyright{
    width: 100%;
    margin: 50px auto 0;
  }
}

@media only screen and (min-width:0px) and (max-width:991px){
  .footer{
    flex-wrap: wrap;
  }
  .footer-qrcode{
    width: 60%;
    margin: 0 auto;
  }

  .footer-address{
    padding-top: 40px;
    padding-left: 0;
  }

  .footer-tel{
     padding-top: 0;
  }

  .footer-content{
    padding-top: 50px;
  }

}


@media only screen and (min-width:0px) and (max-width:767px){
  .footer-qrcode{
    width: 100%;
  }
  .footer-address p{
     font-size: 16px;
  }

  .footer-address{
    padding-top: 20px;
  }

  .footer-tel{
    font-size: 24px;
  }

  .copyright{
   margin-top: 0px;
  }

  .copyright p{
    padding:20px;
    font-size: 12px;
  }

  .sns-qrcode{
    padding: 0 5px;
  }

}


</style>


