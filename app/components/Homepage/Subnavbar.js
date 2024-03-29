"use client"
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Import the CSS file for react-dropdown

const Subnavbar = () => {
    const Brands = ['All brands','Wix', 'Shopify', 'MailChimp'];
    const Desk = ['Desk'];
    const defaultBrand = Brands[0];
    const defaultDesk = Desk[0];
    const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
    const [selectedDesk, setSelectedDesk] = useState(defaultDesk);

    const handleBrands = (option) => {
        setSelectedBrand(option.value);
    };
    const handleDesk = (option) => {
        setSelectedDesk(option.value);
    };

    return (
        <div className='border-t p-3'>
            <div className='flex justify-between'>
                <div>
                    <Dropdown
                        options={Brands}
                        onChange={handleBrands}
                        value={selectedBrand}
                        placeholder="All brands"
                    />
                    <Dropdown
                        options={Desk}
                        onChange={handleDesk}
                        value={selectedDesk}
                        placeholder="Desk"
                    />
                   
                </div>
                <div>Right</div>
            </div>
        </div>
    );
};

export default Subnavbar;
