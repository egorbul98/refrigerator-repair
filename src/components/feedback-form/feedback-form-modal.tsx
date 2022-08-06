import React, { useEffect, useState } from 'react';
import { Modal } from '../modal/modal';
import { FEEDBACK_FORM_DESCRIPTION } from './constants';
import { FeedbackForm } from './feedback-form';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const FeedbackFormModal = ({ open: _open, onClose: _onClose }: Props) => {
    const [open, setOpen] = useState(_open);

    useEffect(() => {
        setOpen(_open);
    }, [_open]);

    const onClose = () => {
        setOpen(false);
        _onClose();
    };

    const onSubmit = () => {
        onClose();
    };

    return (
        <>
            <Modal title="Вызов мастера" description={FEEDBACK_FORM_DESCRIPTION} open={open} onClose={onClose}>
                <FeedbackForm onSubmit={onSubmit} />
            </Modal>
        </>
    );
};
