

import React from 'react';

import useMouseMove from '../../hooks/useMouseMove';

export default function Background({
    children,
}: {
    children: React.ReactNode;
}) {
    useMouseMove();
    return (
        <>
            <div className='fixed left-0 top-0 -z-50 inset-0 dark:bg-black bg-white'>
                <div className='sticky left-0 top-0 h-screen w-screen overflow-hidden'>
                    <div className='bg-muted-foreground/20 absolute inset-0 z-[-1]' />
                    <div className='bg-gradient-radial from-muted-foreground/80 absolute left-[--x] top-[--y] z-[-1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full from-0% to-transparent to-90% blur-md' />
                </div>
            </div>

            {children}
        </>
    );
}
