// Copyright (c) 2024 Brandon Ramirez (brr.dev)

'use client';

import { DarkModeProvider } from '@bramirez96/cozy-ui';
import { ReactNode } from 'react';

/**
 * This component wraps the entire application in any site-wide
 * context providers necessary for application functionality.
 *
 * Current providers:
 * * DarkModeProvider - adds a dark mode state-based toggle context for theming
 */
export function Providers({ children }: { children: ReactNode }) {
    return <DarkModeProvider darkMode>{children}</DarkModeProvider>;
}
