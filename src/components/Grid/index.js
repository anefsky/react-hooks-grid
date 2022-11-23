import React from 'react';
import BookContext from '../../shared/BookContext';


export default function Grid() {
    
    const value = React.useContext(BookContext);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {value.gridColumns.map(column => 
                        <th key={column.id}>{column.label}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {value.data.map(row => 
                    <tr key={row.title}>
                        <td><button onClick={() => 
                            value.deleteRecord(row.title)}>delete</button></td>
                        {value.gridColumns.map(column =>
                            <td key={column.id}>
                                {row[column.id]}
                            </td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )



}
