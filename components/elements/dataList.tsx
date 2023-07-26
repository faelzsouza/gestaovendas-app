"use client";
import { useEffect, useState } from "react";
import Table from "./table";

export default function DataList({
    fetch,
    tColumns,
    tRowsListFunc,
}: {
    fetch: Promise<any>;
    tColumns: string[];
    tRowsListFunc: (data: any) => string[];
}) {
    const [data, setData] = useState<any[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch;
            setData(data);
        };
        fetchData();
    }, []);

    if (data == null) {
        return <div className="block mx-auto">Carregando...</div>;
    } else {
        const tRows = data.map((data) => tRowsListFunc(data));
        return <Table tColumns={tColumns} tRows={tRows} />;
    }
}
