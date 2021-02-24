import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Form, Select, Button, Input, message } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';

const UserList = (props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [account, setAccount] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState(null);
  const [dpartId, setDpartId] = useState(null);
  const [data, setData] = useState([]);
  const [stateAdd, setStateAdd] = useState(null);
  const [form] = Form.useForm();
  const { fetchLoginInsert, fetchLoginDelete, fetchLoginList, fetchUpdatePassWord } = props;
  const renderDpart = (v) => {
    switch (v) {
      case 10:
        return '总裁办公室';
      case 20:
        return '销售部';
      case 30:
        return '事业部';
      case 40:
        return '其他';
    }
  };
  const columns = [
    {
      title: '用户名',
      dataIndex: 'account',
      key: 'account',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: '用户权限',
      dataIndex: 'userType',
      key: 'userType',
    },
    {
      title: '部门',
      dataIndex: 'dpartId',
      key: 'dpartId',
      render: (text) => <span>{renderDpart(text)}</span>,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setAccount(record.account);
              setPassword(record.password);
              setUserType(record.userType);
              setDpartId(record.dpartId);
              setStateAdd(2);
              setModelVisible(true);
            }}
          >
            编辑
          </a>
          <a
            onClick={() => {
              fetchLoginDelete({ id: record.id }).then((res) => {
                if (res?.code === 200) {
                  message.success('删除成功');
                  fetchLoginList().then((resp) => {
                    setData(resp?.data);
                  });
                }
              });
            }}
          >
            删除
          </a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchLoginList().then((res) => {
      setData(res?.data);
    });
  }, []);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', position: 'absolute', top: '8%' }}>
        <div style={{ float: 'left' }}>
          <Input.Search
            placeholder="请输入用户名"
            style={{ width: 200 }}
            onSearch={(v) => {
              fetchLoginList({ account: v }).then((res) => {
                setData(res?.data);
              });
            }}
          />
        </div>
        <div style={{ float: 'right' }}>
          <Button
            type="primary"
            onClick={() => {
              setAccount(null);
              setPassword(null);
              setUserType(null);
              setDpartId(null);
              setModelVisible(true);
              setStateAdd(1);
            }}
          >
            新增用户
          </Button>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 500,
          width: '100%',
        }}
      >
        <Table columns={columns} dataSource={data} />
      </div>
      <div>
        <Modal
          width="50%"
          title="用户信息"
          visible={modelVisible}
          footer={null}
          destroyOnClose
          onCancel={() => setModelVisible(false)}
        >
          <Form
            form={form}
            preserve={false}
            onFinish={(v) => {
              // fetchStaffInsert(v)
              stateAdd && stateAdd === 1
                ? fetchLoginInsert(v).then((res) => {
                    if (res?.code === 200) {
                      fetchLoginList().then((resp) => {
                        setData(resp?.data);
                        setModelVisible(false);
                      });
                    }
                  })
                : fetchUpdatePassWord(v).then((res) => {
                    if (res?.code === 200) {
                      message.success('编辑成功');
                      fetchLoginList().then((resp) => {
                        setData(resp?.data);
                        setModelVisible(false);
                      });
                    }
                  });
            }}
          >
            <Form.Item
              name="account"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
              initialValue={account || ''}
            >
              <Input size="large" placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
              initialValue={password || ''}
            >
              <Input size="large" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              name="userType"
              rules={[
                {
                  required: true,
                  message: '请选择你的类型',
                },
              ]}
              initialValue={userType || '1'}
            >
              <Select
                size="large"
                // value={prefix}
                style={{
                  width: '100%',
                  marginBottom: 20,
                }}
                placeholder="请选择你的类型"
              >
                <Select.Option value="3">员工</Select.Option>
                <Select.Option value="1">企业管理员</Select.Option>
                <Select.Option value="4">医生</Select.Option>
                <Select.Option value="2">系统管理员</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="dpartId"
              rules={[
                {
                  required: true,
                  message: '请选择部门',
                },
              ]}
              initialValue={dpartId || 10}
            >
              <Select
                size="large"
                value={dpartId}
                onChange={(v) => {
                  setDpartId(v);
                }}
                style={{
                  width: '100%',
                  marginBottom: 20,
                }}
                placeholder="请选择部门"
              >
                <Option value={10}>总裁办公室</Option>
                <Option value={20}>销售部</Option>
                <Option value={30}>事业部</Option>
                <Option value={40}>其他</Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userList }) => ({
  userList,
});
const mapDispatchToProps = (dispatch) => ({
  fetchLoginInsert: (payload) => dispatch({ type: 'userList/fetchLoginInsert', payload }),
  fetchLoginDelete: (payload) => dispatch({ type: 'userList/fetchLoginDelete', payload }),
  fetchLoginList: (payload) => dispatch({ type: 'userList/fetchLoginList', payload }),
  fetchLoginUpdate: (payload) => dispatch({ type: 'userList/fetchLoginUpdate', payload }),
  fetchUpdatePassWord: (payload) => dispatch({ type: 'userList/fetchUpdatePassWord', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(UserList);
