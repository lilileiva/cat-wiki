import React from 'react';
import style from './SearchbarMobile.module.css';
import Searchbar from '../Searchbar/Searchbar.jsx';
import { useNavigate } from 'react-router-dom';


function SearchbarMobile() {

    const navigate = useNavigate();

    return (
        <div className={style.container}>            
            <div className={style.closeButton} onClick={() => navigate('/')}>
                <span className="material-symbols-outlined">
                    close
                </span>                
            </div>
            <Searchbar />
        </div>
    )
}

export default SearchbarMobile;