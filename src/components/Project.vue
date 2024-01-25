<template>
   <section class="common-padding common-tb-120  case-bg">
    <div class="">
      <div class="case-title">
        <h1 class="h1Title" data-aos="zoom-in">{{$t("project.caseTit")}}</h1>
      </div>
      <div class="classificationDiv case-classificationDiv">
        <ul data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
          <li :class="isActive === 0 ?'active':''" @click="cluckCase(0)">
            <div class="btn btn3">
              <span class="btn-inner">ALL</span>
              <div class="btnbg-x"></div>
            </div>
          </li>
          <li v-for="item in typeList" :key="item.id" :class="isActive === item.id ?'active':''" @click="cluckCase(item.id)">
            <div class="btn btn3">

              <span class="btn-inner">{{item.name}}</span>
              <div class="btnbg-x"></div>
            </div>
          </li>
<!--          <li @click="cluckCase(Active)" :class="isActive === Number(Active) ?'active':''">{{}}{{typeName}}</li>-->
        </ul>
      </div>
      <transition name="caseDiv"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
      >
         <div class="projectBox" v-if="isCaseDiv"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
            <div class="projectBoxItem" v-for="item in caseList"  @click="item.type === 2 ? showModal(item.id) : toLink(item.link)" :key="item.id">

              <div class="projectBoxModal" v-if="item.type === 2">
                <input :ref="'modalTit'+item.id" :value="item.name">
                <textarea :ref="'modalText'+item.id" v-model="item.content"></textarea>
              </div>

              <div class="projectImgPc">
                  <img :src="item.host_image">
              </div>
              <div class="projectImgWeb">
                <img :src="item.vice_image" v-if="imgShow">
              </div>
              <div class="projectBoxText">
                <div>
                  <div class="rpTop">
                    <img :src="item.logo_image">
                    <p class="rpTitle">{{ item.name }}</p>
                  </div>
                  <div class="rpText">
                    <p>{{ item.description }}</p>
<!--                    查看   type 0 无操作，1 链接，2 content-->
                    <a :href="item.link" target="_blank" v-if="item.type === 1"><span>{{$t("project.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                    <a href="javascript:;" @click="showModal(item.id)" v-if="item.type === 2"><span>{{$t("project.ChaKan")}}</span><i class="iconfont icon-Right-"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </transition>

      <div class="textCenter pro-more-btn" v-show="isMoreBtn">
        <div class="btn btn13" @click="getMore">
           <span class="btn-inner">{{ $t("project.JiaZaiGD") }}</span>
            <div class="bgsqr1"></div>
            <div class="bgsqr2"></div>
        </div>
      </div>
    </div>
<!--彈窗-->
    <div class="modalBigDiv">
      <transition name="caseModal"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
      >
        <div class="modalBgDiv" v-if="isCaseModal">
          <div class="modalTextDiv">
            <div class="modalCase">
              <p class="modalClose" @click="modalClose"><i>X</i></p>
              <div class="modalCaseText">
                <strong>{{ modalTitle }}</strong>
                <div v-html="modalContent"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </section>

</template>

<script>
import {casesService} from "@/network/main";

import AOS from "aos";
export default {
  name: 'Project',
  // Active: 1-网站，2-app,3-微信
  props:["Active"],
  data() {
    return {
      isActive: 0,
      isCaseDiv: true,
      isCaseModal: false,
      caseList: [],
      isMoreBtn: false,
      modalTitle: "",
      modalContent: "",
      Page: 1,
      imgShow: false,
      // typeName: ""
      typeList: []
    }
  },
  created(){
    if (this.Active){
      this.isActive = Number(this.Active)
    }
    this.getCaseList()
    if (document.documentElement.clientWidth < 800){
      this.imgShow = false
    } else {
      this.imgShow = true
    }
  },
  methods: {
    // 获取案例数据
    getCaseList() {
      let that =this
      casesService({
        "caseId": that.isActive,
        "page": that.Page
      }).then(res => {
        if (res.status === 200){
          let data = res.data.data.cases
           that.caseList.push(...data)
           that.typeList = res.data.data.categories
            console.log(data.length)
          // that.typeName = res.data.data.categories[that.Active - 1].name
          if (data.length == 9){
             that.isMoreBtn = true
          }else {
            that.isMoreBtn = false
          }
        }
      })
    },
    // 案例分类
    cluckCase(Type) {
      const that = this
      that.isActive = Number(Type)
      that.isCaseDiv = false
      that.caseList = []
      that.Page = 1
      that.getCaseList()
      setTimeout(function (){
        that.isCaseDiv = true
      },600)
    },
    modalClose() {
      this.isCaseModal = false
    },
    showModal(Id) {
      this.isCaseModal = true
      this.modalTitle = this.$refs[`modalTit${Id}`][0].value
      this.modalContent = this.$refs[`modalText${Id}`][0].value
    },
    toLink (Url){
      if (Url != null){
        window.open(Url,'_blank');
      }
    },
    // 加载更多
    getMore (){
      this.Page++
      this.getCaseList()
    }
  },
  mounted() {
    AOS.init({});
  }
}
</script>

<style scoped>
@import "../assets/css/project.css";
</style>