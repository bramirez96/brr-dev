// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { classnames } from '@bramirez96/classnames';
import { useCallback } from 'react';
import { createRipple } from '../../utils';
import './Button.scss';
import { ButtonProps } from './Button.types';

export default function Button({
    children,
    type = 'primary',
    size = 'default',
    className,
    htmlType = 'button',
    iconLeft = null,
    iconRight = null,
    onMouseDown,
    ...buttonProps
}: Omit<ButtonProps, 'link'> = {}) {
    // Create a ripple effect in the button on mousedown events
    const _mouseDown = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            createRipple(event);
            return onMouseDown?.(event);
        },
        [onMouseDown]
    );

    const exactlyOneIcon =
        !children && ((iconLeft && !iconRight) || (iconRight && !iconLeft));

    return (
        <button
            className={classnames(
                className,
                'ui-button',
                `ui-button-${type}`,
                `ui-button-${size}`,
                exactlyOneIcon && 'ui-button-square'
            )}
            type={htmlType}
            onMouseDown={_mouseDown}
            {...buttonProps}
        >
            {iconLeft && <span className="ui-button-icon">{iconLeft}</span>}
            {typeof children === 'string' && children !== '' ? (
                <span className="ui-button-text-content">{children}</span>
            ) : (
                children
            )}
            {iconRight && <span className="ui-button-icon">{iconRight}</span>}
        </button>
    );
}
