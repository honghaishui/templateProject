/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 16:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetchReportExportData,
  fetchRestStaff,
  fetchReportQueryByName
} from './service';

const Model = {
  namespace: 'employeeList',
  state: {
    status: undefined,
  },
  effects: {
    * fetchReportExportData({
      payload
    }, {
      call
    }) {
      return yield call(fetchReportExportData, payload);
    },
    * fetchRestStaff({
      payload
    }, {
      call
    }) {
      return yield call(fetchRestStaff, payload);
    },
    * fetchReportQueryByName({
      payload
    }, {
      call
    }) {
      return yield call(fetchReportQueryByName, payload);
    },
  },
  reducers: {
    registerHandle(state, {
      payload
    }) {
      return {
        ...state,
        status: payload.code
      };
    },
  },
};
export default Model;
