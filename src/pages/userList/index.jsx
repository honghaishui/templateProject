import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Form, Select, Button, Input } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';


const UserList = (props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [userType, setUserType] = useState(null);
  const [form] = Form.useForm();
  const {fetchStaffInsert,fetchLoginDelete} = props
  const columns = [
    {
      title: '用户名',
      dataIndex: 'userId',
      key: 'userId',
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
              setUserId(record.userId);
              setPassword(record.password);
              setUserType(record.userType);
              setModelVisible(true);
            }}
          >
            编辑
          </a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      key: '1',
      userId: '张三',
      password: '123456',
      userType: '员工',
      createTime: '2020/12/31',
    },
    {
      key: '2',
      userId: '李四',
      password: '123456',
      userType: '公司管理员',
      createTime: '2020/12/31',
    },
    {
      key: '3',
      userId: '王五',
      password: '123456',
      userType: '医生',
      createTime: '2020/12/31',
    },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', position: 'absolute', top: '8%' }}>
        <div style={{ float: 'left' }}>
          <Input.Search placeholder="input search text" style={{ width: 200 }} />
        </div>
        <div style={{ float: 'right' }}>
          <Button
            type="primary"
            onClick={() => {
              setUserId(null);
              setPassword(null);
              setUserType(null);
              setModelVisible(true);
            }}
          >
            新增报告
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
          width="100%"
          title="用户信息"
          visible={modelVisible}
          footer={null}
          destroyOnClose
          onOk={() => {
            console.log(form.getFieldsValue(['username', 'password', 'usertype']));
            setModelVisible(false);
          }}
          onCancel={() => setModelVisible(false)}
        >
          <Form form={form} preserve={false}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
              initialValue={userId || ''}
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
              initialValue={userType || 'employee'}
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
                <Select.Option value="employee">员工</Select.Option>
                <Select.Option value="eAdmin">企业管理员</Select.Option>
                <Select.Option value="doctor">医生</Select.Option>
                <Select.Option value="admin">系统管理员</Select.Option>
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
  userList
});
const mapDispatchToProps = dispatch => ({
  fetchStaffInsert: payload => dispatch({ type: 'userList/fetchStaffInsert', payload }),
  fetchLoginDelete: payload => dispatch({ type: 'userList/fetchLoginDelete', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(UserList);
