/*
 * @Author: your name
 * @Date: 2021-01-12 09:40:14
 * @LastEditTime: 2021-02-23 17:51:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antdPro\src\pages\User\register\model.js
 */
import {
  fetchLoginInsert,
  fetchLoginDelete,
  fetchLoginList,
  fetchLoginUpdate,
  fetchUpdatePassWord
} from './service';

const Model = {
  namespace: 'userList',
  state: {
    status: undefined,
  },
  effects: {
    * fetchLoginInsert({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchLoginInsert, payload);
    },
    * fetchLoginDelete({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchLoginDelete, payload);
    },
    * fetchLoginList({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchLoginList, payload);
    },
    * fetchLoginUpdate({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchLoginUpdate, payload);
    },
    * fetchUpdatePassWord({
      payload
    }, {
      call,
      put
    }) {
      return yield call(fetchUpdatePassWord, payload);
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
