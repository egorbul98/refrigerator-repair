import React from 'react';
import styles from './text-input.module.scss';
import cn from 'classnames';
import { BaseInput, BaseInputProps } from '../base-input/base-input';

type Props = Omit<BaseInputProps, 'type'>;

export const TextInput = ({ ...props }: Props) => {
    return <BaseInput {...props} type="text" />;
};
