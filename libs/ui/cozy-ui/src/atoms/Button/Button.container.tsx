// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

'use client';

import { classnames } from '@bramirez96/classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export type ButtonContainerProps = ButtonProps;

export default function ButtonContainer({
    link,
    linkTarget,
    disableLink = false,
    onMouseDown,
    ...props
}: ButtonContainerProps) {
    const router = useRouter();

    // Link click handler to use for development, lets you disable links
    const _linkClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
        (event) => {
            if (disableLink) {
                console.warn(
                    'Link disabled. This should only be used in development.'
                );
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
        },
        [disableLink]
    );

    // If we got a link, return the button wrapped in a link tag
    if (link) {
        if (!router) {
            throw new Error(
                'Must be in a router context to pass `link` option to Button components.'
            );
        }

        props.type ??= 'text';

        return (
            <Link
                href={link}
                passHref
                className={classnames(
                    router.pathname === link && 'ui-active-nav-item'
                )}
                target={linkTarget ?? '_blank'}
                onClick={_linkClick}
            >
                <Button {...props} />
            </Link>
        );
    }

    // Otherwise just return the button
    return <Button {...props} />;
}
