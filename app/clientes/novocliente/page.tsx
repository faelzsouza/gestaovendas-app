"use client";
import Form from "@/components/elements/form";
import { InputInfos } from "@/types/inputInfos.type";

export default function CadastroCliente() {
    const inputs: InputInfos[] = [
        {
            label: "Nome",
            type: "text",
            id: "nome",
            placeholder: "Digite o nome",
        },
        {
            label: "Nascimento",
            type: "date",
            id: "nascimento",
        },
        {
            label: "Telefone",
            type: "tel",
            id: "phone",
        },
    ];
    return <Form inputInfos={inputs} />;
}
