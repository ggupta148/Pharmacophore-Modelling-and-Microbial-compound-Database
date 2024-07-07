import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '@/components/Navbar';

const DownloadPage = () => {
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

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

    const handleDownload = () => {
        window.location.href = `https://file.io/lWClGAikzkLK`;
    };

    return (
        <>
        <Navbar />
        <div className="container mx-auto p-4">
            <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Download Data
            </button>
            <h1 className="text-3xl font-extrabold mb-6 text-center">Data List</h1>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h4 className="text-center">Loading...</h4>}
                endMessage={<p className="text-center text-gray-500">No more data</p>}
                className="max-h-96 overflow-y-auto"
            >
                <ul className="divide-y divide-gray-300">
                    {data.map((item, index) => (
                        <li key={index} className="p-4 bg-white shadow-md rounded mb-4 hover:bg-blue-50 transition duration-300 ease-in-out">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 text-lg">{item.name}</span>
                                <span className="text-gray-500">{item.DBName}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
        </div></>
    );
};

export default DownloadPage;
