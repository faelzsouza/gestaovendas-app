"use client";
import { useContext } from "react";
import { DateSpecsContext } from "@/components/dateSpecsContext";
import { Cliente } from "@/types/cliente.type";
import DataList from "@/components/dataList";
import { Api } from "@/lib/api";

export default function Home() {
    const dateSpecs = useContext(DateSpecsContext);
    const tColumns = ["Nome", "Nascimento", "Telefone"];
    const tRowsListFunc = (data: Cliente) => {
        return [
            data.nome,
            new Date(data.nascimento).toLocaleDateString(
                dateSpecs.locale,
                dateSpecs.timeZone
            ),
            data.phone,
        ];
    };
    return (
        <DataList
            fetch={Api.getAll("cliente")}
            tColumns={tColumns}
            tRowsListFunc={tRowsListFunc}
        />
    );
}
