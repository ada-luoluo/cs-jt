<template>

  <div class="other-padding-right ">
    <div class="common-layout other-layout">
      <div class="common-layout-right it-add-bg">
<!--        <img src="@/assets/img/home_pic09.png">-->
      </div>
      <div class="common-layout-left right-padding" data-aos="zoom-out">
        <div class="common-content">
          <div class="common-big-title">
            {{ $t("menu.it") }}
          </div>
          <div class="customize-list other-list">
            <ul>
              <li>
                {{ $t("index.it1") }}
              </li>
              <li>
                {{ $t("index.it2") }}
              </li>
              <li>
                {{ $t("index.it3") }}
              </li>
            </ul>
          </div>
          <div class="common-btn">
            <div class="other-bg-4">
              <router-link :to="{ path: `/${$i18n.locale}/it` }" >
                {{ $t("index.more") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "homeIt",
}
</script>

<style scoped>

.it-add-bg{
  height: 800px;
  background-image:url("~@/assets/img/home_pic09.png");
  background-attachment: fixed;
  background-size: cover;
}

@media only screen and (min-width:768px) and (max-width:1024px){
  .it-add-bg{
    height: 500px;
  }
}

@media only screen and (min-width:0) and (max-width:767px){
  .it-add-bg{
    height: 300px;
  }
}

</style>