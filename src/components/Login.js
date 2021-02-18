import React , { useState} from 'react';
import './css/Login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firsbase_signup
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
            <img
                className='login_logo'
                src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png' />
                
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                

                <p>By signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button onClick={register}
                    className="login_registerButton"
                >
                    Create your Amazon Account
                </button>

            </div>
        </div>
    );
}

export default Login;
