import React from 'react'
import './Nav.css';
import { useContext } from 'react';
import { translatorContext } from '../Translator/Translation';

const Nav = () => {
    const translatorCxt = useContext(translatorContext);

    const handleLanguage = (e) => {
        translatorCxt.setCurrentLanguage(e.target.value);
    }

    const handleLogin = () => {
        translatorCxt.setIsLogin(false);
        translatorCxt.setUsername();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MindX</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{translatorCxt.translatorCxt[translatorCxt.currentLanguage].home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{translatorCxt.translatorCxt[translatorCxt.currentLanguage].contact}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{translatorCxt.translatorCxt[translatorCxt.currentLanguage].about}</a>
                        </li>
                    </ul>
                    {translatorCxt.isLogin ? <h1 className='hello'>Welcomeback {translatorCxt.username}</h1> : null}
                    <select className="form-select" onChange={handleLanguage}>
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit" onClick={handleLogin}>
                    {translatorCxt.isLogin ? translatorCxt.translatorCxt[translatorCxt.currentLanguage].logout : translatorCxt.translatorCxt[translatorCxt.currentLanguage].login}
                </button>
            </div>
        </nav>
    )
}

export default Nav;