import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { newUser } from './redux/actions';

const mapStateToProps = state => ({
    user: state.login.user,
})

const mapDispatchToProps = {
    newUser,
};

export const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm); 

export default LoginForm;