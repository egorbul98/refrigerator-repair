import React from 'react';
import styles from './banner-block.module.scss';
import { BlockLayout } from '../../components/block-layout/block-layout';
import { Button } from '../../components/button/button';
import cn from 'classnames';
import { MASTER_PHONE } from '../../components/feedback-form/constants';

interface Props {
    onClickButton: () => void;
}

export const BannerBlock = ({ onClickButton }: Props) => {
    return (
        <BlockLayout id="banner" paddingBottom paddingTop backgroundColor="blue" contentWithoutPaddings>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={cn(styles.icon)}>
                        <span className="material-symbols-outlined">call</span>
                    </div>
                    <div className={styles.text}>
                        <h3 className={styles.title}>Вызовите мастера холодильников</h3>
                        <div className={styles.description}>
                            Оставьте заявку и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами в&nbsp;течение 15&nbsp;минут.
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.phoneWrapper}>
                        <a className={styles.phone} href={`tel:${MASTER_PHONE}`}>
                            {MASTER_PHONE}
                        </a>
                    </div>
                    <div className={styles.button}>
                        <Button variant="secondary" onClick={onClickButton} fullWidth>
                            Вызвать мастера
                        </Button>
                    </div>
                </div>
            </div>
        </BlockLayout>
    );
};
