import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors/selectors';
import Main from './Main';

const mapStateToProps = state => ({
  isLoading: selectors.getLoading(state),
  city: selectors.getCity(state),
  weather: selectors.getWeather(state),
});

const mapDispatchToProps = dispatch => ({
  chooseCity: payload => dispatch(actions.chooseCity(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
