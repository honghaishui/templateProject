/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 15:02:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fetchReportQueryByName(params) {
  return request('/rest/report/queryByName', {
    method: 'POST',
    data: params,
  });
}
export async function fetcheEportData() {
  return request('/rest/report/queryByName');
}
