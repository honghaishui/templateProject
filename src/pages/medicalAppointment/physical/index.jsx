import React, { useState, useEffect } from 'react';
import { Steps, Button, message, Form } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import flow from 'lodash/flow';
import FirstForm from '../components/FirstForm';
import SecondForm from '../components/SecondForm';

const { Step } = Steps;

const steps = [
  {
    title: '第一步',
    content: '请输入姓名',
  },
  {
    title: '第二步',
    content: '请选择时间',
  },
];

const Physical = (props) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [status, setStatus] = useState(null);
  const [dataString, setDataString] = useState(null);
  const next = () => {
    setCurrent(current + 1);
  };
  const { fetchAppointmentInsert } = props;
  const prev = () => {
    setCurrent(current - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ width: 500, height: 300, position: 'relative', top: '40%', left: '40%' }}>
        {status === 0 && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
            }}
          >
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              <Form
                style={{ margin: '20px 0' }}
                form={form}
                onFinish={() => {
                  const obj = { ...form.getFieldsValue(['staffName', 'time']) };
                  obj.time = moment(form.getFieldsValue(['time']).time).format(
                    'YYYY-MM-DD HH:mm:ss',
                  );
                  fetchAppointmentInsert(obj).then((res) => {
                    if (res.code === 200) {
                      setStatus(1);
                      message.success('提交成功');
                    }
                  });
                }}
              >
                {
                  <>
                    {(() => {
                      if (current === 0) {
                        return <FirstForm />;
                      } else if (current === 1) {
                        return <SecondForm setDataString={setDataString} />;
                      }
                    })()}
                  </>
                }
              </Form>
            </div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => {
                    form.validateFields().then((res) => {
                      if (res) {
                        next();
                      }
                    });
                  }}
                >
                  下一步
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => {
                    form.submit();
                  }}
                >
                  提交
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  上一步
                </Button>
              )}
            </div>
          </div>
        )}
        {status === 1 && (
          <div style={{ position: 'absolute', fontSize: 16 }}>预约成功，请按时体检</div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ physical }) => ({
  physical,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAppointmentInsert: (payload) =>
    dispatch({ type: 'physical/fetchAppointmentInsert', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(Physical);
