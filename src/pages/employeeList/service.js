/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:17:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';

export async function fetchReportExportData() {
  return request('/rest/report/exportData');
}
