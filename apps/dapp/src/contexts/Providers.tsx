import * as React from 'react';
import { ThemeProvider } from "@/contexts/ThemeProvider"
import { Web3Provider } from '@/contexts/w3mprovider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Web3Provider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </Web3Provider>
  );
}