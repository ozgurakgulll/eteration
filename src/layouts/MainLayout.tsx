"use client";

import type { ChildrenProps } from '@/types';

export default function MainLayout({ children }: ChildrenProps) {
    return (
        <main className={' w-full flex justify-center  '}>
            <div className="flex w-full  max-w-7xl  pt-6">
                {children}
            </div>
        </main>
    );
}
