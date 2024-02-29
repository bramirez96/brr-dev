// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { useContext } from 'react';
import { DarkModeContext, DarkModeContextProps } from './DarkModeContext.ts';

export function useDarkMode(): DarkModeContextProps {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error(
            'useDarkMode hook must be called from within a DarkModeContext.'
        );
    }

    return context;
}
