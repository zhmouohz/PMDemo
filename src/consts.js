module.exports = {
  serverPath: 'http://127.0.0.1:3000',
  size: 100,
  columns: [
    {
      title: '渠道',
      dataIndex: 'channel',
      key: 'channel',
      width: 100,
    },
    {
      title: '交易类型',
      dataIndex: 'tranType',
      key: 'tranType',
      width: 100,
    },
    {
      title: '终端号',
      dataIndex: 'terminalNo',
      key: 'terminalNo',
      width: 100,
    },
    {
      title: '日期时间',
      dataIndex: 'tranDate',
      key: 'tranDate',
      width: 100,
    },
    {
      title: '金额',
      dataIndex: 'Amt',
      key: 'Amt',
      width: 100,
    },
    {
      title: '交易状态',
      dataIndex: 'respCode',
      key: 'respCode',
      width: 100,
    },
  ],

  sumColumns: [
    {
      title: '渠道',
      dataIndex: 'channel',
      key: 'channel',
      width: 100,
    },
    {
      title: '交易类型',
      dataIndex: 'tranType',
      key: 'tranType',
      width: 100,
    },
    {
      title: '成功笔数',
      dataIndex: 'succesCount',
      key: 'succesCount',
      width: 100,
    },
    {
      title: '失败笔数',
      dataIndex: 'failCount',
      key: 'failCount',
      width: 100,
    },
    {
      title: '超时笔数',
      dataIndex: 'timeOutCount',
      key: 'timeOutCount',
      width: 100,
    },
  ],

  warnColumns: [
    {
      title: '预警类型',
      dataIndex: 'warnType',
      key: 'warnType',
      width: 100,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
      width: 100,
    },
  ],
}
