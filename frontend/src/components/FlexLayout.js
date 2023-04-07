import React from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const FlexLayout = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const menu = (
    <Menu>
      <Menu.Item>
        <a style={{ color: '#00d5fa' }} href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a style={{ color: '#00d5fa' }} href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a style={{ color: '#00d5fa' }} href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login';
        }}
      >
        <li style={{ color: '#00d5fa' }}>Logout</li>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="header boxShadow">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/" style={{ color: '#00d5fa' }}>
                    BUYC CORP
                  </Link>
                </b>
              </h1>

              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>User</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default FlexLayout;
