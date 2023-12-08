import { TableContext } from "./Table";
import { useContext } from 'react';

const TableData = () => {
 const {currentData,search,setSearch} = useContext(TableContext)

    return(
        <div className="tabledata">
            <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData?.map((msg) => (
                            <tr key={msg?.id}>
                                <td className={search && (msg.id.includes(search) ? 'show' : '')}>{msg?.id}</td>
                                <td className={search && (msg.sender.includes(search) ? 'show' : '')}>{msg?.sender}</td>
                                <td className={search && (msg.receiver.includes(search) ? 'show' : '')}>{msg?.receiver}</td>
                                <td className={search && (msg.message.includes(search) ? 'show' : '')}>{msg?.message}</td>
                                <td className={search && (msg.id.includes(search) ? 'show' : '')}>{msg?.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                    <input type='text' placeholder='Search item' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <i className="fa-solid fa-magnifying-glass" id="search"></i>
                </table>
            
        </div>
    )
}
export default TableData;