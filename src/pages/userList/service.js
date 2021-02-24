/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 18:15:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\service.js
 */
import request from '@/utils/request';
import {
  stringify
} from "qs";

export async function fetchLoginInsert(params) {
  return request('/rest/login/insert', {
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
export async function fetchLoginUpdate(params) {
  return request('/rest/staff/update', {
    method: 'POST',
    data: params,
  });
}
export async function fetchUpdatePassWord(params) {
  return request('/rest/login/updateUser', {
    method: 'POST',
    data: params,
  });
}

export async function fetchLoginList(params) {
  return request(`/rest/login/list?${stringify(params)}`);
}
