import React, { useEffect } from 'react';
import FlexLayout from '../components/FlexLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../state/actions/carsAction';
import { Row, Col } from 'antd';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const Home = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <FlexLayout>
      {loading && (<Spinner/>)}
      <Row justify='center' gutter={16} className='mt-5'>
        {cars.map((car) => {
          return <Col lg={5} md={10} sm={24} xs={24}>
            <div className='car p-2 boxShadow mt-5'>
              <img className='carImg' src={car.imgUrl} alt={car.carName}/>
              <div className='car-content d-flex align-items-center justify-content-between'>
                <div>
                  <p>{car.carName}</p>
                  <p>{car.price}</p>
                </div>
                <button className='btn1 mr-2'><Link to={`/booking/${car._id}`}>BUY NOW</Link></button>
              </div>
              </div>
          </Col>
        })}
      </Row>
    </FlexLayout>
  );
};

export default Home;
