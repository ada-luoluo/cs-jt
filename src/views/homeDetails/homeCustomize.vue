<template>

<div class="common-padding index-diff-bg">
  <div class="common-tb-120">
      <div class="common-layout mobile-layout">
       <div class="common-layout-left">
          <div class="common-content" data-aos="zoom-in" data-aos-delay="400">
            <div class="common-big-title">
              {{ $t("index.customize0") }}
            </div>
            <div class="customize-list">
              <ul>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize1") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize2") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize3") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize4") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize5") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize6") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize7") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize8") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize9") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize10") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize11") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize12") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize13") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize14") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize15") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize16") }}
                </li>
                <li>
                  <img src="@/assets/img/index-list.png">{{ $t("index.customize17") }}
                </li>
              </ul>
            </div>
            <div class="common-btn">
              <div>
              <router-link :to="{ path: `/${$i18n.locale}/customize` }" >
                {{ $t("index.more") }}
              </router-link>
              </div>
            </div>
          </div>
       </div>
        <div class="common-layout-right"  data-aos="fade-down" data-aos-delay="700">
          <img src="@/assets/img/home_pic04.png">
        </div>
      </div>
  </div>
</div>

</template>

<script>

export default {
  name: "homeCustomize",
}
</script>

<style scoped>



</style>