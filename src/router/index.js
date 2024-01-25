import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../lang'

const routes = [
  {
    path: '/:lang',
    component: {
      render: () => <router-view />
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'customize',
        name: 'customize',
        component: () => import('@/views/customize.vue')
      },
      {
        path: 'website',
        name: 'website',
        component: () => import('@/views/website.vue')
      },
      {
        path: 'app',
        name: 'APP',
        component: () => import('@/views/APP.vue')
      },
      {
        path: 'wechat',
        name: 'wechat',
        component: () => import('@/views/wechat.vue')
      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('@/views/mall.vue')
      },
      {
        path: 'it',
        name: 'it',
        component: () => import('@/views/it.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news.vue')
      },
      {
        path: '/newsDetails/:id',
        name: 'newsDetails',
        component: () => import('@/views/newsDetails.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/contact.vue')
      },
      {
        path: 'quotation',
        name: 'quotation',
        component: () => import('@/views/quotation.vue')
      },
      {
        path: 'case',
        name: 'case',
        component: () => import('@/views/case.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/cn' // 重定向到默认语言
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  console.log(lang)
  if (!['hk', 'cn', 'en'].includes(lang)) {
    return next('cn')
  }
  i18n.global.locale = lang
  return next()
})

export default router


//vue-i18n选择不同语言的url实现切换语言
