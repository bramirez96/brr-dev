// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

'use client';

import { ReactNode, useContext, useEffect } from 'react';
import { DarkModeContext, DarkModeContextProps } from './DarkModeContext';

/**
 * A simple hook to retrieve dark mode context values.
 */
export function useDarkMode(): DarkModeContextProps {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error(
            'useDarkMode hook must be called from within a DarkModeContext.'
        );
    }

    return context;
}

export type AutoDarkModeConfig = {
    target?: HTMLElement;
};

/**
 * A simple hook that will automatically trigger the dark mode class on the document body.
 */
export function useAutoDarkMode({
    target: inputTarget,
}: AutoDarkModeConfig = {}): void {
    const { darkMode } = useDarkMode();

    useEffect(() => {
        const target = inputTarget ?? document.body;
        target.classList.toggle('ui-dark-mode', darkMode);
    }, [darkMode, inputTarget]);
}

/**
 * A simple component with no UI that runs the useAutoDarkMode hook on your document.
 */
export function AutoDarkModeHelper(props: AutoDarkModeConfig = {}): ReactNode {
    useAutoDarkMode(props);
    return null;
}
