import React from 'react';

interface Props {
    variant?: 'default';
}

export const Button: React.FC<Props> = ({ variant }: Props) => {
    return <div>{variant}</div>;
};
