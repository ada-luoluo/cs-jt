<template>
<div id="header">
  <div class="header-content" id="test">
    <div class="logo">
      <router-link :to="{ path: `/${$i18n.locale}/` }" >
        <img src="@/assets/img/nav_logo.png">
      </router-link>
    </div>

    <Navbar/>

    <div class="top-right">

      <div class="language">
        <div class="language-default" v-on:click="show = !show">
          <img src="@/assets/img/nav_lan.png">
        </div>
        <Transition name="slide-fade">
        <div class="language-list" v-if="show">
          <ul>
            <li>
              <a @click="changeLanguage('cn')" :class="{active:language === 'cn'}">简体</a>
            </li>
            <li>
              <a @click="changeLanguage('en')" :class="{active:language === 'en'}">ENG</a>
            </li>
          </ul>
        </div>
        </Transition>
      </div>
    </div>
  </div>
</div>

  <div class="top-padding">

  </div>


</template>


<script>

import Navbar from "@/components/Navbar";

import i18n from "@/lang/index";

export default {
  name: "Header",
  components: {
    Navbar,
  },
  data() {
    return {
      language:localStorage.getItem("language") == null ? 'cn' :localStorage.getItem("language"), //判断当前语言,给当前语言加active
      show:false,
      mShow:false,
      showModal:false,
    }
  },

  mounted() {
    // 从URL中获取语言参数lang
    const langFromUrl = this.$route.params.lang || window.location.pathname.split('/')[1];
    // 从localStorage中读取选中的语言
    const savedLanguage = localStorage.getItem('changeLanguage');

    // 设置当前语言名称
    if (savedLanguage) {
      this.langName = savedLanguage;
    } else {
      this.langName = '简体中文'; // 默认语言
    }

    console.log(langFromUrl)
    // 设置当前语言
    if (langFromUrl) {
      i18n.global.locale = langFromUrl;
    } else if (savedLanguage) {
      i18n.global.locale = savedLanguage;
    } else {
      i18n.global.locale = 'cn'; // 默认语言
    }

    // 根据当前语言设置文档元素的类名
    if (i18n.global.locale === 'en') {
      document.documentElement.classList.add('en');
    } else {
      document.documentElement.classList.remove('en');
    }
  },
  methods: {
    navClick() {  //点击不显示下拉
      this.mShow = false;
    },
    other(){
      this.mShow = false;
      this.showModal = true;
    },
    //语言切换
    changeLanguage(language) {

      localStorage.setItem("language", language);
      i18n.global.locale = language;
      this.language = language;
      console.log(this.language)

      this.show = false;

      // 使用 `router.push` 更新 URL 中的语言参数
      this.$router.push({ name: this.$route.name, params: { lang: language } });

      //切换到en，增加en样式
      if (localStorage.getItem("language") == 'en') {
        document.documentElement.classList.add('en');
      } else {
        document.documentElement.classList.remove('en');
      }

    },
  },

}
</script>

<style scoped>



#header {
  height: 126px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
}
.header-content{
  width: 100%;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 10px 60px;
}

.logo img{
 width: 106px;
}

.top-right{
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-whatsapp img{
  width: 45px;
}

.language{
  position: relative;
  cursor: pointer;
}

.language-default{
  display: flex;
  font-size: 14px;
  align-items: center;
}

.language-default img{
   width: 45px;
}

.language-list{
  width: 45px;
  position: absolute;
  top: 50px;
  left: 0;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
}
.language-list ul{
  display: block;
  background: #fff;
}
.language-list ul li{
  text-align: center;
  list-style: none;
}

.language-list ul li a {
  display: block;
  padding: 15px 0;
  color: #000;
}

.language-list ul li a.active{
  border-bottom: 1px solid var(--background);
  color:var(--background);
}
@media (min-width: 1921px) {
  .header-content{
    padding: 10px 0;
  }
}


@media only screen and (min-width:0px) and (max-width:1250px){
  .header-content{
     padding: 10px 10px;
  }
}

@media only screen and (min-width:768px) and (max-width:1067px){
  .top-right{
    position: absolute;
    top: 10px;
    right: 20px;
    width: 100px;
  }

  .top-whatsapp img, .language-default img{
     width: 36px;
  }

  .nav{
    padding-top: 20px;
  }

}


@media only screen and (min-width:0px) and (max-width:767px){

  #header {
    height: 106px;
  }

  .top-padding {
    padding-top: 106px;
  }
    .header-content{
      flex-wrap: wrap;
    }

    .top-right{
      width: 100%;
      justify-content: flex-end;
    }
    .top-whatsapp{
      margin-right: 20px;

    }

  .top-whatsapp img, .language-default img{
    width: 36px;
    position: relative;
  }

    .logo{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }

    .logo img{
      width: 80px;
      z-index: 9;
      position: static;
    }


  .header-content{
    height: inherit;
  }
  .language-list{
    left: -5px;
  }

}

</style>