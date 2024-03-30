"use client"
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Import the CSS file for react-dropdown

const Subnavbar = () => {
    const Brands = ['All brands', 'Wix', 'Shopify', 'MailChimp'];
    const Desk = ['Desk'];
    const Tag = ['Tag'];

    const defaultBrand = Brands[0];
    const defaultDesk = Desk[0];
    const defaultTag = Tag[0];

    const [selectedTag, setSelectedTag] = useState(defaultTag);
    const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
    const [selectedDesk, setSelectedDesk] = useState(defaultDesk);

    const handleBrands = (option) => {
        setSelectedBrand(option.value);
    };
    const handleDesk = (option) => {
        setSelectedDesk(option.value);
    };
    const handleTag = (option) => {
        setSelectedTag(option.value);
    };

    return (
        <div className='border-t p-3'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
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
                    <Dropdown
                        options={Tag}
                        onChange={handleTag}
                        value={selectedTag}
                        placeholder="Tag"
                    />
                    <button className='flex gap-1 items-center rounded-lg bg-gray-50 border-dotted border px-2 py-1'>
                        <img className='w-5' src="/sort.png" alt="" />
                        <span>Sort</span>
                    </button>
                    <button className='flex gap-1 items-center rounded-lg bg-gray-50 border-dotted border px-2 py-1'>
                        <img className='w-5' src="/filters.png" alt="" />
                        <span>Filter</span>
                    </button>

                </div>
                <div className='flex gap-4'>
                    <button className='flex gap-1 items-center rounded-lg  border px-2 py-1'>
                        <img className='w-5' src="/filters.png" alt="" />
                        <span>Meeting</span>
                    </button>
                    <button className='flex gap-1 items-center rounded-lg  border px-2 py-1'>
                        <img className='w-5' src="/filters.png" alt="" />
                        <span>Import/Export</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subnavbar;
