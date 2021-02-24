/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 16:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';
import {
  stringify
} from "qs";

export async function fetchAppointmentInsert(params) {
  return request('/rest/appointment/insert', {
    method: 'POST',
    data: params,
  });
}
export async function fetchRestAppointment(params) {
  return request('rest/appointment/', {
    method: 'POST',
    data: params,
  });
}
export async function fetchAppointmentRetreat(params) {
  return request('/rest/appointment/retreat', {
    method: 'POST',
    data: params,
  });
}
// 获取所有预约
export async function fetcheAppointment(params) {
  return request(`/rest/appointment?${stringify(params)}`);
}
