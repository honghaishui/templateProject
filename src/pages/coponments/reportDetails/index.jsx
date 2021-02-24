import React from 'react';
import { Descriptions, Form, Input, Button, Select } from 'antd';

const { Option } = Select;
const ReportDetails = (props) => {
  const {
    formState,
    data,
    id,
    fetchReportInsert,
    fetchReportUpdate,
    setModelVisible,
    fetcheReportList,
    setData,
  } = props;
  return (
    <div>
      <Form
        onFinish={(v) => {
          const obj = { id, ...v };
          delete obj.createTime;
          obj.staffAge = Number(v.staffAge);
          obj.dpartId = Number(v.dpartId);
          formState === 1 &&
            fetchReportInsert(obj).then((res) => {
              if (res?.code === 200) {
                fetcheReportList().then((resp) => {
                  setData(resp?.data);
                });
                setModelVisible(false);
              }
            });
          formState === 3 &&
            fetchReportUpdate(obj).then((res) => {
              if (res?.code === 200) {
                fetcheReportList().then((resp) => {
                  setData(resp?.data);
                });
                setModelVisible(false);
              }
            });
        }}
      >
        <Descriptions title="体检报告单" layout="vertical" bordered>
          <Descriptions.Item label="姓名">
            {formState === 1 && (
              <Form.Item name="staffName">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.staffName}</span>}
            {formState === 3 && (
              <Form.Item name="staffName" initialValue={data.staffName}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="部门编号">
            {formState === 1 && (
              <Form.Item name="dpartId">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.dpartId}</span>}
            {formState === 3 && (
              <Form.Item name="dpartId" initialValue={data.dpartId}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="年龄">
            {formState === 1 && (
              <Form.Item name="staffAge">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.staffAge}</span>}
            {formState === 3 && (
              <Form.Item name="staffAge" initialValue={data.staffAge}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            {formState === 1 && (
              <Form.Item name="staffSex">
                <Select placeholder="请选择性别">
                  <Option value={1}>男</Option>
                  <Option value={2}>女</Option>
                </Select>
              </Form.Item>
            )}
            {formState === 2 && <span>{Number(data.staffSex) === 1 ? '男' : '女'}</span>}
            {formState === 3 && (
              <Form.Item name="staffSex" initialValue={data.staffSex}>
                <Select placeholder="请选择性别">
                  <Option value={1}>男</Option>
                  <Option value={2}>女</Option>
                </Select>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="视力">
            {formState === 1 && (
              <Form.Item name="vision">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.vision}</span>}
            {formState === 3 && (
              <Form.Item name="vision" initialValue={data.vision}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="体重">
            {formState === 1 && (
              <Form.Item name="weight">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.weight}</span>}
            {formState === 3 && (
              <Form.Item name="weight" initialValue={data.weight}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="体脂含量">
            {formState === 1 && (
              <Form.Item name="bodyFatContent">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.bodyFatContent}</span>}
            {formState === 3 && (
              <Form.Item name="bodyFatContent" initialValue={data.bodyFatContent}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="心肺状态">
            {formState === 1 && (
              <Form.Item name="heartAndLung">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.heartAndLung}</span>}
            {formState === 3 && (
              <Form.Item name="heartAndLung" initialValue={data.heartAndLung}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="检查时间">
            {formState === 1 && (
              <Form.Item name="createTime">
                <Input></Input>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.createTime}</span>}
            {formState === 3 && (
              <Form.Item name="createTime" initialValue={data.createTime}>
                <Input></Input>
              </Form.Item>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="医生建议">
            {formState === 1 && (
              <Form.Item name="proposal">
                <Input.TextArea></Input.TextArea>
              </Form.Item>
            )}
            {formState === 2 && <span>{data.proposal}</span>}
            {formState === 3 && (
              <Form.Item name="proposal" initialValue={data.proposal}>
                <Input.TextArea></Input.TextArea>
              </Form.Item>
            )}
          </Descriptions.Item>
        </Descriptions>
        {formState !== 2 && (
          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default ReportDetails;
