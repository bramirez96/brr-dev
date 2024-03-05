// Copyright (c) 2024 Brandon Ramirez (brr.dev)

'use client';

import { DarkModeProvider } from '@bramirez96/cozy-ui';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
    return <DarkModeProvider>{children}</DarkModeProvider>;
}
