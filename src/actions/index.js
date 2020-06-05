import axios from 'config';
import moment from 'moment';
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  CLEAR_STATE,
} from 'actions/types';

const apiUrl = process.env.REACT_APP_DATA_ENDPOINT;

export const fetchUsers = async userToken => {
  const random = parseInt(Math.random() * 123456789)
  const response = await axios.get(`${apiUrl}?r=${random}`, {
    'headers': {
      'Authorization': userToken,
    }
  });

  const data = response.data.map((user, index) => {
    return {
      key: index,
      names: [
        user.name.title,
        user.name.first,
        user.name.last
      ].join(' '),
      address: [
        user.location.street.name,
        user.location.street.number.toString(),
        user.location.city,
        user.location.country
      ].join(' '),
      email: user.email,
      phone: user.phone,
      details: {
        birthday: moment(user.dob.date).format('DD-MM-YYYY'),
        gender: user.gender,
        timezone: user.location.timezone.offset,
        location: user.location.timezone.description,
        picture: user.picture.large
      }
    }
  });

  return {
    type: FETCH_USERS,
    payload: data,
  }

}

export const clearState = () => {
  return {
    type: CLEAR_STATE,
    payload: null,
  }
}

