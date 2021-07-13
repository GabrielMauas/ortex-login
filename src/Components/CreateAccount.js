/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {


    return (
        <div className='login__forms'>
            <form action="" className="login__register" id="login-up">
                <h1 className="login__title">Create Account</h1>

                <div className="login__box">
                    <box-icon name='user' type='solid' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Full Name" className="login__input" />
                </div>

                <div className="login__box">
                    <box-icon name='at' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Email" className="login__input" />
                </div>

                <div className="login__box">
                    <box-icon name='lock-alt' color="#666" className='login__icon'></box-icon>
                    <input type="password" placeholder="Password" className="login__input" />
                </div>

                <a href="#" className="login__button">Create</a>

                <div>
                    <span className="login__account">Already have an Account? </span>
                    <Link to="/" className="login__signup" id="sign-in">Sign In</Link>
                </div>

            </form>
        </div>
    )
}
