<template>
  <div class="banner-2023">
    <div class="banner-links">
      <a href="https://api.whatsapp.com/send?phone=85251750111&text=我想咨询网上商城" target="_blank"></a>
    </div>
    <div class="gif">
      <img src="@/assets/img/yh.gif">
    </div>
    <img v-bind:src="$t('page.addStore21')">
  </div>

  <div class="common-padding common-tb-120">
    <h1 class="store-title">{{ $t("page.addStore09") }}</h1>
   <div class="store-container">
     <div class="store-2023-c">
       <div class="store-c-left">
         <h4>{{ $t("page.addStore10") }}</h4>
         <div class="store-m-list">
           <ul>
             <li>
               <img src="@/assets/img/add-s-icon-1.png"> <span>{{ $t("page.addStore11") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-2.png"> <span>{{ $t("page.addStore12") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-3.png"> <span>{{ $t("page.addStore13") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-4.png"> <span>{{ $t("page.addStore14") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-5.png"> <span>{{ $t("page.addStore15") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-6.png"> <span>{{ $t("page.addStore16") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-7.png"> <span>{{ $t("page.addStore17") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-8.png"> <span>{{ $t("page.addStore18") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-9.png"> <span>{{ $t("page.addStore19") }}</span>
             </li>
             <li>
               <img src="@/assets/img/add-s-icon-10.png"> <span>{{ $t("page.addStore20") }}</span>
             </li>
           </ul>
         </div>
         <div class="store-price">
           <div class="store-price-c">
             <h3><span>{{ $t("page.addStore04") }}</span>6500.00/<span>{{ $t("page.addStore05") }}</span></h3>
             <p>{{ $t("page.addStore06") }}</p>
           </div>
           <div class="store-rent">
             <a href="https://api.whatsapp.com/send?phone=85251750111&text=我想咨询网上商城" target="_blank">
               {{ $t("page.rentBtn") }}
             </a>
           </div>
         </div>
       </div>
       <div class="store-c-right">
         <img src="@/assets/img/mall.png">
       </div>
     </div>

   </div>
  </div>

  <div class="common-bottom common-padding common-tb-120">
    <div class="common-bottom-content">
      <request-form></request-form>
    </div>
  </div>

</template>

<script>

import requestForm from "@/components/requestForm";
export default {
  name: "mall",
  components:{
    requestForm,
  },
  methods:{
    getQuote(){
      this.$quote.show(this.$route.name,this.$route.params.lang)
    }
  }

}
</script>

<style scoped>

</style>