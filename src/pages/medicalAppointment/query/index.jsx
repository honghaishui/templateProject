import React, { useState } from 'react';
import { Button, Form, Input, Result, message } from 'antd';
import ReportDetails from '../../coponments/reportDetails';

const Query = () => {
  const [status, setStatus] = useState(3);
  const data = {
    staffName: '张三',
    dpartId: '007',
    staffAge: '20',
    staffSex: '男',
    vision: '0.5',
    weight: '60KG',
    bodyFat: '30%',
    heartAndLung: '正常',
    createTime: '2020/12/31',
    proposal: '多喝热水',
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {status === 0 && (
        <div
          style={{
            width: 300,
            height: 200,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Form
            onFinish={(v) => {
              message
                .loading('正在查询，请稍后', 1.5)
                .then(() => message.success('报告生成完毕', 1))
                .then(() => {
                  setStatus(3);
                });
              console.log(v);
            }}
          >
            <Form.Item
              label="员工姓名"
              name="staffName"
              rules={[{ required: true, message: '请输入员工姓名' }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="部门编号"
              name="dpartId"
              rules={[{ required: true, message: '请输入部门编号' }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
      {status === 1 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 300,
            height: 200,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Result
            status="warning"
            title="您的报告还没生成!"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  setStatus(0);
                }}
              >
                返回查询
              </Button>
            }
          />
        </div>
      )}
      {status === 3 && (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <ReportDetails formState={2} data={data} />
          <Button
            type="primary"
            style={{ marginLeft: '50%' }}
            onClick={() => {
              setStatus(0);
            }}
          >
            返回查询
          </Button>
        </div>
      )}
    </div>
  );
};
export default Query;
