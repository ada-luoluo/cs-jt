<template>

  <div class="common-padding index-diff-bg">
    <div class="common-tb-120">
      <div class="common-layout mobile-layout">
        <div class="common-layout-left" data-aos="fade-down-right" data-aos-delay="400">
          <div class="common-content">
            <div class="common-big-title">
              {{ $t("index.app0") }}
            </div>
            <div class="customize-list">
              <ul>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app1") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app2") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app3") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app4") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app5") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app6") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app7") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app8") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.app9") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize17") }}
                </li>
              </ul>
            </div>
            <div class="common-btn">
              <div class="other-bg-1">
                <router-link :to="{ path: `/${$i18n.locale}/app` }" >
                  {{ $t("index.more") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="common-layout-right"  data-aos="flip-right"  data-aos-delay="700">
          <img src="@/assets/img/home_pic06.png">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "homeApp",
}
</script>

<style scoped>

</style>