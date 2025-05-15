'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

interface InterfaceContextType {
    isDesktop: boolean | null;
    isTablet: boolean | null;
    isMobile: boolean | null;
}

const InterfaceContext = createContext<InterfaceContextType | undefined>(undefined);

export function InterfaceProvider({ children }: { children: React.ReactNode }) {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [isTablet, setIsTablet] = useState<boolean | null>(null);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);


    const desktopQuery = useMediaQuery('(min-width: 1200px)');
    const tabletQuery = useMediaQuery('(min-width: 810px) and (max-width: 1199px)');
    const mobileQuery = useMediaQuery('(max-width: 809px)');

    useEffect(() => {
        setIsDesktop(desktopQuery);
        setIsTablet(tabletQuery);
        setIsMobile(mobileQuery);
    }, [desktopQuery, tabletQuery, mobileQuery]);

    return (
        <InterfaceContext.Provider
            value={{ isDesktop, isTablet, isMobile}}
        >
            {children}
        </InterfaceContext.Provider>
    );
}

export function useInterface() {
    const context = useContext(InterfaceContext);
    if (!context) {
        throw new Error('useInterface must be used within an InterfaceProvider');
    }
    return context;
}