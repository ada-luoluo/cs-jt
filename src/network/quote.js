import { createApp } from "vue"

import Quote from '../components/GetQuote'

export default {
  quote: null,
  install(Vue) {
    if (this.quote) {
      // 防止多次载入
      Vue.config.globalProperties.$quote = this.quote;
      return
    }
    let instance = createApp(Quote);
    let parent = document.createElement("div")
    let bodyDom = document.body
    // 这里需要注意，大概率app还没有mount，导致获取不到app节点，所以想挂载到app上，需要保证app已经创建。
    bodyDom.appendChild(parent)
    this.quote = instance.mount(parent)

    Vue.config.globalProperties.$quote = this.quote;
  }
};