import React from 'react';
import { Link } from 'react-router-dom';
import ResetPwd from './ResetPwd';

export default function Login() {


    return (
        <div className='login__forms'>
            <form action="/login" method="post" className='login__register' id="login-in">
                <h1 className="login__title">Log In</h1>

                <div className="login__box">
                    <box-icon name='at' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Email" className="login__input"/>
                </div>

                <div className="login__box">
                    <box-icon name='lock-alt' color="#666" className='login__icon'></box-icon>
                    <input type="password" placeholder="Password" className="login__input"/>
                </div>

                <Link to="/resetpassword" href="#" className="login__forgot">Forgot password?</Link>

                <button type="submit" href="#" className="login__button">Log In</button>

                <div>
                    <span className="login__account">Don't have an Account? </span>
                    <Link to="/signup" className="login__signin" id="sign-up">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}
