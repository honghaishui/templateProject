/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 15:44:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fetchReportInsert(params) {
  return request('/rest/report/insert', {
    method: 'POST',
    data: params,
  });
}
export async function fetchReportUpdate(params) {
  return request('/rest/report/update', {
    method: 'POST',
    data: params,
  });
}

export async function fetcheReportList() {
  return request('/rest/report/list');
}
