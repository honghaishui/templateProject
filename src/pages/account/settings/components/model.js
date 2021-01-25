/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-22 15:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fetchUpdatePassword } from './service';

const Model = {
  namespace: 'security',
  state: {
    status: undefined,
  },
  effects: {
    *fetchUpdatePassword({ payload }, { call }) {
      return yield call(fetchUpdatePassword, payload);
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
