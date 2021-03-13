import React from 'react';
import LoadingImg from '../components/commons/LoadingImg';




export const withSuspence = (Component)=>{
    return (props)=> {
        return <React.Suspense fallback={<LoadingImg/>}>
            <Component {...props} />
        </React.Suspense>
    };
};



