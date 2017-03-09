import {
    // Login,
    Home,
    // NotFound,
    Con,
    Modules
} from '../components/';

import Example from '../components/Example.vue';
import Example1 from '../components/Example1.vue';
import Example2 from '../components/Example2.vue';
import Axios from '../components/Axios.vue';

const routes =  [
    {
      path: '/',
      show: false,
      component: Home,
      children:[
        {
          path:'',
          redirect: to => {
            return 'test1'
          }
        }
      ]
     },{
      path: '/test1',
      label:'测试1',
      show: true,
      component: Home,
      children: [
        {
          show: false,
          path: '',
          redirect: to => {
            return 'test1-1'
          }
        },
        {
          path: 'test1-1',
          label:'测试1-1',
          icon:'',
          show:true,
          showChildred: true,
          component: Con,
          redirectPath: '/test1/test1-1/test1-1-1',
          children: [{
              hidden: true,
              path: '',
              redirect: to => {
                  return 'test1-1-1'
              }
          }, {
              path: 'test1-1-1',
              label: '测试1-1-1',
              icon: '',
              show: true,
              component: Modules.Function.Open.Echarts
          }, {
              path: 'test1-1-2',
              label: '测试1-1-2',
              icon: '',
              show: true,
              component: Modules.Demo.Article.Edit
          }]          
        },{
          path: 'test1-2',
          label:'测试1-2',
          icon:'',
          show:true,
          showChildred: true,     
          component: Con,
          redirectPath: '/test1/test1-2/test1-2-1',
          children: [{
              hidden: true,
              path: '',
              redirect: to => {
                  return 'test1-2-1'
              }
          }, {
              path: 'test1-2-1',
              label: '测试1-2-1',
              icon: '',
              show: true,
              component: Axios
          }]
        }
      ]    
    },{
      path: '/test2',
      label:'测试2',
      show: true,
      component: Home,
      children: [
        {
          show: false,
          path: '',
          redirect: to => {
            return 'test2-1'
          }
        },
        {
          path: 'test2-1',
          label:'测试2-1',
          icon:'',
          show:true,
          showChildred: true,
          component: Con,
          redirectPath: '/test2/test2-1/test2-1-1',
          children: [{
              hidden: true,
              path: '',
              redirect: to => {
                  return 'test2-1-1'
              }
          }, {
              path: 'test2-1-1',
              label: '测试2-1-1',
              icon: '',
              show: true,
              component: Example
          }, {
              path: 'test2-1-2',
              label: '测试2-1-2',
              icon: '',
              component: Example1
          }]           
        },{
          path: 'test2-2',
          label:'测试2-2',
          icon:'',
          show:true,          
          component: Con,
          redirectPath: '/test2/test2-2/test2-2-1',
          children: [{
              hidden: true,
              path: '',
              redirect: to => {
                  return 'test2-2-1'
              }
          }, {
              path: 'test2-2-1',
              label: '测试2-2-1',
              icon: '',
              show: true,
              component: Example
          }, {
              path: 'test2-2-2',
              label: '测试2-2-2',
              icon: '',
              show: true,
              component: Example1
          }] 
        }
      ]
    },{
      path: '/test3',
      label:'测试3',
      show: true,
      component: Home,
      children: [
        {
          show: false,
          path: '',
          redirect: to => {
            return 'test3-1'
          }
        },
        {
          path: 'test3-1',
          label:'测试3-1',
          icon:'',
          show:true,
          showChildred: false,       
          component: Example,
          children:[]
        },
        {
          path: 'test3-2',
          label:'测试3-2',
          icon:'',
          show:true,
          showChildred: false,      
          component: Example1,
          children:[]
        }
      ]
    },{
      path: '/test4',
      label:'测试4',
      show: true,
      component: Example2,
      children: []
    }      
  ];

export default routes;