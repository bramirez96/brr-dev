// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { classnames } from '@bramirez96/classnames';
import React, { HTMLProps } from 'react';

export type InputFieldProps = HTMLProps<HTMLDivElement> & {
    children?: React.ReactNode;
};

export default function InputField({
    className,
    children,
    ...props
}: InputFieldProps) {
    return (
        <div className={classnames('ui-input-field', className)} {...props}>
            {children}
        </div>
    );
}
