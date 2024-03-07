// ! Copyright (c) 2024 Brandon Ramirez (brr.dev)

import { classnames } from '@bramirez96/classnames';
import { UISizes } from '@bramirez96/cozy-ui';
import './Logo.scss';

export type LogoProps = Omit<React.HTMLProps<HTMLDivElement>, 'size'> & {
    size?: UISizes;
};

export default function Logo({
    className,
    size = 'default',
    ...props
}: LogoProps) {
    return (
        <div
            className={classnames('ui-logo', `ui-size-${size}`, className)}
            {...props}
        >
            <span>brr.dev</span>
        </div>
    );
}
