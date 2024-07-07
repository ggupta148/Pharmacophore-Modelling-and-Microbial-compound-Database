import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Navbar from '@/components/Navbar';

const BioactivityPage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedColumns, setSelectedColumns] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/getData?page=${page}`);
            setData(prevData => [...prevData, ...response.data]);
            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                setPage(page + 1);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const allColumns = [
        'name',
        'length',
        'DBName',
        'Canonical_SMILES',
        'Isomeric_SMILES',
        'compound_mol_wt',
        'H_bond_acceptor',
        'H_bond_donor',
        'logP',
        'mass',
        'Polar_surface_area',
        'Number_of_rotable_bond',
        'synonyms',
    ];

    const options = allColumns.map(col => ({ value: col, label: col }));

    const handleColumnChange = selectedOptions => {
        setSelectedColumns(selectedOptions.map(option => option.value));
    };

    return (
        <div>
            <Navbar />
        <div className="container mx-auto p-4 text-black">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Bioactivity Data</h1>
            <div className="mb-4">
                <Select
                    isMulti
                    options={options}
                    onChange={handleColumnChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            {selectedColumns.map((col) => (
                                <th key={col} className="py-2 px-4 border-b border-gray-200 text-left font-medium">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((compound, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {selectedColumns.map((col) => (
                                    <td key={col} className="py-2 px-4 border-b border-gray-200">
                                        {compound[col]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!hasMore && <p className="text-center mt-4">No more data</p>}
        </div>
        </div>
    );
};

export default BioactivityPage;
