import React from 'react';
import cn from 'classnames';
import styles from './logo.module.scss';
import { Link } from '../link/link';

export const Logo = () => {
    return (
        <Link className={styles.logo} href="/">
            <span className={cn('material-symbols-outlined', styles.icon)}>kitchen</span>
            <span>ПрофХолод</span>
        </Link>
    );
};
