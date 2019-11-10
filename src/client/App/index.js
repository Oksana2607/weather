import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors/selectors';
import App from './App';

const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
  city: selectors.getCity(state),
  weather: selectors.getWeather(state),
});

const mapDispatchToProps = dispatch => ({
  chooseCity: payload => dispatch(actions.chooseCity(payload)),
  saveCity: payload => dispatch(actions.saveCity(payload)),
  getCityWeather: payload => dispatch(actions.getCityWeather(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
