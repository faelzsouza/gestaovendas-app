export default function Table({
    tColumns,
    tRows,
}: {
    tColumns: string[];
    tRows: any[][];
}) {
    return (
        <table className={"table-auto mx-auto"}>
            <thead className="bg-emerald-200">
                <tr>
                    {tColumns.map((col, idx) => (
                        <th key={"col" + idx.toString()}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tRows.map((row, idx) => (
                    <tr key={"tr" + idx.toString()}>
                        {row.map((rdata, idx) => (
                            <td key={"td" + idx.toString()} className="px-8">
                                {rdata}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
