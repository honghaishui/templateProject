/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-28 15:20:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\config\proxy.js
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // /rest/
    '/rest/': {
      // target: 'https://preview.pro.ant.design',
      target: 'http://10.9.2.6:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'http://10.9.2.6:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
