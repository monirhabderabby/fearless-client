import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../../Firebase/Firebase.init';
import Navbar from '../Navbar/Navbar';
import './Login.css'

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider);
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='login-container'>
                <button className='btn btn-primary' onClick={handleSignIn}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;