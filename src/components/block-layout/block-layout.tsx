import React from 'react';
import styles from './block-layout.module.scss';
import cn from 'classnames';
import { Container } from '../container/container';

type Colors = 'blue' | 'blue-light' | 'gray' | 'white';

interface Props {
    children?: React.ReactNode;
    classNames?: { container?: string; innerContainer?: string };
    title?: string;
    description?: string;
    paddingTop?: boolean;
    paddingBottom?: boolean;
    backgroundColor?: Colors;
    id?: string;
}

export const BlockLayout: React.FC<Props> = ({
    children,
    classNames,
    title,
    description,
    paddingBottom,
    paddingTop,
    backgroundColor = 'white',
    id,
}: Props) => {
    return (
        <section
            className={cn(styles.container, classNames?.container, styles[`background-${backgroundColor}`], {
                [styles.paddingBottom]: paddingBottom,
                [styles.paddingTop]: paddingTop,
            })}
            id={id}
        >
            <Container className={cn(styles.innerContainer, classNames?.innerContainer)}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {description && <div className={styles.description}>{description}</div>}

                <div className={styles.content}>{children}</div>
            </Container>
        </section>
    );
};
