import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors/selectors';
import Weather from './Weather';

const mapStateToProps = state => ({
  weather: selectors.getWeather(state),

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
