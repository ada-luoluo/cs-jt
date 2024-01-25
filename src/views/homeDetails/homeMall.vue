<template>

  <div class="common-padding index-diff-bg">
    <div class="common-tb-120">
      <div class="common-layout mobile-layout">
        <div class="common-layout-left" data-aos="zoom-in-down" data-aos-delay="400">
          <div class="common-content">
            <div class="common-big-title">
              {{ $t("menu.store") }}
            </div>
            <div class="customize-list">
              <ul>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall1") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall2") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall3") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall4") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall5") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall6") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall7") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.mall8") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize17") }}
                </li>
              </ul>
            </div>
            <div class="common-btn">
              <div class="other-bg-3">
                <router-link :to="{ path: `/${$i18n.locale}/mall` }" >
                  {{ $t("index.more") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="common-layout-right" data-aos="flip-right" data-aos-delay="700">
          <img src="@/assets/img/home_pic08.png">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "homeMall",
}
</script>

<style scoped>

</style>