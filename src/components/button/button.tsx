import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface Props {
    children?: React.ReactNode;
    fullWidth?: boolean;
    fullWidthMobile?: boolean;
    onClick?: (e: any) => void;
}

export const Button: React.FC<Props> = ({ children, onClick, fullWidth, fullWidthMobile }: Props) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, { [styles.fullWidth]: fullWidth, [styles.fullWidthMobile]: fullWidthMobile })}
        >
            <div> {children}</div>
        </button>
    );
};
