import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface Props {
    children?: React.ReactNode;
    fullWidth?: boolean;
    onClick?: (e: any) => void;
}

export const Button: React.FC<Props> = ({ children, onClick, fullWidth }: Props) => {
    return (
        <button onClick={onClick} className={cn(styles.button, { [styles.fullWidth]: fullWidth })}>
            <div> {children}</div>
        </button>
    );
};
