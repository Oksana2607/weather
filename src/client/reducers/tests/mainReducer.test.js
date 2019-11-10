import { mainReducer, initialState } from '../mainReducer';
import * as constants from '../../constants/constants';
import cities from '../../config/config';

describe('mainReducer', () => {
  const initialState = {
    city: { city: 'Dnipropetrovsk', id: 1, country: 'ua' },
    cities,
    weather: {},
    citiesWeather: [],
    isLoading: false,
    activeCities: [],
  };
  it('SAVE_CITY', () => {
    const action = {
      type: constants.SAVE_CITY,
      payload: { city: 'Dnipropetrovsk', id: 1, country: 'ua' }
    };

    expect(mainReducer(initialState, action)).toEqual({
      ...initialState,
      city: action.payload
    });
  });

  it('WEATHER_REQUEST_SUCCESS', () => {
    const action = {
      type: constants.WEATHER_REQUEST_SUCCESS,
      payload: { coord: { lon: 34.98, lat: 48.45 } }
    };

    expect(mainReducer(initialState, action)).toEqual({
      ...initialState,
      weather: action.payload
    });
  });

  it('TOGGLE_LOADING', () => {
    const action = {
      type: constants.TOGGLE_LOADING
    };
    const _isLoading = !initialState.isLoading;

    expect(mainReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: _isLoading
    });
  });

  it('ADD_WEATHER', () => {
    const action = {
      type: constants.ADD_WEATHER,
      payload: [{ coord: { lon: 34.98, lat: 48.45 } }, { coord: { lon: -73.99, lat: 40.73 } }]
    };

    expect(mainReducer(initialState, action)).toEqual({
      ...initialState,
      citiesWeather: action.payload
    });
  });

  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(initialState);
  });
});
