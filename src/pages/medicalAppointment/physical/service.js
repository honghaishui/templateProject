/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 14:29:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fetchAppointmentInsert(params) {
  return request('/rest/appointment/insert', {
    method: 'POST',
    data: params,
  });
}
export async function fetcheEportData() {
  return request('/rest/report/exportData');
}
