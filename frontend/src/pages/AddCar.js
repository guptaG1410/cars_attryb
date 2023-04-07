import { Col, Row, Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexLayout from '../components/FlexLayout';
import Spinner from '../components/Spinner';
import { addCar } from '../redux/actions/carsActions';
function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    values.bookedTimeSlots = [];

    dispatch(addCar(values));
    console.log(values);
  }

  return (
    <FlexLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Car</h3>
            <hr />
            <Form.Item
              name="name"
              label="Car name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="model" label="Model" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="power" label="Power" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="mileage"
              label="Mileage"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="maxSpeed"
              label="Max-Speed"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="color" label="Color" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <div className="text-right">
              <button className="btn1">ADD CAR</button>
            </div>
          </Form>
        </Col>
      </Row>
    </FlexLayout>
  );
}

export default AddCar;
