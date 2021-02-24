import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Input, message } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';
// const ViewAppointments = () => {
//   return <div>查看预约</div>;
// };
// export default ViewAppointments;
// import React, { useState, useEffect } from 'react';
// import { Table, Tag, Radio, Space, Modal, Input } from 'antd';
// import ReportDetails from '../coponments/reportDetails';

const ViewAppointments = (props) => {
  const { fetcheAppointment, fetchRestAppointment, fetchAppointmentRetreat } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetcheAppointment().then((res) => {
      setData(res?.data);
    });
  }, []);
  const columns = [
    {
      title: '姓名',
      dataIndex: 'staffName',
      key: 'staffName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '申请时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              fetchAppointmentRetreat({ id: record.id, stauts: 0 }).then((res) => {
                message.success('退回成功');
                if (res?.code === 200) {
                  fetcheAppointment().then((resp) => {
                    setData(resp?.data);
                  });
                }
              });
            }}
          >
            退回
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', position: 'absolute', top: '8%' }}>
        <div style={{ float: 'left' }}>
          <Input.Search
            placeholder="请输入员工姓名"
            style={{ width: 200 }}
            onSearch={(value) => {
              fetcheAppointment({ staffName: value }).then((res) => {
                if (res?.code === 200) {
                  setData(res?.data);
                }
              });
            }}
          />
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
    </div>
  );
};

const mapStateToProps = ({ doctor }) => ({
  doctor,
});
const mapDispatchToProps = (dispatch) => ({
  fetcheAppointment: (payload) => dispatch({ type: 'doctor/fetcheAppointment', payload }),
  fetchAppointmentRetreat: (payload) =>
    dispatch({ type: 'doctor/fetchAppointmentRetreat', payload }),
  fetchRestAppointment: (payload) => dispatch({ type: 'doctor/fetchRestAppointment', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(ViewAppointments);
