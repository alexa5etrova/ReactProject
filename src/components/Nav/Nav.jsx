import React from 'react';
import s from './Nav.module.scss';

const Nav =() => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Forum</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
      </nav>
    );
}
export default Nav;