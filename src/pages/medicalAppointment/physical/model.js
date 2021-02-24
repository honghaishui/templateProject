/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-22 15:41:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetchAppointmentInsert
} from './service';

const Model = {
  namespace: 'physical',
  state: {
    status: undefined,
  },
  effects: {
    * fetchAppointmentInsert({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchAppointmentInsert, payload);
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
