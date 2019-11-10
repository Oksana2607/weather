import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from '../index';
import getCityWeather from '../../sagas/mainSaga';

// https://maxpfrontend.ru/vebinary/unit-testirovanie-redux-ekshenov-i-redyuserov/
// https://maxpfrontend.ru/vebinary/testirovanie-komponentov-s-pomoschyu-jest-enzyme/
