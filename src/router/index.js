import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PositionView from '../views/PositionView.vue'
import ReportView from '../views/ReportView.vue'
import OpenTab from '@/views/OpenTab.vue'
import SetUp from '../views/SetUp.vue'
import AddQuestion from '../views/AddQuestion.vue'
import ToInvited from '../views/ToInvited.vue'
import ToEvalute from '../views/ToEvalute.vue'
import ToPreselected from '../views/ToPreselected.vue'
import ToDiscard from '../views/ToDiscard.vue'
import PositionDelete from '../views/PositionDelete.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import CustomBranding from '../views/CustomBranding.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/setUp',
      name: 'dashbord',
      component: SetUp
    },
    {
      path: '/position',
      name: 'position',
     component: PositionView
    },
    {
      path: '/report',
      name: 'report',
     component: ReportView
    },
    {
      path: '/OpenTab',
      name: 'open',
     component: OpenTab
    },
    {
      path: '/AddQuestion',
      name: 'AddQuestion',
     component: AddQuestion
    },
    {
      path: '/ToInvited',
      name: 'toInvited',
     component: ToInvited
    },
    {
      path: '/ToEvalute',
      name: 'ToEvalute',
     component: ToEvalute
    },
    {
      path: '/ToPreselected',
      name: 'ToPreselected',
     component: ToPreselected
    },
    {
      path: '/ToDiscard',
      name: 'ToDiscard',
     component: ToDiscard
    },
    {
      path: '/PositionDelete',
      name: 'PositionDelete',
     component: PositionDelete
    },
    {
      path: '/PositionDelete',
      name: 'PositionDelete',
     component: PositionDelete
    },
    {
      path: '/LogIn',
      name: 'LogIn',
     component: LogIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
     component: SignUp
    },
    {
      path: '/CustomBranding',
      name: 'CustomBranding',
     component: CustomBranding
    },
    
  ]
})

export default router
