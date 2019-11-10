import {
  put, call, takeEvery, select
} from 'redux-saga/effects';
import * as selectors from '../selectors/selectors';
import * as actions from '../actions';
import * as constants from '../constants/constants';
import { postData } from './restApi';

function* chooseCity(action) {
  const cities = yield select(selectors.getCities);
  const { city } = action.payload;
  const activeCity = yield call(() => cities.find(item => item.city === city));
  console.log(activeCity);
  if (!activeCity) {
    return;
  }
  yield put(actions.saveCity(activeCity));
  const citiesWeather = yield select(selectors.getCitiesWeather);

  if (citiesWeather.length < cities.length) {
    yield call(getCityWeather, activeCity);
  } else {
    const activeWeather = citiesWeather.find(item => item.name === activeCity.city);

    if (activeWeather) {
      const { dt } = activeWeather;
      if (dt) {
        const deltaTimes = Math.floor(Date.now() / 1000) - dt;
        console.log('deltaTimes', deltaTimes);
        if (deltaTimes >= constants.TIME_OUT) {
          yield call(getCityWeather, activeCity);
        } else {
          yield put(actions.saveWeather(activeWeather));
        }
      }
    }
  }
}

function* getCityWeather(activeCity) {
  console.log('getCityWeather');
  const { city, country } = activeCity;
  yield put(actions.toggleLoading());
  try {
    const response = yield postData(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=417c0f89e42ea2bb6fd8d3687faceef3`, {});
    yield put(actions.saveWeather(response));

    const citiesWeather = yield select(selectors.getCitiesWeather);
    const indexOfCity = citiesWeather.findIndex(item => item.name === response.name);

    if (indexOfCity === -1) {
      citiesWeather.push(response);
      yield put(actions.addWeather(citiesWeather));
    } else {
      citiesWeather[indexOfCity] = response;
    }

    yield put(actions.toggleLoading());
  } catch (e) {
    yield put(actions.toggleLoading());
    console.log('Error');
  }
}

export default function* watchMainSaga() {
  yield takeEvery(constants.CHOOSE_CITY, chooseCity);
}
