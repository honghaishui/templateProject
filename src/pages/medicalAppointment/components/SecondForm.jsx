import React from 'react';
import { Form, Input, DatePicker } from 'antd';

const SecondForm = (props) => {
  const {setDataString} = props
  const onChange = (value, dateString) => {
    setDataString(dateString)
  };

  return (
    <Form.Item
      label="选择时间"
      name="time"
      rules={[
        {
          required: true,
          message: '请输入时间',
        },
      ]}
    >
      <DatePicker showTime onChange={onChange}  />
    </Form.Item>
  );
};
export default SecondForm;
