export default function Grid({ columns, data }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => 
                        <th key={column.id}>{column.label}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                    <tr key={row.title}>
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