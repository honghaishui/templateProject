import React from 'react';
import { Form, Input } from 'antd';

const FirstForm = () => {
  return (
    <Form.Item
      label="姓名"
      name="staffName"
      rules={[
        {
          required: true,
          message: '请输入姓名',
        },
      ]}
    >
      <Input size="large" placeholder="请输入姓名" />
    </Form.Item>
  );
};
export default FirstForm;
