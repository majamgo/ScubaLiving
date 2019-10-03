import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <section className="all-forms">
        <form className="signin">
            <label><h5>SIGN IN TO YOUR ACCOUNT</h5></label>
            <input type="email" name="email" required placeholder="johndoe@gmail.com"/>
            <input type="password" name="password" required placeholder="Password"/>
            <button className="signbtn">SIGN IN</button>
        </form>
        <form className="newin">
            <label><h5>DON'T HAVE AN ACCOUNT?</h5></label>
            <input type="text" name="username" required placeholder="JohnDoe73"/>
            <input type="email" name="email" required placeholder="johndoe@gmail.com"/>
            <input type="password" name="password" required placeholder="Password"/>
            <input type="number" name="number" required placeholder="Number"/>
            <button className="newbtn">CREATE ACCOUNT</button>
        </form>
        </section>
    )
}

export default Login;
