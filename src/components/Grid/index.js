import React from 'react';
import BookContext from '../../shared/BookContext';

export default function Grid() {
    
    const value = React.useContext(BookContext);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    {value.gridColumns.map(column => 
                        <th key={column.id}>{column.label}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {value.data.map(row => 
                    <tr key={row.primary_isbn10}>
                        <td><button onClick={() => 
                            value.deleteRecord(row.primary_isbn10)}>delete</button>
                        </td>
                        <td><button onClick={()=>
                            value.showDetail(row.primary_isbn10)}>detail</button>
                        </td>
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
