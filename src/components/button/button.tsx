import React from 'react';
import styles from './button.module.scss';

interface Props {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}

export const Button: React.FC<Props> = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
