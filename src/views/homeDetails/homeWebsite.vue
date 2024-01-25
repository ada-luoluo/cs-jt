<template>

<div class="common-padding">
  <div class="common-tb-120">
    <div class="common-layout other-layout">
      <div class="common-layout-right"  data-aos="flip-up" data-aos-delay="700">
        <img src="@/assets/img/home_pic05.png">
      </div>
      <div class="common-layout-left" data-aos="fade-up-left" data-aos-delay="400">
        <div class="common-content">
          <div class="common-big-title">
            {{ $t("index.website1") }}
          </div>
          <div class="customize-list other-list">
            <ul>
              <li>
                {{ $t("index.website2") }}
              </li>
            </ul>
          </div>
          <div class="common-btn ">
            <div class="org-bg">
              <router-link :to="{ path: `/${$i18n.locale}/website` }" >
                {{ $t("index.more") }}
              </router-link>
            </div>
         </div>
        </div>
       </div>
     </div>
  </div>
</div>

</template>

<script>

export default {
  name: "homeWebsite",
}
</script>

<style scoped>

</style>