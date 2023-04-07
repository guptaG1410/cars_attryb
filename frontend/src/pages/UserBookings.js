import React, { useState, useEffect } from "react";
import FlexLayout from "../components/FlexLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';


const UserBookings = () => {

  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <FlexLayout>
        {loading && (<Spinner />)}
      <h3 className="text-center mt-2">My Bookings</h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {bookings.filter(o=>o.user===user._id).map((booking) => {
             return <Row gutter={16} className="bs1 mt-3 text-left">
                <Col lg={6} sm={24}>
                    <p><b>{booking.car.name}</b></p>
                    <p>Price : <b>{booking.car.price}</b></p>
                    <p>Power : <b>{booking.car.power}</b></p>
                    <p>Mileage : <b>{booking.car.mileage}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2" alt='car-img'/>
                </Col>
              </Row>;
            })}
          
        </Col>
      </Row>
    </FlexLayout>
  );
}

export default UserBookings;
