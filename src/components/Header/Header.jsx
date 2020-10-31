import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaVxGBGQObz9ko07oU9kCtSjpSnaSKw2-uaw&usqp=CAU" alt='echevaria logo'/>
        </header>

    );
}

export default Header;