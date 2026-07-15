import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Authlayout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}            
        </>
    );
};

export default Authlayout;