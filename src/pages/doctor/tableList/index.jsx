import React, { useState, useEffect } from 'react';
import { Table, Tag, Radio, Space, Modal, Button } from 'antd';
import { connect } from 'dva';
import flow from 'lodash/flow';
import ReportDetails from '../../coponments/reportDetails';

const TableList = (props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [formState, setFormState] = useState(1);
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
  const {fetchReportInsert,fetchReportUpdate} = props;
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
              setFormState(2);
              setModelVisible(true);
            }}
          >
            查看
          </a>
          <a
            onClick={() => {
              setStaffName(record.staffName);
              setStaffAge(record.staffAge);
              setStaffSex(record.staffSex);
              setDpartId(record.dpartId);
              setFormState(3);
              setModelVisible(true);
            }}
          >
            编辑
          </a>
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
        <Button
          type="primary"
          onClick={() => {
            setFormState(1);
            setModelVisible(true);
          }}
        >
          新增报告
        </Button>
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
          title={formState === 1 ? '新增体检报告' : '体检报告详情'}
          visible={modelVisible}
          footer={null}
          onCancel={() => setModelVisible(false)}
        >
          <ReportDetails formState={formState} data={dataReport} fetchReportInsert={fetchReportInsert} fetchReportUpdate={fetchReportUpdate}/>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tableList }) => ({
  tableList
});
const mapDispatchToProps = dispatch => ({
  fetchReportInsert: payload => dispatch({ type: 'tableList/fetchReportInsert', payload }),
  fetchReportUpdate: payload => dispatch({ type: 'tableList/fetchReportUpdate', payload }),
});

const decorator = flow(connect(mapStateToProps, mapDispatchToProps));

export default decorator(TableList);

