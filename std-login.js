import React from 'react';
import './std-login.css';

function StdLogin() {
    return (
        <div className="std-login">
            <div className="std-login-content">
                <h1>Student Portal</h1>
                <div className="std-login-form">
                    <h2>Sign In</h2>
                    <form>
                        <input type="text" placeholder="Hall ticket number" className="input-field" />
                        <input type="text" placeholder="Enter your name as per your documents" className="input-field" />
                        <button className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StdLogin;