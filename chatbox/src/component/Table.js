import React, { createContext, useEffect, useState } from 'react';
import Pagination from './Pagination';
import TableData from './TableData';

export const TableContext = createContext();
const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 3;
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://65461239fe036a2fa9552517.mockapi.io/users');
            const data = await response.json();
            setLoading(false);
            return setData(data);
        }
        catch (error) {
            console.error("Error fetching data", error);
            setLoading(false);
        }
    }

    const currentData = data.slice((currentPage - 1) * limit, currentPage * limit);

    const totalpage = (data.length / limit);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        < div className='showTable'>
            {loading ? (
                <div className='loader'> Loading...</div>) : (
                <TableContext.Provider value={{ currentData, search, setSearch }} >
                    <TableData />
                </TableContext.Provider>
            )}
            <Pagination currentPage={currentPage} totalpage={totalpage} handlePageChange={handlePageChange} />
        </div>
    );
};
export default Table;