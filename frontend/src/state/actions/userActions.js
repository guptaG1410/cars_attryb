import axios from 'axios';
import { message } from 'antd';

export const userLogin = (values) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.post('/api/users/login', values);
    localStorage.setItem('user', JSON.stringify(response.data));
    message.success('Login success');
    dispatch({ type: 'LOADING', payload: false });
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  } catch (error) {
    console.log(error);
    message.error('Something went wrong');
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const userRegister = (values) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await axios.post('/api/users/register', values);
    dispatch({ type: 'LOADING', payload: false });
    message.success('Registration successfull');
    setTimeout(() => {
      window.location.href = '/login';
    }, 500);
    console.log(response);
  } catch (error) {
    console.log(error);
    message.error('Something went wrong');
    dispatch({ type: 'LOADING', payload: false });
  }
};
