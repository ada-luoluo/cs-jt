<template>
  <div class="modalBigDiv">
    <transition name="caseModal"
                enter-active-class="animated fadeInDown"
                leave-active-class="animated fadeOutDown"
    >
      <div class="modalBgDiv" v-show="visible">
        <div class="modalTextDiv add-css-1">
          <div class="modalQuote">
            <p class="modalClose" @click="hide"><i>X</i></p>
            <div class="modalQuoteText">
              <h2>{{ inputText.getQuote }}</h2>
              <div class="quoteInput">
                <div class="quoteInputIt input-number" v-if="isItDiv === 'it'">
                 <!--  it-->
                  <div>
                    <span>{{ inputText.itText2 }}</span>
                     <input type="number" v-model="itNumber2" oninput="value=value.replace(/[^\d]/g, '')">
                     <span>{{ inputText.itText3 }}</span>
                  </div>
                  <div>
                     <span>{{ inputText.itText1 }}</span>
                      <input type="number" v-model="itNumber1" oninput="value=value.replace(/[^\d]/g, '')">
                      <span>{{ inputText.itText3 }}</span>
                  </div>

                </div>
                <div class="quoteInputOther" v-else>
                  <div class="divs1">
                    <label>{{ inputText.otherText1 }}</label>
                    <div>
                      <select v-model="selectVal">
                        <option value="">{{ inputText.otherText2 }}</option>
                        <option v-for="(item,i) in selectStr" :key="i">{{ item }}</option>
                        <option value="其它">{{  inputText.otherText7 }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-other-input" v-if="selectVal === '其它'">
                    <input type="text" v-model="otherInputVal" @input="onOtherInputChange" />
                  </div>
                  <div class="divs2">
                    <label>{{ inputText.otherText3 }}</label>
                    <ul>
                      <li>
                        <input type="checkbox" v-model="checkboxValues" value=簡體中文> <span>{{ inputText.otherText4 }}</span>
                      </li>
                      <li>
                        <input type="checkbox" v-model="checkboxValues" value="繁體中文"> <span>{{ inputText.otherText5 }}</span>
                      </li>
                      <li>
                        <input type="checkbox" v-model="checkboxValues" value="英文"> <span>{{ inputText.otherText6 }}</span>
                      </li>
<!--                      <li>-->
<!--                        <input type="checkbox" v-model="checkboxValues" value="其它"> <span>{{ inputText.otherText7 }}</span>-->
<!--                      </li>-->
                    </ul>
                  </div>
                  <div class="divs2">
                    <label>{{ inputText.otherText8 }}</label>
                    <ul>
                      <li>
                        <input type="radio" v-model="radioValues" value="1"> <span>{{ inputText.otherText9 }}</span>
                      </li>
                      <li>
                        <input type="radio" v-model="radioValues" value="0"> <span>{{ inputText.otherText10 }}</span>
                      </li>

                    </ul>
                  </div>

                </div>
             </div>
             <!--input输入-->
              <div class="quoteForm">
                <div class="divs">
                  <label>{{ inputText.name }}<span>*</span></label>
                  <div>
                    <input type="text"  v-model="ruleForm.name" />
                  </div>
                </div>
                <div class="divs">
                  <label>{{ inputText.tel }}<span>*</span></label>
                  <div>
                    <input type="tel"  v-model="ruleForm.tel" oninput="value=value.replace(/[^\d]/g, '')" />
                  </div>
                </div>
                <div class="divs">
                  <label>{{  inputText.email }}<span>*</span></label>
                  <div>
                    <input type="email"  v-model="ruleForm.email" />
                  </div>
                </div>
                <div class="divs">
                  <label>{{ inputText.desc }}</label>
                  <div>
                    <textarea v-model="ruleForm.message"></textarea>
                    <p style="color: #999"><span style="color: #f00">*</span>{{ inputText.jsTips7}}</p>
                  </div>

                </div>
              </div>

              <div class="btnDiv">
                <button class="submitBtn" @click="submitBtn">{{ inputText.submit }}</button>
              </div>

            </div>
          </div>
        </div>
        <p class="tipsDiv" v-show="isTips">{{ tipText }}</p>
      </div>
    </transition>


  </div>

</template>

<script>
const lang = {
  hk:{
    getQuote:"獲取報價",
    itText1: '服務器',
    itText2: '電腦',
    itText3: '台',
    otherText1: '選擇開發內容',
    otherText2: '請選擇',
    otherText3: '選擇你所需的語言',
    otherText4: '簡體中文',
    otherText5: '繁體中文',
    otherText6: '英文',
    otherText7: '其它',
    otherText8: '是否需要網上支付功能',
    otherText9: '是',
    otherText10: '否',
    name: '稱呼',
    tel: '電話',
    email: '電郵',
    desc: '備註',
    submit: '提交',
    jsTips1:'請輸入稱呼',
    jsTips2:'請輸入電話',
    jsTips3:'請輸入電郵',
    jsTips4:'請輸入正確格式電郵',
    jsTips5:'請選擇開發內容',
    jsTips6:'請選擇所需語言',
    jsTips7:'星號為必填項',
    jsTips8:'IT支援服務',
    success:'成功',
    error:'失敗',

  },
  cn: {
    getQuote:"获取报价",
    itText1: '服务器',
    itText2: '电脑',
    itText3: '台',
    otherText1: '选择开发内容',
    otherText2: '请选择',
    otherText3: '选择你所需的语言',
    otherText4: '简体中文',
    otherText5: '繁体中文',
    otherText6: '英文',
    otherText7: '其它',
    otherText8: '是否需要网上支付功能',
    otherText9: '是',
    otherText10: '否',
    name: '称呼',
    tel: '电话',
    email: '电邮',
    desc: '备注',
    submit: '提交',
    jsTips1:'请输入称呼',
    jsTips2:'请输入电话',
    jsTips3:'请输入电邮',
    jsTips4:'请输入正确格式电邮',
    jsTips5:'请选择开发内容',
    jsTips6:'请选择所需语言',
    jsTips7:'星号为必填项',
    jsTips8:'IT支援服务',
    success:'成功',
    error:'失败'
  },
  en: {
    getQuote:"Get a Quote",
    itText1: 'Server',
    itText2: 'Computer',
    itText3: 'Set',
    otherText1: 'Select development content',
    otherText2: 'Please select',
    otherText3: 'Select your desired language',
    otherText4: 'Simplified Chinese',
    otherText5: 'Traditional Chinese',
    otherText6: 'English',
    otherText7: 'Others',
    otherText8: 'Do you need online payment function',
    otherText9: 'Yes',
    otherText10: 'No',
    name: 'Name',
    tel: 'Phone',
    email: 'E-mail',
    desc: 'Remark',
    submit: 'Submit',
    jsTips1:'Please enter your name',
    jsTips2:'Please enter your phone',
    jsTips3:'Please enter your e-mail',
    jsTips4:'Please enter correct format email',
    jsTips5:'Please select development content',
    jsTips6:'Please select the desired language',
    jsTips7:'Asterisks are required',
    jsTips8:'IT Support Services',
    success:'Success',
    error:'Failure',
  }
}
const selectArr = {
  'customize': {
    'hk':[
        '固定資產系統','貸款系統','QC驗貨系統','補習社系統','批發系統','CRM系統','迷你倉系統','網上商城','ERP系統',
        '預約系統','排隊系統','MRP系統','貿易系統','倉存系統','OA系統','裝修平臺',
        '會員APP'
    ],
    'cn':[
      '固定资产系统','贷款系统','QC验货系统','补习社系统','批发系统','CRM系统','迷你仓系统','网上商城','ERP系统',
      '预约系统','排队系统','MRP系统','贸易系统','仓存系统','OA系统','装修平台',
      '会员APP'
    ],
    'en':[
      "Fixed Assets System",
      "Loan System",
      "Quality Control Inspection System",
      "Tutoring Center Management System",
      "Wholesale System",
      "CRM System",
      "Mini Storage System",
      "Online Store/E-commerce Platform",
      "ERP System",
      "Appointment Booking System",
      "Queue Management System",
      "MRP System",
      "Trade System",
      "Warehouse Management System",
      "OA System",
      "Renovation Platform",
      "Member App"
    ]
  },
  'website': {
    'hk':[
        '公司官網','含購物功能網站',
    ],
    'cn':[
         '公司官网','含购物功能网站',
    ],
    'en':[
       'Company Official Website',' Website with E-commerce Functionality',
    ]
  },
  'APP': {
    'hk':[
        '原生APP','混合APP','Web APP'
    ],
    'cn':[
        '原生APP','混合APP','Web APP'
    ],
    'en':
      ["Native App", "Hybrid App", "Web App"
    ]
  },
  'wechat': {
    'hk':[
        '小程序','公眾號'
    ],
    'cn':[
        '小程序','公众号'
    ],
    'en':[
      "Mini Program","Official Account"
    ]
  },
  'mall': {
    'hk':[
        '僅網站','網站&APP','網站&APP&微信'
    ],
    'cn':[
        '仅网站','网站&APP','网站&APP&微信'
    ],
    'en':[
      "Website only","Website & App","Website & App & WeChat"
    ]
  },
}

import { quotationService } from "@/network/main";
export default {
  name: "GetQuote",
  data(){
    return{
      visible: false,
      inputText: {},
      isItDiv: null,
      selectStr:{},
      isTips: false,
      tipText:"",
      itNumber1: 0,
      itNumber2: 0,
      selectVal: '',
      checkboxValues: [],
      radioValues: 1,
      ruleForm:{
        name: "",
        tel: "",
        email: "",
        message: ""
      },
      showOtherInput:false,
      otherInputVal:'',
      otherOptionText: ''
    }
  },
  created(){



  } ,


  methods: {
    //
    onOtherInputChange() {
      if (this.selectVal === '其它') {
        this.otherOptionText = `${this.inputText.otherText7} - ${this.otherInputVal}`
        console.log(this.otherOptionText)
      }
    },
    show(name,langs) {
      console.log(name,langs)
      this.visible = true
      this.inputText = lang[langs]
      this.isItDiv = name
      if (name === 'website' | name === 'APP' | name === 'wechat' | name === 'mall'){
        this.selectStr = selectArr[name][langs]
      }else {
        this.selectStr = selectArr['customize'][langs]
      }
    },
    hide() {
      this.visible = false
      let that = this
      for (let key in that.ruleForm){
        that.ruleForm[key] = ""
      }
      that.itNumber1 = that.itNumber2 = 0
      that.selectVal = ""
    },
    submitBtn(){
      // return false
      if (this.ruleForm.name === ""){
        this.tipsService(this.inputText.jsTips1)
        return
      }
      if (this.ruleForm.tel === ""){
        this.tipsService(this.inputText.jsTips2)
        return
      }
      if (this.ruleForm.email === ""){
        this.tipsService(this.inputText.jsTips3)
        return
      }
      let verifyEmail = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verifyEmail.test(this.ruleForm.email)){
        this.tipsService(this.inputText.jsTips4)
        return
      }

      let ruleDate = {...this.ruleForm}
      if (this.isItDiv === 'it'){
        ruleDate.computer = this.itNumber1
        ruleDate.server = this.itNumber2
        ruleDate.type_name =  this.inputText.jsTips8
      }else {
        if (this.selectVal === ""){
          this.tipsService(this.inputText.jsTips5)
          return
        }
        if (this.checkboxValues.length === 0){
          this.tipsService(this.inputText.jsTips6)
          return
        }
        if (this.selectVal === '其它') {
          this.otherOptionText = `其它 ${this.otherInputVal}`
          this.selectVal = this.otherOptionText
        }

        ruleDate.type_name = this.selectVal
        ruleDate.language = (this.checkboxValues).toString()
        ruleDate.online_payment = this.radioValues
      }

      // 後台獲取數據
      // console.log(JSON.stringify(ruleDate))
      let that = this
      quotationService(
          JSON.stringify(ruleDate)
      ).then(res => {
        if (res.data.code === 200){
          that.tipsService(this.inputText.success)
        }else {
          that.tipsService(this.inputText.error)
        }
        setTimeout(function (){
          that.hide()
          location.reload();
        },1000)
      })
    },
    tipsService(text){
      let that = this
      that.isTips = true
      that.tipText = text
      setTimeout(function (){
        that.isTips = false
      },1500)
    }
  }

}
</script>

<style scoped>
@import "../assets/css/quote.css";
</style>