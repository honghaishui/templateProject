/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 14:55:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fetchAppointmentInsert } from './service';

const Model = {
  namespace: 'physical',
  state: {
    status: undefined,
  },
  effects: {
    *fetchAppointmentInsert({ payload }, { call, put }) {
      const response = yield call(fetchAppointmentInsert, payload);
      console.log(response)
      // if(response?.code === 200) {
      //   yield put({
      //     type: 'registerHandle',
      //     payload: response,
      //   });
      // }

    },
    *fetcheEportData(_, { call }) {
      const response = yield call(fetcheEportData);
      console.log(response)
      // if(response?.code === 200) {
      //   yield put({
      //     type: 'registerHandle',
      //     payload: response,
      //   });
      // }

    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
