// import { put, call, select } from 'redux-saga/effects';
// import chooseCity from '../mainSaga';
// import getCityWeather from '../mainSaga';
// import * as selectors from '../../selectors/selectors';
// import * as actions from '../../actions';
//
// describe('login flow', () => {
//   const action = { type: 'CHOOSE_CITY', payload: { city: 'London' } };
//   const generator = chooseCity(action);
//   const activeCity = { city: 'London', id: 2, country: 'uk' };
//
//   expect(generator.next().value).toEqual(select(selectors.getCities));
//   expect(generator.next().value).toEqual(put(actions.saveCity(activeCity)));
//   expect(generator.next().value).toEqual(select(selectors.getCitiesWeather));
//   expect(generator.next().value).toEqual(call(getCityWeather, activeCity));
//
//
// });
