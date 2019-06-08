import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from './redux/actions';

const mapStateToProps = state => ({
    user: state.login.user,
    isLogginIn: state.login.isLogginIn,
    userData: state.login.loginUser,
    error: state.login.error,
})

const mapDispatchToProps = {
    loginUser,
};

export const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export const SignUpForm = LoginForm;

export default LoginForm;