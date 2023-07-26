"use client";
import DataList from "@/components/dataList";
import { DateSpecsContext } from "@/components/dateSpecsContext";
import { Api } from "@/lib/api";
import { Venda } from "@/types/venda.type";
import { useContext } from "react";

export default function Home() {
    const dateSpecs = useContext(DateSpecsContext);
    const tColumns = ["Data", "Cliente", "Entrega"];
    const tRowsListFunc = (data: Venda) => {
        return [
            new Date(data.data).toLocaleDateString(
                dateSpecs.locale,
                dateSpecs.timeZone
            ),
            data.cliente.nome,
            new Date(data.dataEntrega).toLocaleDateString(
                dateSpecs.locale,
                dateSpecs.timeZone
            ),
        ];
    };
    return (
        <DataList
            fetch={Api.getAll("venda")}
            tColumns={tColumns}
            tRowsListFunc={tRowsListFunc}
        />
    );
}
