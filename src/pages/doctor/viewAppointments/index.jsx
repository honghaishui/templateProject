import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Input } from 'antd';

// const ViewAppointments = () => {
//   return <div>查看预约</div>;
// };
// export default ViewAppointments;
// import React, { useState, useEffect } from 'react';
// import { Table, Tag, Radio, Space, Modal, Input } from 'antd';
// import ReportDetails from '../coponments/reportDetails';

const ViewAppointments = () => {
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
          // onClick={() => {

          // }}
          >
            退回
          </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      staffName: '张三',
      time: '2021/1/1 12:32:40',
    },
    {
      key: '2',
      staffName: '李四',
      time: '2021/1/1 12:32:40',
    },
    {
      key: '3',
      staffName: '王五',
      time: '2021/1/1 12:32:40',
    },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', position: 'absolute', top: '8%' }}>
        <div style={{ float: 'left' }}>
          <Input.Search placeholder="input search text" style={{ width: 200 }} />
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
export default ViewAppointments;
