import React from 'react';
import styles from './nav-links.module.scss';
import cn from 'classnames';
import { Link } from '../link/link';

export interface NavLinkProp {
    label: string;
    href: string;
    icon: string;
}

export const NavigationLinks = ({ items, onClickItem }: { items: NavLinkProp[]; onClickItem: (e?: any) => void }) => {
    return (
        <nav className={styles.links}>
            {items.map((item) => {
                return (
                    <Link className={styles.item} key={item.label} href={item.href} onClick={onClickItem}>
                        <div className={cn('material-symbols-outlined', styles.icon)}>{item.icon}</div>
                        <div className={styles.label}>{item.label}</div>
                    </Link>
                );
            })}
        </nav>
    );
};
