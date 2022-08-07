import React from 'react';
export interface IMenuItem {
    id: string;
    icon: JSX.Element;
    isActive: boolean;
}
declare const MenuItem: React.FC<IMenuItem>;
export default MenuItem;
