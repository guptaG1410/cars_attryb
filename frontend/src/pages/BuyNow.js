import React, { useEffect, useState } from 'react';
import FlexLayout from '../components/FlexLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../state/actions/carsAction';
import Spinner from '../components/Spinner';
import { Col, Divider, Row } from 'antd';
import { bookCar } from '../state/actions/bookingAction';

const BuyNow = ({ props }) => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id === props.params.carid));
    }
  }, [cars]);



  function handleClick(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem('user'))._id,
      car: car._id,
      price : car.price,
      model : car.model,
      power: car.power,
      mileage : car.mileage,
      maxSpeed : car.maxSpeed,
    };

    dispatch(bookCar(reqObj));
  }

  return (
    <FlexLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: '90vh' }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img
            src={car.image}
            className="carimg2 bs1 w-100"
            alt='carImage'
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: 'right' }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour}Lakhs</p>
            <p>Model : {car.model}</p>
            <p>Power : {car.power}</p>
            <p>Mileage : {car.mileage}</p>
            <p>Max Speed : {car.maxSpeed}</p>
            <p>Color : {car.color}</p>
            <p>Description : {car.description}</p>
          </div>

          <button className="btn1" onClick={handleClick}>Book Now</button>
        </Col>
      </Row>
    </FlexLayout>
  );
};

export default BuyNow;
