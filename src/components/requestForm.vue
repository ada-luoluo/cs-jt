<template>

  <div class="">
      <div class="contactUsBox"  data-aos="fade-up" data-aos-duration="1500">
        <h2>{{ $t("form.titles") }}</h2>
        <p>{{ $t("form.titleText") }}</p>
        <div class="contactInputDiv">
          <div class="inputItem">
            <label><span>*</span> {{ $t("form.name") }}</label>
            <div>
              <input type="text" :placeholder='$t("form.placeholderName")' v-model="aboutName" @blur="blurName"/>
              <p>{{name}}</p>
            </div>

          </div>
          <div class="inputItem">
            <label><span>*</span> {{ $t("form.tel") }}</label>
            <div>
              <input type="tel" :placeholder='$t("form.placeholderTel")' v-model="aboutPhone" oninput="value=value.replace(/[^\d]/g, '')" @blur="blurPhone"/>
              <p>{{tel}}</p>
            </div>
          </div>
          <div class="inputItem">
            <label><span>*</span> {{ $t("form.mail") }}</label>
            <div>
              <input type="email" :placeholder='$t("form.placeholderEmail")' v-model="aboutEmail" @blur="blurEmail"/>
              <p>{{email}}</p>
            </div>
          </div>
          <div class="inputItem">
            <label>{{ $t("form.message") }}</label>
            <div>
              <textarea :placeholder='$t("form.placeholderText")' ref="textarea" v-model="aboutMessage"></textarea>
              <p style="font-size: 14px; color: #999;margin-top:5px; bottom: inherit"><span style="color: #f00">*</span>{{ $t("form.tips") }}</p>
            </div>
          </div>
          <div class="inputItem">
            <label></label>
            <div class="contactSubmit">
              <button @click="aboutSubmit" class="btn btn13">
                <span class="btn-inner"> {{ $t("form.submit") }}</span>
                <div class="bgsqr1"></div>
                <div class="bgsqr2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

    <!--驗證-彈窗-->
    <Vcode :show="isShow" @success="onSuccess" @close="onClose"
      :successText="$t('form.successText')" :sliderText="$t('form.sliderText')" :failText="$t('form.failText')"
    />

  </div>

</template>

<script>
import { contentService } from "@/network/main";
import Vcode from "vue3-puzzle-vcode";
import AOS from "aos";
export default {
  name: "requestForm",
  data() {
    return {
      // 联络我们
      aboutName: '',
      aboutEmail: '',
      aboutPhone: '',
      aboutMessage: '',
      //提示语
      name: '',
      email: '',
      tel: '',
      // 驗證
      isShow: false
    }
  },
  components:{
    Vcode
  },

  methods:{
    onSuccess() {
      const that = this;
      that.isShow = false; // 隱藏验证

      // 判断是否来自于 mall，如果是则 type_name 填写“租用商城”，否则留空
      const from = this.$route.query.from;
      let params = {
        "name": that.aboutName,
        "email": that.aboutEmail,
        "tel": that.aboutPhone,
        "message": that.aboutMessage
      };
      if (from === 'mall') {
        params.store = this.$t("form.online");
      } else if (this.type_name !== '') {
        params.store = this.store;
      }

      contentService(params).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          window.location.reload()
        }
      })
    },
    aboutSubmit(){
      let that = this

      that.blurName()
      that.blurPhone()
      that.blurEmail()

      if (that.name === "" && that.tel === "" && that.email === ""){
        that.isShow = true
      }
    },
    // 驗證
    blurName() {
      if (this.aboutName === "") {
        this.name = this.$t("form.placeholderName")
      } else {
        this.name = ""
      }
    },
    blurPhone() {
      if (this.aboutPhone === "") {
        this.tel = this.$t("form.placeholderTel")
      } else {
        this.tel = ""
      }
    },
    blurEmail() {
      let verifyEmail = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (this.aboutEmail === "") {
        this.email = this.$t("form.placeholderEmail")
      } else if (!verifyEmail.test(this.aboutEmail)) {
        this.email = this.$t("form.placeholderEmail2")
      } else {
        this.email = ""
      }
    },
    // 用户点击遮罩层，应该关闭模态框
    onClose() {
      this.isShow = false;
    },

  },
  mounted() {
    AOS.init({ });
  }
}
</script>

<style scoped>
@import "../assets/css/contactUs.css";
</style>