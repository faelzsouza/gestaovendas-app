import { InputInfos } from "@/types/inputInfos.type";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./button";

export default function Form({ inputInfos }: { inputInfos: InputInfos[] }) {
    const obj: { [name: string]: string } = {};

    for (const element of inputInfos) {
        obj[element.id] = "";
    }

    const [formData, setFormData] = useState(obj);
    const inputCss =
        "form-input mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black";

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));

        console.log(formData);
    };

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <form className="w-10/12" onSubmit={handleForm} method="POST">
            {inputInfos.map((inputInfo, idx) => (
                <div key={"label" + idx.toString()}>
                    <label htmlFor={inputInfo.id}>{inputInfo.label}</label>
                    <input
                        type={inputInfo.type}
                        name={inputInfo.id}
                        id={inputInfo.id}
                        className={inputCss}
                        onChange={handleInput}
                        value={formData[inputInfo.id]}
                        placeholder={inputInfo.placeholder ?? ""}
                    />
                    <br />
                </div>
            ))}
            <Button name="Enviar" className="mx-auto" />
        </form>
    );
}
