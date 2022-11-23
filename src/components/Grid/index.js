import BookContext from '../../shared/BookContext';

export default function Grid({ columns, data, deleteRecord }) {
    
    return (
        <BookContext.Consumer>
            {value => 
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
            }
        </BookContext.Consumer>

    )
}
