/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 15:55:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetcheAppointment,
  fetchRestAppointment,
  fetchAppointmentRetreat
} from './service';

const Model = {
  namespace: 'doctor',
  state: {
    status: undefined,
  },
  effects: {
    * fetcheAppointment({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetcheAppointment, payload);
    },
    * fetchAppointmentRetreat({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchAppointmentRetreat, payload);
    },
    * fetchRestAppointment({
      payload
    }, {
      call
    }) {
      return yield call(fetchRestAppointment, payload);
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
