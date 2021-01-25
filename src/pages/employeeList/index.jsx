import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Input,Button } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';
import ReportDetails from '../coponments/reportDetails';

const EmployeeList = (props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [staffName, setStaffName] = useState(null);
  const [staffAge, setStaffAge] = useState(null);
  const [staffSex, setStaffSex] = useState(null);
  const [dpartId, setDpartId] = useState(null);
  const dataReport = {
    staffName,
    staffAge,
    staffSex,
    dpartId,
  };
  const {fetchReportExportData} = props
  const columns = [
    {
      title: '姓名',
      dataIndex: 'staffName',
      key: 'staffName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'staffAge',
      key: 'staffAge',
    },
    {
      title: '性别',
      dataIndex: 'staffSex',
      key: 'staffSex',
    },
    {
      title: '部门编号',
      dataIndex: 'dpartId',
      key: 'dpartId',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setStaffName(record.staffName);
              setStaffAge(record.staffAge);
              setStaffSex(record.staffSex);
              setDpartId(record.dpartId);
              setModelVisible(true);
            }}
          >
            查看
          </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      staffName: '张三',
      staffAge: 32,
      staffSex: '男',
      dpartId: '001',
    },
    {
      key: '2',
      staffName: '李四',
      staffAge: 32,
      staffSex: '男',
      dpartId: '001',
    },
    {
      key: '3',
      staffName: '王五',
      staffAge: 32,
      staffSex: '男',
      dpartId: '001',
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
            >
             <a href='http://10.9.2.6:8080//rest/report/exportData'>导出</a>
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
          title="体检报告详情"
          visible={modelVisible}
          onOk={() => {
            setModelVisible(false);
          }}
          onCancel={() => setModelVisible(false)}
        >
          <ReportDetails formState={2} data={dataReport} />
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = ({ employeeList }) => ({
  employeeList
});
const mapDispatchToProps = dispatch => ({
  fetchReportExportData: payload => dispatch({ type: 'employeeList/fetchReportExportData', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(EmployeeList);
