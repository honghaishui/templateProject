// https://umijs.org/config/
import {
  defineConfig
} from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const {
  REACT_APP_ENV
} = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [{
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [{
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [{
            path: '/user/login',
            name: 'login',
            component: './User/login',
          },
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: './user/register-result',
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['1,2,3,4'],
        routes: [{
            path: '/',
            redirect: '/medicalAppointment',
          },
          // {
          //   path: '/list',
          //   icon: 'table',
          //   name: 'list',
          //   routes: [{
          //       path: '/list/search',
          //       name: 'search-list',
          //       component: './list/search',
          //       routes: [{
          //           path: '/list/search',
          //           redirect: '/list/search/articles',
          //         },
          //         {
          //           name: 'articles',
          //           icon: 'smile',
          //           path: '/list/search/articles',
          //           component: './list/search/articles',
          //         },
          //         {
          //           name: 'projects',
          //           icon: 'smile',
          //           path: '/list/search/projects',
          //           component: './list/search/projects',
          //         },
          //         {
          //           name: 'applications',
          //           icon: 'smile',
          //           path: '/list/search/applications',
          //           component: './list/search/applications',
          //         },
          //       ],
          //     },
          //     {
          //       path: '/',
          //       redirect: '/list/table-list',
          //     },
          //     {
          //       name: 'table-list',
          //       icon: 'smile',
          //       path: '/list/table-list',
          //       component: './list/table-list',
          //     },
          //     {
          //       name: 'basic-list',
          //       icon: 'smile',
          //       path: '/list/basic-list',
          //       component: './list/basic-list',
          //     },
          //     {
          //       name: 'card-list',
          //       icon: 'smile',
          //       path: '/list/card-list',
          //       component: './list/card-list',
          //     },
          //   ],
          // },
          {
            path: '/medicalAppointment',
            name: '员工中心',
            icon: 'profile',
            // authority: ['3'],
            routes: [{
                path: '/medicalAppointment',
                redirect: '/medicalAppointment/physical',
              },
              {
                name: '体检预约',
                icon: 'smile',
                path: '/medicalAppointment/physical',
                component: './medicalAppointment/physical',
              },
              {
                name: '报告查询',
                icon: 'smile',
                path: '/medicalAppointment/query',
                component: './medicalAppointment/query',
              },
            ],
          },
          {
            path: '/doctor',
            name: '工作台',
            icon: 'profile',
            // authority: ['4'],
            routes: [{
                path: '/doctor',
                redirect: '/doctor/tableList',
              },
              {
                name: '查看预约',
                icon: 'smile',
                path: '/doctor/viewAppointments',
                component: './doctor/viewAppointments',
              },
              {
                name: '报告列表',
                icon: 'smile',
                path: '/doctor/tableList',
                component: './doctor/tableList',
              },
            ],
          },
          {
            path: '/employeeList',
            name: '员工列表',
            icon: 'profile',
            // authority: ['1'],
            component: './employeeList',
          },
          {
            path: '/userList',
            name: '用户列表',
            icon: 'profile',
            // authority: ['2'],
            component: './userList',
          },
          // {
          //   path: '/profile',
          //   name: 'profile',
          //   icon: 'profile',
          //   routes: [{
          //       path: '/',
          //       redirect: '/profile/basic',
          //     },
          //     {
          //       name: 'basic',
          //       icon: 'smile',
          //       path: '/profile/basic',
          //       component: './profile/basic',
          //     },
          //     {
          //       name: 'advanced',
          //       icon: 'smile',
          //       path: '/profile/advanced',
          //       component: './profile/advanced',
          //     },
          //   ],
          // },
          // {
          //   name: 'result',
          //   icon: 'CheckCircleOutlined',
          //   path: '/result',
          //   routes: [{
          //       path: '/',
          //       redirect: '/result/success',
          //     },
          //     {
          //       name: 'success',
          //       icon: 'smile',
          //       path: '/result/success',
          //       component: './result/success',
          //     },
          //     {
          //       name: 'fail',
          //       icon: 'smile',
          //       path: '/result/fail',
          //       component: './result/fail',
          //     },
          //   ],
          // },
          // {
          //   name: 'exception',
          //   icon: 'warning',
          //   path: '/exception',
          //   routes: [{
          //       path: '/',
          //       redirect: '/exception/403',
          //     },
          //     {
          //       name: '403',
          //       icon: 'smile',
          //       path: '/exception/403',
          //       component: './exception/403',
          //     },
          //     {
          //       name: '404',
          //       icon: 'smile',
          //       path: '/exception/404',
          //       component: './exception/404',
          //     },
          //     {
          //       name: '500',
          //       icon: 'smile',
          //       path: '/exception/500',
          //       component: './exception/500',
          //     },
          //   ],
          // },
          {
            name: 'account',
            icon: 'user',
            path: '/account',
            routes: [{
                path: '/',
                redirect: '/account/settings',
              },
              {
                name: 'settings',
                icon: 'smile',
                path: '/account/settings',
                component: './account/settings',
              },
            ],
          },
          {
            component: '404',
          },
        ],
      },
    ],
  }, ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
