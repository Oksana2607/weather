import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors/selectors';
import CitiesTable from './CitiesTable';

const mapStateToProps = state => ({
  cities: selectors.getCities(state),
});

export default connect(mapStateToProps)(CitiesTable);
