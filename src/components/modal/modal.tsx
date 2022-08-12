import React from 'react';
import styles from './modal.module.scss';
import cn from 'classnames';

interface Props {
    title?: string;
    description?: string | React.ReactNode;
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Modal = ({ children, title, description, open, onClose: _onClose }: Props) => {
    const onCloseOverlay = (e: any) => {
        if (e.target.id === 'modal-overlay') {
            _onClose();
        }
    };
    return (
        <div className={cn(styles.overlay, { [styles.open]: open })} onClick={onCloseOverlay} id="modal-overlay">
            <div className={styles.container}>
                <span className={cn('material-symbols-outlined', styles.iconClose)} onClick={_onClose}>
                    close
                </span>

                <h3 className={styles.title}>{title}</h3>

                <div className={styles.description}>{description}</div>

                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};
