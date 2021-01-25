/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-20 19:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fakeRegister(params) {
  return request('/rest/login/insert', {
    method: 'POST',
    data: params,
  });
}
