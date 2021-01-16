import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaVxGBGQObz9ko07oU9kCtSjpSnaSKw2-uaw&usqp=CAU" alt='echevaria logo'/>
        <div className={s.login}>
            {props.isAuth 
            ? props.login
            :<NavLink to='/login'></NavLink>
            }
            


        </div>
        </header>

    );
}

export default Header;