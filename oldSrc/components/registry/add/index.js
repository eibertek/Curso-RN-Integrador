import { connect } from 'react-redux';
import Component from './add-form';
import { addRegistry } from 'app/store/actions/creators';

const dispatchToProps = dispatch => ({
    addRegistry: (registryData) => dispatch(addRegistry(registryData)),
});

export default connect(state => ({
    name: state.main.name,
}),dispatchToProps)(Component);
