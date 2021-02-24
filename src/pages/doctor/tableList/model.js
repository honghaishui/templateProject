/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 15:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetchReportInsert,
  fetchReportUpdate,
  fetcheReportList
} from './service';

const Model = {
  namespace: 'tableList',
  state: {
    status: undefined,
  },
  effects: {
    * fetchReportInsert({
      payload
    }, {
      call
    }) {
      return yield call(fetchReportInsert, payload);
    },
    * fetchReportUpdate({
      payload
    }, {
      call
    }) {
      return yield call(fetchReportUpdate, payload);
    },
    * fetcheReportList(_, {
      call
    }) {
      return yield call(fetcheReportList);
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
