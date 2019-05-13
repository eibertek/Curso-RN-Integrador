import Main from './main';
import { connect } from 'react-redux';
import { initStore } from '../../store/actions/creators';

const dispatchToProps = dispatch => ({
    initStore: (name) => dispatch(initStore(name)),
});

export default connect(state => ({
    name: state.main.name,
}),dispatchToProps)(Main);
