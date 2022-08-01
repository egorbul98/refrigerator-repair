import React from 'react';
import styles from './base-input.module.scss';
import cn from 'classnames';

export interface BaseInputProps {
    placeholder?: string;
    value?: any;
    onChange?: (value: any) => any;
    type?: React.HTMLInputTypeAttribute;
}

export const BaseInput = ({ placeholder, onChange: _onChange, value, type = 'text' }: BaseInputProps) => {
    const onChange = (e: any) => {
        _onChange?.(e.target.value);
    };
    return (
        <label className={styles.input}>
            <input {...{ placeholder, value, onChange, type }} />
        </label>
    );
};
