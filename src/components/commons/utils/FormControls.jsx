import React from 'react';
import s from './FormControls.module.scss';


export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return <div className={s.formControl + " " + (hasError? s.error : "")} >
        <div>
            <textarea {...input} {...props} />
        </div>

        <div>
            {hasError && <span>{meta.error}</span>}

        </div>
    </div>

}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return <div className={s.formControl + " " + (hasError? s.error : "")} >
        <div>
            <input {...input} {...props} />
        </div>

        <div>
            {hasError && <span>{meta.error}</span>}

        </div>
    </div>

}