import React, { ReactNode } from 'react';

export const SubNavContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid auto-rows-auto auto-cols-full h-full">{children}</div>
  );
};
