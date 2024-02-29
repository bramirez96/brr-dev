// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ButtonProps } from './Button.types';
import './Button.scss';
import classnames from '@brr-dev/classnames';

export default function Button({
    children,
    type = 'primary',
    size = 'default',
    className,
    htmlType = 'button',
    iconLeft = null,
    iconRight = null,
    ...buttonProps
}: Omit<ButtonProps, 'link'> = {}) {
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
