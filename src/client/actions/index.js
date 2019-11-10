import * as constants from '../constants/constants';

export const chooseCity = payload => ({ type: constants.CHOOSE_CITY, payload });
export const saveCity = payload => ({ type: constants.SAVE_CITY, payload });
export const getCityWeather = payload => ({ type: constants.WEATHER_REQUEST, payload });
export const saveWeather = payload => ({ type: constants.WEATHER_REQUEST_SUCCESS, payload });
export const toggleLoading = payload => ({ type: constants.TOGGLE_LOADING, payload });
export const addWeather = payload => ({ type: constants.ADD_WEATHER, payload });
