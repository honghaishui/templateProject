/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-01-21 15:04:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import { fakeRegister } from './service';
import { setAuthority } from '@/utils/authority';

const Model = {
  namespace: 'userAndregister',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      if(response?.code === 200) {
        setAuthority(response.data)
        localStorage.setItem("name",payload.account)
        yield put({
          type: 'registerHandle',
          payload: response,
        });
      }

    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.code };
    },
  },
};
export default Model;
