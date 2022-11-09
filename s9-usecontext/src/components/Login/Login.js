import React from 'react';
import './Login.css';
import { useContext } from 'react';
import { translatorContext } from '../Translator/Translation';

const Login = () => {
    const translatorCxt = useContext(translatorContext);

    console.log(translatorCxt);
    const handleUsername = (e) => {
        if (e.target.value === "")
            return;
        else {
            translatorCxt.setUsername(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        translatorCxt.setIsLogin(true);
    }


    return (
        translatorCxt.isLogin ? <h1 className='greeting'>Hello {translatorCxt.username}!</h1> : <form className='login-form'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >{translatorCxt.translatorCxt[translatorCxt.currentLanguage].username}</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Username ..." onChange={handleUsername} required />
            </div>
            <button type='submit' className='btn btn-primary btn-login' onClick={handleSubmit}>{translatorCxt.translatorCxt[translatorCxt.currentLanguage].login}</button>
        </form>
    )
}

export default Login;