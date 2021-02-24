/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 15:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetchReportQueryByName
} from './service';

const Model = {
  namespace: 'query',
  state: {
    status: undefined,
  },
  effects: {
    * fetchReportQueryByName({
      payload
    }, {
      call,
      put
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
