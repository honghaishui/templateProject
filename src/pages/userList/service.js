/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:33:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fetchStaffInsert(params) {
  return request('/rest/staff/insert', {
    method: 'POST',
    data: params,
  });
}
export async function fetchLoginDelete(params) {
  return request('/rest/login/delete', {
    method: 'POST',
    data: params,
  });
}
