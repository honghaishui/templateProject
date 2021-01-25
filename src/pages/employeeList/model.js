/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:17:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fetchReportExportData } from './service';

const Model = {
  namespace: 'employeeList',
  state: {
    status: undefined,
  },
  effects: {
    *fetchReportExportData({ payload }, { call }) {
      return yield call(fetchReportExportData, payload);
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
