import { FormattedMessage, formatMessage } from 'umi';
import React, { useState } from 'react';
import { List, Button, Modal, Form, Popover, Progress, Input } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';
import styles from './style.less';
const passwordStrength = {
  strong: (
    <span className="strong">
      <FormattedMessage id="accountandsettings.security.strong" defaultMessage="Strong" />
    </span>
  ),
  medium: (
    <span className="medium">
      <FormattedMessage id="accountandsettings.security.medium" defaultMessage="Medium" />
    </span>
  ),
  weak: (
    <span className="weak">
      <FormattedMessage id="accountandsettings.security.weak" defaultMessage="Weak" />
      Weak
    </span>
  ),
};
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="userandregister.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="userandregister.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="userandregister.strength.short" />
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const SecurityView = (props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [visible, setvisible] = useState(false);
  const [popover, setpopover] = useState(false);
  const [form] = Form.useForm();
  const confirmDirty = false;

  const checkConfirm = (_, value) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.twice',
        }),
      );
    }

    return promise.resolve();
  };
  const { fetchUpdatePassword } = props;
  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');

    if (value && value.length > 9) {
      return 'ok';
    }

    if (value && value.length > 5) {
      return 'pass';
    }

    return 'poor';
  };
  const checkPassword = (_, value) => {
    const promise = Promise; // 没有值的情况

    if (!value) {
      setvisible(!!value);
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.required',
        }),
      );
    } // 有值的情况

    if (!visible) {
      setvisible(!!value);
    }

    setpopover(!popover);

    if (value.length < 6) {
      return promise.reject('');
    }

    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }

    return promise.resolve();
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  const getData = () => [
    {
      title: formatMessage(
        {
          id: 'accountandsettings.security.password',
        },
        {},
      ),
      description: (
        <>
          {formatMessage({
            id: 'accountandsettings.security.password-description',
          })}
          ：{passwordStrength.strong}
        </>
      ),
      // actions: [
      //   <a key="Modify">
      //     <FormattedMessage id="accountandsettings.security.modify" defaultMessage="Modify" />
      //   </a>,
      // ],
    },
    {
      title: formatMessage(
        {
          id: 'accountandsettings.security.phone',
        },
        {},
      ),
      description: `${formatMessage(
        {
          id: 'accountandsettings.security.phone-description',
        },
        {},
      )}：**********`,
      actions: [
        <a
          key="Modify"
          onClick={() => {
            setModelVisible(true);
          }}
        >
          <FormattedMessage id="accountandsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'accountandsettings.security.question',
        },
        {},
      ),
      description: formatMessage(
        {
          id: 'accountandsettings.security.question-description',
        },
        {},
      ),
      actions: [
        <a key="Set">
          <FormattedMessage id="accountandsettings.security.set" defaultMessage="Set" />
        </a>,
      ],
    },
  ];

  const data = getData();
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      <Modal
        title="修改密码"
        visible={modelVisible}
        destroyOnClose
        onOk={() => {
          form.submit();
        }}
        onCancel={() => setModelVisible(false)}
      >
        <Form
          form={form}
          preserve={false}
          onFinish={(v) => {
            const account = localStorage.getItem('name');
            const obj = { account, password: v.password };
            form.validateFields().then((res) => {
              if (res) {
                fetchUpdatePassword(obj).then((res) => {
                  if (res?.code === 200) {
                    setModelVisible(false);
                  }
                });
              }
            });
          }}
        >
          <Popover
            getPopupContainer={(node) => {
              if (node && node.parentNode) {
                return node.parentNode;
              }
              return node;
            }}
            content={
              visible && (
                <div
                  style={{
                    padding: '4px 0',
                  }}
                >
                  {passwordStatusMap[getPasswordStatus()]}
                  {renderPasswordProgress()}
                  <div
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <FormattedMessage id="userandregister.strength.msg" />
                  </div>
                </div>
              )
            }
            overlayStyle={{
              width: 240,
            }}
            placement="right"
            visible={visible}
          >
            <Form.Item
              name="password"
              className={
                form.getFieldValue('password') &&
                form.getFieldValue('password').length > 0 &&
                styles.password
              }
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                  validator: checkPassword,
                },
              ]}
            >
              <Input
                size="large"
                type="password"
                placeholder={formatMessage({
                  id: 'userandregister.password.placeholder',
                })}
              />
            </Form.Item>
          </Popover>
          <Form.Item
            name="confirm"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'userandregister.confirm-password.required',
                }),
              },
              {
                validator: checkConfirm,
              },
            ]}
          >
            <Input
              size="large"
              type="password"
              placeholder={formatMessage({
                id: 'userandregister.confirm-password.placeholder',
              })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ security }) => ({
  security,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUpdatePassword: (payload) => dispatch({ type: 'security/fetchUpdatePassword', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(SecurityView);
