/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fetchReportInsert,fetchReportUpdate } from './service';

const Model = {
  namespace: 'tableList',
  state: {
    status: undefined,
  },
  effects: {
    *fetchReportInsert({ payload }, { call }) {
      return yield call(fetchReportInsert, payload);
    },
    *fetchReportUpdate(_, { call }) {
      return yield call(fetchReportUpdate);
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
