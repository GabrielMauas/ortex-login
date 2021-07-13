import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPwd() {
    return (
        <div className='login__forms'>
            <form className='login__register' id="login-in">
                <h1 className="login__title">Reset Password</h1>

                <span className='login__reset'>An email will be sent with instructions to reset your password.</span>

                <div className="login__box">
                    <box-icon name='at' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Email" className="login__input"/>
                </div>


                <button type="submit" href="#" className="login__button">Submit</button>

                <div>
                    <span className="login__account">If you remember it... </span>
                    <Link to="/" className="login__signin" id="sign-up">Go Back.</Link>
                </div>
            </form>
        </div>
    )
}
