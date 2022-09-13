import React from 'react';
import cn from 'classnames';
import styles from './logo.module.scss';
import { Link } from '../link/link';
import IconKitchen from '../../assets/icons/kitchen.svg';
import Face from '@material-design-icons/svg/filled/face.svg';

export const Logo = () => {
    return (
        <Link className={styles.logo} href="/">
            <span className={cn('material-symbols-outlined', styles.icon)}>
                <IconKitchen />
                <Face size={'36'} />
            </span>
            <span>ПрофХолод</span>
        </Link>
    );
};
