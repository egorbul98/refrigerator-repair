import React from 'react';
import cn from 'classnames';
import styles from './menu-button.module.scss';

interface Props {
    onClick: () => void;
    open: boolean;
    className?: string;
}

export const MenuButton = ({ onClick, open, className }: Props) => {
    return (
        <button className={cn(styles.menuButton, className, { [styles.open]: open })} onClick={onClick}>
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
        </button>
    );
};
