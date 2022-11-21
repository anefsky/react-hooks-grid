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
                {data.map((row, idx) => 
                    <tr key={idx}>
                        {columns.map(column =>
                            <td key={column.id}>
                                {row.filter(x => x.columnId === column.id)[0]?.value}
                            </td>
                        )}

                    </tr>
                )}
            </tbody>
        </table>
    )
}