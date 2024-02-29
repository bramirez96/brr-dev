// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';

export interface DarkModeContextProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDarkMode: () => void;
}

export const DarkModeContext = React.createContext<
    DarkModeContextProps | undefined
>(undefined);
