import React from 'react';
interface ILayout {
    withOutMenu?: boolean;
    children: React.ReactNode;
}
declare const Layout: React.FC<ILayout>;
export default Layout;
