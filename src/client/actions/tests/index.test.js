import * as constants from '../../constants/constants';
import {
  chooseCity,
  saveCity,
  getCityWeather,
  saveWeather,
  toggleLoading,
  addWeather
} from '../index';

describe('actions', () => {
  it('chooseCity(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.CHOOSE_CITY,
      payload: { city: 'Dnipropetrovsk', id: 1, country: 'ua' }
    };
    expect(chooseCity({ city: 'Dnipropetrovsk', id: 1, country: 'ua' })).toEqual(expectedAction);
  });

  it('saveCity(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.SAVE_CITY,
      payload: { city: 'London', id: 2, country: 'uk' }
    };
    expect(saveCity({ city: 'London', id: 2, country: 'uk' })).toEqual(expectedAction);
  });

  it('getCityWeather(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.WEATHER_REQUEST,
      payload: { coord: { lon: 34.98, lat: 48.45 } }
    };
    expect(getCityWeather({ coord: { lon: 34.98, lat: 48.45 } })).toEqual(expectedAction);
  });

  it('saveWeather(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.WEATHER_REQUEST_SUCCESS,
      payload: { coord: { lon: -73.99, lat: 40.73 } }
    };
    expect(saveWeather({ coord: { lon: -73.99, lat: 40.73 } })).toEqual(expectedAction);
  });

  it('toggleLoading(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.TOGGLE_LOADING,
    };
    expect(toggleLoading()).toEqual(expectedAction);
  });

  it('addWeather(): should create an action to set isLoading', () => {
    const expectedAction = {
      type: constants.ADD_WEATHER,
      payload: { coord: { lon: -73.99, lat: 40.73 } }
    };
    expect(addWeather({ coord: { lon: -73.99, lat: 40.73 } })).toEqual(expectedAction);
  });
});
