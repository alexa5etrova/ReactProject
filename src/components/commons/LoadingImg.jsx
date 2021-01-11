import React from 'react';
import s from './LoadingImg.module.scss';



const LoadingImg = () => {
    return <div className={s.preloader}>
        <div className={s.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    </div>
}

export default LoadingImg;