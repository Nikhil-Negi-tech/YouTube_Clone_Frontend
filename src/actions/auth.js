// import * as api from '../api';
// import { setCurrentUser } from './currentUser';
// export const login = (authData) => async (dispatch) => {
//     try {
//         // console.log(authData);
//         const { data } = await api.login(authData);
//         dispatch({ type: 'AUTH', data });
//         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))));
//     } catch (error) {
//         console.error('Axios error:', error.response?.data || error.message);
//         alert(error.response?.data.message || 'An error occurred');
//     }
// };
// actions/auth.js
// actions/auth.js
import * as api from '../api/index.js';
import { setCurrentUser } from './currentUser.js';

export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    console.log('Login successful:', data);
    dispatch({ type: 'AUTH', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))));
  
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again.');
  }
};
