<template>
  <div class="nav">

    <div class="index-nav">
      <div class="index-nav-frame clearfix">
        <div class="nav-small" tabindex="-1" v-on:click="show = !show">
          <div class="nav-small-focus" tabindex="-1">
          </div>
          <img src="@/assets/img/menu.svg" />
        </div>
        <div v-if="show" class="mobile-nav-only">

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/` }" :class="{'active': $route.path === '/'}">
              {{ $t("menu.about") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/customize` }" :class="{'active': $route.path === '/customize'}">
              {{ $t("menu.customize") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/website` }" :class="{'active': $route.path === '/website'}">
              {{ $t("menu.website") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/app` }" :class="{'active': $route.path === '/app'}">
              {{ $t("menu.app") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/wechat` }" :class="{'active': $route.path === '/wechat'}">
              {{ $t("menu.wechat") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/mall` }" :class="{'active': $route.path === '/mall'}">
              {{ $t("menu.store") }}
            </router-link>
          </div>

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/it` }" :class="{'active': $route.path === '/it'}">
              {{ $t("menu.it") }}
            </router-link>
          </div>

<!--          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">-->
<!--            <router-link :to="{ path: `/${$i18n.locale}/news` }" :class="{'active': $route.path === '/news'}">-->
<!--              {{ $t("menu.news") }}-->
<!--            </router-link>-->
<!--          </div>-->

          <div class="index-nav-frame-line" tabindex="-1" @click="mobileClick">
            <router-link :to="{ path: `/${$i18n.locale}/contact` }" :class="{'active': $route.path === '/contact'}">
              {{ $t("menu.contact") }}
            </router-link>
          </div>


        </div>
      </div>
    </div>
 </div>

</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      isShow:true,
    }
  },
  created() {
    //判断屏幕宽度,是否默认显示下拉
    if(window.innerWidth >= 768){
      this.show= true;
    }else{
      this.isShow= false;
    }
  },
  methods: {
    mobileClick() {  //手机端导航点击后默认不显示下拉
      if(window.innerWidth < 767){
        this.show= false;
      }
    },
  },
}
</script>

<style scoped>
/***导航***/

.index-nav{
  height: 40px;
  box-sizing: border-box;
}

.index-nav-frame-line{
  color: #000;
  float: left;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  margin: 0 12px;
}

.index-nav-frame-line a{
  display: block;
}

.index-nav-frame-line:hover a{
  color: #000;
}
.index-nav-frame-line:hover a span{
  background: #fff;
}


.index-nav-frame-line:hover {
  height:auto;
  opacity: 1;
}

/*.router-link-active{*/
/*  color: var(--background);*/
/*}*/
.router-link-exact-active{
  color: var(--background);
}

.index-nav-frame-line a.active:after {
  content: '';
  display: block;
  width:100%;
  height: 1px;
  background-color: #fff;
  border-bottom: 2px solid var(--background);
  border-radius: 3px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}


.nav-small{
  display: none;
}


@media only screen and (max-width:767px) {
  .index-nav-frame-line{
    line-height: 44px;
  }
  .index-nav-frame-line-li a{
    display: block;
    color: white;
  }
  .nav-small{
    display: block;
  }
  .nav-small:focus~.index-nav-frame-line{
    height: auto;

    border-bottom: 1px solid var(--background);
  }
  .nav-small:focus .nav-small-focus{
    display: block;
  }
  .index-nav-frame{
    width: 100%;
  }
  .index-nav-frame-line{
    width: 100%;
    overflow: hidden;
  }


  .index-nav-frame-line:focus{
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  .index-nav-frame-line:focus{
    height:auto;
    opacity: 1;
  }
  .index-nav-frame-line:focus {
    color: #B63B4D;
  }

  .index-nav-frame-line:focus{
    display: block;
  }
  .index-nav{
    height: 0;
  }
  .index-nav-frame-line{
    padding: 10px;
 background: #fff;
     border-bottom: 1px solid var(--background);
  }
  .nav-small{
    display: block;
  }

  .nav-small{
    width: 36px;
    height: 36px;
   z-index: 2;
  }
  .nav-small img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 10px;
  }
  .nav-small-focus{
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
  }
  .nav-small-focus:focus{
    display: none;
  }
  .mobile-nav-only{
    /*position: absolute;*/
    top: 30px;
    left: 0;
  }

  .nav-small-focus img{
    background: #fff;
  }

  .index-nav-frame-line{
    margin: 0;
  }

}


@media only screen and (max-width:767px) {
  .index-nav{
    /*width: 100%;*/
    position: absolute;
    left:0px;
    top: 45px;
    z-index: 1;
  }
}

/**/

@media only screen and (min-width:1161px) and (max-width:1365px){
  .index-nav-frame-line {
    font-size: 18px;
    /*margin: 0 18px;*/
  }
}

@media only screen and (min-width:992px) and (max-width:1160px){
  .index-nav-frame-line {
    margin: 0 5px;
    font-size: 16px;
  }
}

@media only screen and (min-width:768px) and (max-width:991px){

  .index-nav-frame-line {
    margin: 0 5px;
    font-size: 14px;
  }


}


</style>