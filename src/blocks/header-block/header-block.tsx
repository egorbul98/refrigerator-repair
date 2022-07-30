import React from 'react';
// @ts-ignore
import styles from './header-block.module.css';

interface Props {
    title: string;
}

export const HeaderBlock = (props: Props) => {
    console.log(props);

    return <div className={styles.title}>HeaderBlock</div>;
};
