import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { newUser, casaCall } from './redux/actions';

const mapStateToProps = state => ({
    user: state.login.user,
})

const mapDispatchToProps = {
    newUser,
    casaCall,
};

export const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm); 

export default LoginForm;