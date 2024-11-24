"use client";

import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
    return (
        <main className={'h-[calc(100vh-3rem)] w-full flex justify-center  '}>
            <div className="flex w-full  max-w-7xl  pt-6">
                {children}
            </div>
        </main>
    );
}
