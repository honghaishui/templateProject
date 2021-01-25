/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fetchStaffInsert,fetchLoginDelete } from './service';

const Model = {
  namespace: 'userList',
  state: {
    status: undefined,
  },
  effects: {
    *fetchStaffInsert({ payload }, { call, put }) {
      return yield call(fetchStaffInsert, payload);
    },
    *fetchLoginDelete({ payload }, { call, put }) {
      return yield call(fetchLoginDelete, payload);
    },

  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
