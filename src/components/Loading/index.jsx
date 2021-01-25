/**
 * Created by xuyang on 2018-05-16
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { isArray, isString } from 'lodash';
import { Spin } from 'antd';

/**
 * 项目通用Loading组件
 *
 * @param {any} effectName 需要嗅探的请求，支持String和Array
 * @param {any} spinProps  loading spin参数，参考antd 中的Spin配置
 * @returns
 */
function Loading(effectName, spinProps, customModelKey) {
  const mapStateToProps = ({ loading, [customModelKey]: customModel }) => {
    let isLoading = false;
    if (isArray(effectName)) {
      isLoading = effectName.some(e => !!loading.effects[e]);
    }
    if (isString(effectName)) {
      isLoading = !!loading.effects[effectName];
    }
    if (customModel) {
      isLoading = isLoading || !!customModel.customLoading;
    }
    return {
      loading: isLoading,
    };
  };

  return Component => {
    const loadComponent = props => (
      <Spin spinning={props.loading} size="large" {...spinProps}>
        <Component {...props} />
      </Spin>
    );
    loadComponent.propTyps = {
      loading: PropTypes.bool,
    };
    return connect(mapStateToProps)(loadComponent);
  };
}

export default Loading;
