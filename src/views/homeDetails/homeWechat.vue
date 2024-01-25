<template>

  <div class="common-padding">
     <div class="common-layout other-layout">
        <div class="common-layout-right" data-aos="zoom-in"  data-aos-delay="400">
          <img src="@/assets/img/home_pic07.png">
        </div>
        <div class="common-layout-left right-padding"  data-aos="zoom-in-up"  data-aos-delay="700">
          <div class="common-content">
            <div class="common-big-title">
              {{ $t("index.wechat1") }}
            </div>
            <div class="customize-list other-list">
              <ul>
                <li>
                  {{ $t("index.wechat2") }}
                </li>
              </ul>
            </div>
            <div class="common-btn ">
              <div class="other-bg-2">
                <router-link :to="{ path: `/${$i18n.locale}/wechat` }" >
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
  name: "homeWechat",
}
</script>

<style scoped>

</style>