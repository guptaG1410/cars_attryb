import React from 'react';
import { Space, Spin } from 'antd';
const Spinner = () => {
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Space>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Space>

        <Spin tip="Loading..."></Spin>
      </Space>
    </div>
  );
};

export default Spinner;
