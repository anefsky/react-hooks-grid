export default function Grid({ columns, data, deleteRecord }) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {columns.map(column => 
                        <th key={column.id}>{column.label}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                    <tr key={row.title}>
                        <td><button onClick={() => deleteRecord(row.title)}>delete</button></td>
                        {columns.map(column =>
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