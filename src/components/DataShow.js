import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../styles/index.css';
import {
  Table,
  Card,
  Button
} from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import * as actions from 'actions';
import {
  useUser,
} from 'reactfire';

import Auth from 'components/Auth';

const tableColumns = [
  {
    title: 'Names',
    dataIndex: 'names',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  }
];

const renderDetails = record => {
  return (
  <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={record.details.picture} />}
    >
      <p>Birthday: {record.details.birthday}</p>
      <p>Gender: {record.details.gender}</p>
      <p>Timezone offset: {record.details.timezone}</p>
      <p>Location TZ: {record.details.location}</p>
    </Card>
  )
}

const expandable = { expandedRowRender: record => renderDetails(record)};
const title = () => 'Users list from randomuser.org';
const showHeader = true;
const footer = () => null;
const pagination = { position: 'bottom' };

const tableConfig = {
  bordered: false,
  loading: false,
  pagination,
  size: 'default',
  expandable,
  title,
  showHeader,
  footer,
  rowSelection: {},
  scroll: undefined,
  hasData: true,
  tableLayout: undefined,
  top: 'none',
  bottom: 'bottomRight',
};


const DataShow = props => {
  const user = useUser();

  const fetchUsersWrapper = () => {
    const userToken = user.toJSON()['stsTokenManager']['accessToken'];
    props.fetchUsers(userToken);
  }

  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={fetchUsersWrapper}
          icon={<SearchOutlined />}
        >
          Search and show users
        </Button> <Auth />
      </div>
      <hr />
      <div>
        <Table
          {...tableConfig}
          pagination={{ position: [tableConfig.top, tableConfig.bottom] }}
          columns={tableColumns}
          dataSource={!!props.users ? props.users : null}
        />
      </div>
      <hr />
    </div>
  );
}

const mapStateToProps = state => {
  return {users: state.users};
}

export default connect(mapStateToProps, actions)(DataShow);