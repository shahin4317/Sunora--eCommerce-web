import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}
            <Footer></Footer>
        </>
    );
};

export default Mainlayout;