import React from 'react';
// import styles from './header-block.module.css';
import styles from './header-block.module.scss';

interface Props {
    title?: string;
}

export const HeaderBlock = (props: Props) => {
    return (
        <header className={styles.title}>
            <div>HeaderBlock</div>
        </header>
    );
};
