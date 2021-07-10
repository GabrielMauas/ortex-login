import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {


    return (
        <div className='login__forms'>
            <form action="" className="login__create" id="login-up">
                <h1 className="login__title">Create Account</h1>

                <div className="login__box">
                    <box-icon name='user' type='solid' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Username" className="login__input" />
                </div>

                <div className="login__box">
                    <box-icon name='at' color="#666" className='login__icon'></box-icon>
                    <input type="text" placeholder="Email" className="login__input" />
                </div>

                <div className="login__box">
                    <box-icon name='lock-alt' color="#666" className='login__icon'></box-icon>
                    <input type="password" placeholder="Password" className="login__input" />
                </div>

                <a href="#" className="login__button">Sign Up</a>

                <div>
                    <span className="login__account">Already have an Account? </span>
                    <Link to="/" className="login__signup" id="sign-in">Sign In</Link>
                </div>

                <div className="login__social">
                    <a href="#" className="login__social-icon"><box-icon type='logo' name='facebook' color="#f2f2f2"></box-icon></a>
                    <a href="#" className="login__social-icon"><box-icon type='logo' name='twitter' color="#f2f2f2"></box-icon></a>
                    <a href="#" className="login__social-icon"><box-icon type='logo' name='google' color="#f2f2f2"></box-icon></a>
                </div>
            </form>
        </div>
    )
}
