import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../redux/authReducer';
import { Input } from '../commons/utils/FormControls';
import { required } from '../commons/utils/Validators/FormValidators';
import s from './Login.module.scss';
import styles from './../commons/utils/FormControls.module.scss';



const LoginForm = ({handleSubmit, error}) =>{
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name={"email"} component={Input} validate={[required]} placeholder={"Login"}/>
        </div>
        <div>
            <Field name={"password"} component={Input} validate={[required]}   placeholder={"Password"} type={"password"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={Input}  type={"checkbox"}/>Remember me
        </div>
        {error && <div className={styles.errorSubmit}>
            {error}
        </div>
        }
        <div>
            <button className={s.button}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = ({loginUser, isAuth}) =>{
    const onSubmit =(formData)=>{
        loginUser(formData.email, formData.password, formData.remeberMe);   
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {loginUser})(Login);